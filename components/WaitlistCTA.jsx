import { useState } from "react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState("idle"); // idle | success

  const waitlistMailto = (() => {
    const subject = "EchoVault waitlist";
    const body = [
      "Please add me to the EchoVault waitlist.",
      "",
      `Email: ${email || "(not provided)"}`,
      note ? `Note: ${note}` : "Note:",
      "",
      "Sent from the EchoVault website."
    ].join("\n");

    return `mailto:hello@echovault.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  })();

  const handleSubmit = async (event) => {
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
            <p className="waitlist-success-title">Check your email app.</p>
            <p className="waitlist-success-text">
              We opened an email to <a href="mailto:hello@echovault.com">hello@echovault.com</a> with your details.
              Send it to join the waitlist.
            </p>
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
            >
              Join the waitlist
            </button>
            <p className="waitlist-footnote">
              We&apos;ll only use this to email EchoVault updates and availability. No spam, no sharing your email.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
