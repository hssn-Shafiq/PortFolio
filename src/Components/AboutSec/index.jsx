function AboutSec() {
  return (
    <>
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="about-profile-wrapper">
                <div className="about-glow-ring" />
                <img src="/images/profile.png" className="about-profile-img img-fluid" alt="Hassan Shafiq" />
              </div>
            </div>
            <div className="col-lg-8 content">
              <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 8 }}>
                Web Designer &amp; <span style={{ color: 'var(--accent-color)' }}>Full Stack Developer</span>
              </h2>
              <p className="fst-italic py-3" style={{ color: 'rgba(250,250,250,0.7)', lineHeight: '1.8' }}>
                I am Hassan Shafiq, a full-stack developer and designer with
                experience building dynamic, user-friendly, and eye-catching
                websites. My mission is to bring innovative ideas to life through code and creativity.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>31 Jan 2002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>hassanshafiq.vercel.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                      <span>+92 320 5314850</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                      <span>Rahim Yar Khan, Pakistan</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                      <span>23</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                      <span>Bachelors of Software Eng.</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                      <span>shafiqh850@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span style={{ color: 'var(--accent-color)' }}>Available ✓</span>
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href="mailto:shafiqh850@gmail.com"
                className="about-download-btn"
              >
                <i className="bi bi-envelope-check" /> Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSec;