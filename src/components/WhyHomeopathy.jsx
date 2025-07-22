// WhyHomeopathy.jsx

import React from 'react';
import {
  FaHandHoldingHeart,
  FaSearch,
  FaSpa,
  FaGlobe
} from 'react-icons/fa';
import './WhyHomeopathy.css';

import whyImg5 from '../assests/whyImg5.png';

const WhyHomeopathy = () => {
  const features = [
    {
      icon: <FaHandHoldingHeart size={28} />,
      title: "Safe and Gentle",
      desc: "Homeopathy works with your body’s natural healing power. It has very few side effects and is gentle on people of all ages."
    },
    {
      icon: <FaSearch size={28} />,
      title: "Treats the Root Cause",
      desc: "Instead of just covering up symptoms, homeopathy looks for the cause of your illness. This helps bring lasting relief."
    },
    {
      icon: <FaSpa size={28} />,
      title: "Holistic Approach",
      desc: "Homeopathy cares for your whole self—body, mind, and spirit. It works to improve overall well-being."
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Widely Practiced",
      desc: "Homeopathy is used in over 80 countries. It is recognized as a complete system of medicine in many parts of the world."
    }
  ];

  return (
          <section className="why-homeopathy">
              <div className="why-content"> 
              <h2>Why Homeopathy? </h2>
                  <div className="why-grid">
                    {features.map((f, i) => (
                      <div className="why-card" key={i}>
                        <div className="why-icon">{f.icon}</div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                  ))}
                </div>
              </div>

              <div className="why-image">
                <img src={whyImg5} alt="homeopathy on leaf" />
              </div>
         </section>

  );
};

export default WhyHomeopathy;
