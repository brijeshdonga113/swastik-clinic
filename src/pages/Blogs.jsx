import React from 'react';
import './Blogs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import image from '../assests/whyImg3.png';
import BlogFAQ from '../components/BlogFAQ';

const blogData = [
  {
    title: 'What is Infertility and What Are the Causes?',
    description: 'Infertility is a problem that happens to many couples causing stress, anxiety, and emotional strain...',
    image: image,
  },
  {
    title: 'Homeopathic Treatment for Male Infertility',
    description: 'Many men around the world find it hard to become fathers. This can make them feel sad or stressed...',
    image: image,
  },
  {
    title: 'Best Ways to Get Glowing Skin in Summer',
    description: 'Summer is here, and with it comes the challenge of keeping your skin hydrated and glowing...',
    image: image,
  },
  {
    title: 'Managing Stress Naturally',
    description: 'Explore natural ways like homeopathy, yoga, and herbal therapy to reduce stress...',
    image: image,
  },
  {
    title: 'Boost Immunity with Homeopathy',
    description: 'Learn how homeopathic remedies can help strengthen your immune system and improve resilience...',
    image: image,
  },
  {
    title: 'Sleep Tips for Better Health',
    description: 'Good sleep supports healing and immunity. Discover tips to improve sleep naturally...',
    image: image,
  },
];

const Blogs = () => {
  return (
    <>
      <Header />
      <main className="blogs-page">
        <section className="tags-section">
          <button className="tag active">All</button>
          <button className="tag">Infertility</button>
          <button className="tag">Skin</button>
          <button className="tag">Stress</button>
          <button className="tag">Immunity</button>
          <button className="tag">Sleep</button>
        </section>

        <section className="blogs-grid">
          {blogData.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.image} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <a className="learn-more" href="#">Learn More</a>
            </div>
          ))}
        </section>
      </main>
      <BlogFAQ />
      <Footer />
    </>
  );
};

export default Blogs;
