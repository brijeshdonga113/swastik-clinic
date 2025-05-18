import React, { useState } from 'react';
import './BlogFAQ.css';

const faqs = [
  {
    question: "What are the benefits of homeopathy?",
    answer: "Homeopathy offers natural, safe, and side-effect-free remedies that stimulate the body’s healing processes.",
  },
  {
    question: "Is homeopathic treatment slow?",
    answer: "Not necessarily. While it may take time for chronic conditions, acute issues often respond quickly.",
  },
  {
    question: "Can I take homeopathic and allopathic medicine together?",
    answer: "Yes, but it is always best to consult your doctor for proper guidance on combining treatments.",
  },
];

const BlogFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
          >
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{activeIndex === index ? '−' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogFAQ;
