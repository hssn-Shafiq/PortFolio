import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    function toggleScrolled() {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      
      // Ensure header exists and has correct class for sticky behavior
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

    // Cleanup scroll and load event listeners on component unmount
    return () => {
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  useEffect(() => {
    // Ensure the mobile nav toggle button exists
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

    // Hide mobile nav on same-page/hash links
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector("body").classList.contains("mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Toggle mobile nav dropdowns
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
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

    // Cleanup on component unmount to avoid memory leaks
    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      }
      document.querySelectorAll("#navmenu a").forEach((navmenu) => {
        navmenu.removeEventListener("click", mobileNavToogle);
      });
      document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
        navmenu.removeEventListener("click", mobileNavToogle);
      });
    };
  }, []);

  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <h1 className="sitename">Your Developer</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
};
