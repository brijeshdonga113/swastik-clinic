import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';
import img1 from '../assests/akshayhp.png';
import '../App.css';
import BlogFAQ from '../components/BlogFAQ';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page">
        <div className="page-container">
          <section className="about-header">
            <h2>Welcome to Swastik Group of Clinics <br></br>Trusted Homeopathy Centers in Surat & Junagadh</h2>
            <p className="about-intro">
              At <strong>Swastik Group of Clinics</strong>, we are committed to bringing holistic, gentle, and effective homeopathic care
              to families across Gujarat. With locations in both <strong>Surat</strong> and <strong>Junagadh</strong>, our clinics provide personalized treatments
              that focus on long-term wellness rather than short-term symptom relief. Our experienced practitioners take time to
              understand the root causes of each condition, ensuring every patient receives compassionate and individualized care.
              Whether you're seeking help for chronic conditions or everyday concerns, Swastik is your partner in natural healing.
            </p>
          </section>

          {/* Doctor 1: Akshay – text left, image right */}
          <section className="about-content reverse">
            <div className="about-image">
              <img
                src={img1}
                alt="Dr. Akshay Chovatiya"
                className="rounded-image"
              />
            </div>
            <div className="about-text">
              <h3>Dr. Akshay Chovatiya</h3>
              <p>
                Dr. Akshay is a trusted name in homeopathy in Surat. With advanced qualifications in homeopathy and counselling
                psychology, he combines medical expertise with compassionate care. His goal is to address the root cause of your
                health issues—not just the symptoms. Whether you’re searching for the best homeopathy doctor in Surat or
                specialized care, Dr. Akshay’s holistic approach ensures you receive the best possible treatment.
              </p>
            </div>
          </section>

          {/* Doctor 2: Kishan – image left, text right */}
          <section className="about-content">
            <div className="about-image">
              <img
                src={img1}
                alt="Dr. Kishan"
                className="rounded-image"
              />
            </div>
            <div className="about-text">
              <h3>Dr. Kishan</h3>
              <p>
                Dr. Kishan is a highly qualified and compassionate B.D. (Homoeopathy) doctor dedicated to providing safe,
                natural, and effective homeopathic care. With years of experience in treating patients of all ages, he is
                recognized as one of the best homeopathic doctors in Junagadh.
              </p>
              <p>
                His clinic offers personalized treatment plans to address chronic and acute health issues, ensuring long-term
                wellness. With his empathetic approach and strong clinical results, Dr. Kishan brings a sense of comfort and
                healing to every patient.
              </p>
            </div>
          </section>
          <BlogFAQ />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
