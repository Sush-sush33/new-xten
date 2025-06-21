import React from 'react';
import './Services.css';

// ✅ Import all service images
import webImg from '../assets/web development.png';
import mobileImg from '../assets/Mobileapp.png';
import cloudImg from '../assets/cloud solution.png';
import marketingImg from '../assets/DigitalMarketing.png';
import consultingImg from '../assets/ITconsulting.png';
import securityImg from '../assets/cybersecurity.png';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies and responsive design",
      icon: "🌐",
      image: webImg
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience",
      icon: "📱",
      image: mobileImg
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for enhanced business operations",
      icon: "☁️",
      image: cloudImg
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media marketing, and digital advertising strategies to boost your online presence",
      icon: "📊",
      image: marketingImg
    },
    {
      title: "IT Consulting",
      description: "Strategic technology consulting and system optimization for business growth",
      icon: "💡",
      image: consultingImg
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats",
      icon: "🔒",
      image: securityImg
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation
        </p>
        
        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#contact" className="service-link">Learn More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
