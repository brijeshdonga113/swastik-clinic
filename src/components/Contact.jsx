import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Please feel free to contact us</h2>
        <p>
          If you need any further information, visit us at the clinic or fill the form below. <br />
          Contact us today to book your appointment and experience the power of homeopathy.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4675099392745!2d72.87459407519864!3d21.2131568804709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0533c65adbe73%3A0xb5c64b0d6e6a85d7!2sPoddar%20Arcade%2C%20Surat!5e0!3m2!1sen!2sin!4v1715774560000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <form
          className="contact-form"
          action="mailto:satyamhomoeopathy@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <h3>Quick Inquiry</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
