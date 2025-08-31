import React from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import TestimonialSection from '@/components/TestimonialSection';
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
      
      {/* About Section */}
      <AboutSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Testimonials Section */}
      <TestimonialSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
