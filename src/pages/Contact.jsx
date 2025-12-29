import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import FadedGridPattern from '../components/FadedGridPattern';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <FadedGridPattern />
        <div className="container">
          <ScrollAnimation direction="up">
            <h1 className="page-title">Get In Touch</h1>
            <p className="page-subtitle">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <ScrollAnimation direction="left">
              <div className="contact-form-wrapper">
                <h2>Send us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      className="form-success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Message sent successfully!
                    </motion.div>
                  )}
                </form>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation direction="right">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p className="contact-description">
                  Reach out to us through any of the following channels. We're always happy to 
                  discuss new opportunities, partnerships, or answer any questions you might have.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div>
                      <h3>Email</h3>
                      <p>contact@welfareforsanjoaquin.org</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <h3>Location</h3>
                      <p>San Joaquin County, California</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon"></div>
                    <div>
                      <h3>Get Involved</h3>
                      <p>Join us in making a difference</p>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

