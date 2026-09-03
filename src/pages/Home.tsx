import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { GooglePlayButton } from '../components/GooglePlayButton';

export function Home() {
  return (
    <div className="company-home">
      <section className="company-hero" id="top">
        <div className="company-hero-copy">
          <p className="company-eyebrow">GharBanoo Technologies</p>
          <h1>Local life,<br /><em>made easier.</em></h1>
          <p className="company-lead">GharBanoo is building a more dependable digital layer for how people discover, connect with and manage everyday local services.</p>
          <div className="company-actions"><GooglePlayButton /><a href="#company" className="company-text-link">Explore the company <ArrowDown size={15} /></a></div>
        </div>
        <div className="company-hero-art" role="img" aria-label="Abstract illustration representing connected local communities">
          <div className="company-sun" /><div className="company-terrain company-terrain-back" /><div className="company-terrain company-terrain-front" />
          <div className="company-house company-house-one"><i /><b /></div><div className="company-house company-house-two"><i /><b /></div><div className="company-house company-house-three"><i /><b /></div>
          <div className="company-signal"><span /><span /><span /></div><p>Designed for the everyday</p>
        </div>
      </section>

      <section className="company-intro company-section" id="company"><p className="company-eyebrow">Our company</p><div className="company-intro-grid"><h2>Practical technology for a fragmented, local economy.</h2><div><p>Everyday services are essential, yet finding the right local business can still be uncertain and time-consuming. GharBanoo exists to make those moments clearer, more discoverable and easier to act on.</p><p>We are building a focused consumer product, starting where local trust, visibility and simple digital tools can make the greatest difference.</p></div></div></section>

      <section className="company-product company-section" id="product"><div className="company-section-heading"><p className="company-eyebrow">The product</p><h2>Built for real-world decisions.</h2></div><div className="company-product-grid"><article className="company-card company-card-dark"><span>01</span><h3>A simpler path to trusted local choices.</h3><p>Find relevant services and local businesses through one clear mobile experience.</p><div className="company-mini-map"><i /></div></article><article className="company-card company-card-light"><span>02</span><h3>Designed around confidence and clarity.</h3><p>Public profiles, helpful signals and a focused interface help people move from search to action.</p><div className="company-mini-list"><i /><i /><i /></div></article><article className="company-card company-card-accent"><span>03</span><h3>Tools that help local businesses participate digitally.</h3><p>A product foundation built to support stronger visibility and simpler everyday operations.</p><div className="company-mini-orbit"><i /><b /></div></article></div></section>

      <section className="company-vision company-section" id="vision"><div className="company-vision-top"><p className="company-eyebrow">Our point of view</p><p>The next wave of digital infrastructure will feel less like infrastructure—and more like everyday life working better.</p></div><div className="company-principles"><article><span>01</span><h3>Useful by default</h3><p>We prioritise problems that matter in a person&apos;s daily life.</p></article><article><span>02</span><h3>Trust is a product</h3><p>Clear information and accountable participation are part of the experience.</p></article><article><span>03</span><h3>Built to compound</h3><p>We focus on an enduring foundation, not a collection of disconnected features.</p></article></div></section>

      <section className="company-download company-section"><div><p className="company-eyebrow">For customers</p><h2>The marketplace lives in the app.</h2></div><div><p>Looking for a local service or business? GharBanoo is designed for your phone, where discovery can become action.</p><GooglePlayButton variant="light" /></div></section>
      <section className="company-contact company-section" id="contact"><p className="company-eyebrow">Start a conversation</p><h2>Interested in the company<br />we&apos;re building?</h2><a href="mailto:gharbanoo@gmail.com">gharbanoo@gmail.com <ArrowUpRight size={22} /></a></section>
    </div>
  );
}
