import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import TrustBlock from "@components/TrustBlock";
import { SITE_URL } from "@config/site";

const steps = [
  {
    title: "Record Their Story",
    description:
      "An AI-guided interviewer gently walks your loved one through thoughtful prompts about childhood, turning points, values, and the small details that make their story theirs. You can be present, join remotely, or let them record on their own schedule.",
    note: "Most families start with one 60–90 minute session (Gift), and add more over a few weeks for Legacy or Heirloom projects.",
    icon: MicrophoneIcon
  },
  {
    title: "We Build Their Echo",
    description:
      "We use those conversations to train a tailored Echo that reflects their voice, perspective, and way of explaining things. We preserve their pace, their phrases, and the stories they choose to share.",
    note: "We usually prepare the first version of the Echo within a short time after your recording sessions wrap, then refine it with you.",
    icon: NeuralIcon
  },
  {
    title: "Talk to Them Anytime",
    description:
      "Family members can return whenever they want—asking questions, revisiting memories, or exploring new topics with the Echo in a private, secure space. It’s designed to feel calm and always-available.",
    note: "Families often tell us it feels grounding—like having a quiet room they can step into when they need to hear that voice again.",
    icon: ChatIcon
  }
];

const faqs = [
  {
    question: "Is this safe?",
    answer:
      "EchoVault is being built with safety, consent, and privacy as first principles. Our goal is a private, access-controlled space with industry-standard protections (including encryption in transit and at rest) as the product matures. If you have specific requirements, ask and we’ll tell you what’s available now and what’s in progress."
  },
  {
    question: "Is this weird?",
    answer:
      "It’s new, and it’s emotional—but it doesn’t have to be strange. EchoVault is about preserving real stories in their own words, not pretending someone is still here. Most families describe it as a comforting, human way to stay connected."
  },
  {
    question: "How is this different from just recording video?",
    answer:
      "Video is wonderful—but it’s fixed. An Echo lets you keep asking new questions over time and explore different parts of someone’s story, even long after the original sessions are over. Many families use both together."
  },
  {
    question: "What happens if we change our minds?",
    answer:
      "You stay in control. If you decide EchoVault isn’t right for you, we can remove access and delete recordings and derived data. We’ll always explain what stays and what’s gone in clear language."
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Head>
        <title>How EchoVault Works — Guided, careful, human</title>
        <meta
          name="description"
          content="See exactly how EchoVault uses gentle, AI-supported interviews to capture stories, build a respectful conversational Echo, and keep your family connected to a loved one’s wisdom."
        />
        <meta property="og:title" content="How EchoVault Works — Guided, careful, human" />
        <meta
          property="og:description"
          content="A guided, human-centered way to record stories, build a conversational Echo with AI, and talk to them anytime in a private digital legacy space."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/how-it-works`} />
        <meta property="og:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <link rel="canonical" href={`${SITE_URL}/how-it-works`} />
      </Head>
      <Layout>
        <div className="hiw-page">
          <section className="section hiw-surface-base" aria-labelledby="how-heading">
            <div className="content">
              <div className="hiw-hero-block">
                <div className="hiw-hero-mark" aria-hidden="true">
                  EV
                </div>
                <h1 id="how-heading" className="hiw-hero-title">
                  How EchoVault Works, Step by Step
                </h1>
                <p className="hiw-hero-subtitle">
                  A guided, human-centered way to preserve the stories that matter. We keep the experience calm, clear,
                  and respectful—so you focus on the person, not the technology.
                </p>
                <p className="hiw-hero-support">
                  EchoVault stays gentle, transparent, and human at every point—no surprises, no pressure.
                </p>
                <div className="hiw-hero-actions" aria-label="Primary actions">
                  <Link href="/pricing" className="button button-primary">
                    Plan a project
                  </Link>
                  <Link href="/how-it-works#faq" className="button button-secondary">
                    See FAQs
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="section hiw-surface-alt" aria-labelledby="steps-heading">
            <div className="content">
              <div className="hiw-steps-header">
                <p className="hiw-intro">EchoVault is designed to feel gentle, simple, and guided.</p>
                <h2 id="steps-heading" className="hiw-section-title">
                  The EchoVault journey
                </h2>
              </div>
              <div className="hiw-steps-grid">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <article key={step.title} className="hiw-step-card">
                      <Icon />
                      <p className="hiw-step-label">Step {index + 1}</p>
                      <h3 className="hiw-step-title">{step.title}</h3>
                      <p className="hiw-step-body">{step.description}</p>
                      <p className="hiw-step-note">{step.note}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section hiw-surface-base" aria-labelledby="roles-heading">
            <div className="content">
              <div className="hiw-trust">
                <h2 id="roles-heading" className="hiw-trust-title">
                  Who&apos;s involved in an EchoVault project
                </h2>
                <p className="hiw-trust-copy">
                  Most EchoVault projects involve three roles. You don&apos;t need all the details figured out before
                  you start—we&apos;ll help you decide who sits where.
                </p>
              </div>
              <div className="hiw-steps-grid">
                <article className="hiw-step-card">
                  <p className="hiw-step-label">The storyteller</p>
                  <h3 className="hiw-step-title">The person whose story we&apos;re capturing</h3>
                  <p className="hiw-step-body">
                    The storyteller is the person speaking—your parent, partner, grandparent, or you. They set the pace,
                    choose what to share, and can always pause or skip questions. Our job is to make it feel like a
                    calm, respectful conversation.
                  </p>
                </article>
                <article className="hiw-step-card">
                  <p className="hiw-step-label">The organizer</p>
                  <h3 className="hiw-step-title">The person coordinating behind the scenes</h3>
                  <p className="hiw-step-body">
                    The organizer is often an adult child, partner, or close friend. They help with scheduling,
                    logistics, and deciding who to invite. We give organizers clear guidance so they don&apos;t have to
                    figure it out alone.
                  </p>
                </article>
                <article className="hiw-step-card">
                  <p className="hiw-step-label">Family listeners</p>
                  <h3 className="hiw-step-title">The people who return to the Echo</h3>
                  <p className="hiw-step-body">
                    Family listeners are the people who come back later—kids, siblings, grandkids, close friends.
                    They&apos;re the ones asking new questions, revisiting stories on hard days, and discovering pieces
                    of the story they hadn&apos;t heard before.
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section className="section hiw-cta-section" aria-label="Start recording">
            <div className="content">
              <div className="hiw-cta-block">
                <h3 className="hiw-cta-title">Start Your First Recording</h3>
                <p className="hiw-cta-text">
                  Sit down with someone you love, keep it calm and guided, and leave with something you can return to
                  anytime.
                </p>
                <div className="hiw-cta-actions">
                  <Link href="/pricing" className="button button-primary">
                    Plan a project
                  </Link>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com" className="button button-secondary">
                    Talk with a human
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section hiw-surface-base" aria-labelledby="trust-heading">
            <div className="content">
              <div className="hiw-trust">
                <h2 id="trust-heading" className="hiw-trust-title">
                  Built for trust and care
                </h2>
                <p className="hiw-trust-copy">
                  From consent to access control to deletion, you stay in control. We keep everything in a calm,
                  access-controlled space and explain every step in plain language.
                </p>
              </div>
              <TrustBlock headingId="hiw-trust-block-heading" />
            </div>
          </section>

          <section className="section hiw-surface-alt" id="faq" aria-labelledby="faq-heading">
            <div className="content">
              <div className="hiw-faq-card">
                <h2 id="faq-heading" className="hiw-section-title">
                  Questions families often ask
                </h2>
                <div className="hiw-faq-accordions">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="hiw-accordion">
                      <summary className="hiw-accordion-summary">
                        <span>{faq.question}</span>
                        <span className="hiw-accordion-icon" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="hiw-accordion-panel">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
                <div className="hiw-cta-actions hiw-cta-actions--center">
                  <a className="button button-secondary" href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com">
                    Ask us anything
                  </a>
                  <Link href="/pricing" className="button button-primary">
                    Plan a project
                  </Link>
                </div>
                <p className="blog-back-link">
                  <Link href="/blog/echoes-in-the-grid">
                    Read the founder&apos;s story of why EchoVault exists
                  </Link>
                </p>
              </div>
            </div>
          </section>

          <section className="section hiw-footer-cta" aria-label="Final call to action">
            <div className="content">
              <div className="hiw-footer-cta-inner">
                <h3 className="hiw-footer-cta-title">Ready when you are.</h3>
                <p className="hiw-footer-cta-text">
                  Preserve the stories, laughter, and wisdom you don’t want to lose—gently, respectfully, and with the
                  people you love.
                </p>
                <div className="hiw-cta-actions hiw-cta-actions--center">
                  <Link href="/pricing" className="button button-primary">
                    Plan a project
                  </Link>
                  <Link href="/pricing" className="button button-secondary">
                    See pricing
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

function MicrophoneIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      role="img"
      aria-hidden="true"
      className="hiw-card-icon"
    >
      <rect x="10" y="4" width="8" height="14" rx="4" fill="url(#micGradient)" />
      <path
        d="M6.5 12.5V14c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-1.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M14 21.5V24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10.5 24h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <defs>
        <linearGradient id="micGradient" x1="10" y1="4" x2="19" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6f2ee5" />
          <stop offset="1" stopColor="#a98cf7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NeuralIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-hidden="true"
      className="hiw-card-icon"
    >
      <path
        d="M9 8.5c0-1.38 1.12-2.5 2.5-2.5h9c1.38 0 2.5 1.12 2.5 2.5V11c0 1.66-1.34 3-3 3h-8a2 2 0 0 0-2 2v4.5c0 1.38-1.12 2.5-2.5 2.5S5 21.88 5 20.5v-9C5 10.57 6.57 9 8.5 9 8.78 9 9 8.78 9 8.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M23 12.5c0-1.38 1.12-2.5 2.5-2.5S28 11.12 28 12.5v9c0 1.93-1.57 3.5-3.5 3.5-.28 0-.5.22-.5.5 0 1.38-1.12 2.5-2.5 2.5H13c-1.38 0-2.5-1.12-2.5-2.5V21c0-1.66 1.34-3 3-3h7a2 2 0 0 0 2-2v-3.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="1" fill="currentColor" />
      <circle cx="20" cy="10" r="1" fill="currentColor" />
      <circle cx="20" cy="18" r="1" fill="currentColor" />
      <circle cx="24" cy="24" r="1" fill="currentColor" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-hidden="true"
      className="hiw-card-icon"
    >
      <path
        d="M6 9.5C6 8.12 7.12 7 8.5 7h12c1.38 0 2.5 1.12 2.5 2.5v9c0 1.38-1.12 2.5-2.5 2.5H12l-4 3v-3.5C7 20.12 6 19 6 17.5v-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11h7m-7 4h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M19 6c0-1.66-1.34-3-3-3H7C5.34 3 4 4.34 4 6v9c0 1.38 1.12 2.5 2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}
