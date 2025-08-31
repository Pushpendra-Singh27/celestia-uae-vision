import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Services = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'aviation',
      title: 'Aviation Investments',
      description: 'Earn from aircraft leasing, aviation operations, and logistics infrastructure—an exclusive, fast-growing sector.',
      roi: 'Up to 28% ROI',
      minInvestment: 'AED 200,000',
      minPeriod: '2 years',
      route: '/services/aviation'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Investments',
      description: 'Invest in premium commercial and residential properties with strong rental yields and capital appreciation.',
      roi: 'Up to 22% ROI',
      minInvestment: 'AED 150,000',
      minPeriod: '5 years',
      route: '/services/real-estate'
    },
    {
      id: 'commodity',
      title: 'Commodity Trading',
      description: 'Diversify with gold, oil, and high-demand global commodities. A powerful hedge against inflation and market volatility.',
      roi: 'Up to 36% ROI',
      minInvestment: 'AED 100,000',
      minPeriod: '1 year',
      route: '/services/commodity'
    }
  ];

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
              Investment Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Explore our exclusive investment opportunities across various high-growth sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative glass-card p-8 h-[500px] group cursor-pointer overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-card opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1">
                    <motion.div
                      className="w-16 h-16 bg-gradient-luxury rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-2xl font-bold text-primary-foreground">
                        {service.title.charAt(0)}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Expected ROI:</span>
                        <span className="font-semibold text-primary">{service.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Min. Investment:</span>
                        <span className="font-semibold">{service.minInvestment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Min. Period:</span>
                        <span className="font-semibold">{service.minPeriod}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Read More Button - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredService === service.id ? 1 : 0,
                      y: hoveredService === service.id ? 0 : 20 
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-auto"
                  >
                    <Button
                      onClick={() => navigate(service.route)}
                      className="w-full btn-luxury group-hover:shadow-glow"
                    >
                      Read More
                    </Button>
                  </motion.div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'radial-gradient(circle at center, hsla(42, 95%, 45%, 0.1) 0%, transparent 70%)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Simple 3-Step Process</h2>
            <p className="text-xl text-muted-foreground">
              Our streamlined process makes investing simple, secure, and profitable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'Speak with our expert advisors to understand the best investment option for your financial goals.'
              },
              {
                step: '2',
                title: 'Personalized Investment Plan',
                description: 'We tailor a high-yield, secure strategy in Real Estate, Aviation, or Commodities based on your needs.'
              },
              {
                step: '3',
                title: 'Growth & Reporting',
                description: 'Sit back and watch your investment grow. We provide regular updates, performance tracking, and full transparency.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;