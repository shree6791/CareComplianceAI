import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Features from './components/Features';
import Benefits from './components/Benefits';
import WhoItIsFor from './components/WhoItIsFor';
import EarlyAccess from './components/EarlyAccess';
import HipaaSection from './components/HipaaSection';
import HumanTouch from './components/HumanTouch';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'CareCompliance.ai | Home Health Agency Compliance Made Simple';
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      });
    });
    
    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Features />
        <Benefits />
        <WhoItIsFor />
        <EarlyAccess />
        <HipaaSection />
        <HumanTouch />
      </main>
      <Footer />
    </div>
  );
}

export default App;