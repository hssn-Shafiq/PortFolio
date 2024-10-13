import { useState } from "react";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";
import { db, SubmitForm } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import { data } from "isotope-layout";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    services: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await SubmitForm("FormData", formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to submit your request. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Contact"
          description="Get in Touch – Let's Bring Your Vision to Life."
          current="Contact"
        />

        <>
          {/* Contact Section */}
          <section id="contact" className="contact section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <i className="icon bi bi-geo-alt flex-shrink-0" />
                    <div>
                      <h3>Address</h3>
                      <p>Wirelless Pull, Rahim Yar Khan, Pakistan</p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <i className="icon bi bi-telephone flex-shrink-0" />
                    <div>
                      <h3>Call Me</h3>
                      <p><a href="tel:+923205314850">+92 320 5314850</a></p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <i className="icon bi bi-envelope flex-shrink-0" />
                    <div>
                      <h3>Email Us</h3>
                      <p><a href="mailto:shafiqh850@gmail.com?subject=Request%20for%20Free%20Consultation%3A%20Let's%20Kickstart%20My%20Digital%20Project!&body=Hi%20Hassan%20Shafiq%2C%0A%0AI'm%20interested%20in%20your%20free%20web%20development%20and%20digital%20marketing%20consultation.%20I%E2%80%99d%20love%20to%20discuss%20my%20project%20and%20explore%20how%20your%20Full%20Stack%20Development%20and%20Digital%20Marketing%20expertise%20can%20help.%0A%0AI%20am%20looking%20forward%20to%20your%20response!">shafiqh850@gmail.com</a></p>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
                <div className="col-md-6">
                  <div
                    className="info-item d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <i className="icon bi bi-share flex-shrink-0" />
                    <div>
                      <h3>Social Profiles</h3>
                      <div className="social-links">
                        <a href="https://www.facebook.com/hassan.shafiq.73744">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href="https://www.instagram.com/hssn_shafiq/">
                          <i className="bi bi-instagram" />
                        </a>
                        <a href="https://www.linkedin.com/in/hassan-shafiq-847665248/">
                          <i className="bi bi-linkedin" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=%2B923205314850">
                          <i className="bi bi-whatsapp" />
                        </a>
                        <a href="https://github.com/hssn-Shafiq/">
                          <i className="bi bi-github" />
                        </a>
                        <a href="https://twitter.com/shafiqh850">
                          <i className="bi bi-twitter-x" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Info Item */}
              </div>
              <form
                onSubmit={handleSubmit}
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <select
                      className="form-control"
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="WordPress Website">
                        WordPress Website
                      </option>
                      <option value="Shopify Store">Shopify Store</option>
                      <option value="WebFlow Websites">WebFlow Websites</option>
                      <option value="UI/UX Designing">UI/UX Designing</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="University Project">
                        University Project
                      </option>
                      <option value="Programming Tasks">
                        Programming Tasks
                      </option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    {loading && <div className="loading">Loading</div>}
                    {error && <div className="error-message">{error}</div>}
                    {success && (
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    )}
                    <button type="submit" disabled={loading}>
                      Request a Quote
                    </button>
                  </div>
                </div>
              </form>
              {/* End Contact Form */}
            </div>
          </section>
          {/* /Contact Section */}
        </>
      </main>
    </>
  );
}

export default Contact;
