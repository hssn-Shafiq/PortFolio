// src/components/Skills.js
import React, { useEffect, useRef } from "react";


function Skills() {
  const skillsRef = useRef(null); // Reference to the skills section

  useEffect(() => {
    // Initialize PureCounter after the component mounts
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // Function to handle progress bar animation
    const handleProgressAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = skillsRef.current.querySelectorAll(".progress .progress-bar");
          progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute("aria-valuenow");
            bar.style.width = `${targetWidth}%`;
          });
          observer.unobserve(skillsRef.current); // Stop observing after animation
        }
      });
    };

    // Set up Intersection Observer
    const observerOptions = {
      root: null, // Observing within the viewport
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(handleProgressAnimation, observerOptions);
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup on component unmount
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div>
          <span>My</span> <span className="description-title">Skills</span>
        </div>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content">
          {/* First Column of Skills */}
          <div className="col-lg-6">
            {/* Skill Item */}
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            {/* Repeat similar blocks for other skills */}
            <div className="progress">
              <span className="skill">
                CSS <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Bootstrap <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Tailwind <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Material UI <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                React Js <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Vite Js <i className="val">70%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Next Js <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}
          </div>
          {/* End First Column */}

          {/* Second Column of Skills */}
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Shopify/CMS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                WebFlow/CMS <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                WIX/CMS <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Firebase <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Rest APIs <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}

            <div className="progress">
              <span className="skill">
                Node Js <i className="val">85%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            {/* End Skill Item */}
          </div>
          {/* End Second Column */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
