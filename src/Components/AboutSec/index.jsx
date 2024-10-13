function AboutSec() {
    return ( <>
    <>
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 justify-content-center">
        <div className="col-lg-4">
          <img src="/images/profile.png" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 content">
          <h2>Web Designer &amp; Mern Stack Developer.</h2>
          <p className="fst-italic py-3">
            I am Hassan Shafiq, a full-stack developer and designer with
            experience building dynamic, user-friendly, and eye-catching
            websites.
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
                  <strong>Website:</strong> <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                  <span>+92 320 5314580</span>
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
                  <span>22</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                  <span>Bachelors</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                  <span>shafiqh@gmail.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />{" "}
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="py-3">
            It is essentials to keep up with the latest technology in the ever
            changing field of web development. I keep up with market trends and
            apply innovative techniques and technologies to your projects.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
</>

    </> );
}

export default AboutSec;