import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SubmitBlog.css';

const SubmitBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    content: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), {
        ...formData,
        createdAt: Timestamp.now(),
      });
      setSubmitted(true);
      setFormData({ title: '', description: '', imageUrl: '', content: '' });
    } catch (error) {
      console.error('Error adding blog:', error);
    }
  };

  return (
    <>
      <Header />
      <main className="submit-blog-page">
        <h2>Submit a Blog</h2>
        {submitted && <p className="success">✅ Your blog was submitted!</p>}
        <form onSubmit={handleSubmit} className="submit-form">
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Short Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Full Blog Content"
            value={formData.content}
            onChange={handleChange}
            rows={8}
            required
          ></textarea>
          <button type="submit" className="btn">Submit Blog</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SubmitBlog;
