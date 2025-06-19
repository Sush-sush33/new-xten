import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

import './App.css'; // Optional global styles (if you have any)

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
