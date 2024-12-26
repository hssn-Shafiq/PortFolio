import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation(); // Get current path

  useEffect(() => {
    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");

      if (
        selectHeader &&
        (selectHeader.classList.contains("scroll-up-sticky") ||
          selectHeader.classList.contains("sticky-top") ||
          selectHeader.classList.contains("fixed-top"))
      ) {
        window.scrollY > 100
          ? selectBody.classList.add("scrolled")
          : selectBody.classList.remove("scrolled");
      }
    }

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    function mobileNavToogle() {
      const body = document.querySelector("body");
      if (body) {
        body.classList.toggle("mobile-nav-active");
      }
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.classList.toggle("bi-list");
        mobileNavToggleBtn.classList.toggle("bi-x");
      }
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
    }

    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (
          document.querySelector("body").classList.contains("mobile-nav-active")
        ) {
          mobileNavToogle();
        }
      });
    });

    document
      .querySelectorAll(".navmenu .toggle-dropdown")
      .forEach((navmenu) => {
        navmenu.addEventListener("click", function (e) {
          e.preventDefault();
          const parent = this.parentNode;
          if (parent) {
            parent.classList.toggle("active");
            const nextSibling = parent.nextElementSibling;
            if (nextSibling) {
              nextSibling.classList.toggle("dropdown-active");
            }
          }
          e.stopImmediatePropagation();
        });
      });

    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      }
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.removeEventListener("click", mobileNavToogle);
      });
      document
        .querySelectorAll(".navmenu .toggle-dropdown")
        .forEach((navmenu) => {
          navmenu.removeEventListener("click", mobileNavToogle);
        });
    };
  }, []);

  // Function to determine if a link is active based on the current URL
  const isActiveLink = (path) => location.pathname === path;

  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Your Developer</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="/" className={isActiveLink("/") ? "active" : ""}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className={isActiveLink("/About") ? "active" : ""}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className={isActiveLink("/resume") ? "active" : ""}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={isActiveLink("/services") ? "active" : ""}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={isActiveLink("/portfolio") ? "active" : ""}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={
                    isActiveLink("/contact")
                      ? "active  d-block d-md-none"
                      : " d-block d-md-none"
                  }
                >
                  Contact Me
                </a>
                <button className="btn btn-primary custom_btn  d-none d-md-block">
                  <a
                    href="/contact"
                    className={isActiveLink("/contact") ? "active" : ""}
                  >
                    Request a Free Quote{" "}
                    <i className="bi bi-arrow-up-right-circle"></i>
                  </a>
                </button>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
};
