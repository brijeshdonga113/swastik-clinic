import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Blogs.css';

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
      <main className="blogs-page-section">
        <h2>Our Blog</h2>
        <p>Explore latest health tips, remedies and wellness advice from Swastik Homeopathy Clinic.</p>

        <div className="blogs-grid">
          {blogs.map(blog => (
            <div className="blogs-card" key={blog.id}>
              <img src={blog.imageUrl} alt={blog.title} />
              <div className="blogs-card-content">
                <h4>{blog.title}</h4>
                <p>{blog.description}</p>
                <a href={`/blogs/${blog.id}`}>Read More</a>
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