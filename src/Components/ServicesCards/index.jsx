const SERVICES_LIST = [
  { icon: "bi-window", color: "#ffbb2c", title: "Web Development" },

{ icon: "bi-code-slash", color: "#5578ff", title: "MERN Stack Development" },

{ icon: "bi-filetype-jsx", color: "#00c853", title: "React & Next.js" },

{ icon: "bi-wordpress", color: "#0095ff", title: "WordPress Development" },

{ icon: "bi-cart3", color: "#b2904f", title: "E-commerce Development" },

{ icon: "bi-shop", color: "#ff5828", title: "Shopify Stores" },

{ icon: "bi-database", color: "#18d26e", title: "Backend Development" },

{ icon: "bi-link-45deg", color: "#b20969", title: "REST API Development" },

{ icon: "bi-cloud-check", color: "#47aeff", title: "Firebase Integration" },

{ icon: "bi-diagram-3", color: "#e361ff", title: "Custom Web Applications" },

{ icon: "bi-speedometer2", color: "#ffa76e", title: "Website Optimization" },

{ icon: "bi-robot", color: "#00e5ff", title: "AI-Powered Development" },

{ icon: "bi-cart-check", color: "#5578ff", title: "WooCommerce" },

{ icon: "bi-phone", color: "#18d26e", title: "Responsive Websites" },
];

function ServicesCard() {
  return (
    <>
      <section id="interests" className="interests section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <div>
            <span className="description-title">How I Can Help You?</span>
          </div>
        </div>
        <div className="container">
          <div className="row gy-3">
            {SERVICES_LIST.map((svc, i) => (
              <div
                key={svc.title}
                className="col-lg-3 col-md-4 col-6"
                data-aos="fade-up"
                data-aos-delay={100 + i * 80}
              >
                <div
                  className="features-item"
                  style={{ borderRadius: 12, border: '1px solid rgba(24,210,110,0.1)', background: 'rgba(26,26,26,0.5)', backdropFilter: 'blur(8px)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(24,210,110,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(24,210,110,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <i className={`bi ${svc.icon}`} style={{ color: svc.color, fontSize: 28 }} />
                  <h3 style={{ marginTop: 8, fontSize: 14 }}>
                    <a href="/Services" className="stretched-link" style={{ color: 'var(--default-color)', textDecoration: 'none' }}>
                      {svc.title}
                    </a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesCard;