import React from 'react';
import { motion } from 'framer-motion';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      role: "Business Owner",
      content: "Celestia Capital transformed my investment portfolio. Their aviation investment program delivered exactly what they promised - 28% returns with complete transparency.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Expat Professional",
      content: "As an expat in Dubai, I was looking for secure investment options. Their real estate portfolio gave me peace of mind and excellent returns over 5 years.",
      rating: 5
    },
    {
      name: "Mohammad Hassan",
      role: "Entrepreneur",
      content: "The commodity trading program exceeded my expectations. The team's expertise in market analysis helped me achieve 34% returns in just one year.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="bg-gradient-luxury bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied investors who have 
            achieved exceptional returns with Celestia Capital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 relative group hover:shadow-luxury transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-4xl text-primary opacity-20">
                "
              </div>
              
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    className="text-primary text-xl"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                style={{
                  background: 'radial-gradient(circle at center, hsla(42, 95%, 45%, 0.05) 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass-card p-8"
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5 Yrs</div>
              <div className="text-sm text-muted-foreground">Average Partnership</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;