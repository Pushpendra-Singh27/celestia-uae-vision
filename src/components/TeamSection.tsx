import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const stats = [
    {
      number: "15+",
      label: "Years of Experience",
      description: "Proven track record in investment management"
    },
    {
      number: "1000+",
      label: "Satisfied Clients",
      description: "Trusted by investors worldwide"
    },
    {
      number: (
        <span>
          <span className="text-3xl">Up to </span>
          <span>36%</span>
        </span>
      ),
      label: "Maximum ROI",
      description: "Exceptional returns across our portfolio"
    }
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-luxury bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With over 15 years of combined experience, our team has successfully managed 
            investments for 1000+ clients across diverse markets and sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 text-center group hover:shadow-luxury transition-all duration-500"
            >
              <motion.div
                className="text-6xl md:text-7xl font-bold bg-gradient-luxury bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{stat.label}</h3>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Why Choose Our Team?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Certified Investment Professionals",
              "Global Market Expertise", 
              "Risk Management Specialists",
              "Personalized Investment Strategies"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center justify-center p-8 bg-gradient-card rounded-xl"
              >
                <span className="text-base font-medium text-center">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;