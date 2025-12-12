import { useRef, useState } from "react";

const MAILCHIMP_ACTION = process.env.NEXT_PUBLIC_MAILCHIMP_FORM_ACTION;
const MAILCHIMP_HONEYPOT_NAME = process.env.NEXT_PUBLIC_MAILCHIMP_HONEYPOT_NAME;
const MAILCHIMP_NOTE_FIELD = process.env.NEXT_PUBLIC_MAILCHIMP_NOTE_FIELD || "NOTE";

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toMailchimpJsonpUrl(actionUrl) {
  const url = new URL(actionUrl);
  url.pathname = url.pathname.replace(/\/subscribe\/post$/, "/subscribe/post-json");
  return url;
}

function gmailComposeUrl({ to, subject, body }) {
  const url = new URL("https://mail.google.com/mail/");
  url.searchParams.set("view", "cm");
  url.searchParams.set("fs", "1");
  url.searchParams.set("to", to);
  if (subject) url.searchParams.set("su", subject);
  if (body) url.searchParams.set("body", body);
  return url.toString();
}

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const activeScriptRef = useRef(null);

  const submitViaMailchimp = async (event) => {
    event.preventDefault();

    if (status === "submitting") return;

    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      setStatus("error");
      setError("Please enter an email address.");
      return;
    }

    setStatus("submitting");
    setError("");
    setSuccessMessage("");

    const previous = activeScriptRef.current;
    if (previous) {
      previous.remove();
      activeScriptRef.current = null;
    }

    const callbackName = `ev_mailchimp_${Date.now()}`;

    const url = toMailchimpJsonpUrl(MAILCHIMP_ACTION);
    url.searchParams.set("EMAIL", trimmedEmail);

    const trimmedNote = note.trim();
    if (MAILCHIMP_NOTE_FIELD && trimmedNote) {
      url.searchParams.set(MAILCHIMP_NOTE_FIELD, trimmedNote);
    }

    if (MAILCHIMP_HONEYPOT_NAME) {
      url.searchParams.set(MAILCHIMP_HONEYPOT_NAME, "");
    }

    url.searchParams.set("c", callbackName);

    window[callbackName] = (payload) => {
      try {
        const result = payload?.result;
        const message = stripHtml(payload?.msg);

        if (result === "success") {
          setStatus("success");
          setSuccessMessage(message);
          setEmail("");
          setNote("");
          return;
        }

        setStatus("error");
        setError(message || "Could not add you to the waitlist. Please try again.");
      } finally {
        try {
          delete window[callbackName];
        } catch {
          window[callbackName] = undefined;
        }

        if (activeScriptRef.current) {
          activeScriptRef.current.remove();
          activeScriptRef.current = null;
        }
      }
    };

    const script = document.createElement("script");
    script.src = url.toString();
    script.async = true;
    script.onerror = () => {
      setStatus("error");
      setError("Could not reach Mailchimp. Please try again.");

      try {
        delete window[callbackName];
      } catch {
        window[callbackName] = undefined;
      }

      if (activeScriptRef.current) {
        activeScriptRef.current.remove();
        activeScriptRef.current = null;
      }
    };

    activeScriptRef.current = script;
    document.body.appendChild(script);
  };

  const fallbackEmailHref = gmailComposeUrl({
    to: "hello@echovault-ai.com",
    subject: "EchoVault waitlist",
    body: [
      "Please add me to the EchoVault waitlist.",
      "",
      `Email: ${email || ""}`,
      note ? `Note: ${note}` : "",
      "",
      "Sent from the EchoVault website."
    ]
      .filter(Boolean)
      .join("\n")
  });

  return (
    <section id="waitlist" className="section section-muted" aria-labelledby="waitlist-heading">
      <div className="content waitlist">
        <div className="waitlist-copy">
          <h2 id="waitlist-heading" className="section-title">
            Join our waitlist
          </h2>
          <p className="lead">
            EchoVault is in early availability with a small group of families. Join the waitlist and we&apos;ll send
            occasional updates, plus availability when new project slots open.
          </p>
          <p className="waitlist-next-steps">
            If you need a human reply, email us:{" "}
            <a
              className="waitlist-mail-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com&su=EchoVault%20Project%20Timing"
              target="_blank"
              rel="noreferrer noopener"
            >
              hello@echovault-ai.com
            </a>
            .
          </p>
        </div>

        {status === "success" ? (
          <div className="waitlist-form waitlist-success">
            <p className="waitlist-success-title">Mailchimp response</p>
            <p className="waitlist-success-text">
              {successMessage || "You&apos;re on the list."}
            </p>
            <p className="waitlist-success-text">
              If you&apos;re using Gmail, check Spam and Promotions. If you find it there, open the email and click
              &quot;Not spam&quot; (and optionally add hello@echovault-ai.com to your contacts) so future updates land in
              your inbox.
            </p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={MAILCHIMP_ACTION ? submitViaMailchimp : (e) => e.preventDefault()}>
            <label className="visually-hidden" htmlFor="waitlist-email">
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              required
              placeholder="you@example.com"
              className="waitlist-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className="visually-hidden" htmlFor="waitlist-note">
              How you&apos;d like to use EchoVault
            </label>
            <input
              id="waitlist-note"
              type="text"
              placeholder="Optional: recording with my mom this winter, planning a legacy project..."
              className="waitlist-input"
              value={note}
              onChange={(event) => setNote(event.target.value)}
            />

            <button type="submit" className="button button-primary button-full" disabled={status === "submitting"}>
              {status === "submitting" ? "Joining..." : "Join the waitlist"}
            </button>

            <p className="waitlist-footnote">
              We&apos;ll only use this to email EchoVault updates and availability. No spam, no sharing your email.
            </p>

            {status === "error" ? (
              <p className="waitlist-error" role="status">
                {error}{" "}
                <a className="waitlist-mail-link" href={fallbackEmailHref} target="_blank" rel="noreferrer noopener">
                  Email us instead
                </a>
                .
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
