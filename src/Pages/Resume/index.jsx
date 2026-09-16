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
                    Full Stack Developer (MERN) with 2+ years of experience building and deploying web applications across SaaS, eCommerce, CRM, CMS,
                    marketplace, and automation platforms. Experienced in frontend architecture, backend API development, database optimization, cloud
                    deployment, payment integrations, and workflow automation. Proven ability to deliver production-ready solutions in startup, agency,
                    freelance, and remote environments
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
                    <i className="bi bi-calendar3" /> 2021 – 2025
                  </span>
                  <h4>Bachelor of Software Engineering</h4>
                  <h5>Islamia University of Bahawalpur, Punjab, Pakistan</h5>
                  <ul>
                    <li>Graduated in 2025.</li>
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
                    <i className="bi bi-calendar3" /> Jan 2024 – Present
                  </span>
                  <h4>CMS &amp; Full Stack Developer</h4>
                  <h5>Groom Your Life Agency, Karachi (Remote)</h5>
                  <ul>
                    <li>Delivered 12+ web applications and eCommerce solutions for clients across multiple industries, managing the complete development lifecycle from requirement gathering to production deployment.</li>
                    <li>Developed responsive frontend applications using React.js, Next.js, JavaScript, and Tailwind CSS.</li>
                    <li>Built and integrated RESTful APIs using Node.js and Express.js, supporting authentication, payment gateways, and third-party services</li>
                    <li>Managed application deployment, domain configuration, and CI/CD pipelines on DigitalOcean and cloud hosting platforms</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> Aug 2025 – Apr 2026
                  </span>
                  <h4>Full Stack Developer</h4>
                  <h5>Fogsly Pvt Limited, Islamabad (Remote)</h5>
                  <ul>
                    <li>Architected and developed core modules of the Fogsly ecosystem, a multi-service platform serving freelancers and digital service
                      providers.</li>
                    <li>Built a reward-based freelance marketplace with job posting, bid management, and digital services features, increasing platform
                      engagement by 40%.</li>
                    <li>Designed and integrated secure REST APIs with JWT authentication, role-based access control, and optimized MongoDB schemas for
                      high-throughput data.</li>
                    <li>Managed cloud deployment on Firebase Hosting, ensuring 99.9% production uptime.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> May 2024 – Dec 2024
                  </span>
                  <h4>Full Stack Developer</h4>
                  <h5>Beconseil, Switzerland </h5>
                  <ul>
                    <li>Led end-to-end development of 3+ eCommerce websites, managing everything from UI design to backend API integration and go-live deployment.</li>
                    <li>Integrated multiple payment gateways (Stripe, PayPal) with secure checkout flows, reducing cart abandonment through streamlined UX.</li>
                    <li>Developed responsive, cross-device compatible UIs using React.js and Tailwind CSS, achieving consistent performance across all major browsers.</li>
                  </ul>
                </div>

                <div className="timeline-item">
                  <span className="timeline-date-badge">
                    <i className="bi bi-calendar3" /> Jan 2023 – May 2024
                  </span>
                  <h4>Front-End &amp; Full Stack Developer</h4>
                  <h5>Codesinc Software House, Rahim Yar Khan</h5>
                  <ul>
                    <li>Joined as a Frontend Intern and progressed rapidly through three promotions to Full Stack Developer within 1 years</li>
                    <li>Built interactive frontend interfaces using React.js and Angular.js, and integrated REST APIs for dynamic data rendering</li>
                    <li>Contributed to full-stack features across team-based projects, including user authentication, dashboard modules, and CMS components.</li>
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
