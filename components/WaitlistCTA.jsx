import { useMemo, useRef, useState } from "react";

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

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const activeScriptRef = useRef(null);

  const waitlistMailto = useMemo(() => {
    const subject = "EchoVault waitlist";
    const body = [
      "Please add me to the EchoVault waitlist.",
      "",
      `Email: ${email || "(not provided)"}`,
      note ? `Note: ${note}` : "Note:",
      "",
      "Sent from the EchoVault website."
    ].join("\n");

    return `mailto:hello@echovault-ai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [email, note]);

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
          setEmail("");
          setNote("");
          return;
        }

        setStatus("error");
        setError(message || "Could not add you to the waitlist. Please try again or email hello@echovault-ai.com.");
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
      setError("Could not reach Mailchimp. Please try again or email hello@echovault-ai.com.");

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

  const submitViaMailto = (event) => {
    event.preventDefault();
    window.location.assign(waitlistMailto);
    setStatus("success");
  };

  return (
    <section id="waitlist" className="section section-muted" aria-labelledby="waitlist-heading">
      <div className="content waitlist">
        <div className="waitlist-copy">
          <h2 id="waitlist-heading" className="section-title">
            Join our waitlist
          </h2>
          <p className="lead">
            EchoVault is in early availability with a small group of families. Join the waitlist and we&apos;ll send
            occasional updates, plus availability when new project slots open. If you want, add a note about who you&apos;re
            recording for and your timing.
          </p>
          <p className="waitlist-next-steps">
            If you&apos;re trying to record soon—or you&apos;re considering a Legacy or Heirloom project—you can skip the
            line and email us for a human reply:{" "}
            <a className="waitlist-mail-link" href="mailto:hello@echovault-ai.com?subject=EchoVault%20Project%20Timing">
              hello@echovault-ai.com
            </a>
            .
          </p>
        </div>

        {status === "success" ? (
          <div className="waitlist-form waitlist-success">
            <p className="waitlist-success-title">You&apos;re on the list.</p>
            <p className="waitlist-success-text">
              If Mailchimp requires confirmation, please check your inbox to finish joining.
            </p>
            <p className="waitlist-success-text">
              If you don&apos;t see anything, email{" "}
              <a href="mailto:hello@echovault-ai.com?subject=EchoVault%20Waitlist">hello@echovault-ai.com</a> and we&apos;ll add
              you manually.
            </p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={MAILCHIMP_ACTION ? submitViaMailchimp : submitViaMailto}>
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
                <a className="waitlist-mail-link" href={waitlistMailto}>
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
