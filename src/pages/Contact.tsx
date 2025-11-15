import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { AnimatedImage3D } from '@/components/ui/AnimatedImage3D';
import businessMeetingImage from '@/assets/3d-rendering-business-meeting-working-room-office-building.jpg';
import businessmanChartImage from '@/assets/businessman-explaining-chart.jpg';
import PageHero from '@/components/PageHero';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Ready to start your investment journey? Get in touch with our expert advisors"
      />

      {/* Office Images Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedImage3D
              src={businessMeetingImage}
              alt="Our Office Reception"
              className="w-full h-[500px]"
              revealDirection="left"
            />
            <AnimatedImage3D
              src={businessmanChartImage}
              alt="Meeting Space"
              className="w-full h-[500px]"
              revealDirection="right"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Additional Contact Info */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Office</h3>
              <p className="text-muted-foreground">
                Bank Street Building - Khalid Bin Al Waleed Rd - Al Hamriya - Dubai<br />
                United Arab Emirates
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Phone</h3>
              <p className="text-muted-foreground">
                +91 77158 41612<br />
                Available 24/7
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <p className="text-muted-foreground">
                info@celestiacapital.com<br />
                support@celestiacapital.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;