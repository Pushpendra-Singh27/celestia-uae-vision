import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  const [textRef, textInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { value: '28%', label: 'Max ROI' },
    { value: '500M+', label: 'AED Managed' },
    { value: '1000+', label: 'Investors' },
    { value: '15+', label: 'Years Experience' }
  ];

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative min-h-screen overflow-hidden parallax-section transform-3d"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y, scale }}
        className="parallax-bg"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-40 left-10 w-24 h-24 bg-primary-glow/20 rounded-full blur-lg"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={textInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-4xl md:text-7xl font-bold leading-tight"
              >
                <span className="block text-foreground">PREMIUM</span>
                <span className="block text-luxury text-glow animate-glow-pulse">
                  INVESTMENT
                </span>
                <span className="block text-foreground">SOLUTIONS</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              >
                Your trusted partner in financial growth across 
                <span className="text-primary font-semibold"> Aviation</span>, 
                <span className="text-primary font-semibold"> Real Estate</span>, and 
                <span className="text-primary font-semibold"> Commodities</span>
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury text-lg px-12 py-4 group relative overflow-hidden"
              >
                <span className="relative z-10">Start Investing</span>
                <motion.div
                  className="absolute inset-0 bg-primary-glow"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-12 py-4 text-lg text-foreground hover:text-primary transition-all duration-500 border border-primary/30 hover:border-primary/60 rounded-xl"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={textInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="pt-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={textInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-500"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-primary-glow rounded-full mt-2"
          />
        </motion.div>
        <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wide">
          Scroll to Explore
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;