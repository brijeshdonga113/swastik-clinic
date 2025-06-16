import React from 'react';
import './Contact.css';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Please feel free to contact us</h2>
      <p>If you need any further information, visit us at any of our 3 clinics or fill the form below.</p>

      {/* Locations */}
      <div className="locations">
        <div className="location-card">
          <h3>📍 Surat Clinic</h3>
          <iframe
            title="Surat Map"
            src="https://www.google.com/maps?q=Varachha+Main+Rd,+Dharmeliya+Nagar,+Surat,+Gujarat+395006&output=embed"
            loading="lazy"
          ></iframe>
          <p>Poddar Arcade, Varachha Main Rd, Dharmeliya Nagar,<br />Surat, Gujarat 395006</p>
        </div>

        <div className="location-card">
          <h3>📍 Junagadh Clinic</h3>
          <iframe
            title="Junagadh Map"
            src="https://www.google.com/maps?q=Junagadh+Homeopathy+Clinic,+Gujarat&output=embed"
            loading="lazy"
          ></iframe>
          <p>Swastik Homeopathy, Joshipura Main Road,<br />Junagadh, Gujarat</p>
        </div>

        <div className="location-card">
          <h3>📍 Ahmedabad Clinic</h3>
          <iframe
            title="Ahmedabad Map"
            src="https://www.google.com/maps?q=Ahmedabad+Homeopathy+Clinic,+Gujarat&output=embed"
            loading="lazy"
          ></iframe>
          <p>Swastik Homeopathy, Maninagar East,<br />Ahmedabad, Gujarat</p>
        </div>
      </div>

      {/* Contact form + info */}
      <div className="contact-content">
        <form
          className="contact-form"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.target;
            const data = {
              name: form.name.value,
              email: form.email.value,
              phone: form.phone.value,
              message: form.message.value,
            };

            const response = await fetch("https://formspree.io/f/xeokjrnq", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              alert("Thanks! We'll get back to you soon.");
              form.reset();
            } else {
              alert("Something went wrong. Please try again.");
            }
          }}
        >
          <h3>Quick Inquiry</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>📞 <strong></strong> <a href="tel:+918866199376">+91 88661 99376</a></p>

          <h3>Follow us:</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> Facebook
            </a>
            <a href="https://wa.me/918866199376" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="https://www.youtube.com/YOUR_YOUTUBE" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;