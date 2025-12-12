import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import { SITE_URL } from "@config/site";

export default function TrustPage() {
  return (
    <>
      <Head>
        <title>EchoVault Trust & Safety</title>
        <meta
          name="description"
          content="How EchoVault approaches consent, privacy, and safety for family stories and digital legacy projects. Plain language first, with technical detail available on request."
        />
        <meta property="og:title" content="EchoVault Trust & Safety" />
        <meta
          property="og:description"
          content="EchoVault is built to keep family stories private, consent-first, and human. Read our trust and safety approach in plain language."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/trust`} />
        <meta property="og:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <link rel="canonical" href={`${SITE_URL}/trust`} />
      </Head>
      <Layout>
        <section className="section" aria-labelledby="trust-page-heading">
          <div className="content">
            <h1 id="trust-page-heading" className="page-title">
              Trust & Safety
            </h1>
            <p className="lead">
              EchoVault is an early-stage project. This page explains the principles we&apos;re building around and how
              we think about consent, privacy, and safety for family stories. We&apos;ll keep updating it as the product
              matures.
            </p>

            <h2 className="section-title">What we optimize for</h2>
            <div className="grid">
              <div className="card">
                <h3>Consent first</h3>
                <p>
                  The person being recorded should always understand what&apos;s happening, what&apos;s being captured,
                  and what they can skip. We design the experience to avoid pressure and surprise.
                </p>
              </div>
              <div className="card">
                <h3>Private by default</h3>
                <p>
                  Family stories aren&apos;t content. Our goal is a private space where access is intentionally granted,
                  not something that leaks into feeds or search results.
                </p>
              </div>
              <div className="card">
                <h3>Clarity over fine print</h3>
                <p>
                  We aim to explain what happens to recordings, transcripts, and Echo data in plain language. If you
                  want the technical details, we&apos;ll share them directly.
                </p>
              </div>
            </div>

            <h2 className="section-title">Access and sharing</h2>
            <p>
              EchoVault is designed around invited access. You decide who can listen and who can interact with the
              Echo. The goal is a calm, controlled space for the people who need it, not a public profile.
            </p>

            <h2 className="section-title">Security (in progress)</h2>
            <p>
              As the product matures, we&apos;re implementing industry-standard safeguards like encryption in transit,
              encryption at rest, and least-privilege access. If you have specific requirements (for example, retention
              windows, export formats, or where data is hosted), email us and we&apos;ll tell you what&apos;s available
              now and what&apos;s still in progress.
            </p>

            <h2 className="section-title">Retention and deletion</h2>
            <p>
              Families should stay in control. Our intent is to provide clear options for pausing access, revoking
              invitations, and deleting recordings and derived data when requested. If you&apos;re evaluating EchoVault
              for a real project, we&apos;ll walk through what that means today.
            </p>

            <h2 className="section-title">What we won&apos;t do</h2>
            <div className="grid">
              <div className="card">
                <h3>No ads, no engagement tricks</h3>
                <p>
                  We&apos;re not building a social network around your family&apos;s memories. The experience should feel
                  calm and respectful, not optimized for clicks.
                </p>
              </div>
              <div className="card">
                <h3>No sci‑fi framing</h3>
                <p>
                  EchoVault is about preserving stories in their own words, not pretending someone is still here. We
                  keep boundaries explicit and avoid mystical claims.
                </p>
              </div>
              <div className="card">
                <h3>No surprise use</h3>
                <p>
                  If we ever introduce new features that change what&apos;s stored or how it&apos;s used, we will explain
                  it plainly. Families shouldn&apos;t need a lawyer to understand the basics.
                </p>
              </div>
            </div>

            <div className="section-cta">
              <a className="button button-primary" href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com&su=EchoVault%20Trust%20Question">
                Ask a trust question
              </a>
              <Link className="button button-secondary" href="/pricing">
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
