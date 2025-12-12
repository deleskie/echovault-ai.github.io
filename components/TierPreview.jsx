import Link from "next/link";

export default function TierPreview() {
  return (
    <section className="section section-muted" aria-labelledby="tiers-heading">
      <div className="content">
        <h2 id="tiers-heading" className="section-title">
          Three ways to honor a life story
        </h2>
        <p className="lead">
          Whether you&apos;re gifting a simple recording session or planning a once-in-a-generation heirloom, EchoVault
          has a tier that matches the depth of story you want to capture.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Gift – $99</h3>
            <p>
              A gentle introduction to EchoVault with a curated set of questions, a focused interview, and a
              foundational Echo you can share with close family.
            </p>
            <p>
              <strong>Best for:</strong> first-time storytellers, simple gifts, or a single weekend together.
            </p>
          </div>
          <div className="card">
            <h3>Legacy – $499 Founder Special</h3>
            <p>
              <strong>Founder Special:</strong> early families pricing while EchoVault is in small-group availability.
            </p>
            <p>
              A deep, multi-chapter journey through a life story with richer modeling, more sessions, and private
              access for the people who need to hear those stories the most.
            </p>
            <p>
              <strong>Best for:</strong> families planning a dedicated legacy project this year or coordinating across time zones.
            </p>
          </div>
          <div className="card">
            <h3>Heirloom – $5000</h3>
            <p>
              A concierge-level experience designed to sit alongside photo albums, letters, and keepsakes as part of
              your family&apos;s long-term archive and tradition.
            </p>
            <p>
              <strong>Best for:</strong> once-in-a-generation stories you want to preserve with white-glove care and share across generations.
            </p>
          </div>
        </div>
        <div className="section-cta">
          <Link href="/pricing" className="button button-primary">
            See tiers and plan a project
          </Link>
        </div>
      </div>
    </section>
  );
}
