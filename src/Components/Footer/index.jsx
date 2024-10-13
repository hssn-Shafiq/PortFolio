function Footer() {
  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <h3 className="sitename">Hassan Portfolio</h3>
          <p>
          Full Stack Developer & Digital Marketer – Bridging Creativity and Code.
          </p>
          <div className="social-links d-flex justify-content-center">
            <a href="https://twitter.com/shafiqh850">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="https://www.facebook.com/hassan.shafiq.73744">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/hssn_shafiq/">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-shafiq-847665248/">
              <i className="bi bi-linkedin" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B923205314850">
              <i className="bi bi-whatsapp" />
            </a>
            <a href="https://github.com/hssn-Shafiq/">
              <i className="bi bi-github" />
            </a>
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Hassan Portfolio</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
