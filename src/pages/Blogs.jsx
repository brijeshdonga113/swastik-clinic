import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';
import './Blogs.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const blogList = blogSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogList);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Helmet>
        <title>Blogs | Swastik Clinic</title>
        <meta name="description" content="Read latest health blogs from Swastik Clinic" />
      </Helmet>

      <Header />
      <main className="blogs-page-section">
        <h2>Our Health Blog</h2>
        <p>Explore health tips, insights, and articles curated by our experts to support your well-being.</p>

        <div className="blogs-grid">
          {blogs.map(blog => (
            <div className="blogs-card" key={blog.id}>
              <img
                src={blog.imageUrl || 'https://via.placeholder.com/400x200?text=No+Image'}
                alt={blog.title}
              />
              <div className="blogs-card-content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Link to={`/blogs/${blog.id}`} className="btn">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;