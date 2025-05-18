import React from 'react';
import {
  FaFacebookF, FaYoutube,FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope,FaClock
} from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assests/logoWhite.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-box about">
          <img src={logo} alt="Swastik Homeopathy Logo" className="footer-logo" />
          {/* <p>We offers personalized natural healing using time-tested homeopathic methods.</p> */}
          <div className="footer-hours">
          <h5><FaClock style={{ marginRight: '6px' }} /> Opening Hours</h5>
          <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/treatments'>Treatments</a></li>
            <li><a href='/blogs'>Blogs</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Surat & Junagadh, Gujarat</p>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> swastik@homeopathy.com</p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Swastik Homeopathy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
