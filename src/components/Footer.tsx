import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    investments: [
      'Aviation Investments',
      'Real Estate Investments', 
      'Commodity Trading',
      'Portfolio Management'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Press & Media'
    ],
    legal: [
      'Terms & Conditions',
      'Privacy Policy',
      'Risk Disclosure',
      'Compliance'
    ],
    support: [
      'Help Center',
      'Contact Us',
      'Documentation',
      'FAQ'
    ]
  };

  return (
    <footer className="relative bg-gradient-card border-t border-primary/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-luxury rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">C</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-luxury">CELESTIA</h3>
                <p className="text-sm text-muted-foreground -mt-1">CAPITALS</p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              Your trusted partner in financial growth across Aviation, Real Estate, 
              and Commodities. Building wealth through professional investment management 
              and exceptional returns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-4"
            >
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((social, index) => (
                <motion.button
                  key={social}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-muted/30 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 border border-primary/20 hover:border-primary/40"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-primary/60 rounded-sm" />
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-foreground font-semibold uppercase tracking-wide text-sm">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 + linkIndex * 0.05 }}
                  >
                    <button className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                      {link}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 rounded-2xl border border-primary/20 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h4>
              <p className="text-muted-foreground">
                Get the latest investment insights and market updates delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted/30 border border-primary/20 rounded-xl focus:outline-none focus:border-primary transition-all duration-300 text-foreground"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-luxury px-8"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} Celestia Capitals. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>Licensed by DFSA</span>
            <span>•</span>
            <span>Member of DIFC</span>
            <span>•</span>
            <span>ISO 27001 Certified</span>
          </div>
        </motion.div>

        {/* Legal Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 pt-8 border-t border-primary/20 text-xs text-muted-foreground leading-relaxed"
        >
          <p>
            <strong>Risk Warning:</strong> All investments carry risk and may lose value. 
            Past performance is not indicative of future results. Investment products are not 
            guaranteed and their value may fluctuate. Please consult with our licensed 
            financial advisors before making investment decisions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;