import React from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import HeroSection from '@/components/HeroSection';
import InvestmentProducts from '@/components/InvestmentProducts';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <AnimatedNavigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Investment Products */}
      <InvestmentProducts />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
