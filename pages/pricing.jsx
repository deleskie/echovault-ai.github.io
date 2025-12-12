import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import TrustBlock from "@components/TrustBlock";
import { SITE_URL } from "@config/site";

const HEIRLOOM_CAL_URL = process.env.NEXT_PUBLIC_HEIRLOOM_CAL_URL;

const tiers = [
  {
    id: "gift",
    name: "Gift Tier",
    price: "$99",
    hosting: "3 years of hosting included",
    description:
      "A thoughtful, approachable way to capture a focused snapshot of someone’s story in a single sitting.",
    emotion:
      "Perfect for first-timers or the urgent “we should record this” weekend you don’t want to miss.",
    features: [
      "25–40 guided questions in one 60–90 minute session",
      "Gentle, AI-guided interview flow tuned for first-timers",
      "Foundational Echo you can revisit for everyday questions",
      "Secure hosting with a private family link you control"
    ],
    highlight:
      "Ideal for birthdays, holidays, or a calm weekend session—leave with something you can share the same day.",
    ctaLabel: "Book the Gift Session",
    Icon: GiftIcon
  },
  {
    id: "legacy",
    name: "Legacy Tier",
    price: "$499",
    originalPrice: "$750",
    hosting: "10 years of hosting included",
    description:
      "A deep, richly detailed portrait built for families who want a fuller record of stories, values, and turning points.",
    emotion:
      "Great for siblings coordinating across time zones or anyone planning multi-part conversations without rushing.",
    features: [
      "120–200 curated questions across multiple sessions",
      "Deep interview sequence and full persona modeling",
      "Optional voice integration (coming soon)",
      "Secure hosting and access for your family",
      "Private family sharing with guidance on who to invite when"
    ],
    highlight:
      "Best for families planning a dedicated legacy project or capturing a loved one’s story ahead of a big transition.",
    ctaLabel: "Plan a Legacy Project",
    Icon: BookIcon,
    badge: "Most Popular"
  },
  {
    id: "heirloom",
    name: "Heirloom Tier",
    price: "$5000",
    hosting: "Lifetime hosting included",
    description:
      "A white-glove, multi-session experience designed to become part of your family’s lasting archive and traditions.",
    emotion:
      "For generational preservation with concierge handling—something to pass down alongside letters and keepsakes.",
    features: [
      "250–400 questions across multiple planned sessions",
      "White-glove interview planning and scheduling",
      "Concierge-level editing and polishing",
      "Hosting for the Echo built to stay with your family",
      "Archive-friendly outputs you can pass down alongside letters and photos"
    ],
    highlight:
      "For the once-in-a-generation story you want to preserve with care, ready for family archives and future celebrations.",
    ctaLabel: "Explore the Heirloom Experience",
    Icon: ArchiveIcon
  }
];

const comparison = [
  {
    label: "Best for",
    values: [
      "First-time storytellers, simple gifts",
      "Families coordinating a full legacy project",
      "Multi-generational archives and white-glove support"
    ]
  },
  {
    label: "Time commitment",
    values: ["1 session, ~60–90 minutes", "Several sessions over a few weeks", "Multiple sessions with planning and review"]
  },
  {
    label: "Hosting",
    values: ["3 years", "10 years", "Lifetime"]
  },
  {
    label: "Support",
    values: ["Email guidance and templates", "Light concierge support for setup", "Dedicated concierge and planning help"]
  }
];

const comparisonColumns = [
  { name: "Gift", Icon: GiftIcon, index: 0 },
  { name: "Legacy", Icon: BookIcon, index: 1 },
  { name: "Heirloom", Icon: ArchiveIcon, index: 2 }
];

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>EchoVault Pricing – Gift, Legacy, Heirloom</title>
        <meta
          name="description"
          content="Choose the EchoVault tier that matches the depth of digital legacy you want to preserve – from a thoughtful gift session to a concierge-level heirloom, all built from guided AI interviews and conversational Echoes."
        />
        <meta property="og:title" content="EchoVault Pricing – Gift, Legacy, Heirloom" />
        <meta
          property="og:description"
          content="Three EchoVault tiers for preserving stories and voices with AI-guided interviews and a private Echo space: Gift, Legacy, and Heirloom."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/pricing`} />
        <meta property="og:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <link rel="canonical" href={`${SITE_URL}/pricing`} />
      </Head>
      <Layout>
        <div className="pricing-page">
          <section className="section pricing-hero" aria-labelledby="pricing-heading">
            <div className="content pricing-hero-content">
              <span className="pricing-hero-glow" aria-hidden="true" />
              <div className="pricing-hero-copy">
                <h1 id="pricing-heading" className="page-title pricing-hero-title">
                  Invest once to keep their voice close.
                </h1>
                <p className="lead pricing-hero-sub">
                  Three ways to preserve the stories, laughter, and wisdom that matter—no subscriptions and long-term
                  hosting included.
                </p>
                <div className="pricing-hero-cta">
                  <Link href="/pricing#tiers" className="button button-primary">
                    See tiers
                  </Link>
                  <Link href="/how-it-works" className="button button-secondary">
                    See How It Works
                  </Link>
                </div>
              </div>
              <div className="pricing-hero-visual" aria-hidden="true">
                <PricingWaveform />
              </div>
            </div>
          </section>

          <section className="section pricing-section" id="tiers" aria-label="EchoVault pricing tiers">
            <div className="content">
              <div className="pricing-grid">
                {tiers.map((tier) => (
                  <article key={tier.id} id={tier.id} className="pricing-card">
                    {tier.badge && (
                      <span className="pricing-badge" aria-label="Most popular tier">
                        {tier.badge}
                      </span>
                    )}
                    <div className="pricing-card-header">
                      <div className="pricing-icon" role="img" aria-label={`${tier.name} icon`}>
                        <tier.Icon />
                      </div>
                      <div>
                        <h2 className="pricing-name">{tier.name}</h2>
                        {tier.originalPrice ? (
                          <div className="pricing-price-group">
                            <span className="pricing-price-original">{tier.originalPrice}</span>
                            <p className="pricing-price">
                              {tier.price} Founder Special
                            </p>
                          </div>
                        ) : (
                          <p className="pricing-price">{tier.price}</p>
                        )}
                        <div className="pricing-divider" />
                      </div>
                    </div>
                    <p className="pricing-description">{tier.description}</p>
                    <p className="pricing-emotion">{tier.emotion}</p>
                    {tier.hosting && (
                      <p className="pricing-hosting">
                        {tier.hosting}
                      </p>
                    )}
                    <p className="pricing-features-heading">You get:</p>
                    <ul className="pricing-features">
                      {tier.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <p className="pricing-highlight">{tier.highlight}</p>
                    <div className="pricing-card-cta">
                      {tier.id === "heirloom" && HEIRLOOM_CAL_URL ? (
                        <a href={HEIRLOOM_CAL_URL} className="button button-primary button-full">
                          Book an Heirloom consult with the founder
                        </a>
                      ) : (
                        <a
                          href={
                            tier.id === "gift"
                              ? "mailto:hello@echovault.com?subject=EchoVault%20Gift%20Tier"
                              : tier.id === "legacy"
                                ? "mailto:hello@echovault.com?subject=EchoVault%20Legacy%20Project"
                                : "mailto:hello@echovault.com?subject=EchoVault%20Heirloom%20Tier"
                          }
                          className="button button-primary button-full"
                        >
                          {tier.id === "gift" && "Talk to us about the Gift Tier"}
                          {tier.id === "legacy" && "Plan a Legacy Project"}
                          {tier.id === "heirloom" && !HEIRLOOM_CAL_URL && "Talk to us about the Heirloom Tier"}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section pricing-cta-surface" aria-label="Need guidance">
            <div className="content pricing-cta pricing-cta--centered">
              <div className="pricing-cta-text">
                <h2 className="section-title">Not sure where to start?</h2>
                <p className="lead">
                  Tell us who you&apos;re recording for and when you need it—we&apos;ll match you to the right tier.
                </p>
              </div>
              <div className="pricing-cta-actions pricing-cta-actions--center">
                <a className="button button-primary" href="mailto:hello@echovault.com">
                  Help Me Choose
                </a>
                <a className="button button-secondary" href="mailto:support@echovault.com">
                  Talk to Support
                </a>
              </div>
            </div>
          </section>

          <section className="section pricing-section" aria-labelledby="compare-heading">
            <div className="content">
              <div className="pricing-compare-card">
                <div className="pricing-compare-head">
                  <h2 id="compare-heading" className="section-title">
                    Compare tiers at a glance
                  </h2>
                  <p className="pricing-compare-copy">
                    Three distinct paths to preserve what matters—scan the differences and choose the level of depth,
                    support, and hosting that fits your family.
                  </p>
                </div>
                <div className="pricing-compare-columns">
                  {comparisonColumns.map((col) => (
                    <div key={col.name} className="pricing-compare-column">
                      <div className="pricing-compare-colhead">
                        <span className="pricing-compare-colicon" aria-hidden="true">
                          <col.Icon />
                        </span>
                        <h3 className="pricing-compare-title">{col.name}</h3>
                      </div>
                      <div className="pricing-compare-items" role="list">
                        {comparison.map((row, idx) => (
                          <div
                            key={`${row.label}-${col.name}`}
                            className={`pricing-compare-item ${idx % 2 === 0 ? "is-odd" : ""}`}
                            role="listitem"
                          >
                            <p className="pricing-compare-item-label">{row.label}</p>
                            <p className="pricing-compare-item-value">{row.values[col.index]}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="section pricing-section" aria-labelledby="paths-heading">
            <div className="content">
              <h2 id="paths-heading" className="section-title">
                Not sure which path to choose?
              </h2>
              <p className="lead">
                A few common starting points we see from families—pick the one that sounds closest and we&apos;ll help
                you tune the details.
              </p>
              <div className="grid grid-3">
                <div className="card">
                  <h3>If you have a gathering coming up</h3>
                  <p>
                    You have a birthday, holiday, or weekend together in the next 3–6 weeks and want to leave with
                    something real you can share.
                  </p>
                  <p>
                    <strong>Start with:</strong> Gift Tier.
                  </p>
                </div>
                <div className="card">
                  <h3>If you&apos;re planning a deeper project</h3>
                  <p>
                    You&apos;re thinking about legacy this year—multiple conversations, more than one storyteller, or a
                    fuller record of turning points and values.
                  </p>
                  <p>
                    <strong>Start with:</strong> Legacy Tier.
                  </p>
                </div>
                <div className="card">
                  <h3>If you&apos;re creating a family heirloom</h3>
                  <p>
                    You want a white-glove, multi-session experience that can sit alongside photo albums, letters, and
                    keepsakes as part of a long-term archive.
                  </p>
                  <p>
                    <strong>Start with:</strong> Heirloom Tier.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section pricing-section" aria-labelledby="pricing-faq-heading">
            <div className="content">
              <h2 id="pricing-faq-heading" className="section-title">
                Questions about commitments and logistics
              </h2>
              <div className="grid">
                <div className="card">
                  <h3>What if we need to reschedule?</h3>
                  <p>
                    Life happens. If someone gets sick, travel shifts, or the timing feels off, we&apos;ll work with
                    you to move sessions where we can. The goal is a calm, present conversation—not forcing it to fit a
                    calendar box.
                  </p>
                </div>
                <div className="card">
                  <h3>What if they&apos;re nervous about technology?</h3>
                  <p>
                    That&apos;s common. We keep the interface simple, test microphones ahead of time, and move at their
                    pace. You can be in the room, join remotely, or let them record on their own schedule. We never
                    pressure someone who&apos;s uncomfortable.
                  </p>
                </div>
                <div className="card">
                  <h3>What if we change our minds?</h3>
                  <p>
                    You stay in control. If EchoVault doesn&apos;t feel right, talk to us. We can stop further
                    sessions, and we&apos;ll explain in plain language what we can remove or delete and what&apos;s
                    already been shared with your family.
                  </p>
                </div>
                <div className="card">
                  <h3>Do we have to decide the tier alone?</h3>
                  <p>
                    No. Tell us who you&apos;re recording for, what the timing looks like, and how deep you want to go.
                    We&apos;ll recommend a starting tier and adjust with you. There&apos;s no penalty for starting
                    smaller and expanding if it makes sense.
                  </p>
                </div>
              </div>
              <p className="blog-back-link">
                <Link href="/blog/echoes-in-the-grid">
                  Read the founder&apos;s story behind EchoVault&apos;s tiers
                </Link>
              </p>
            </div>
          </section>

          <section className="section pricing-section" aria-labelledby="pricing-trust-heading">
            <div className="content">
              <TrustBlock headingId="pricing-trust-heading" />
            </div>
          </section>

          <section className="section pricing-cta-surface pricing-cta-surface--base" aria-label="Next steps">
            <div className="content pricing-cta pricing-cta--centered">
              <div className="pricing-cta-text">
                <h2 className="section-title">Ready to begin?</h2>
                <p className="lead">
                  Plan your EchoVault project or reach out with any question. Real humans will help.
                </p>
              </div>
              <div className="pricing-cta-actions pricing-cta-actions--center">
                <a
                  className="button button-primary"
                  href="mailto:hello@echovault.com?subject=EchoVault%20Project%20Planning"
                >
                  Plan a project
                </a>
                <a className="button button-secondary" href="mailto:hello@echovault.com">
                  Talk with a human
                </a>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

function GiftIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 10.5h16M16 10.5v15m-9-15v4.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5H7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 10.5c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2c1.2 0 2.5 1 2.5 3m3.5 1c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2c-1.2 0-2.5 1-2.5 3"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <rect x="7" y="10.5" width="18" height="4.5" rx="1" fill="url(#giftGradient)" />
      <defs>
        <linearGradient id="giftGradient" x1="7" y1="10.5" x2="26" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6f2ee5" />
          <stop offset="1" stopColor="#a98cf7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M7.5 6.5h7.5a3 3 0 0 1 3 3v15H10a2.5 2.5 0 0 0-2.5 2.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 6.5H17a3 3 0 0 0-3 3v15h8a2.5 2.5 0 0 1 2.5 2.5V6.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path d="M13.5 11h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M13.5 17h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="7" width="20" height="4" rx="1.5" fill="url(#archiveGradient)" />
      <path
        d="M8 11h16v13.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 24.5V11Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M13 16h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="archiveGradient" x1="6" y1="7" x2="26" y2="11" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6f2ee5" />
          <stop offset="1" stopColor="#a98cf7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function PricingWaveform() {
  return (
    <svg className="pricing-waveform" viewBox="0 0 600 220" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pricingWave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(111, 46, 229, 0.9)" />
          <stop offset="100%" stopColor="rgba(169, 140, 247, 0.5)" />
        </linearGradient>
      </defs>
      <path
        d="M20 140c40-40 80-40 120 0s80 40 120 0 80-40 120 0 80 40 120 0"
        stroke="url(#pricingWave)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M60 170c30-30 60-30 90 0s60 30 90 0 60-30 90 0 60 30 90 0 60-30 90 0"
        stroke="url(#pricingWave)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />
      <circle cx="520" cy="70" r="26" fill="rgba(111,46,229,0.16)" />
      <circle cx="520" cy="70" r="8" fill="rgba(169,140,247,0.85)" />
    </svg>
  );
}
