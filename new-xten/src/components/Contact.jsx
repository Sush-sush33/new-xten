
import React, { useState } from 'react';
import './Contact.css';
import '../assets/QR.png'; // Ensure the path is correct for your project structure


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Ready to start your project? Contact us today for a free consultation
      </p>
      
      <div className="contact-content grid grid-2">
        <div className="contact-info">
        <div className="info-item">
          <h3>📍 Address</h3>
          <p>POKHARA BRANCH<br />Kaski, Nepal</p>
        </div>
        
        <div className="info-item">
          <h3>📞 Phone</h3>
          <p>+977-61-123456</p>
        </div>
        
        <div className="info-item">
          <h3>✉️ Email</h3>
          <p>info@xtenit.com.np</p>
        </div>
        
        <div className="payment-info">
          <h3>💳 Payment Options</h3>
          <div className="payment-image">
          <img
            src="src\assets\QR.png.png"
            alt="FonePay QR code for payment with the text FonePay displayed above a QR code in a clean and professional layout, inviting users to scan for payment. The surrounding environment is a digital contact page with a friendly and welcoming tone."
          />
          </div>
        </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          />
        </div>
        
        <div className="form-group">
          <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          />
        </div>
        
        <div className="form-group">
          <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          />
        </div>
        
        <div className="form-group">
          <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      </div>
    </section>
    );
};

export default Contact;