import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">The Smart, Low-Cost ERP Your College Already Owns</h1>
          <p className="hero-subheading">
            Stop juggling separate ledgers. EduConnect intelligently connects familiar cloud apps like Google Forms and Sheets into a cohesive, real-time campus management system.
          </p>
          <div className="hero-buttons">
            <a href="#how-it-works" className="hero-button primary">See How It Works</a>
            <Link to="/register/school" className="hero-button secondary">Onboard Your School</Link>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="https://placehold.co/600x400/3498db/ffffff?text=EduConnect+Platform" 
            alt="EduConnect Platform Showcase" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

