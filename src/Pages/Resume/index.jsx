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
          description="Experience, Skills, and Achievements.! My Journey in Code and Marketing Strategy"
          current="Resume"
        />

        <>
          {/* Resume Section */}
          <section id="resume" className="resume section">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>Hassan Shafiq</h4>
                    <p>
                      <em>
                        Passionate Full-Stack Web Developer, creating robust and
                        scalable web applications. I am skilled in front-end and
                        back-end technologies, with a keen eye for user
                        experience and performance optimization.
                      </em>
                    </p>
                    <ul>
                      <li>Wireless Pull,RYK, Pakistan</li>
                      <li>(92) 320-5314850</li>
                      <li>shafiqh850@gmail.com</li>
                    </ul>
                  </div>
                  {/* Edn Resume Item */}
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Bachelor of Software Engineering </h4>
                    <h5>2021 - cont..</h5>
                    <p>
                      <em>
                        Islamia University of Bahawalpur, Punjab, Pakistan
                      </em>
                    </p>
                    <p>
                      Currently I am persuading Bachelors Degree in Software
                      Engineering. I am enrolled in 7th Semester and hope to be
                      completed my Bachelors in the middle of 2025.{" "}
                    </p>
                  </div>
                  {/* Edn Resume Item */}
                  <div className="resume-item">
                    <h4>FSc Pre-Engineering</h4>
                    <h5>2018 - 2020</h5>
                    <p>
                      <em>Punjab College Khanpur Campus, Punjab, Pakistan</em>
                    </p>
                    <p>
                      I haved completed my Intermediate with Maths from Punjab
                      Group of College.{" "}
                    </p>
                  </div>
                  {/* Edn Resume Item */}
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <h3 className="resume-title">Mern Stack Developer</h3>
                  <div className="resume-item">
                    <h4>Senior Mern Stack Developer</h4>
                    <h5>2022 - 2024</h5>
                    <p>
                      <em>
                        Codesinc Software House, Rahim Yar Khan, Pakistan&lt;
                      </em>
                    </p>
                    <ul>
                      <li>
                        Lead in the design, development, and implementation of
                        the different modules, Rest APIs, Cloud Services, ..
                      </li>
                      <li>
                        Delegate tasks to the 7 members of the design team and
                        provide counsel on all aspects of the project.{" "}
                      </li>
                      <li>
                        Supervise the assessment of all written code in order to
                        ensure quality and accuracy of the code
                      </li>
                      <li>
                        Oversee the efficient use of production project budgets
                        ranging from $2,000 - $25,000
                      </li>
                    </ul>
                  </div>
                  {/* Edn Resume Item */}
                  <div className="resume-item">
                    <h4>Front-End Developer &amp; WordPress Developer</h4>
                    <h5>2021 - 2022</h5>
                    <p>
                      <em>Codesinc Software House, Rahim Yar Khan, Pakistan</em>
                    </p>
                    <ul>
                      <li>
                        Created front-end designs of various websites
                        (Portfolio, Marketing Agency, Travel Agencies, &amp;
                        many more..).
                      </li>
                      <li>
                        Managed up to 5 projects or tasks at a given time while
                        under pressure
                      </li>
                      <li>
                        Recommended and consulted with clients on the most
                        appropriate front-end developer
                      </li>
                      <li>
                        Created 4+ design presentations and proposals a month
                        for clients and account managers
                      </li>
                    </ul>
                  </div>
                  {/* Edn Resume Item */}
                </div>
              </div>
            </div>
          </section>
          {/* /Resume Section */}
        </>
      </main>

      <Footer/>
    </>
  );
}

export default Resume;
