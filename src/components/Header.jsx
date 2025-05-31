import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assests/logoWhite.png'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="page-container header-inner">
        <div className="logo-area">
          <img src={logo} alt="Swastik Logo" className="site-logo" />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/contact" className="btn">Book Appointment</Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
