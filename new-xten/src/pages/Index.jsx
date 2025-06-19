
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './Index.css';

const Index = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;