import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
import { useI18n } from "./I18nProvider";
import {
  getLocaleConfig,
  isLocalizedPath,
  localizeHashLink,
  localizePath,
  stripLocaleFromPath,
  SUPPORTED_LOCALES,
  swapLocaleInPath
} from "@config/i18n";

export default function Layout({ children }) {
  const router = useRouter();
  const { locale, t } = useI18n();

  const localized = (path) => localizePath(locale, path);

  const basePath = stripLocaleFromPath(router.asPath).split(/[?#]/)[0] || "/";
  const canTranslateThisRoute = isLocalizedPath(basePath);

  const languageLinks = SUPPORTED_LOCALES.map((targetLocale) => {
    const href = canTranslateThisRoute
      ? swapLocaleInPath(router.asPath, targetLocale)
      : localizePath(targetLocale, "/");
    return {
      locale: targetLocale,
      label: getLocaleConfig(targetLocale).label,
      href,
      active: targetLocale === locale
    };
  });

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
              <span className="logo-tagline">{t.layout.logoTagline}</span>
            </div>
          </div>
          <nav className="nav" aria-label="Primary">
            <Link href={localized("/")}>{t.layout.nav.home}</Link>
            <Link href={localized("/pricing")}>{t.layout.nav.pricing}</Link>
            <Link href={localized("/how-it-works")}>{t.layout.nav.howItWorks}</Link>
            <Link href="/blog">{t.layout.nav.blog}</Link>
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <div className="lang-switch" aria-label="Language">
              {languageLinks.map((link) => (
                <Link
                  key={link.locale}
                  href={link.href}
                  className={`lang-link ${link.active ? "is-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com" className="header-talk-link">
              {t.layout.actions.talkHuman}
            </a>
            <Link
              href={localizeHashLink(locale, "#waitlist")}
              className="button button-primary header-cta-button"
            >
              {t.layout.actions.joinWaitlist}
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
              {t.layout.footer.note}
            </p>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">{t.layout.footer.navigate}</h4>
            <ul className="footer-nav">
              <li>
                <Link href={localized("/")}>{t.layout.nav.home}</Link>
              </li>
              <li>
                <Link href={localized("/how-it-works")}>{t.layout.nav.howItWorks}</Link>
              </li>
              <li>
                <Link href={localized("/pricing")}>{t.layout.nav.pricing}</Link>
              </li>
              <li>
                <Link href="/blog">{t.layout.nav.blog}</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-heading">{t.layout.footer.legal}</h4>
            <ul className="footer-nav">
              <li>
                <Link href={`${localized("/legal")}#terms`}>{t.layout.footer.terms}</Link>
              </li>
              <li>
                <Link href={`${localized("/legal")}#privacy`}>{t.layout.footer.privacy}</Link>
              </li>
              <li>
                <Link href={localized("/trust")}>{t.layout.footer.trust}</Link>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@echovault-ai.com">{t.layout.footer.contact}</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
