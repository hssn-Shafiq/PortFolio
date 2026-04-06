import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";

const SERVICES = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    desc: "We create responsive, high-performance websites using the latest technologies tailored to your business needs.",
  },
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    desc: "Delivering intuitive and engaging designs that provide seamless user experiences for your digital platforms.",
  },
  {
    icon: "bi-phone",
    title: "Mobile Application Development",
    desc: "Build sleek, high-performance Android & cross-platform mobile apps using React Native, Flutter, and Kotlin — from ecommerce to delivery and travel apps.",
  },
  {
    icon: "bi-wordpress",
    title: "CMS Development",
    desc: "Expertly crafted CMS-based applications using WordPress, Wix, and other leading platforms.",
  },
  {
    icon: "bi-shop",
    title: "E-commerce Solutions",
    desc: "Build and optimize Shopify stores to drive sales and create a seamless shopping experience.",
  },
  {
    icon: "bi-window",
    title: "WebFlow Development",
    desc: "Design and develop stunning WebFlow websites that combine design flexibility with powerful performance.",
  },
  {
    icon: "bi-bar-chart-line",
    title: "Digital Marketing",
    desc: "Increase your online presence with SEO, PPC, social media management and data-driven campaigns.",
  },
  {
    icon: "bi-link-45deg",
    title: "API Development",
    desc: "Build scalable APIs to integrate various platforms, ensuring seamless data exchange across applications.",
  },
  
  {
    icon: "bi-book",
    title: "University Projects",
    desc: "Assisting students with well-structured, high-quality academic projects tailored to university requirements.",
  },
  {
    icon: "bi-code",
    title: "Programming Tasks",
    desc: "Solving complex programming tasks efficiently in various languages — Python, JavaScript, and more.",
  },
];

function Services() {
  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Services"
          description="Your Go-To Expert for Development and Digital Marketing. Offering a full spectrum of services to meet your business needs."
          current="Services"
        />

        <section id="services" className="services section">
          <div className="container">
            <div className="row gy-4">
              {SERVICES.map((svc, i) => (
                <div
                  key={svc.title}
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
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
              <div className="col-lg-12 text-center" style={{ marginTop: 16 }}>
                <a href="/Contact">
                  <button className="btn btn-primary custom_btn">
                    Book a Service <i className="bi bi-lightning-charge ms-1" />
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

export default Services;
