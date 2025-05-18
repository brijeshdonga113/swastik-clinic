import React from 'react';
import './TreatmentsP.css';

const treatmentsP = [
  {
    title: "Pediatric Disorder and Counselling",
    desc: "Homeopathy is a gentle, non-invasive, and natural treatment option for children. It focuses on treating the root cause of the problem rather than just the symptoms.",
  },
  {
    title: "Psychological Disorder and Counselling",
    desc: "Homeopathy is a natural and gentle approach to treating mental health disorders. It addresses emotional and psychological imbalances rather than suppressing symptoms.",
  },
  {
    title: "Skin Diseases",
    desc: "Homeopathy offers a holistic approach to skin diseases by targeting the root cause instead of just external symptoms.",
  },
  {
    title: "Respiratory Diseases",
    desc: "Homeopathy provides a root-cause solution for respiratory diseases, going beyond symptom management.",
  },
  {
    title: "Male Diseases",
    desc: "Homeopathy holistically treats male health issues, aiming at the underlying cause of the problem.",
  },
  {
    title: "Female Diseases",
    desc: "Homeopathy supports women's health through natural methods focused on resolving core health issues.",
  },
  {
    title: "Joint Disease",
    desc: "For joint pain, homeopathy addresses inflammation, wear and tear, or autoimmune issues from their origin.",
  },
  {
    title: "Hair Fall Treatment",
    desc: "Homeopathy targets causes like hormonal imbalances, stress, or scalp issues to reduce hair fall naturally.",
  },
  {
    title: "Asthma Treatment",
    desc: "Homeopathy treats asthma by resolving allergies, inflammation, or immune imbalances causing it.",
  },
  {
    title: "Diabetes",
    desc: "Homeopathy focuses on insulin resistance or pancreatic dysfunction for long-term diabetes management.",
  },
  {
    title: "Cardiovascular Disease",
    desc: "Cardiac issues are treated by targeting stress, diet, and genetics—addressing the full picture naturally.",
  },
  {
    title: "Hormonal Imbalance",
    desc: "Homeopathy naturally balances hormones by fixing root lifestyle and metabolic causes.",
  },
];

const TreatmentsP = () => {
  return (
    <section className="treatments section">
      <h2 className="section-title">Conditions We Treat</h2>
      <div className="treatment-grid">
        {treatmentsP.map((item, index) => (
          <div className="treatment-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#contact" className="btn">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TreatmentsP;
