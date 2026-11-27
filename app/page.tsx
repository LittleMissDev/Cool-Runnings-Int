"use client";

import { useEffect, useState } from "react";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Products & Services", "#services"],
  ["International", "#international"],
  ["Contact Us", "#contact"],
];

const capabilities = [
  {
    number: "01",
    title: "Built around your operation",
    description:
      "We plan refrigeration and cold storage around your space, products, and day-to-day workflow.",
  },
  {
    number: "02",
    title: "Commercial expertise",
    description:
      "From specialist equipment to complete installations, we support the demands of commercial environments.",
  },
  {
    number: "03",
    title: "Efficiency that lasts",
    description:
      "Thoughtful system design helps protect product quality while making dependable operation a priority.",
  },
  {
    number: "04",
    title: "Support you can count on",
    description:
      "Our team helps keep your cold storage performing with practical service and ongoing support.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      const aboutSection = document.getElementById("about");
      const header = document.querySelector(".topbar");
      const headerBottom = header?.getBoundingClientRect().height ?? 76;

      setScrolled(aboutSection !== null && aboutSection.getBoundingClientRect().top <= headerBottom);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <main className="site-page">
      <header className={`topbar ${scrolled ? "is-scrolled" : ""}`}>
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
              onClick={() => {
                setMenuOpen(false);
                if (index === 0) setScrolled(false);
              }}
            >
              {label}
            </a>
          ))}
          <a className="quote-button" href="#contact" onClick={() => setMenuOpen(false)}>
            Free Quote
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
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
          <div className="trusted-content">
            <p className="trusted-label">Trusted by companies like</p>
          </div>
          <div className="marquee-band">
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
          </div>
          <ul className="visually-hidden">
            <li>S&amp;R Membership Shopping</li>
            <li>XSyn Corporation</li>
            <li>PriceSmart Inc.</li>
          </ul>
        </section>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="about-inner">
          <div className="about-heading">
            <div>
              <p className="about-eyebrow">About Cool Runnings International</p>
              <h2 id="about-title">Keeping your business at the right temperature.</h2>
            </div>
            <p className="about-intro">
              We deliver commercial refrigeration and industrial cold storage solutions that
              help businesses protect their products and keep operations running smoothly.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <span className="capability-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
