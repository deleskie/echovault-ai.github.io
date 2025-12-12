import Head from "next/head";
import Layout from "@components/Layout";
import { SITE_URL } from "@config/site";

export default function LegalPage() {
  return (
    <>
      <Head>
        <title>EchoVault – Legal & Credits</title>
        <meta
          name="description"
          content="Plain-language legal information, privacy notes, and third‑party credits for the EchoVault marketing site."
        />
        <meta property="og:title" content="EchoVault – Legal & Credits" />
        <meta
          property="og:description"
          content="Legal information, privacy notes, and third‑party credits, including references to films and brands mentioned in EchoVault stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/legal`} />
        <meta property="og:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <link rel="canonical" href={`${SITE_URL}/legal`} />
      </Head>
      <Layout>
        <section className="section" aria-labelledby="legal-heading">
          <div className="content">
            <h1 id="legal-heading" className="page-title">
              Legal & Credits
            </h1>
            <p className="lead">
              This page gives a simple, human-readable overview of EchoVault&apos;s legal notes, privacy stance, and how
              we reference other people&apos;s work in our stories and essays.
            </p>

            <h2 id="terms" className="section-title">
              Terms (high level)
            </h2>
            <p>
              EchoVault is an early-stage project focused on helping families preserve stories and voices. The marketing
              site does not itself create accounts or process payments. Any future product terms of use will be written
              in clear language and will live alongside the application, not just here.
            </p>

            <h2 id="privacy" className="section-title">
              Privacy (high level)
            </h2>
            <p>
              The public site is designed to collect as little information as possible. When you contact us or join a
              waitlist, we use that information only to respond about EchoVault. We do not sell your contact details or
              use them for unrelated marketing. Any future product privacy policy will spell out, in plain language, how
              recordings, transcripts, and Echo data are stored and controlled.
            </p>

            <h2 className="section-title">Third‑party marks and references</h2>
            <p>
              Our essays and founder stories occasionally mention films, books, and other brands that influenced the
              thinking behind EchoVault. These references are editorial only and do not imply endorsement or
              affiliation.
            </p>
            <p>
              In particular, <em>TRON</em> and <em>TRON: Legacy</em> are trademarks of Disney Enterprises, Inc. and are
              used here for reference only.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
