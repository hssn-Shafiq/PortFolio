const SERVICES_LIST = [
  { icon: "bi-laptop", color: "#ffbb2c", title: "Web Designing" },
  { icon: "bi-layers", color: "#5578ff", title: "UI/UX Designing" },
  { icon: "bi-phone", color: "#00c853", title: "Android Apps" },
  { icon: "bi-megaphone", color: "#18d26e", title: "Digital Marketing" },
  { icon: "bi-code-slash", color: "#e361ff", title: "MERN Stack" },
  { icon: "bi-filetype-jsx", color: "#47aeff", title: "React Projects" },
  { icon: "bi-braces", color: "#ffa76e", title: "Uni Projects" },
  { icon: "bi-code", color: "#e361ff", title: "Programming" },
  { icon: "bi-wordpress", color: "#0095ff", title: "WordPress" },
  { icon: "bi-shop", color: "#b2904f", title: "Shopify Stores" },
  { icon: "bi-link", color: "#b20969", title: "REST APIs" },
  { icon: "bi-activity", color: "#ff5828", title: "SEO" },
  { icon: "bi-share", color: "#18d26e", title: "Collaboration" },
  { icon: "bi-phone-vibrate", color: "#00e5ff", title: "React Native" },
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