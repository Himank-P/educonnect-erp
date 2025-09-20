import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // This effect adds/removes a class to the body to prevent scrolling
  // when the mobile menu is open.
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function to remove the class if the component unmounts
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Overlay for darkening the background when menu is open */}
      <div 
        className={menuOpen ? "overlay show" : "overlay"} 
        onClick={() => setMenuOpen(false)}
      ></div>

      <header className="main-header">
        <div className="container">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            EduConnect
          </Link>

          {/* Hamburger Menu Button - Animates to an "X" */}
          <button 
            className={menuOpen ? "hamburger-menu open" : "hamburger-menu"} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Side Navigation Panel */}
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <ul>
              <li><NavLink to="/" onClick={handleLinkClick}>Home</NavLink></li>
              <li><NavLink to="/dashboard" onClick={handleLinkClick}>Dashboard</NavLink></li>
              <li><NavLink to="/fees" onClick={handleLinkClick}>Fees</NavLink></li>
              <li><NavLink to="/alumni" onClick={handleLinkClick}>Alumni</NavLink></li>
              
              {/* This is the new link we added */}
              <li><NavLink to="/register" onClick={handleLinkClick} className="register-link">Register</NavLink></li> 
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

