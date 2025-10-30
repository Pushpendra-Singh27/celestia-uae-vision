import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Aviation = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-luxury bg-clip-text text-transparent">
              Aviation Investments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn from aircraft leasing, aviation operations, and logistics infrastructure—an exclusive, fast-growing sector
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-primary">Up to 28% ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The aviation industry represents one of the most lucrative investment opportunities, with 
                  consistent demand for aircraft leasing and aviation services worldwide.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Minimum Investment:</span>
                    <span className="text-primary">AED 12M</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Minimum Period:</span>
                    <span className="text-primary">5 years</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Expected ROI:</span>
                    <span className="text-primary">Up to 28% annually</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Bonus After Period:</span>
                    <span className="text-primary">Up to 6%</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-card p-8 rounded-2xl shadow-luxury"
                >
                  <h3 className="text-2xl font-bold mb-4 text-center">Investment Strategy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Aircraft leasing with guaranteed returns
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Aviation logistics and cargo operations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Ground handling services
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Maintenance and technical services
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Investment as cash infusion
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Equity through ownership of flight
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "High Potential Returns",
                  description: "Aviation investments typically yield higher returns due to the specialized nature and high demand of the sector."
                },
                {
                  title: "Diversified Portfolio",
                  description: "Spread risk across multiple aircraft, operators, and aviation service providers for enhanced stability."
                },
                {
                  title: "Professional Management",
                  description: "Our expert team handles all operational aspects, from aircraft selection to lease management."
                },
                {
                  title: "Regular Reporting",
                  description: "Comprehensive monthly reports on portfolio performance and market developments."
                },
                {
                  title: "Discounted Flying Hours",
                  description: "Enjoy preferential rates on private aviation services as an added benefit."
                },
                {
                  title: "Lock-in Bonus",
                  description: "Additional 6% bonus for investors who maintain their investment for the full 2-year period."
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:shadow-luxury transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 text-primary">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Structure */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Structure</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Aircraft Selection</h4>
                <p className="text-muted-foreground text-sm">
                  We identify and acquire high-quality aircraft with strong leasing potential
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Lease Management</h4>
                <p className="text-muted-foreground text-sm">
                  Professional management of leasing operations and maintenance schedules
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Return Distribution</h4>
                <p className="text-muted-foreground text-sm">
                  Regular distribution of returns from leasing income and capital appreciation
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-gradient-secondary p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Invest in Aviation?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our exclusive aviation investment program and benefit from the high-growth potential 
              of the aviation sector with professional management and guaranteed returns.
            </p>
            <Button size="lg" className="btn-luxury px-12 py-4 text-lg">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aviation;