import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const RealEstate = () => {
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
              Real Estate Investments
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Invest in premium commercial and residential properties with strong rental yields and capital appreciation
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
                <h2 className="text-4xl font-bold mb-6 text-primary">Up to 22% ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Real estate remains one of the most stable and profitable investment sectors, with Dubai's 
                  property market showing consistent growth and strong rental yields.
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
                  <div className="flex justify-between">
                    <span className="font-semibold">Expected ROI:</span>
                    <span className="text-primary">Up to 22% annually</span>
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
                  <h3 className="text-2xl font-bold mb-4 text-center">Property Types</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Luxury residential apartments
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Commercial office spaces
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Retail and hospitality properties
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Mixed-use developments
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
                  description: "Dubai's real estate market offers exceptional growth potential with strong capital appreciation."
                },
                {
                  title: "Diversified Portfolio",
                  description: "Invest across residential, commercial, and mixed-use properties for balanced risk exposure."
                },
                {
                  title: "Professional Management",
                  description: "Full-service property management including tenant relations and maintenance oversight."
                },
                {
                  title: "Regular Reporting",
                  description: "Detailed monthly reports on property performance, occupancy rates, and market trends."
                },
                {
                  title: "Tax Advantages",
                  description: "Benefit from UAE's favorable tax environment for real estate investments."
                },
                {
                  title: "Liquidity Options",
                  description: "Exit strategies available through property sales or portfolio transfers."
                },
                {
                  title: "Collateral Investment Structure",
                  description: "Collateral investment from 50 to 70% of the investment value providing enhanced security."
                },
                {
                  title: "Revenue Professional Management",
                  description: "Professional revenue management ensuring optimal returns and cash flow optimization."
                },
                {
                  title: "Dedicated Real-Estate Team",
                  description: "Specialized real-estate team focused exclusively on maximizing your property investments."
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

          {/* Investment Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Focus Areas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Prime Locations</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Downtown Dubai & DIFC</li>
                    <li>• Dubai Marina & JBR</li>
                    <li>• Business Bay & Al Barsha</li>
                    <li>• Palm Jumeirah & Bluewaters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Property Categories</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Luxury Residential Units</li>
                    <li>• Grade A Office Buildings</li>
                    <li>• Retail & F&B Outlets</li>
                    <li>• Hotel & Hospitality Assets</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Investment Strategy</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Buy & Hold for long-term appreciation</li>
                    <li>• Value-add opportunities</li>
                    <li>• Development partnerships</li>
                    <li>• REITs and structured products</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Market Advantages</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• No capital gains tax</li>
                    <li>• Freehold ownership rights</li>
                    <li>• Golden Visa eligibility</li>
                    <li>• Strong rental market</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Performance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Market Performance</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15%+</div>
                <div className="text-muted-foreground">Average Annual Growth</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">8%+</div>
                <div className="text-muted-foreground">Rental Yield</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%+</div>
                <div className="text-muted-foreground">Occupancy Rate</div>
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
            <h2 className="text-3xl font-bold mb-6">Start Your Real Estate Journey</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take advantage of Dubai's booming real estate market with our expertly curated 
              property investment opportunities designed for maximum returns.
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

export default RealEstate;