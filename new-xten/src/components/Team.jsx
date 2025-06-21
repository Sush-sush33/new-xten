
import React from 'react';
import './TeamHorizontal.css';
import ceoImg from '../assets/deepak poudel .png';
import sundarImg from '../assets/Sundar-Adhikari.png';
import amritImg from '../assets/Amrit-Adhikari.png';

const TeamHorizontal = () => {
  const teamMembers = [
    {
      name: "Deepak Poudel",
      position: "CEO & Founder",
      image: ceoImg
    },
    {
      name: "Sundar Adhikari",
      position: "Director",
      image: sundarImg
    },
    {
      name: "Amrit Adhikari",
      position: "Director",
      image: amritImg
    }
  ];

  return (
     <section className="team-section">
      <h2>Our Team</h2>
      <p className="subtitle">Meet the talented professionals behind our success</p>
      
      <div className="team-row">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <div className="member-photo-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="member-photo" 
              />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamHorizontal;