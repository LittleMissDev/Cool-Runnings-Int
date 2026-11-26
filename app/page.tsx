"use client";

import { useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products & Services", "#services"],
  ["International", "#international"],
  ["Contact Us", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home" className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/city-hero.jpg"
      >
        <source src="/CRI%20embed.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Cool Runnings International home">
          <span>Cool</span>
          <span>Runnings</span>
          <span>International</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Main navigation">
          {navItems.map(([label, href], index) => (
            <a
              className={index === 0 ? "nav-link active" : "nav-link"}
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="quote-button" href="#contact" onClick={() => setMenuOpen(false)}>
            Free Quote
          </a>
        </nav>
      </header>

      <section className="hero-content" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-eyebrow">Commercial refrigeration · Industrial cold storage</p>
          <h1 id="hero-title">Cold storage solutions that keep business moving.</h1>
          <p className="hero-description">
            Reliable refrigeration systems, expert installation, and ongoing support for
            businesses that can&apos;t afford to lose their cool.
          </p>
          <a className="hero-cta" href="#contact">
            Get a free quote <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="hero-bottom" aria-label="Trusted companies">
        <p className="trusted-label">Trusted by companies like</p>
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div className="marquee-group" key={copy}>
                <span>S&amp;R Membership Shopping</span>
                <span>XSyn Corporation</span>
                <span>PriceSmart Inc.</span>
              </div>
            ))}
          </div>
        </div>
        <ul className="visually-hidden">
          <li>S&amp;R Membership Shopping</li>
          <li>XSyn Corporation</li>
          <li>PriceSmart Inc.</li>
        </ul>
      </section>
    </main>
  );
}
