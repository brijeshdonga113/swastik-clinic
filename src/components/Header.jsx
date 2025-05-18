import React from 'react';
import './Header.css';
import logo from '../assests/logoWhite.png'; 



const Header = () => {
    return (
        <header className="main-header">
                <div className="page-container header-inner">
                    <div className="logo-area">
                    <img src={logo} alt="Swastik Logo" className="site-logo" />
                    </div>

                    <nav className="main-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/treatments">Treatments</a>
                    <a href="/Blogs">Blogs</a>
                    <a href="/contact">Contact</a>
                    {/* <a className="btn" href="/contact">Book Appointment</a> */}
                    </nav>   
                </div>
        </header>


    )
};

export default Header;