import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your investment journey? Get in touch with our expert advisors
            </p>
          </motion.div>
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
                Business Bay, Dubai<br />
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
                +971 XX XXX XXXX<br />
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