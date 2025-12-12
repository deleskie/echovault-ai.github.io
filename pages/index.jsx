import Head from "next/head";
import Link from "next/link";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import TierPreview from "@components/TierPreview";
import WaitlistCTA from "@components/WaitlistCTA";
import TrustBlock from "@components/TrustBlock";
import { SITE_URL } from "@config/site";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EchoVault – Digital legacy that feels human</title>
        <meta
          name="description"
          content="EchoVault guides gentle, AI-supported interviews, turns them into a conversational Echo, and gives your family a private digital legacy space to keep asking questions for years."
        />
        <meta
          property="og:title"
          content="EchoVault – Digital legacy that feels human"
        />
        <meta
          property="og:description"
          content="A warm, human way to record stories, build a conversational Echo, and give your family a private place to keep talking to the people they love—using AI for memory preservation, not sci-fi replacement."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${SITE_URL}/social/og-link-card.svg`} />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Head>
      <Layout>
        <Hero />
        <section className="section" aria-labelledby="glance-heading">
          <div className="content">
            <h2 id="glance-heading" className="section-title">
              In one glance: what EchoVault is
            </h2>
            <p className="lead">
              One guided way to capture stories now and give your family a calm place to keep talking to them over time.
            </p>
            <div className="grid grid-3">
              <div className="card">
                <h3>Gentle, guided interviews</h3>
                <p>
                  Simple, AI-supported conversations that feel like sitting down with a curious, kind interviewer—not a
                  stiff survey or interrogation.
                </p>
              </div>
              <div className="card">
                <h3>A conversational Echo</h3>
                <p>
                  We use those interviews to build a tailored Echo that reflects how they talk, explain, and remember,
                  grounded in their own words.
                </p>
              </div>
              <div className="card">
                <h3>Private family space</h3>
                <p>
                  A calm, access-controlled space where loved ones can return to ask questions, listen, and explore
                  stories whenever they need it most.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-muted" aria-labelledby="who-heading">
          <div className="content">
            <h2 id="who-heading" className="section-title">
              Who EchoVault is for
            </h2>
            <div className="grid grid-3">
              <div className="card">
                <h3>Adult children of aging parents</h3>
                <p>
                  For the son or daughter who keeps thinking, &quot;We should really record Dad&apos;s stories&quot;—
                  and doesn&apos;t want to wait until there&apos;s a health scare to start.
                </p>
                <p>
                  <strong>Common moment:</strong> when a parent&apos;s health starts to change or you&apos;re quietly
                  coordinating more of their day-to-day life.
                </p>
              </div>
              <div className="card">
                <h3>New parents and growing families</h3>
                <p>
                  For parents who want their kids to have a way to hear their voice, values, and life lessons long
                  after the newborn blur, the busy years, and whatever comes next.
                </p>
                <p>
                  <strong>Common moment:</strong> around a first birthday, a big move, or that sudden &quot;time is
                  moving fast&quot; feeling when you want to capture what life is like right now.
                </p>
              </div>
              <div className="card">
                <h3>Legacy planners and storytellers</h3>
                <p>
                  For people who are already thinking about legacy—estate planning, memoirs, family archives—and want a
                  living, conversational complement to written documents and photos.
                </p>
                <p>
                  <strong>Common moment:</strong> while updating wills or trusts, organizing old photos, or planning a
                  memorial long before you hope it&apos;s needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="what-heading">
          <div className="content">
            <h2 id="what-heading" className="section-title">
              What EchoVault actually does for your family
            </h2>
            <div className="grid">
              <div className="card">
                <h3>Guided conversations, not stiff questionnaires</h3>
                <p>
                  A gentle, conversational interviewer guides your loved one through questions that spark real stories,
                  memories, and reflections—without putting them on the spot or making them feel like they&apos;re being
                  &quot;recorded&quot; for posterity.
                </p>
              </div>
              <div className="card">
                <h3>A living Echo of how they speak</h3>
                <p>
                  We build a tailored Echo from their words and patterns of speech so future conversations feel
                  familiar, kind, and recognizably them—not a generic chatbot with their name on it.
                </p>
              </div>
              <div className="card">
                <h3>A private space for the people who need it</h3>
                <p>
                  Loved ones can return anytime to ask questions, listen, and explore stories in a calm, private space
                  designed for late-night &quot;I wish I could ask them&quot; moments.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-muted" aria-labelledby="walkaway-heading">
          <div className="content">
            <h2 id="walkaway-heading" className="section-title">
              What you&apos;ll walk away with
            </h2>
            <p className="lead">
              At the end of an EchoVault project, your family has more than a one-time recording—you have a living space
              you can keep returning to.
            </p>
            <div className="grid grid-3">
              <div className="card">
                <h3>Recorded stories and transcripts</h3>
                <p>
                  Guided audio sessions saved in a private vault, plus readable transcripts you can skim, search, and
                  revisit without scrubbing through hours of video.
                </p>
              </div>
              <div className="card">
                <h3>A conversational Echo space</h3>
                <p>
                  A tailored Echo built from those conversations, so loved ones can ask questions, hear familiar turns
                  of phrase, and explore different parts of their story over time.
                </p>
              </div>
              <div className="card">
                <h3>Simple, private family access</h3>
                <p>
                  A calm, access-controlled space you can share with the people who need it most—without handing your
                  family&apos;s memories to a social network.
                </p>
              </div>
            </div>
            <p className="lead">
              Most families complete their recording sessions over a few weeks. Your Echo and private space are usually
              ready within a short time after the last session, depending on the tier you choose.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="examples-heading">
          <div className="content">
            <h2 id="examples-heading" className="section-title">
              A quick look (examples)
            </h2>
            <p className="lead">
              These are simple illustrations of what families receive—meant to make the output easier to picture, not
              to represent final UI screenshots.
            </p>
            <div className="grid grid-3">
              <div className="card">
                <h3>Transcript snippet</h3>
                <div className="mock-ui" aria-label="Example transcript snippet">
                  <div className="mock-ui-header">
                    <span className="mock-pill">Transcript</span>
                    <span className="mock-meta">Session 1</span>
                  </div>
                  <div className="mock-ui-body">
                    <p>
                      <strong>Interviewer:</strong> Tell me about the place you grew up.
                    </p>
                    <p>
                      <strong>Storyteller:</strong> A little house near the river. I can still remember the sound of
                      the screen door.
                    </p>
                    <p>
                      <strong>Interviewer:</strong> What did it teach you about family?
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3>Echo conversation</h3>
                <div className="mock-chat" aria-label="Example Echo conversation">
                  <div className="mock-bubble mock-bubble-user">What was your first job?</div>
                  <div className="mock-bubble mock-bubble-echo">
                    I was sixteen, washing dishes after school. It wasn&apos;t glamorous, but I loved the people.
                  </div>
                  <div className="mock-bubble mock-bubble-user">What do you want us to remember?</div>
                  <div className="mock-bubble mock-bubble-echo">
                    That you don&apos;t have to be perfect. Be kind, show up, and call your family more than you think
                    you should.
                  </div>
                </div>
              </div>
              <div className="card">
                <h3>Five sample questions</h3>
                <p>
                  These are examples of the kinds of prompts that help people open up. You can always skip, rephrase, or
                  pause.
                </p>
                <ul className="sample-prompts">
                  <li>What do you wish you could tell your younger self?</li>
                  <li>What was your happiest ordinary day?</li>
                  <li>Who shaped you most, and why?</li>
                  <li>What do you want your family to carry forward?</li>
                  <li>What are the stories we should ask you about?</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="story-heading">
          <div className="content">
            <h2 id="story-heading" className="section-title">
              For the moments that photos can&apos;t hold
            </h2>
            <p className="lead">
              We can&apos;t hold on to every moment. But we can hold on to the way someone laughs when they tell a
              favorite story, the exact phrase they use when giving advice, and the small details that make them who
              they are.
            </p>
            <p>
              EchoVault is built to feel less like technology and more like a gentle promise: that the voice and wisdom
              of the people you love will be within reach—on the days when you miss them most, and on the quiet days
              when you just want to hear them talk about nothing in particular.
            </p>
            <p>
              Some families use it to sit with a grandparent before a big move, others to document their own life
              before a new chapter, or to give kids a way to keep learning long after the moment passes.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="voices-heading">
          <div className="content">
            <h2 id="voices-heading" className="section-title">
              Early families, in their words
            </h2>
            <div className="grid">
              <div className="card">
                <p className="quote">
                  “After my dad&apos;s surgery, I kept thinking, &apos;What if we lose his stories?&apos; EchoVault
                  gave us a way to sit down, laugh, cry a little, and know we&apos;d still be able to hear him tell
                  those stories years from now.”
                </p>
                <p className="quote-meta">— Mara, 38, recorded with her father</p>
              </div>
              <div className="card">
                <p className="quote">
                  “We didn&apos;t want something sci-fi. We wanted Mom, the way she actually talks. The Echo isn&apos;t
                  magic—but it feels like sitting down with her on a good day.”
                </p>
                <p className="quote-meta">— Daniel, 44, Legacy Tier</p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-accent" aria-labelledby="why-now-heading">
          <div className="content">
            <h2 id="why-now-heading" className="section-title">
              Why now, not &quot;someday&quot;
            </h2>
            <p className="lead">
              Most families only start recording stories after a diagnosis, a scare, or a loss. EchoVault is built for
              the moment before that.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Memories are clearest in the middle</h3>
                <p>
                  The best stories often live in the ordinary middle of life—not at the very beginning or the very end.
                  Capturing them now means more detail, more color, more &quot;I can hear them saying this&quot; later.
                </p>
              </div>
              <div className="card">
                <h3>Grief is harder when there&apos;s nothing to return to</h3>
                <p>
                  When someone is gone, we replay old voicemails, search for videos, and strain to remember
                  conversations. Having a living Echo gives your family a gentle place to go when the missing feels
                  sharp.
                </p>
              </div>
            </div>
            <div className="section-cta">
              <Link href="/#waitlist" className="button button-primary">
                Join the waitlist
              </Link>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="care-heading">
          <div className="content">
            <h2 id="care-heading" className="section-title">
              Built with care for real families
            </h2>
            <div className="grid grid-3">
              <div className="card">
                <h3>Consent at every step</h3>
                <p>
                  We design the experience so your loved one always knows what&apos;s happening, what&apos;s being
                  recorded, and what they can skip. No dark patterns, no hidden fine print.
                </p>
              </div>
              <div className="card">
                <h3>AI that stays in its lane</h3>
                <p>
                  EchoVault is not about replacing people. It&apos;s about preserving their words, voice, and
                  perspective in a way that feels respectful, grounded, and honest.
                </p>
              </div>
              <div className="card">
                <h3>Private by default</h3>
                <p>
                  Your stories live in a private vault. You decide who has access, and you can pause or delete things
                  anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-muted" aria-labelledby="home-trust-heading">
          <div className="content">
            <TrustBlock headingId="home-trust-heading" />
          </div>
        </section>
        <section className="section" aria-labelledby="founder-heading">
          <div className="content">
            <h2 id="founder-heading" className="section-title">
              Why I built EchoVault
            </h2>
            <p className="lead">
              EchoVault started with a simple, lingering question I couldn&apos;t answer: what would my kids have of me
              if I lost my voice, or if I were gone, besides a few photos and whatever the cloud happened to save?
            </p>
            <p>
              I grew up on Tron, cyberpunk, and the early internet, then spent decades building the real &quot;Grid&quot;
              —networks, data centers, AI systems. When my dad died at 59, years ago now, there was no gentle, structured
              way to keep asking him the small, ordinary questions that only show up over time. For years, my work stayed
              focused on networks and infrastructure, while this question sat in the background and never quite went away.
            </p>
            <p>
              EchoVault is my attempt to do something about that for other families: a warm, careful way to record real
              conversations, turn them into a conversational Echo, and give the people you love a private space to keep
              learning from you. Not immortality. Not sci-fi. Just more of you available, over years, when they need it.
            </p>
            <p>
              <Link href="/blog/echoes-in-the-grid" className="button button-secondary">
                Read the full origin story
              </Link>
            </p>
          </div>
        </section>
        <TierPreview />
        <WaitlistCTA />
      </Layout>
    </>
  );
}
