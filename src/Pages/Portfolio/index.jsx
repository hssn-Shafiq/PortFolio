import { useEffect } from "react";
import Isotope from "isotope-layout";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";
import "./portfolio.css";

function Portfolio() {
  useEffect(() => {
    // Initialize Isotope
    const isotopeContainer = document.querySelector(".portfolio-container");
    if (isotopeContainer) {
      const iso = new Isotope(isotopeContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });

      // Filter items on button click
      const filterBtns = document.querySelectorAll(".portfolio-flters li");
      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterBtns.forEach((el) => el.classList.remove("active"));
          btn.classList.add("active");
          const filterValue = btn.getAttribute("data-filter");
          iso.arrange({ filter: filterValue });
        });
      });
    }

    // Initialize Bootstrap modal for image preview
    const portfolioLightbox = new window.bootstrap.Modal(
      document.getElementById("portfolioModal")
    );

    // Handle image preview clicks
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    portfolioItems.forEach((item) => {
      const previewLink = item.querySelector(".preview-link");
      if (previewLink) {
        previewLink.addEventListener("click", (e) => {
          e.preventDefault();
          const imgSrc = item.querySelector("img").getAttribute("src");
          const title = item.querySelector("h4").textContent;

          // Update modal content
          const modalImg = document.querySelector("#portfolioModal .modal-img");
          const modalTitle = document.querySelector(
            "#portfolioModal .modal-title"
          );
          if (modalImg && modalTitle) {
            modalImg.setAttribute("src", imgSrc);
            modalTitle.textContent = title;
          }

          portfolioLightbox.show();
        });
      }
    });

    // Cleanup function
    return () => {
      const modal = document.getElementById("portfolioModal");
      if (modal) {
        const bsModal = window.bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.dispose();
        }
      }
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <PageTitle
          title="Portfolio"
          description="Explore a selection of my past work that showcases my expertise in full-stack development and digital marketing."
          current="Portfolio"
        />

        {/* Portfolio Section */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            {/* Portfolio Filters */}
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul className="portfolio-flters">
                  <li data-filter="*" className="active">
                    All
                  </li>
                  <li data-filter=".filter-web">Web Development</li>
                  <li data-filter=".filter-wordpress">CMS Development</li>
                  <li data-filter=".filter-shopify">E-commerce Solutions</li>
                </ul>
              </div>
            </div>

            {/* Portfolio Grid */}
            <div className="row portfolio-container g-4">
              {/* Web Projects */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct1.png"
                    className="img-fluid"
                    alt="Circular Couture"
                  />
                  <div className="portfolio-info">
                    <h4>Circular Couture</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct2.png"
                    className="img-fluid"
                    alt="Cheelbase"
                  />
                  <div className="portfolio-info">
                    <h4>Cheelbase</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct3.png"
                    className="img-fluid"
                    alt="Alaya Arts"
                  />
                  <div className="portfolio-info">
                    <h4>Alaya Arts</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct4.png"
                    className="img-fluid"
                    alt="Busmate GTFS"
                  />
                  <div className="portfolio-info">
                    <h4>Busmate GTFS</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct5.png"
                    className="img-fluid"
                    alt="AI Image Generator"
                  />
                  <div className="portfolio-info">
                    <h4>AI Image Generator</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct6.png"
                    className="img-fluid"
                    alt="Motor Easy"
                  />
                  <div className="portfolio-info">
                    <h4>Motor Easy</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct2.png"
                    className="img-fluid"
                    alt="Cheelbase"
                  />
                  <div className="portfolio-info">
                    <h4>Cheelbase</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more web items here */}

              {/* WordPress Projects */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp1.png"
                    className="img-fluid"
                    alt="Groom Your Life Agency"
                  />
                  <div className="portfolio-info">
                    <h4>Groom Your Life Agency</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp2.png"
                    className="img-fluid"
                    alt="Groom Your Life University"
                  />
                  <div className="portfolio-info">
                    <h4>Groom Your Life University</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress filter-shopify">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp3.png"
                    className="img-fluid"
                    alt="One Mall"
                  />
                  <div className="portfolio-info">
                    <h4>One Mall</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp4.png"
                    className="img-fluid"
                    alt="Funding Panel"
                  />
                  <div className="portfolio-info">
                    <h4>Funding Panel</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp5.png"
                    className="img-fluid"
                    alt="Digibuzify"
                  />
                  <div className="portfolio-info">
                    <h4>Digibuzify</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-wordpress">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/wp/wp6.png"
                    className="img-fluid"
                    alt="Maahi Iqbal"
                  />
                  <div className="portfolio-info">
                    <h4>Maahi Iqbal</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more WordPress items here */}
              {/* Shopify Projects */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-shopify">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/shopify/sp2.png"
                    className="img-fluid"
                    alt="Athletic Force 1"
                  />
                  <div className="portfolio-info">
                    <h4>Athletic Force 1</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-shopify">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/shopify/sp1.png"
                    className="img-fluid"
                    alt="Fitted Fresh"
                  />
                  <div className="portfolio-info">
                    <h4>Fitted Fresh</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-shopify">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/shopify/sp3.png"
                    className="img-fluid"
                    alt="Katies Brand"
                  />
                  <div className="portfolio-info">
                    <h4>Katies Brand</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-shopify">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/shopify/sp4.png"
                    className="img-fluid"
                    alt="Young 90 store"
                  />
                  <div className="portfolio-info">
                    <h4>Young 90 store</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more Shopify items here */}

              {/* again custom web */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct7.png"
                    className="img-fluid"
                    alt="Serve Buziness"
                  />
                  <div className="portfolio-info">
                    <h4>Serve Buziness</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct8.png"
                    className="img-fluid"
                    alt="Sportchek"
                  />
                  <div className="portfolio-info">
                    <h4>Sportchek</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct9.png"
                    className="img-fluid"
                    alt="Spartain"
                  />
                  <div className="portfolio-info">
                    <h4>Spartain</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="/images/portfolio/custom/ct10.png"
                    className="img-fluid"
                    alt="Pak EBS"
                  />
                  <div className="portfolio-info">
                    <h4>Pak EBS</h4>
                    <div className="portfolio-links">
                      <a href="#" className="preview-link" title="Preview">
                        <i className="bi bi-zoom-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Modal */}
        <div
          className="modal fade"
          id="portfolioModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-center">
                <img src="" className="modal-img img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Required Bootstrap JS */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
              var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
              })
            });
          `,
        }}
      />
    </>
  );
}

export default Portfolio;
