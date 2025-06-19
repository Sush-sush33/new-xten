
import React from 'react';
import './Hero.css';
import ceoImg from '../assets/ceo.png'; 
import heroImg from '../assets/hero1.png'; 

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
      <img
        src={ceoImg}
        alt="Business leader smiling confidently, dressed in professional attire, standing in a modern office environment with a bright and welcoming atmosphere"
        className="bg-element-1"
      />
      <img
        src={heroImg}

        alt="Team of IT professionals collaborating around a desk with laptops and digital devices, surrounded by abstract technology-themed graphics, conveying a sense of innovation and teamwork"
        className="bg-element-2"
      />
      </div>
      
      <div className="container">
      <div className="hero-content">
        <h1 className="hero-title">
        Innovative IT Solutions for Your Business
        </h1>
        <p className="hero-subtitle">
        We provide cutting-edge technology services to help your business grow and succeed in the digital world.
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
