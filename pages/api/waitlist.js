import crypto from "crypto";

function getMailchimpConfig() {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

  if (!apiKey || !audienceId) {
    return null;
  }

  const inferredPrefix = apiKey.includes("-") ? apiKey.split("-").pop() : "";
  const dc = serverPrefix || inferredPrefix;
  if (!dc) {
    throw new Error("MAILCHIMP_API_KEY must include a data center suffix like '-us21', or set MAILCHIMP_SERVER_PREFIX.");
  }

  return { apiKey, audienceId, dc };
}

function getSubscriberHash(email) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

function getAuthHeader(apiKey) {
  return `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, note } = req.body || {};

    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required" });
    }

    const trimmedEmail = email.trim();
    const trimmedNote = typeof note === "string" ? note.trim() : "";

    const mailchimp = getMailchimpConfig();
    if (!mailchimp) {
      console.log("[waitlist] mailchimp not configured; received submission", {
        email: trimmedEmail,
        note: trimmedNote,
        at: new Date().toISOString()
      });

      if (process.env.NODE_ENV === "production") {
        return res.status(503).json({
          message: "Waitlist is not configured yet. Please email hello@echovault.com."
        });
      }

      return res.status(200).json({ ok: true, mocked: true, requireConfirmation: false });
    }

    const memberStatus = process.env.MAILCHIMP_MEMBER_STATUS || "pending";
    const noteMergeTag = process.env.MAILCHIMP_NOTE_MERGE_TAG;
    const tags = (process.env.MAILCHIMP_TAGS || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

    const subscriberHash = getSubscriberHash(trimmedEmail);
    const memberUrl = `https://${mailchimp.dc}.api.mailchimp.com/3.0/lists/${mailchimp.audienceId}/members/${subscriberHash}`;

    const payload = {
      email_address: trimmedEmail,
      status_if_new: memberStatus
    };

    if (noteMergeTag && trimmedNote) {
      payload.merge_fields = {
        [noteMergeTag]: trimmedNote
      };
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const response = await fetch(memberUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAuthHeader(mailchimp.apiKey)
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    }).finally(() => clearTimeout(timeout));

    const mailchimpPayload = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error("[waitlist] mailchimp member upsert failed", {
        status: response.status,
        payload: mailchimpPayload
      });
      return res.status(500).json({
        message: "Could not add you to the waitlist. Please try again or email hello@echovault.com."
      });
    }

    if (tags.length) {
      const tagsUrl = `https://${mailchimp.dc}.api.mailchimp.com/3.0/lists/${mailchimp.audienceId}/members/${subscriberHash}/tags`;
      const tagResponse = await fetch(tagsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthHeader(mailchimp.apiKey)
        },
        body: JSON.stringify({
          tags: tags.map((tag) => ({ name: tag, status: "active" }))
        })
      }).catch((err) => {
        console.error("[waitlist] mailchimp tag request failed", err);
        return null;
      });

      if (tagResponse && !tagResponse.ok) {
        const tagPayload = await tagResponse.json().catch(() => ({}));
        console.error("[waitlist] mailchimp tagging failed", {
          status: tagResponse.status,
          payload: tagPayload
        });
      }
    }

    if (trimmedNote && !noteMergeTag) {
      const notesUrl = `https://${mailchimp.dc}.api.mailchimp.com/3.0/lists/${mailchimp.audienceId}/members/${subscriberHash}/notes`;
      const noteResponse = await fetch(notesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getAuthHeader(mailchimp.apiKey)
        },
        body: JSON.stringify({ note: trimmedNote })
      }).catch((err) => {
        console.error("[waitlist] mailchimp note request failed", err);
        return null;
      });

      if (noteResponse && !noteResponse.ok) {
        const notePayload = await noteResponse.json().catch(() => ({}));
        console.error("[waitlist] mailchimp note save failed", {
          status: noteResponse.status,
          payload: notePayload
        });
      }
    }

    return res.status(200).json({
      ok: true,
      requireConfirmation: memberStatus === "pending"
    });
  } catch (error) {
    console.error("[waitlist] error handling submission", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
