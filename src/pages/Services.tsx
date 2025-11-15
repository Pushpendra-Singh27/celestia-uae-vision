import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedImage3D } from '@/components/ui/AnimatedImage3D';
import aviationImage from '@/assets/aviation-investment.jpg';
import commodityImage from '@/assets/commodity-trading.jpg';
import PageHero from '@/components/PageHero';

const Services = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: 'aviation',
      title: 'Aviation Investments',
      image: aviationImage,
      overlayImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Earn from aircraft leasing, aviation operations, and logistics infrastructure—an exclusive, fast-growing sector.',
      roi: 'Up to 28% ROI',
      minInvestment: 'AED 2M / AED 12M',
      minPeriod: '5 years',
      route: '/services/aviation'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Investments',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      overlayImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Invest in premium commercial and residential properties with strong rental yields and capital appreciation.',
      roi: 'Up to 22% ROI',
      minInvestment: 'AED 2M',
      minPeriod: '5 years',
      route: '/services/real-estate'
    },
    {
      id: 'commodity',
      title: 'Commodity Trading',
      image: commodityImage,
      overlayImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
      description: 'Diversify with gold, oil, and high-demand global commodities. A powerful hedge against inflation and market volatility.',
      roi: 'Up to 36% ROI',
      minInvestment: 'AED 150K',
      minPeriod: '1 year',
      route: '/services/commodity'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      <PageHero
        eyebrow="Our Services"
        title="Investment Services"
        subtitle="Explore our exclusive investment opportunities across various high-growth sectors"
      />

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true, margin: '-50px 0px' }}
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative glass-card p-4 sm:p-6 group cursor-pointer overflow-hidden h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-card opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-4 overflow-hidden rounded-lg bg-gray-800">
                    <AnimatedImage3D
                      src={service.image}
                      alt={service.title}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                      revealDirection="up"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col p-2 sm:p-3">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-luxury rounded-lg flex items-center justify-center mb-4"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                        {service.title.charAt(0)}
                      </span>
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto space-y-2">
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-muted-foreground">Expected ROI:</span>
                        <span className="font-semibold text-primary">{service.roi}</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-muted-foreground">Min. Investment:</span>
                        <span className="font-semibold">{service.minInvestment}</span>
                      </div>
                      <div className="flex justify-between text-sm sm:text-base">
                        <span className="text-muted-foreground">Min. Period:</span>
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
                    transition={{ 
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }}
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
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: '-50px 0px' }}
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
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }}
                viewport={{ once: true, margin: '-50px 0px' }}
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