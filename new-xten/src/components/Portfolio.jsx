
import React from 'react';
import './Portfolio.css';
import project1 from '../assets/Investment Management System.png';
import project2 from '../assets/Task Tracking App.png';
import project3 from '../assets/Property Management System .png';
import project4 from '../assets/Nova CRM.png';
import project5 from '../assets/CRM.png';



const Portfolio = () => {
  const projects = [
    {
      title: "Investment Management System",
      description: "Modern online shopping platform with payment integration",
      image: project1,
      category: "Finance"
    },
    {
      title: "Task Tracking App",
      description: "Secure banking application with biometric authentication",
      image: project2,
      category: "Mobile App"
    },
    {
      title: "Property Management System",
      description: "Enterprise cloud infrastructure setup and migration",
      image: project3,
      category: "Management"
    },
    {
      title: "Nova CRM",
      description: "Comprehensive digital marketing strategy and execution",
      image: project4,
      category: "Customer Centric"
    },

    {
      
      title: "Customer Relationship System",
      description: "Enterprise solution for customer management",
      image:project5,
      category: "CRM",
    }

  ];

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore some of our recent projects and success stories
        </p>
        
        <div className="portfolio-grid grid grid-2">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
