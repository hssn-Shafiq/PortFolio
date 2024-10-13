import { useEffect } from "react";
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PreLoader from "../../Components/PreLoader";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        {/* Services Section */}
        <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <div>
            {" "}
            <span className="description-title">How I Can Help You?</span>
          </div>
        </div>
          <div className="container">
            <div className="row gy-4">
              {/* Web Development */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-code-slash" />
                  </div>
                  <Link to="javascript:void(0)" className="stretched-link">
                    <h3>Web Development</h3>
                  </Link>
                  <p>
                    We create responsive, high-performance websites using the
                    latest technologies tailored to your business needs.
                  </p>
                </div>
              </div>
              {/* UI/UX Design */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-palette" />
                  </div>
                  <Link to="javascript:void(0)" className="stretched-link">
                    <h3>UI/UX Design</h3>
                  </Link>
                  <p>
                    Delivering intuitive and engaging designs that provide
                    seamless user experiences for your digital platforms.
                  </p>
                </div>
              </div>
              {/* WordPress Websites */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-wordpress" />
                  </div>
                  <Link to="javascript:void(0)" className="stretched-link">
                    <h3>WordPress Websites</h3>
                  </Link>
                  <p>
                    Expertly crafted WordPress websites with custom themes and
                    plugins for businesses, blogs, and e-commerce.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 text-center">
               <a href="/Services"> <button className="btn btn-primary custom_btn">View All</button>
               </a>
              </div>
            </div>
          </div>
        </section>
        {/* /Services Section */}
      </main>
      <Footer />
    </>
  );
}

export default Home;
