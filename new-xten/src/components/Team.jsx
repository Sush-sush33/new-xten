
import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Deepak Poudel",
      position: "CEO & Founder",
      image: "C:\Users\tiwar\Desktop\new-xten\new-xten\src\assets\ceo.png"
    },
    {
      name: "Sundar Adhikari",
      position: "Director",
      image: "C:\Users\tiwar\Desktop\new-xten\new-xten\src\assets\Sundar-Adhikari.png"
    },
    {
      name: "Amrit Adhikari",
      position: "Director",
      image: "C:\Users\tiwar\Desktop\new-xten\new-xten\src\assets\Amrit-Adhikari.png"
    },
    
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the talented professionals behind our success
        </p>
        
        <div className="team-grid grid grid-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;