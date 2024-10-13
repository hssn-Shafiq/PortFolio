import React, { useEffect } from 'react';
import Typed from 'typed.js';

function Banner() {
  useEffect(() => {
    // Typed.js initialization
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      const typed_strings = selectTyped.getAttribute('data-typed-items').split(',');

      // Initialize Typed.js with proper settings
      const typed = new Typed('.typed', {
        strings: typed_strings,
        typeSpeed: 100,   // Speed of typing
        backSpeed: 50,    // Speed of deleting
        backDelay: 2000,  // Time before starting to delete
        loop: true,       // Looping the typing effect
        showCursor: true, // Show the blinking cursor
        cursorChar: '|',  // The cursor character
      });

      // Cleanup on component unmount to prevent memory leaks
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src="/images/Home.webp" alt="" data-aos="fade-in" />
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <h2>Hassan Shafiq</h2>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Developer, Freelancer, Marketer"
            >
              Developer
            </span>
            <span className="typed-cursor typed-cursor--blink" />
          </p>
          <div className="social-links">
            <a href="https://twitter.com/shafiqh850">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="https://www.facebook.com/hassan.shafiq.73744">
              <i className="bi bi-facebook" />
            </a>
            <a href="https://www.instagram.com/hssn_shafiq/">
              <i className="bi bi-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/hassan-shafiq-847665248/">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  );
}

export default Banner;
