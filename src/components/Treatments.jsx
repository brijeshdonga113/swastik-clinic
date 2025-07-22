import React from 'react';
import './Treatments.css';
import {
    MdChildCare,
    MdPsychology,
    MdFaceRetouchingNatural,
    MdAir,
    MdMan,
    MdWoman,
    MdAccessibilityNew,
    MdNoAccounts,
    MdCoronavirus,
    MdBloodtype,
    MdFavorite,
    MdTransgender
  } from 'react-icons/md'; 

  const treatments = [
    { name: "Pediatric Disorder and Counselling", icon: <MdChildCare /> },
    { name: "Psychological Disorder and Counselling", icon: <MdPsychology /> },
    { name: "Skin Diseases", icon: <MdFaceRetouchingNatural /> },
    { name: "Respiratory Diseases", icon: <MdAir /> },
    { name: "Male Diseases", icon: <MdMan /> },
    { name: "Female Diseases", icon: <MdWoman /> },
    { name: "Joint Diseases", icon: <MdAccessibilityNew /> },
    { name: "Hair Fall Treatment", icon: <MdNoAccounts /> },
    { name: "Asthma Treatment", icon: <MdCoronavirus /> },
    { name: "Diabetes", icon: <MdBloodtype /> },
    { name: "Cardiovascular Disease", icon: <MdFavorite /> },
    { name: "Hormonal Imbalance", icon: <MdTransgender /> }
  ];

const Treatments = () => {
  return (
    <section className="treatment-section">
      <h2>Conditions We Treat</h2>
      <p>
        Looking for natural homeopathy treatment near Surat? Discover safe, holistic care for chronic conditions, allergies, skin issues, and more. Personalized treatments for all ages at Swastik Homeopathy Clinic. Book your consultation today!
      </p>
      <div className="treatment-grid">
        {treatments.map((item, i) => (
          <div key={i} className="treatment-box">
            <div className="treatment-icon">{item.icon}</div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatments;
