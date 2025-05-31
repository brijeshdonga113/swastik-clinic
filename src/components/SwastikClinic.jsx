import React from 'react';

import './SwastikClinic.css';


const SwastikClinic = () => {
  return (
    <div className="swastik-site">
      <section className="hero" id="home">
        <div className="hero-content">
            <p>Celebrate World Homeopathy Day with a Special Offer!</p>
            <h1>First Consultation <span className="highlight">FREE</span></h1>
            <p>Limited slots available!</p>
            <a className="btn" href='/contact'>Book an Appointment</a>
        </div>
      </section>
    </div>
  );
};

export default SwastikClinic;
