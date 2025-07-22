import './HealthTips.css';
import img1 from "../assests/whyImg.png";
import img2 from "../assests/whyImg2.png";
import img3 from "../assests/whyImg3.png";
import img4 from "../assests/whyImg4.png";
import { Link } from 'react-router-dom';



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
                <div className="health-tips-section">
            <h2>Health Tips</h2>
            <p>Some introduction text</p>

            <div className="health-blog-grid">
              {tips.map(tip => (
                <div className="health-blog-card" key={tip.id}>
                  <img src={tip.image} alt={tip.title} />
                  <div className="health-blog-content">
                    <h4>{tip.title}</h4>
                    <p>{tip.desc}</p>
                    <a href={`/blogs/}`}>Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </section>
  );
};

export default HealthTips;
