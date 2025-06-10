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

      // Pick top 3 related blogs
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


  <div className="blog-detail-wrapper">  {/* NEW WRAPPER */}
    <div className="blog-detail-card">
      {blog.imageUrl && (
        <img src={blog.imageUrl} alt={blog.title} className="blog-detail-img" />
      )}

      <div className="blog-detail-title">
        <h2>{blog.title}</h2>
      </div>

      <div className="blog-detail-markdown">
        <MarkdownPreview
          source={blog.content}
          className="blog-detail-markdown"
        />
      </div>
    </div>
  </div>
  <div className="back-btn-wrapper">
  <button className="back-btn" onClick={() => window.history.back()}>
    ← Back to Blogs
  </button>
</div>

  {/* Related Blogs */}
  <h3 style={{ marginTop: "3rem", textAlign: "center" }}>Related Blogs</h3>
  <div className="blog-detail-related-blogs-grid">
    {relatedBlogs.map((b) => (
      <div className="blog-card" key={b.id}>
        <img src={b.imageUrl} alt={b.title} />
        <h3>{b.title}</h3>
        <p>{b.description}</p>
        <a className="learn-more" href={`/blogs/${b.id}`}>Read More</a>
      </div>
    ))}
  </div>
</main>

      <Footer />
    </>
  );
};

export default BlogDetail;