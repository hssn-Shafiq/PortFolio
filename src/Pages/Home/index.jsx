import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";

const HOME_SERVICES = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    desc: "We create responsive, high-performance websites using the latest technologies tailored to your business needs.",
    delay: 100,
  },
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    desc: "Delivering intuitive and engaging designs that provide seamless user experiences for your digital platforms.",
    delay: 200,
  },
  {
    icon: "bi-wordpress",
    title: "CMS Development",
    desc: "Expertly crafted CMS-based applications — WordPress, Shopify, Wix, and more.",
    delay: 300,
  },
];

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
              <span>How I Can</span> <span className="description-title">Help You?</span>
            </div>
          </div>
          <div className="container">
            <div className="row gy-4">
              {HOME_SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={svc.delay}
                >
                  <div className="service-card-glass">
                    <div className="service-card-icon-wrap">
                      <i className={`bi ${svc.icon}`} />
                    </div>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                  </div>
                </div>
              ))}
              <div className="col-lg-12 text-center" style={{ marginTop: 8 }}>
                <a href="/Services">
                  <button className="btn btn-primary custom_btn">
                    View All Services <i className="bi bi-arrow-right-circle ms-1" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
