import { useState } from "react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const [requireConfirmation, setRequireConfirmation] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, note })
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "Could not save your details");
      }

      setRequireConfirmation(Boolean(payload.requireConfirmation));
      setStatus("success");
      setEmail("");
      setNote("");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong, please try again in a moment.");
    }
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
            <a
              className="waitlist-mail-link"
              href="mailto:hello@echovault.com?subject=EchoVault%20Project%20Timing"
            >
              hello@echovault.com
            </a>
            .
          </p>
        </div>
        {status === "success" ? (
          <div className="waitlist-form waitlist-success">
            {requireConfirmation ? (
              <>
                <p className="waitlist-success-title">One more step.</p>
                <p className="waitlist-success-text">
                  Please check your email and confirm your subscription to finish joining the waitlist. We&apos;ll keep
                  updates occasional and human.
                </p>
              </>
            ) : (
              <>
                <p className="waitlist-success-title">You&apos;re on the list.</p>
                <p className="waitlist-success-text">
                  Thank you for trusting us with this. We&apos;ll send occasional updates and reach out when new
                  availability opens. You&apos;re welcome to share this page with anyone else who should be part of the
                  conversation.
                </p>
              </>
            )}
            <p className="waitlist-success-text">
              If you need to talk through timing, email{" "}
              <a href="mailto:hello@echovault.com?subject=EchoVault%20Project%20Timing">hello@echovault.com</a>.
            </p>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={handleSubmit}>
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
            <button
              type="submit"
              className="button button-primary button-full"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Joining..." : "Join the waitlist"}
            </button>
            <p className="waitlist-footnote">
              We&apos;ll only use this to email EchoVault updates and availability. No spam, no sharing your email.
            </p>
            {status === "error" && (
              <p className="waitlist-error" role="status">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
