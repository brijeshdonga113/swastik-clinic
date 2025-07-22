import React from 'react';
import './About.css';
import akshayhp from '../assests/akshayhp.png';

const About = () => {
  return (
    <section className="home-about-section section">
      <div className="page-container">
        <div className="home-about-content">
          <div className="home-about-image">
            <img src={akshayhp} alt="Dr. Akshay Chovatiya" />
          </div>
          <div className="home-about-text">
            <h4>Know more about homoeopathy doctor</h4>
            <h2>Dr. Akshay Chovatiya</h2>
            <p>Dr. Akshay Chovatiya has over 4 years of experience in treating a wide variety of chronic and acute illnesses with safe, gentle, and holistic homeopathy treatment.</p>
            <p><strong>Swastik Homeopathy</strong> is one of the top clinics in Surat, dedicated to helping patients achieve long-term wellness through natural healing methods.</p>
            <a href="/about" className="btn">Read More</a>
            <div className="home-about-stats">
              <div className="home-about-stat-box">1000+ patients treated</div>
              <div className="home-about-stat-box">4+ years of experience</div>
              <div className="home-about-stat-box">Offline & Online Consultations</div>
              <div className="home-about-stat-box">No Side Effects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;