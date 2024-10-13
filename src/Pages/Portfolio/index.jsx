import { useEffect } from "react";
import Isotope from "isotope-layout";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";

function Portfolio() {
  useEffect(() => {
    // Initialize Isotope layout
    const isotopeInstance = new Isotope(".isotope-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows", // You can change this to 'masonry' if needed
    });

    // Filter items on button click
    const filterButtons = document.querySelectorAll(".portfolio-filters li");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.getAttribute("data-filter");
        isotopeInstance.arrange({ filter: filterValue });

        // Add 'filter-active' class to the clicked button and remove from others
        filterButtons.forEach((btn) => btn.classList.remove("filter-active"));
        button.classList.add("filter-active");
      });
    });

    // Cleanup to prevent memory leaks
    return () => isotopeInstance.destroy();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Portfolio"
          description="Odio et unde deleniti. Deserunt numquam exercitationem."
          current="Portfolio"
        />
        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section">
          <div className="container">
            {/* Portfolio Filters */}
            <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-wordpress">WordPress</li>
              <li data-filter=".filter-shopify">Shopify</li>
              <li data-filter=".filter-ui/ux">UI/UX</li>
              <li data-filter=".filter-marketing">Marketing</li>
            </ul>
            {/* End Portfolio Filters */}

            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
              {/* App Portfolio Items */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/app-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <a href="/images/portfolio/app-1.jpg" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End App Portfolio Item */}

              {/* Product Portfolio Items */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-wordpress">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/product-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Product 1</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <a href="/images/portfolio/product-1.jpg" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Product Portfolio Item */}

              {/* Branding Portfolio Items */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-shopify">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Branding 1</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <a href="/images/portfolio/branding-1.jpg" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Branding Portfolio Item */}

              {/* Books Portfolio Items */}
              <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-ui/ux">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/books-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Books 1</h4>
                    <p>Lorem ipsum dolor sit amet</p>
                    <a href="/images/portfolio/books-1.jpg" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a>
                  </div>
                </div>
              </div>
              {/* End Books Portfolio Item */}
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
    </>
  );
}

export default Portfolio;
