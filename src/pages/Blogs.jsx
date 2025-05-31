import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogFAQ from '../components/BlogFAQ';

import db from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

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
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <img src={blog.imageUrl} alt={blog.title} />
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <a className="learn-more" href={`/blogs/${blog.id}`}>Learn More</a>
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
