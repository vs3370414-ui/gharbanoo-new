import { useEffect, useRef, useState } from 'react';
import {
  BadgeCheck,
  Gift,
  HandCoins,
  IndianRupee,
  ListOrdered,
  LogIn,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Scale,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { GooglePlayButton, PlayLogo } from './components/GooglePlayButton';
import { LangProvider, useLang } from './i18n';
import { SUPPORT_EMAIL, WHATSAPP_DISPLAY, playStoreUrl, whatsappUrl } from './links';

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}

function Page() {
  const heroCta = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  // The phone install bar appears once the hero's own button has scrolled away.
  useEffect(() => {
    const target = heroCta.current;
    if (!target || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="top">
        <Hero ctaRef={heroCta} />
        <Worries />
        <Guide />
        <HowItWorks />
        <Screens />
        <Trust />
        <Faq />
        <ForPros />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
      <StickyInstall visible={showSticky} />
    </>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="GharBanoo home">
      <img src="/images/app-icon-96.png" width="36" height="36" alt="" />
      <span>GharBanoo</span>
    </a>
  );
}

function Header() {
  const { t, toggle } = useLang();
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Brand />
        <nav className="header-nav" aria-label="Main">
          <a href="#how">{t.navHow}</a>
          <a href="#guide">{t.navGuide}</a>
          <a href="#faq">{t.navFaq}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="lang-btn" onClick={toggle} aria-label={t.langSwitchLabel}>
            {t.langSwitch}
          </button>
          <a className="btn btn-primary btn-sm header-cta" href={playStoreUrl('header')} target="_blank" rel="noopener noreferrer">
            {t.getApp}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ ctaRef }: { ctaRef: React.RefObject<HTMLDivElement | null> }) {
  const { t } = useLang();
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lead">{t.heroLead}</p>
          <div className="hero-cta" ref={ctaRef}>
            <GooglePlayButton placement="hero" />
          </div>
          <ul className="hero-meta">
            {t.heroMeta.map(item => (
              <li key={item}>
                <BadgeCheck size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-visual">
          <Mockup {...mockups[0]} alt={t.shots[0]} eager />
        </div>
      </div>
    </section>
  );
}

// App mockups already include the phone frame; sizes are the files' real pixels.
const mockups = [
  { src: '/images/mockup-home.webp', w: 716, h: 1456 },
  { src: '/images/mockup-guide.webp', w: 715, h: 1451 },
  { src: '/images/mockup-browse.webp', w: 742, h: 1472 },
  { src: '/images/mockup-shops.webp', w: 724, h: 1338 },
  { src: '/images/mockup-compare.webp', w: 715, h: 1466 },
];

function Mockup({ src, w, h, alt, eager = false }: { src: string; w: number; h: number; alt: string; eager?: boolean }) {
  return (
    <div className="mockup">
      <img src={src} alt={alt} width={w} height={h} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    </div>
  );
}

function SectionHead({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

const worryIcons = [ShieldCheck, ListOrdered, IndianRupee];

function Worries() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead eyebrow={t.worryEyebrow} title={t.worryTitle} />
        <div className="grid-3">
          {t.worries.map((worry, i) => {
            const Icon = worryIcons[i];
            return (
              <article className="card worry" key={worry.q}>
                <span className="icon-chip">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{worry.q}</h3>
                <p>{worry.a}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  const { t } = useLang();
  return (
    <section className="section section-tint" id="guide">
      <div className="wrap">
        <SectionHead eyebrow={t.guideEyebrow} title={t.guideTitle} lead={t.guideLead} />
        <ol className="guide-list">
          {t.guideSteps.map(([title, desc], i) => (
            <li key={title}>
              <span className="guide-num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <span className="guide-step">
                  {t.guideStep} {i + 1}
                </span>
                <strong>{title}</strong>
                <p>{desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="center">
          <a className="btn btn-primary" href={playStoreUrl('guide')} target="_blank" rel="noopener noreferrer">
            <PlayLogo size={20} />
            {t.guideCta}
          </a>
        </div>
      </div>
    </section>
  );
}

const howIcons = [Smartphone, MapPin, Scale, PhoneCall];

function HowItWorks() {
  const { t } = useLang();
  return (
    <section className="section" id="how">
      <div className="wrap">
        <SectionHead eyebrow={t.howEyebrow} title={t.howTitle} />
        <ol className="how-list">
          {t.howSteps.map(([title, desc], i) => {
            const Icon = howIcons[i];
            return (
              <li className="card how" key={title}>
                <span className="how-num">{i + 1}</span>
                <Icon size={26} className="how-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Screens() {
  const { t } = useLang();
  return (
    <section className="section section-tint">
      <div className="wrap">
        <SectionHead title={t.shotsTitle} />
        <div className="screens">
          {mockups.map((mockup, i) => (
            <figure key={mockup.src}>
              <Mockup {...mockup} alt={t.shots[i]} />
              <figcaption>{t.shots[i]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const trustIcons = [Gift, HandCoins, BadgeCheck, LogIn];

function Trust() {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead title={t.trustTitle} />
        <div className="grid-4">
          {t.trust.map(([title, desc], i) => {
            const Icon = trustIcons[i];
            return (
              <article className="card trust" key={title}>
                <span className="icon-chip icon-chip-yellow">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useLang();
  return (
    <section className="section section-tint" id="faq">
      <div className="wrap narrow">
        <SectionHead title={t.faqTitle} />
        <div className="faq">
          {t.faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForPros() {
  const { t } = useLang();
  return (
    <section className="section section-slim">
      <div className="wrap">
        <div className="pro-strip">
          <div>
            <h2>{t.proTitle}</h2>
            <p>{t.proText}</p>
          </div>
          <a className="btn btn-outline" href={playStoreUrl('providers')} target="_blank" rel="noopener noreferrer">
            {t.proCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useLang();
  return (
    <section className="final-cta">
      <div className="wrap final-inner">
        <img src="/images/app-icon-192.png" width="88" height="88" alt="" loading="lazy" />
        <h2>{t.finalTitle}</h2>
        <p>{t.finalText}</p>
        <GooglePlayButton placement="final" variant="light" />
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useLang();
  return (
    <section className="section" id="contact">
      <div className="wrap narrow center">
        <SectionHead title={t.contactTitle} lead={t.contactText} />
        <div className="contact-actions">
          <a className="btn btn-whatsapp" href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} aria-hidden="true" />
            {t.whatsapp}
          </a>
          <a className="btn btn-outline" href={`mailto:${SUPPORT_EMAIL}`}>
            <Mail size={20} aria-hidden="true" />
            {t.email}
          </a>
        </div>
        <p className="contact-details">
          {WHATSAPP_DISPLAY} · {SUPPORT_EMAIL}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <Brand />
          <p className="footer-tagline">{t.footerTagline}</p>
        </div>
        <nav className="footer-links" aria-label="Legal">
          <a href="/privacy/">{t.privacy}</a>
          <a href="/terms/">{t.terms}</a>
          <a href="/delete-account/">{t.deleteAccount}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>{t.footerCompany}</p>
        <p>
          © {new Date().getFullYear()} GharBanoo. {t.rights}
        </p>
      </div>
    </footer>
  );
}

function StickyInstall({ visible }: { visible: boolean }) {
  const { t } = useLang();
  return (
    <div className={`sticky-install${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <img src="/images/app-icon-96.png" width="40" height="40" alt="" />
      <div>
        <strong>{t.stickyTitle}</strong>
        <span>{t.stickySub}</span>
      </div>
      <a className="btn btn-primary btn-sm" href={playStoreUrl('sticky')} target="_blank" rel="noopener noreferrer" tabIndex={visible ? 0 : -1}>
        {t.stickyCta}
      </a>
    </div>
  );
}
