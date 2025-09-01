import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, Variants, Easing } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const aboutImages = [
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1484&q=80'
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [aboutImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  // Animation values based on scroll progress
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ['2rem', '0rem']);
  const padding = useTransform(scrollYProgress, [0, 0.5], ['2rem', '0rem']);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={containerRef}
          className="relative z-10 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          variants={itemVariants}
        >
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="bg-gradient-luxury bg-clip-text text-transparent">Celestia Capital</span>
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16"
          >
            {/* Image Gallery */}
            <motion.div 
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={itemVariants}
            >
              {aboutImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute inset-0 w-full h-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: idx === imageIndex ? 1 : 0,
                    scale: idx === imageIndex ? 1 : 1.1,
                    transition: { 
                      duration: 1, 
                      ease: "easeInOut"
                    }
                  }}
                >
                  <img 
                    src={img}
                    alt={`About Celestia Capital ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>
              ))}
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8 text-white z-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Our Vision</h3>
                <p className="text-sm md:text-base opacity-90">
                  Leading the future of strategic investments with innovation and integrity
                </p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={itemVariants}
              className="space-y-6 text-left"
            >
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                CELESTIA CAPITAL is a premier investment firm committed to creating extraordinary 
                wealth-building opportunities across high-growth sectors. With a strategic focus on 
                Real Estate, Aviation, and Commodities, we offer dynamic and diversified investment 
                avenues that deliver exceptional returns.
              </motion.p>
              
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={itemVariants}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                At Celestia Capital, we blend deep market insight with disciplined investment strategies 
                to help our clients achieve sustainable, long-term growth.
              </motion.p>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Button 
                  onClick={() => navigate('/about')}
                  size="lg" 
                  className="btn-luxury px-8"
                >
                  Learn More
                </Button>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="outline" 
                  size="lg" 
                  className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
            variants={containerVariants}
          >
            {[
              { number: "10+", label: "Years Experience", icon: "🏆" },
              { number: "500+", label: "Clients Worldwide", icon: "🌎" },
              { number: "$1B+", label: "Assets Managed", icon: "📈" },
              { number: "24/7", label: "Support", icon: "🛡️" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-xl border border-muted/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;