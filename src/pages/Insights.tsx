import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { AnimatedImage3D } from '@/components/ui/AnimatedImage3D';
import aviationImage from '@/assets/aviation-investment.jpg';
import commodityImage from '@/assets/commodity-trading.jpg';

const Insights = () => {
  const insights = [
    {
      id: 'aviation',
      title: 'Aviation Investment',
      icon: '✈️',
      image: aviationImage,
      description: 'Aviation investing can mean different things: buying aircraft for charter/leasing, investing in aviation businesses (e.g. MRO, airlines), or fractional jet ownership.',
      keyConsiderations: [
        'Potential for high returns, especially in private jet leasing or cargo operations.',
        'Asset-based investment (e.g., aircraft ownership).'
      ],
      bestFor: [
        'High-net-worth individuals or institutions looking for diversification into niche assets.'
      ]
    },
    {
      id: 'realestate',
      title: 'Real Estate Investment',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      keyConsiderations: [
        'Tangible asset with intrinsic value.',
        'Steady cash flow through rental income.',
        'Tax advantages (depreciation, mortgage interest deductions).',
        'Leverage-friendly (mortgages, HELOCs).',
        'Appreciation potential over the long term.'
      ],
      bestFor: [
        'Long-term investors seeking stable cash flow and appreciation.',
        'Those comfortable with asset management or outsourcing it.'
      ]
    },
    {
      id: 'commodity',
      title: 'Commodity Trading',
      icon: '📈',
      image: commodityImage,
      description: 'This includes trading futures contracts or physical commodities like gold, oil, grains, etc.',
      keyConsiderations: [
        'High liquidity (especially in futures markets).',
        'Potential for fast profits, especially in volatile markets.',
        'Excellent for hedging inflation or geopolitical risk.'
      ],
      bestFor: [
        'Investors looking for short-term high-risk/high-reward plays.',
        'Quick returns.'
      ]
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
              Market Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Comprehensive analysis and key considerations for our investment sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-100px 0px' }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center text-3xl">
                    {insight.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    {insight.title}
                  </h2>
                </div>

                {insight.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {insight.description}
                  </p>
                )}

                {insight.keyConsiderations && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Key Considerations:
                    </h3>
                    <ul className="space-y-3">
                      {insight.keyConsiderations.map((consideration, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{consideration}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">💡</span>
                    <h3 className="text-xl font-semibold text-primary">Best for:</h3>
                  </div>
                  <ul className="space-y-3">
                    {insight.bestFor.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="glass-card p-6 rounded-3xl"
                >
                  <AnimatedImage3D
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-80 rounded-2xl"
                    revealDirection={index % 2 === 0 ? 'left' : 'right'}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investment Comparison */}
      <section className="py-20 px-6 bg-gradient-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-50px 0px' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Investment Comparison</h2>
            <p className="text-xl text-muted-foreground">
              Compare key metrics across our investment sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                sector: 'Aviation',
                riskLevel: 'Medium-High',
                timeHorizon: '5+ Years',
                liquidity: 'Low-Medium',
                minInvestment: 'AED 12M',
                expectedROI: 'Up to 28%'
              },
              {
                sector: 'Real Estate',
                riskLevel: 'Medium',
                timeHorizon: '5+ Years',
                liquidity: 'Low',
                minInvestment: 'AED 12M',
                expectedROI: 'Up to 22%'
              },
              {
                sector: 'Commodities',
                riskLevel: 'High',
                timeHorizon: '1+ Years',
                liquidity: 'High',
                minInvestment: 'AED 150K',
                expectedROI: 'Up to 36%'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: '-50px 0px' }}
                className="glass-card p-8 rounded-2xl hover:shadow-luxury transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                  {item.sector}
                </h3>
                <div className="space-y-4">
                  {Object.entries(item).slice(1).map(([key, value]) => (
                    <div key={key} className="flex justify-between border-b border-border pb-2">
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-primary font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-50px 0px' }}
            className="bg-gradient-card p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Explore Investment Opportunities?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our expert team can help you navigate these investment sectors and find the right 
              opportunities that align with your financial goals and risk tolerance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-luxury px-12 py-4 text-lg"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
