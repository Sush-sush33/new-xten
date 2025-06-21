import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Hero from './Hero';
import About from './About';
import Services from './Services';
import Team from './Team';
import Portfolio from './Portfolio';
import Contact from './Contact';

import './App.css';

// Optional: Import TooltipProvider, Toaster, Sonner if you actually use them
// import { TooltipProvider } from 'some-library';
// import { Toaster } from 'another-library';
// import { Sonner } from 'another-library';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider> */}
      {/* <Toaster />
      <Sonner /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Team />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;
