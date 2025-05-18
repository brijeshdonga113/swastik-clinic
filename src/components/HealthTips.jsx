// HealthTips.jsx

import React from 'react';
import './HealthTips.css';
import img1 from "../assests/whyImg.png";
import img2 from "../assests/whyImg2.png";
import img3 from "../assests/whyImg3.png";
import img4 from "../assests/whyImg4.png";



const tips = [
  {
    title: "Stay Hydrated",
    desc: "Drinking plenty of water helps flush toxins and keeps your body balanced.",
    image: img1
  },
  {
    title: "Sleep Well",
    desc: "Good sleep restores energy, boosts immunity, and supports healing.",
    image: img2
  },
  {
    title: "Natural Remedies",
    desc: "Use homeopathic remedies for seasonal issues like cold, allergies, and stress.",
    image: img3
  },
  {
    title: "Mind-Body Balance",
    desc: "Practice meditation and breathing exercises for emotional wellness.",
    image: img4
  }
];

const HealthTips = () => {
  return (
    <section className="health-tips">
      <h2>Homeopathy Health Tips</h2>
      <p>Simple natural tips to maintain wellness and boost your immunity every day.</p>
      <div className="blog-grid">
        {tips.map((tip, i) => (
          <div className="blog-card" key={i}>
            <img src={tip.image} alt={tip.title} />
            <div className="blog-content">
              <h4>{tip.title}</h4>
              <p>{tip.desc}</p>
              <a href='/blogs'>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthTips;
