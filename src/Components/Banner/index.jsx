import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import ThreeBackground from '../ThreeBackground';

const BADGES = [
  'Web Application',
  'Mobile Application',
  'Web Design',
  'WordPress Development',
  'UI/UX Design',
  'Shopify Development',
];

// Group badges into pairs for the carousel
const BADGE_PAIRS = [];
for (let i = 0; i < BADGES.length; i += 2) {
  BADGE_PAIRS.push(BADGES.slice(i, i + 2));
}

function BadgeCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % BADGE_PAIRS.length);
    }, 1800);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="hero-badges-carousel">
      {BADGE_PAIRS.map((pair, i) => (
        <span
          key={i}
          className={`hero-badge-pair hero-badge-slide ${i === current ? 'active' : ''}`}
        >
          {pair.map((badge) => (
            <span key={badge} className="hero-badge">
              {badge}
            </span>
          ))}
        </span>
      ))}
      <div className="hero-badge-dots">
        {BADGE_PAIRS.map((_, i) => (
          <button
            key={i}
            className={`hero-badge-dot ${i === current ? 'active' : ''}`}
            onClick={() => { setCurrent(i); clearInterval(timerRef.current); }}
          />
        ))}
      </div>
    </div>
  );
}

function Banner() {
  useEffect(() => {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      const typed_strings = selectTyped.getAttribute('data-typed-items').split(',');
      const typed = new Typed('.typed', {
        strings: typed_strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
      });
      return () => { typed.destroy(); };
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Three.js animated background */}
        <ThreeBackground />

        {/* Dark overlay gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(41,41,41,0.95) 0%, rgba(26,26,26,0.88) 50%, rgba(10,50,30,0.65) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* Content — two-column layout */}
        <div
          className="container hero-content"
          data-aos="zoom-out"
          data-aos-delay={100}
          style={{ position: 'relative', zIndex: 3 }}
        >
          <div className="hero-grid">
            {/* ---- Left column: text ---- */}
            <div className="hero-left">
              {/* Glowing orb behind name */}
              <div className="hero-orb" />

              <h2 className="hero-name">Hassan Shafiq</h2>
              <p className="hero-subtitle">
                I'm{" "}
                <span className="typed" data-typed-items="Developer, Freelancer, Marketer">
                  Developer
                </span>
                <span className="typed-cursor typed-cursor--blink" />
              </p>

              {/* Badges: grid on desktop, carousel on mobile */}
              <div className="hero-badges">
                {BADGES.map((badge, i) => (
                  <span key={badge} className="hero-badge" style={{ animationDelay: `${i * 0.3}s` }}>
                    {badge}
                  </span>
                ))}
              </div>

              {/* Mobile-only carousel */}
              <BadgeCarousel />

              {/* Social links */}
              <div className="social-links">
                <a href="https://twitter.com/shafiqh850" title="Twitter/X"><i className="bi bi-twitter-x" /></a>
                <a href="https://www.facebook.com/hassan.shafiq.73744" title="Facebook"><i className="bi bi-facebook" /></a>
                <a href="https://www.instagram.com/hssn_shafiq/" title="Instagram"><i className="bi bi-instagram" /></a>
                <a href="https://www.linkedin.com/in/hassan-shafiq-847665248/" title="LinkedIn"><i className="bi bi-linkedin" /></a>
                <a href="https://api.whatsapp.com/send/?phone=%2B923205314850" title="WhatsApp"><i className="bi bi-whatsapp" /></a>
                <a href="https://github.com/hssn-Shafiq/" title="GitHub"><i className="bi bi-github" /></a>
              </div>

              <div className="hero-cta">
                <a href="/Portfolio" className="btn-hero-primary">View My Work <i className="bi bi-arrow-right-circle" /></a>
                <a href="/Contact" className="btn-hero-outline">Hire Me <i className="bi bi-lightning-charge" /></a>
              </div>
            </div>

            {/* ---- Right column: profile image ---- */}
            <div className="hero-right" data-aos="fade-left" data-aos-delay={300}>
              <div className="hero-image-wrapper">
                {/* Spinning ring */}
                <div className="hero-image-ring" />
                {/* Glow blob */}
                <div className="hero-image-glow" />
                <img
                  src="/images/profile.png"
                  alt="Hassan Shafiq"
                  className="hero-profile-img"
                />
                {/* Floating experience badge */}
                <div className="hero-exp-badge">
                  <span className="hero-exp-number">5+</span>
                  <span className="hero-exp-label">Years Exp.</span>
                </div>
                {/* Floating projects badge */}
                <div className="hero-proj-badge">
                  <i className="bi bi-code-slash" />
                  <span>20+ Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #292929)',
          zIndex: 4,
          pointerEvents: 'none',
        }} />
      </section>
    </>
  );
}

export default Banner;
