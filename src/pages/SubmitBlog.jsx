// SubmitBlog.jsx
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import db from '../firebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './SubmitBlog.css';

import MDEditor from '@uiw/react-md-editor';

const SubmitBlog = () => {
  const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
    content: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value || '' });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (result.secure_url) {
        setFormData((prev) => ({ ...prev, imageUrl: result.secure_url }));
      } else {
        console.error('Cloudinary upload failed:', result);
        alert('Image upload failed. Please try again.');
      }
      setUploading(false);
    } catch (error) {
      console.error('Image upload error:', error);
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
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

          <label>Upload Image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {uploading && <p>Uploading image...</p>}
          {formData.imageUrl && (
            <img
              src={formData.imageUrl}
              alt="Preview"
              style={{ width: '200px', margin: '1rem 0', borderRadius: '8px' }}
            />
          )}

          <label>Blog Content:</label>
          <MDEditor
            value={formData.content}
            onChange={handleContentChange}
            style={{ minHeight: '300px' }}
          />

          <button type="submit" className="btn" disabled={uploading}>
            {uploading ? 'Uploading Image...' : 'Submit Blog'}
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SubmitBlog;