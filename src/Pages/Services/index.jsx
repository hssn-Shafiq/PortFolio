import Footer from "../../Components/Footer";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";

const SERVICES = [
  {
    icon: "bi-code-slash",
    title: "Web Development",
    desc: "Building responsive websites and custom web applications based on real business needs and project requirements.",
  },
  {
    icon: "bi-layers",
    title: "MERN & Next.js",
    desc: "Developing modern web applications using React, Next.js, Node.js, Express.js, MongoDB, and TypeScript.",
  },
  {
    icon: "bi-wordpress",
    title: "WordPress Development",
    desc: "Creating and customizing business websites, LMS platforms, WooCommerce stores, and custom WordPress solutions.",
  },
  {
    icon: "bi-cart3",
    title: "E-commerce Development",
    desc: "Building e-commerce solutions with products, orders, customers, payments, vendors, inventory, and custom workflows.",
  },
  {
    icon: "bi-shop",
    title: "Shopify Development",
    desc: "Creating and customizing Shopify stores with clean layouts, product management, and useful store features.",
  },
  {
    icon: "bi-phone",
    title: "App Development",
    desc: "Building mobile applications and cross-platform solutions for different business and project requirements.",
  },
  {
    icon: "bi-server",
    title: "Backend Development",
    desc: "Developing server-side logic, authentication, databases, business workflows, and backend systems for web applications.",
  },
  {
    icon: "bi-link-45deg",
    title: "REST API Development",
    desc: "Building APIs that connect frontend applications, databases, third-party services, and external platforms.",
  },
  {
    icon: "bi-database",
    title: "Database Development",
    desc: "Designing and managing database structures using MongoDB, PostgreSQL, and other database technologies.",
  },
  {
    icon: "bi-cloud-check",
    title: "API & Cloud Integration",
    desc: "Integrating services such as Firebase, Cloudinary, authentication systems, payment services, and external APIs.",
  },
  {
    icon: "bi-mortarboard",
    title: "Final Year Projects",
    desc: "Helping students turn their software ideas into complete working projects with proper frontend, backend, database, and documentation.",
  },
  {
    icon: "bi-terminal",
    title: "Programming Projects",
    desc: "Developing practical programming projects and solving application-specific development problems using modern technologies.",
  },
  {
    icon: "bi-robot",
    title: "AI-Assisted Development",
    desc: "Using AI tools for research, debugging, automation, code improvement, and faster development.",
  },
  {
    icon: "bi-speedometer2",
    title: "Website Optimization",
    desc: "Improving website performance, responsiveness, functionality, and overall user experience.",
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
