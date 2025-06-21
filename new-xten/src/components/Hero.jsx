import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src="src/assets/hero11.png" alt="" className="bg-element-1" />
        <img src="src/assets/hero2.png" alt="" className="bg-element-2" />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Innovative IT Solutions for Your Business
          </h1>
          <p className="hero-subtitle">
            We provide cutting-edge technology services to help your business grow and succeed in the digital world. Transform your ideas into reality with our expert team.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </div>
       </section>
  );
};

export default Hero;