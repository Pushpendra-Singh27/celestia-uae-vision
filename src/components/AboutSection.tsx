import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-luxury bg-clip-text text-transparent">Celestia Capital</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              CELESTIA CAPITAL is a premier investment firm committed to creating extraordinary 
              wealth-building opportunities across high-growth sectors. With a strategic focus on 
              Real Estate, Aviation, and Commodities, we offer dynamic and diversified investment 
              avenues that deliver returns of up to 36%.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              At Celestia Capital, we blend deep market insight with disciplined investment strategies 
              to help our clients achieve sustainable, long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                36%
              </div>
              <div className="text-sm text-muted-foreground">Maximum ROI</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                3
              </div>
              <div className="text-sm text-muted-foreground">Investment Sectors</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Transparency</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 text-center group hover:shadow-luxury transition-all duration-300"
            >
              <div className="text-4xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;