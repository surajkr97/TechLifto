import React from 'react';
import Navbar from '@/components/Navbar.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Services from '@/components/Services.jsx';
import Pricing from '@/components/Pricing.jsx';
import Portfolio from '@/components/Portfolio.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;