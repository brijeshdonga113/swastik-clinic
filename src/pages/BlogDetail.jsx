import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BlogDetail.css';
import { Helmet } from 'react-helmet';
import MarkdownPreview from '@uiw/react-markdown-preview';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log("Fetching blog with ID:", id);
        const blogRef = doc(db, 'blogs', id);
        const blogSnap = await getDoc(blogRef);
        if (blogSnap.exists()) {
          setBlog(blogSnap.data());
        } else {
          console.error("No such blog exists in Firestore.");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    const fetchRelatedBlogs = async () => {
      const blogCollection = collection(db, 'blogs');
      const blogSnapshot = await getDocs(blogCollection);
      const allBlogs = blogSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(blog => blog.id !== id);

      // Pick top 3 related (optional: sort by date/tags later)
      setRelatedBlogs(allBlogs.slice(0, 3));
    };

    fetchBlog();
    fetchRelatedBlogs();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Swastik Clinic</title>
        <meta name="description" content={blog.content?.slice(0, 150)} />
      </Helmet>

      <Header />
      <main className="blogs-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/blogs">Blogs</Link> / <span>{blog.title}</span>
        </div>

        {/* Blog Detail */}
        <div className="blog-detail-card">
          {blog.imageUrl && (
            <img src={blog.imageUrl} alt={blog.title} className="blog-detail-img" />
          )}

          <h2>{blog.title}</h2>

          <MarkdownPreview
            source={blog.content}
            className="blog-detail-markdown"
          />
        </div>

        {/* Back Button */}
        <button className="back-btn" onClick={() => window.history.back()}>
          ← Back to Blogs
        </button>

        {/* Related Blogs */}
        <h3 style={{ marginTop: "3rem" }}>Related Blogs</h3>
        <div className="blogs-grid">
          {relatedBlogs.map((b) => (
            <div className="blog-card" key={b.id}>
              <img src={b.imageUrl} alt={b.title} />
              <h3>{b.title}</h3>
              <p>{b.description}</p>
              <Link className="learn-more" to={`/blogs/${b.id}`}>Learn More</Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogDetail;
