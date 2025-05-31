import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import Blogs from './pages/Blogs';
import TreatmentsPage from './pages/TreatmentsPage';
import BlogDetail from './pages/BlogDetail';
import SubmitBlog from './pages/SubmitBlog';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/Blogs" element={<Blogs />} />
      <Route path="/treatments" element={<TreatmentsPage />} />
      <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/submit-blog" element={<SubmitBlog />} />
    </Routes>
  </Router>
  );
}

export default App;
