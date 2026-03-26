import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";

function Resume() {
  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Resume"
          description="Experience, Skills, and Achievements — My Journey in Code and Marketing Strategy"
          current="Resume"
        />

        <section id="resume" className="resume section resume-timeline-section">
          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Summary</h3>
                <div className="timeline-item">
                  <h4>Hassan Shafiq</h4>
                  <p style={{ fontStyle: 'italic', color: 'rgba(250,250,250,0.7)', fontSize: 14 }}>
                    Passionate Full-Stack Web Developer, creating robust and scalable web applications.
                    Skilled in front-end and back-end technologies, with a keen eye for user experience
                    and performance optimization.
                  </p>
                  <ul>
                    <li>Rahim Yar Khan, Pakistan</li>
                    <li>+92 320 5314850</li>
                    <li>shafiqh850@gmail.com</li>
                  </ul>
                </div>

                <h3 className="resume-title" style={{ marginTop: 32 }}>Education</h3>
                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> 2021 – Present
                  </span>
                  <h4>Bachelor of Software Engineering</h4>
                  <h5>Islamia University of Bahawalpur, Punjab, Pakistan</h5>
                  <ul>
                    <li>Currently pursuing BSE — enrolled in final year.</li>
                    <li>Expected graduation mid-2025.</li>
                  </ul>
                </div>
                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> 2018 – 2020
                  </span>
                  <h4>FSc Pre-Engineering</h4>
                  <h5>Punjab College Khanpur Campus, Punjab, Pakistan</h5>
                  <ul>
                    <li>Completed Intermediate with Mathematics from Punjab Group of Colleges.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="resume-title">Experience</h3>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> Jul 2024 – Present
                  </span>
                  <h4>CMS &amp; Full Stack Developer</h4>
                  <h5>Groom Your Life Agency, Karachi (Remote)</h5>
                  <ul>
                    <li>Serving as CMS &amp; Full Stack Developer — building production-grade web apps.</li>
                    <li>Working across WordPress, Shopify, Wix, and custom stacks.</li>
                    <li>Collaborating with industry experts to turn innovative ideas into reality.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> Sep 2023 – Jun 2024
                  </span>
                  <h4>Full Stack Developer</h4>
                  <h5>Codesinc Software House, Rahim Yar Khan</h5>
                  <ul>
                    <li>Led design, development, and implementation of multiple modules, REST APIs &amp; Cloud Services.</li>
                    <li>Delegated tasks to a 7-member design team.</li>
                    <li>Supervised code quality reviews and managed project budgets ($2,000–$25,000).</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> Dec 2021 – Jun 2023
                  </span>
                  <h4>Front-End &amp; WordPress Developer</h4>
                  <h5>Codesinc Software House, Rahim Yar Khan</h5>
                  <ul>
                    <li>Created front-end designs: portfolios, agencies, travel sites &amp; more.</li>
                    <li>Managed up to 5 parallel projects under deadline pressure.</li>
                    <li>Created 4+ design presentations and proposals per month.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Resume;
