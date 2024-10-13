import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TestimonialSlider = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <div>
          <span>Check my</span>{" "}
          <span className="description-title">Testimonials</span>
        </div>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
          }}
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                Working with him on my web development project was an absolute pleasure. They took my vision and transformed it into a fully functional, responsive website that exceeded my expectations. Their attention to detail and prompt communication throughout the process really impressed me
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="/images/testimonials/testimonials-1.jpg"
                className="testimonial-img rounded-circle w-25"
                alt="Saul Goodman"
              />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                From the start, they understood the aesthetic I was going for with my WordPress website. The final product was clean, professional, and easy to navigate. The custom features they added made a big difference. I couldn’t have asked for better service!
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="/images/testimonials/testimonials-2.jpg"
                className="testimonial-img rounded-circle w-25"
                alt="Sara Wilsson"
              />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                I hired him to design my Shopify store, and they delivered a beautiful, user-friendly site in record time. Not only did he make my store look great, but he also optimized it for SEO, which helped boost my sales. His expertise in Shopify is unmatched!
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="/images/testimonials/testimonials-3.jpg"
                className="testimonial-img rounded-circle w-25"
                alt="Jena Karlis"
              />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                I needed a Webflow website that captured my personal brand, and he nailed it. He took the time to understand my needs and delivered a visually stunning and fully responsive site. I highly recommend his web design services to anyone looking for top-notch work!.
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="/images/testimonials/testimonials-4.jpg"
                className="testimonial-img rounded-circle w-25"
                alt="Matt Brandon"
              />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>
                His digital marketing services were a game-changer for my business. He ran successful campaigns across multiple platforms, and I saw a significant increase in website traffic and conversions. He is true experts in digital marketing!
                </span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img
                src="/images/testimonials/testimonials-5.jpg"
                className="testimonial-img rounded-circle w-25"
                alt="John Larson"
              />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;
