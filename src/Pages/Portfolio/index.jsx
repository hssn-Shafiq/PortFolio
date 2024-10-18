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
          description="Explore a selection of my past work that showcases my expertise in full-stack development and digital marketing."
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
              {/* <li data-filter=".filter-ui/ux">UI/UX</li>
              <li data-filter=".filter-marketing">Marketing</li> */}
            </ul>
            {/* End Portfolio Filters */}

            <div className="row  gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
              {/* App Portfolio Items */}
              <div className="col-lg-12 col-md-6 portfolio-item isotope-item filter-web">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/alaya.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Alaya Arts</h4>
                    {/* <p>Eco</p> */}
                    <a href="/images/portfolio/alaya.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/circular.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Circular Couture</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/circular.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/react.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Victorinox</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/react.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/react1.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Sport Chek</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/react1.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/gtfs.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>BusMate</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/gtfs.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/cheel.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>CheelBase</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/cheel.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/ai.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>AI Image Generator</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/ai.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/motor.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Motor Easy</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/motor.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/serve.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Serve Business</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/serve.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>
              </div>
              {/* End App Portfolio Item */}

              {/* WordPress Portfolio Items */}
              <div className="col-lg-12 col-md-6 portfolio-item isotope-item filter-wordpress">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/goy.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Groom Yor Life Agency</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/goy.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/tech.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Tech Sphere Logix</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/tech.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/uni.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Groom Yor Life University</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/uni.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/digi.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>DigiBuzify</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/digi.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/maahi.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Personal Portfolio</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/maahi.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Wordpress/funding.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Funding Panel</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Wordpress/funding.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>
              </div>
              {/* End Product Portfolio Item */}

              {/* Shopify Portfolio Items */}
              <div className="col-lg-12 col-md-6 portfolio-item isotope-item filter-shopify">
                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Shopify/athletic.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Athletic Force 1</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Shopify/athletic.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Shopify/fitted.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Fitted Fresh</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Shopify/fitted.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Shopify/shp.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Shopify</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Shopify/shp.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Shopify/young.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Young 90 Store</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Shopify/young.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>

                <div className="portfolio-content h-100">
                  <img src="/images/portfolio/Shopify/katies.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Katies Brand</h4>
                    {/* <p>Lorem ipsum dolor sit amet</p> */}
                    <a href="/images/portfolio/Shopify/katies.png" className="glightbox preview-link">
                      <i className="bi bi-zoom-in" />
                    </a>
                    {/* <a href="portfolio-details.html" className="details-link">
                      <i className="bi bi-link-45deg" />
                    </a> */}
                  </div>
                </div>
              </div>
              {/* End Branding Portfolio Item */}

            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
      </main>
    </>
  );
}

export default Portfolio;
