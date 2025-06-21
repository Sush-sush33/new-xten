import React from 'react';
import './About.css';
import aboutImage from '../assets/About1.png'; // Use proper import

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-wrapper">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About XTEN IT</h2>
            <p className="about-description">
              We are a leading IT company dedicated to providing innovative technology solutions 
              that drive business growth and digital transformation. With years of experience 
              and a team of skilled professionals, we deliver excellence in every project.
            </p>
            <p className="about-description">
              Our mission is to empower businesses with cutting-edge technology solutions that 
              streamline operations, enhance productivity, and create lasting value. We believe 
              in building long-term partnerships with our clients.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>150+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>80+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>7+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <a href="#contact" className="btn">Learn More</a>
          </div>

          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Team collaboration" className="about-image" />
            <div className="about-overlay">
              <h4>Innovation Driven</h4>
              <p>Cutting-edge solutions for modern businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
