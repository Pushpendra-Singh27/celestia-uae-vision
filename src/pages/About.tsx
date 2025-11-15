import React from 'react';
import { motion } from 'framer-motion';
import AnimatedNavigation from '@/components/AnimatedNavigation';
import Footer from '@/components/Footer';
import { AnimatedImage3D } from '@/components/ui/AnimatedImage3D';
import PageHero from '@/components/PageHero';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedNavigation />
      
      <PageHero
        eyebrow="About Celestia"
        title="About Celestia Capital"
        subtitle="Your trusted partner in creating extraordinary wealth-building opportunities"
      />

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                CELESTIA CAPITAL is a premier investment firm committed to creating extraordinary wealth-building 
                opportunities across high-growth sectors. With a strategic focus on Real Estate, Aviation, and 
                Commodities, we offer dynamic and diversified investment avenues that deliver returns of up to 36%.
              </p>
              <p className="mb-6">
                At Celestia Capital, we blend deep market insight with disciplined investment strategies to help our 
                clients achieve sustainable, long-term growth. Our investment models are built on a foundation of 
                transparency, risk management, and sectoral expertise making us a trusted partner for both seasoned 
                investors and ambitious newcomers.
              </p>
              <p>
                What sets us apart is our ability to identify and unlock value in niche, high yield markets. Whether 
                it's premium real estate developments, aviation asset leasing, or trading in globally sought after 
                commodities like gold and oil, we provide access to exclusive opportunities traditionally reserved 
                for institutional investors.
              </p>
            </div>
          </motion.div>

          {/* Team & Office Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedImage3D
                src="/images/pexels-fauxels-3184418.jpg"
                alt="Our Team"
                className="w-full h-[400px] object-cover rounded-lg"
                revealDirection="left"
              />
              <AnimatedImage3D
                src="/images/home/pexels-anna-nekrashevich-6801874.jpg"
                alt="Our Office"
                className="w-full h-[400px] object-cover rounded-lg"
                revealDirection="right"
              />
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower investors with exclusive opportunities that deliver exceptional returns while maintaining 
                the highest standards of integrity and transparency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading investment partner for sophisticated investors seeking premium returns in 
                high-growth markets worldwide.
              </p>
            </motion.div>
          </div>

          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "High-Net-Worth Individuals (HNIs)",
                  description: "Tailored investment strategies for sophisticated investors seeking exclusive opportunities and premium returns."
                },
                {
                  title: "Global Expats & NRIs",
                  description: "Specialized solutions for international investors looking to diversify their portfolios across global markets."
                },
                {
                  title: "Entrepreneurs & Business Owners",
                  description: "Strategic wealth management for business leaders seeking to preserve and grow their entrepreneurial wealth."
                },
                {
                  title: "Professionals Seeking Passive Income",
                  description: "Passive investment opportunities for busy professionals looking to build wealth through hands-off strategies."
                },
                {
                  title: "Families Planning Long-Term Wealth",
                  description: "Multi-generational wealth planning focused on preserving family assets and creating lasting legacies."
                },
                {
                  title: "New & Expanding Investors",
                  description: "Comprehensive guidance for both new investors and those looking to expand their investment portfolios."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 hover:shadow-luxury transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 text-primary">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Celestia Capital?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Returns up to 36% Annually",
                  description: "Experience exceptional returns with our carefully curated investment opportunities across high-growth sectors."
                },
                {
                  title: "100% Legally Structured & Transparent",
                  description: "All investments are fully compliant with regulatory requirements and offer complete transparency."
                },
                {
                  title: "Secure, Asset-Backed Opportunities",
                  description: "Every investment is backed by tangible assets, providing security and peace of mind."
                },
                {
                  title: "Dedicated Investment Advisors",
                  description: "Get personalized guidance from our team of experienced investment professionals."
                },
                {
                  title: "Global Portfolio Exposure",
                  description: "Diversify your investments across international markets and emerging opportunities."
                },
                {
                  title: "Detailed Reporting & Ongoing Support",
                  description: "Receive comprehensive reports and continuous support throughout your investment journey."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;