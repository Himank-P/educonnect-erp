import React from 'react';
import Hero from './Hero';
import WhyEduConnect from './WhyEduConnect';
import PlatformOverview from './PlatformOverview'; // Replaced HowItWorks
import Features from './Features';
import Testimonials from './Testimonials';
import CtaSection from './CtaSection';

function HomePage() {
  return (
    <>
      <Hero />
      <WhyEduConnect />
      <PlatformOverview /> 
      <Features />
      <Testimonials />
      <CtaSection />
    </>
  );
}

export default HomePage;

