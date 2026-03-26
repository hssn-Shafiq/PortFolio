import { useState } from "react";
import { Header } from "../../Components/Header";
import PageTitle from "../../Components/PageTitle";
import { SubmitForm } from "../../firebase";

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
      setFormData({ name: "", email: "", subject: "", services: "", message: "" });
    } catch (err) {
      setError("Failed to submit your request. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => { setSuccess(false); setError(""); }, 4000);
    }
  };

  const infoItems = [
    {
      icon: "bi-geo-alt",
      title: "Address",
      content: <p>Rahim Yar Khan, Pakistan</p>,
    },
    {
      icon: "bi-telephone",
      title: "Call Me",
      content: <p><a href="tel:+923205314850">+92 320 5314850</a></p>,
    },
    {
      icon: "bi-envelope",
      title: "Email Us",
      content: <p><a href="mailto:shafiqh850@gmail.com">shafiqh850@gmail.com</a></p>,
    },
    {
      icon: "bi-share",
      title: "Social Profiles",
      content: (
        <div className="social-links" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 4 }}>
          {[
            ["bi-facebook", "https://www.facebook.com/hassan.shafiq.73744"],
            ["bi-instagram", "https://www.instagram.com/hssn_shafiq/"],
            ["bi-linkedin", "https://www.linkedin.com/in/hassan-shafiq-847665248/"],
            ["bi-whatsapp", "https://api.whatsapp.com/send/?phone=%2B923205314850"],
            ["bi-github", "https://github.com/hssn-Shafiq/"],
            ["bi-twitter-x", "https://twitter.com/shafiqh850"],
          ].map(([icon, href]) => (
            <a key={icon} href={href} target="_blank" rel="noreferrer" style={{ color: 'rgba(250,250,250,0.6)', fontSize: 18, transition: 'color 0.3s' }}
               onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-color)'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,250,250,0.6)'}
            >
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="main">
        <PageTitle
          title="Contact"
          description="Get in Touch – Let's Bring Your Vision to Life."
          current="Contact"
        />

        <section id="contact" className="contact section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            {/* Info Cards */}
            <div className="row gy-4">
              {infoItems.map((item) => (
                <div key={item.title} className="col-md-6" data-aos="fade-up">
                  <div className="contact-info-card">
                    <div className="contact-icon-circle">
                      <i className={`bi ${item.icon}`} />
                    </div>
                    <div className="contact-info-text">
                      <h3>{item.title}</h3>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="contact-form-glass" data-aos="fade-up" data-aos-delay={300}>
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
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
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
                    <option value="WordPress Website">WordPress Website</option>
                    <option value="Shopify Store">Shopify Store</option>
                    <option value="WebFlow Websites">WebFlow Websites</option>
                    <option value="UI/UX Designing">UI/UX Designing</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="University Project">University Project</option>
                    <option value="Programming Tasks">Programming Tasks</option>
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
                  />
                </div>
                <div className="col-md-12 text-center">
                  {loading && <div className="loading" style={{ marginBottom: 16 }}>Sending...</div>}
                  {error && <div className="error-message">{error}</div>}
                  {success && <div className="sent-message">Your message has been sent. Thank you!</div>}
                  <button type="submit" className="contact-submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Request a Quote"} &nbsp;<i className="bi bi-send" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;
