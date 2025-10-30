import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { AnimatedImage3D } from '@/components/ui/AnimatedImage3D';
import { Link } from 'react-router-dom';

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start'],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={scrollRef} className="relative min-h-screen">
      {/* Fixed Hero Background */}
      <motion.div
        className="fixed inset-0 w-full h-screen -z-10"
        style={{ opacity: bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-[1.02]"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="/videos/dubai-aerial.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </motion.div>

      <AnimatedNavigation useWhiteText={true} />

      {/* Hero Content */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 md:pt-0"
        style={{ opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Celestia Capital
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 px-4">
            Your Gateway to Premium Investment Opportunities
          </p>
          <Link to="/services">
            <Button size="lg" className="btn-luxury">
              Explore Opportunities
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="relative bg-background">
        <motion.div
          className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent"
          style={{
            width: useTransform(scrollYProgress, [0.1, 0.2], ['90%', '100%']),
            borderTopLeftRadius: useTransform(scrollYProgress, [0.1, 0.2], ['2rem', '0rem']),
            borderTopRightRadius: useTransform(scrollYProgress, [0.1, 0.2], ['2rem', '0rem']),
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <div className="px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Strategic Investment Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We specialize in high-yield investment opportunities across Aviation, Real Estate, and Commodity sectors.
                </p>
                <Link to="/about">
                  <Button className="btn-luxury">Learn More</Button>
                </Link>
              </motion.div>
              <AnimatedImage3D
                src="/images/home/investment-dashboard.jpg"
                alt="Investment Dashboard"
                className="w-full aspect-[4/3]"
                revealDirection="right"
              />
            </div>

            {/* Investment Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              {(
                [
                  { number: '36%', label: 'Maximum Annual Returns' },
                  { number: 'AED 100K', label: 'Minimum Investment' },
                  { number: '24/7', label: 'Expert Support' },
                ] as const
              ).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 text-center"
                >
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-luxury bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
