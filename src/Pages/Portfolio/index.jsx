import { useState } from "react";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";
import Footer from "../../Components/Footer";
import "./portfolio.css";

const PROJECTS = [
  // Web
  { id: 1, filter: "web", title: "Circular Couture", img: "/images/portfolio/custom/ct1.png", category: "Web Dev" },
  { id: 2, filter: "web", title: "Cheelbase", img: "/images/portfolio/custom/ct2.png", category: "Web Dev" },
  { id: 3, filter: "web", title: "Alaya Arts", img: "/images/portfolio/custom/ct3.png", category: "Web Dev" },
  { id: 4, filter: "web", title: "Busmate GTFS", img: "/images/portfolio/custom/ct4.png", category: "Web Dev" },
  { id: 5, filter: "web", title: "AI Image Generator", img: "/images/portfolio/custom/ct5.png", category: "Web Dev" },
  { id: 6, filter: "web", title: "Motor Easy", img: "/images/portfolio/custom/ct6.png", category: "Web Dev" },
  { id: 7, filter: "web", title: "Serve Buziness", img: "/images/portfolio/custom/ct7.png", category: "Web Dev" },
  { id: 8, filter: "web", title: "Sportchek", img: "/images/portfolio/custom/ct8.png", category: "Web Dev" },
  { id: 9, filter: "web", title: "Spartain", img: "/images/portfolio/custom/ct9.png", category: "Web Dev" },
  { id: 10, filter: "web", title: "Pak EBS", img: "/images/portfolio/custom/ct10.png", category: "Web Dev" },
  // CMS
  { id: 11, filter: "wordpress", title: "Groom Your Life Agency", img: "/images/portfolio/wp/wp1.png", category: "CMS" },
  { id: 12, filter: "wordpress", title: "Groom Your Life University", img: "/images/portfolio/wp/wp2.png", category: "CMS" },
  { id: 13, filter: "wordpress shopify", title: "One Mall", img: "/images/portfolio/wp/wp3.png", category: "CMS" },
  { id: 14, filter: "wordpress", title: "Funding Panel", img: "/images/portfolio/wp/wp4.png", category: "CMS" },
  { id: 15, filter: "wordpress", title: "Digibuzify", img: "/images/portfolio/wp/wp5.png", category: "CMS" },
  { id: 16, filter: "wordpress", title: "Maahi Iqbal", img: "/images/portfolio/wp/wp6.png", category: "CMS" },
  // Shopify
  { id: 17, filter: "shopify", title: "Athletic Force 1", img: "/images/portfolio/shopify/sp2.png", category: "E-Commerce" },
  { id: 18, filter: "shopify", title: "Fitted Fresh", img: "/images/portfolio/shopify/sp1.png", category: "E-Commerce" },
  { id: 19, filter: "shopify", title: "Katies Brand", img: "/images/portfolio/shopify/sp3.png", category: "E-Commerce" },
  { id: 20, filter: "shopify", title: "Young 90 Store", img: "/images/portfolio/shopify/sp4.png", category: "E-Commerce" },
  // Android Apps
  { id: 21, filter: "android", title: "StyleHub – Clothes Store", img: "/images/portfolio/android/app1.png", category: "Android App" },
  { id: 22, filter: "android", title: "WanderBooking – Travel & Stays", img: "/images/portfolio/android/app2.png", category: "Android App" },
  { id: 23, filter: "android", title: "SwiftDeliver – Order Delivery", img: "/images/portfolio/android/app3.png", category: "Android App" },
  { id: 24, filter: "android", title: "SoleStyle – Shoes Brand", img: "/images/portfolio/android/app4.png", category: "Android App" },
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web" },
  { label: "CMS Development", value: "wordpress" },
  { label: "E-commerce", value: "shopify" },
  { label: "Mobile Applications", value: "android" },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const visible = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.filter.includes(activeFilter));

  return (
    <>
      <Header />
      <main>
        <PageTitle
          title="Portfolio"
          description="Explore a selection of my past work showcasing expertise in full-stack development, CMS, and e-commerce solutions."
          current="Portfolio"
        />

        <section id="portfolio" className=" section" style={{ padding: "60px 0" }}>
          <div className="container">
            {/* Filters */}
            <ul className="portfolio-filters">
              {FILTERS.map((f) => (
                <li
                  key={f.value}
                  className={activeFilter === f.value ? "active" : ""}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </li>
              ))}
            </ul>

            {/* Grid */}
            <div className="row g-4">
              {visible.map((project, i) => (
                <div key={project.id} className={`col-lg-4 col-md-6 ${project.filter === "android" ? "col-lg-3 col-md-6" : ""}`} data-aos="fade-up" data-aos-delay={50 * (i % 6)}>
                  <div className={`portfolio-card ${project.filter === "android" ? "android-card" : ""}`}>
                    <span className="portfolio-card-category">{project.category}</span>
                    <img src={project.img} alt={project.title} />
                    <div className="portfolio-card-overlay">
                      <h4 className="portfolio-card-title">{project.title}</h4>
                      <button
                        className="portfolio-card-btn"
                        onClick={() => setModal(project)}
                      >
                        <i className="bi bi-zoom-in" /> Preview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Modal */}
        {modal && (
          <div className="portfolio-modal-overlay" onClick={() => setModal(null)}>
            <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="portfolio-modal-close" onClick={() => setModal(null)}>
                <i className="bi bi-x" />
              </button>
              <img src={modal.img} alt={modal.title} className="portfolio-modal-img" />
              <div className="portfolio-modal-title">{modal.title}</div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Portfolio;
