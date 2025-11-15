import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const ContactSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const contactInfo = [
    {
      title: "Dubai Office",
      address: "Bank Street Building - Khalid Bin Al Waleed Rd - Al Hamriya - Dubai - United Arab Emirates",
      phone: "+91 77158 41612",
      email: "invest@celestiacapitals.com",
      delay: 0
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="contact" 
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        style={{ y, rotateX }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary-glow/15 rounded-full blur-2xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-primary text-sm uppercase tracking-widest font-semibold mb-4"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Start Your</span>{' '}
            <span className="text-luxury text-glow">Investment Journey</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Connect with our investment experts and discover how Celestia Capitals 
            can help you achieve your financial goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Schedule a Consultation
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground"
                    placeholder="Enter your first name"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground"
                    placeholder="Enter your last name"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Investment Interest
                </label>
                <select className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground">
                  <option value="">Select investment type</option>
                  <option value="aviation">Aviation Investments</option>
                  <option value="real-estate">Real Estate Investments</option>
                  <option value="commodity">Commodity Trading</option>
                  <option value="portfolio">Diversified Portfolio</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Investment Amount (AED)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground"
                  placeholder="Minimum AED 100,000"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-luxury w-full text-lg py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 + info.delay }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500"
              >
                <h4 className="text-xl font-bold text-primary mb-4">{info.title}</h4>
                <div className="space-y-3">
                  <p className="text-muted-foreground flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {info.address}
                  </p>
                  <p className="text-muted-foreground flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {info.phone}
                  </p>
                  <p className="text-muted-foreground flex items-center">
                    <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {info.email}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="glass-card p-8 rounded-2xl border border-primary/20"
            >
              <h4 className="text-xl font-bold text-foreground mb-6">Why Choose Celestia Capitals?</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-muted-foreground">Licensed & Regulated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-muted-foreground">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-muted-foreground">500M+ AED Managed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-muted-foreground">Award-Winning Team</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;