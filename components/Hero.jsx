import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="content hero-inner">
        <div className="hero-copy">
          <h1 id="hero-heading" className="hero-title">
            Preserve their story, in their own words.
          </h1>
          <p className="hero-subtitle">
            EchoVault guides gentle, AI-supported interviews, turns them into a conversational Echo, and gives your
            family a private space to keep asking questions for years.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="button button-primary">
              Join our waitlist
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com" className="button button-secondary">
              Talk with a human first
            </a>
          </div>
          <p className="hero-meta">
            Designed for adult children, new parents, and anyone who has ever said, &quot;We should really record this
            someday&quot;—and means it.
          </p>
          <div className="hero-offer" aria-label="What you get with EchoVault">
            <p className="hero-offer-label">Every EchoVault project includes:</p>
            <div className="hero-offer-items">
              <div className="hero-offer-item">
                <span className="hero-offer-dot" />
                <div>
                  <p className="hero-offer-title">Guided interview sessions</p>
                  <p className="hero-offer-text">
                    Warm, structured conversations that make it easy to share real stories.
                  </p>
                </div>
              </div>
              <div className="hero-offer-item">
                <span className="hero-offer-dot" />
                <div>
                  <p className="hero-offer-title">A trained Echo of their voice</p>
                  <p className="hero-offer-text">
                    An Echo grounded in their own words, phrases, and way of explaining things.
                  </p>
                </div>
              </div>
              <div className="hero-offer-item">
                <span className="hero-offer-dot" />
                <div>
                  <p className="hero-offer-title">Private family access</p>
                  <p className="hero-offer-text">
                    A calm, access controlled space where loved ones can return to ask questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-avatar" />
            <div className="hero-lines">
              <span />
              <span />
              <span />
            </div>
            <p className="hero-caption">
              “Tell me about the moment you realized this really mattered to you.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
