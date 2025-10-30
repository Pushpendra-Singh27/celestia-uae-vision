import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const stats = [
    { value: '100M+', label: 'AED Managed' },
    { value: '250+', label: 'Investors' },
    { value: '10+', label: 'Years Experience' }
  ];

  return (
    <section 
      ref={containerRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: yBg,
          scale,
          opacity
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, margin: '-100px 0px' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Premium <span className="text-primary">Investment</span> Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Your trusted partner in financial growth across Aviation, Real Estate, and Commodities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-20 max-w-4xl mx-auto px-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: 0.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 mx-auto"
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-1"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <span className="text-white/70 text-sm mt-2 block">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;