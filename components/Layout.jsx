import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <div className="content header-inner">
          <div className="logo-group" aria-label="EchoVault">
            <div className="logo-mark" aria-hidden="true">
              <Image src="/echovault-mark.svg" alt="" width={24} height={24} priority />
            </div>
            <div>
              <div className="logo">EchoVault</div>
              <span className="logo-tagline">Digital legacy, made warm.</span>
            </div>
          </div>
          <nav className="nav" aria-label="Primary">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/blog">Blog</Link>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com" className="header-talk-link">
              Talk with a human
            </a>
            <Link href="/#waitlist" className="button button-primary header-cta-button">
              Join the waitlist
            </Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="content footer-inner footer-grid">
          <div className="footer-column">
            <div className="footer-brand">EchoVault</div>
            <p className="footer-note">
              Stories, voices, and wisdom that stay close—preserved with care, consent, and clarity.
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-nav">
              <li>
                <Link href="/legal#terms">Terms</Link>
              </li>
              <li>
                <Link href="/legal#privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/trust">Trust & Safety</Link>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
