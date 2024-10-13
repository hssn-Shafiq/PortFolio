import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";

function Services() {
  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Services"
          description="Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem."
          current="Services"
        />
        <>
          {/* Services Section */}
          <section id="services" className="services section">
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
                    <a href="service-details.html" className="stretched-link">
                      <h3>Web Development</h3>
                    </a>
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
                    <a href="service-details.html" className="stretched-link">
                      <h3>UI/UX Design</h3>
                    </a>
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
                    <a href="service-details.html" className="stretched-link">
                      <h3>WordPress Websites</h3>
                    </a>
                    <p>
                      Expertly crafted WordPress websites with custom themes and
                      plugins for businesses, blogs, and e-commerce.
                    </p>
                  </div>
                </div>
                {/* Shopify Store Design */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-shop" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Shopify Store Design</h3>
                    </a>
                    <p>
                      Build and optimize Shopify stores to help you drive sales
                      and create a seamless shopping experience for your
                      customers.
                    </p>
                  </div>
                </div>
                {/* WebFlow Development */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-window" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>WebFlow Development</h3>
                    </a>
                    <p>
                      Design and develop stunning WebFlow websites that combine
                      design flexibility with powerful performance.
                    </p>
                  </div>
                </div>
                {/* Digital Marketing */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={600}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-bar-chart-line" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Digital Marketing</h3>
                    </a>
                    <p>
                      Increase your online presence with our digital marketing
                      services, including SEO, PPC, and social media management.
                    </p>
                  </div>
                </div>
                {/* API Development */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={700}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-link-45deg" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>API Development</h3>
                    </a>
                    <p>
                      Build scalable APIs to integrate various platforms,
                      ensuring seamless data exchange across applications.
                    </p>
                  </div>
                </div>
                {/* University Projects */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={800}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-book" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>University Projects</h3>
                    </a>
                    <p>
                      Assisting students with well-structured and high-quality
                      academic projects, tailored to meet university
                      requirements.
                    </p>
                  </div>
                </div>
                {/* Programming Tasks */}
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={900}
                >
                  <div className="service-item position-relative">
                    <div className="icon">
                      <i className="bi bi-code" />
                    </div>
                    <a href="service-details.html" className="stretched-link">
                      <h3>Programming Tasks</h3>
                    </a>
                    <p>
                      Solving complex programming tasks efficiently in various
                      languages, from Python to JavaScript, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* /Services Section */}
        </>
      </main>
      <Footer />
    </>
  );
}

export default Services;
