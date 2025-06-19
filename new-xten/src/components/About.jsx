import React from 'react';
import './About.css';
import aboutImage from '../assets/About us.png';
const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content grid grid-2">
          <div className="about-text">
            <h2 className="section-title text-left">About XTEN IT</h2>
            <p className="about-description">
              We are a leading IT company dedicated to providing innovative technology solutions 
              that drive business growth and digital transformation. With years of experience 
              and a team of skilled professionals, we deliver excellence in every project.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
            </div>
            <a href="#contact" className="btn">Learn More</a>
          </div>
          
          <div className="about-image">
            <img 
              src="src\assets\About us.png" 
              alt="A diverse team of professionals collaborating around a table in a modern office, with the text About us visible in the image. The environment is bright and welcoming, conveying a positive and productive atmosphere." 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;