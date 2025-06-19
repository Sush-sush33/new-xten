
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-3">
          <div className="footer-section">
            <h3 className="footer-title">XTEN IT</h3>
            <p className="footer-description">
              Leading IT solutions provider in Nepal, delivering innovative technology services to help businesses thrive in the digital age.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-details">
              <p>📍 POKHARA BRANCH, Kaski, Nepal</p>
              <p>📞 +977-61-123456</p>
              <p>✉️ info@xtenit.com.np</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 XTEN IT PVT.LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
