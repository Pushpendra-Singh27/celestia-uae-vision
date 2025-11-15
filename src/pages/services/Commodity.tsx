import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';

const Commodity = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      <PageHero
        eyebrow="Commodities"
        title="Commodity Trading"
        subtitle="Diversify with gold, oil, and high-demand global commodities. A powerful hedge against inflation and market volatility"
      />

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
                <h2 className="text-4xl font-bold mb-6 text-primary">Up to 36% ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Commodity trading offers the highest return potential in our portfolio, leveraging market 
                  volatility and global demand for precious metals and energy resources.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Minimum Investment:</span>
                    <span className="text-primary">AED 150K</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Minimum Period:</span>
                    <span className="text-primary">1 year</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="font-semibold">Expected ROI:</span>
                    <span className="text-primary">Up to 36% annually</span>
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
                  <h3 className="text-2xl font-bold mb-4 text-center">Trading Focus</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Gold & precious metals
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Crude oil & energy commodities
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Agricultural products
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Industrial metals & minerals
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
                  title: "Revenue Diversified Portfolio",
                  description: "Diversify your revenue streams across multiple commodity sectors for enhanced stability and growth potential."
                },
                {
                  title: "High Potential - High Risk High Value",
                  description: "Access high-value investment opportunities with significant return potential, balanced with appropriate risk management."
                },
                {
                  title: "Professional Management - Professional Trading Strategist",
                  description: "Benefit from expert trading strategists who manage your investments with professional market analysis and execution."
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

          {/* Trading Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Trading Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Precious Metals</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Gold spot and futures trading</li>
                    <li>• Silver and platinum investments</li>
                    <li>• Physical delivery options</li>
                    <li>• Mining company equities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Energy Sector</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Crude oil futures contracts</li>
                    <li>• Natural gas trading</li>
                    <li>• Renewable energy commodities</li>
                    <li>• Energy infrastructure investments</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Agricultural Products</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Wheat, corn, and soybeans</li>
                    <li>• Coffee and sugar futures</li>
                    <li>• Livestock and dairy products</li>
                    <li>• Seasonal trading strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">Industrial Metals</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Copper and aluminum trading</li>
                    <li>• Rare earth elements</li>
                    <li>• Steel and iron ore</li>
                    <li>• Technology metals (lithium, cobalt)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Market Analysis & Tools</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Technical Analysis</h4>
                <p className="text-muted-foreground text-sm">
                  Advanced charting and technical indicators to identify optimal entry and exit points
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Fundamental Research</h4>
                <p className="text-muted-foreground text-sm">
                  Deep dive into supply/demand dynamics, geopolitical factors, and economic indicators
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Real-time Execution</h4>
                <p className="text-muted-foreground text-sm">
                  Lightning-fast trade execution across multiple exchanges with optimal pricing
                </p>
              </div>
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Historical Performance</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">36%</div>
                <div className="text-muted-foreground">Peak Annual Return</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24%</div>
                <div className="text-muted-foreground">Average Return</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1.2</div>
                <div className="text-muted-foreground">Sharpe Ratio</div>
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
            <h2 className="text-3xl font-bold mb-6">Start Commodity Trading</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take advantage of the highest return potential in our portfolio with professional 
              commodity trading strategies and expert market analysis.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-luxury px-12 py-4 text-lg">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commodity;