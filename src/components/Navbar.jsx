import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="/" className="navbar-logo">
          AKSHITA GUPTA
        </a>

        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <a href={link.href} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
