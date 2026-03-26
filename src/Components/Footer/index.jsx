function Footer() {
  return (
    <>
      <footer id="footer" className="footer dark-background footer-enhanced">
        {/* Top glow border */}
        <div className="footer-glow-border" />

        <div className="container">
          {/* Logo */}
          <div className="footer-logo">
            <span className="logo-accent">&lt;</span>Hassan<span className="logo-accent">/&gt;</span>
          </div>

          <p className="footer-tagline">
            Full Stack Developer &amp; Digital Marketer — Bridging Creativity and Code.
          </p>

          <div className="social-links d-flex justify-content-center">
            <a href="https://twitter.com/shafiqh850" title="Twitter/X"><i className="bi bi-twitter-x" /></a>
            <a href="https://www.facebook.com/hassan.shafiq.73744" title="Facebook"><i className="bi bi-facebook" /></a>
            <a href="https://www.instagram.com/hssn_shafiq/" title="Instagram"><i className="bi bi-instagram" /></a>
            <a href="https://www.linkedin.com/in/hassan-shafiq-847665248/" title="LinkedIn"><i className="bi bi-linkedin" /></a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923205314850" title="WhatsApp"><i className="bi bi-whatsapp" /></a>
            <a href="https://github.com/hssn-Shafiq/" title="GitHub"><i className="bi bi-github" /></a>
          </div>

          <div className="footer-nav d-flex justify-content-center flex-wrap gap-3 my-3">
            {['Home', 'About', 'Portfolio', 'Services', 'Resume', 'Contact'].map(page => (
              <a key={page} href={page === 'Home' ? '/' : `/${page}`} className="footer-nav-link">
                {page}
              </a>
            ))}
          </div>

          <div className="copyright">
            <span>© 2025</span>{" "}
            <strong className="px-1 sitename">Hassan Shafiq</strong>{" "}
            <span>— All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
