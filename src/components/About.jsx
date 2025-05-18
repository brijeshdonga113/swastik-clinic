import React from 'react';
import './About.css';
import akshayhp from '../assests/akshayhp.png'

const About = () =>{
    return(
    <section className="about-section">
        <div className="about-image">
          <img src={akshayhp} alt="Dr. Akshay Chovatiya" />
        </div>
        <div className="about-text">
          <h4>Know more about homoeopathy doctor</h4>
          <h2>Dr. Akshay Chovatiya</h2>
          <p>Dr. Akshay Chovatiya has over 4 years of experience...</p>
          <p><strong>Swastik Homeopathy</strong> is a top clinic in Surat...</p>
          <a href='/about' className="btn">Read More</a>
          <div className="stats">
            <div className="stat-box">1000+ patients treated</div>
            <div className="stat-box">4+ years of experience</div>
            <div className="stat-box">Offline & Online Consultations</div>
            <div className="stat-box">No Side Effects</div>
          </div>
        </div>  
    </section>        

    )
}

export default About;