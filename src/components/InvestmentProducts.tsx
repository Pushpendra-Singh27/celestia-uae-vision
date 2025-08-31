import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aviationImg from '@/assets/aviation-investment.jpg';
import realEstateImg from '@/assets/real-estate-investment.jpg';
import commodityImg from '@/assets/commodity-trading.jpg';

const InvestmentProducts = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const products = [
    {
      title: "Aviation Investments",
      description: "Earn from aircraft leasing, aviation operations, and logistics infrastructure—an exclusive, fast-growing sector.",
      roi: "Up to 28%",
      minInvestment: "AED 200,000",
      period: "2 years",
      image: aviationImg,
      features: [
        "High potential returns",
        "Diversified portfolio", 
        "Professional management",
        "Regular reporting",
        "Discounted flying hours",
        "Up to 6% bonus"
      ],
      gradient: "from-blue-600 to-sky-400",
      delay: 0
    },
    {
      title: "Real Estate Investments", 
      description: "Invest in premium commercial and residential properties with strong rental yields and capital appreciation.",
      roi: "Up to 22%",
      minInvestment: "AED 150,000",
      period: "5 years",
      image: realEstateImg,
      features: [
        "High potential returns",
        "Diversified portfolio",
        "Professional management", 
        "Regular reporting",
        "Property appreciation",
        "Rental income"
      ],
      gradient: "from-emerald-600 to-teal-400",
      delay: 0.2
    },
    {
      title: "Commodity Trading",
      description: "Diversify with gold, oil, and high-demand global commodities. A powerful hedge against inflation and market volatility.",
      roi: "Up to 36%",
      minInvestment: "AED 100,000", 
      period: "1 year",
      image: commodityImg,
      features: [
        "High potential returns",
        "Diversified portfolio",
        "Professional management",
        "Regular reporting",
        "Inflation hedge",
        "Market volatility protection"
      ],
      gradient: "from-amber-600 to-yellow-400",
      delay: 0.4
    }
  ];

  return (
    <section id="investments" ref={containerRef} className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y, rotateY }}
        className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-primary-glow/10 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 100 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-primary text-sm uppercase tracking-widest font-semibold mb-4"
          >
            Investment Opportunities
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-foreground">Diversified</span>{' '}
            <span className="text-luxury text-glow">Portfolio</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Explore our exclusive investment opportunities across high-growth sectors 
            with professionally managed portfolios and exceptional returns.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              product={product}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product, index, scrollProgress }: {
  product: any;
  index: number;
  scrollProgress: any;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const y = useTransform(scrollProgress, [0, 1], [0, (index - 1) * -50]);
  const rotateY = useTransform(scrollProgress, [0, 1], [0, index * 5]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotateY, scale }}
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 1.2, 
        delay: product.delay,
        ease: 'easeOut'
      }}
      whileHover={{ 
        y: -20, 
        rotateY: 10, 
        rotateX: 5,
        transition: { duration: 0.6, ease: 'easeOut' }
      }}
      className="group transform-3d"
    >
      <div className="glass-card rounded-3xl overflow-hidden h-full hover:shadow-glow transition-all duration-700 border border-primary/20 hover:border-primary/40">
        {/* Image Header */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.title}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
          
          {/* ROI Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.5 }}
            className="absolute top-6 right-6 bg-gradient-luxury text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-luxury"
          >
            {product.roi} ROI
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.3 }}
            className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300"
          >
            {product.title}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.4 }}
            className="text-muted-foreground leading-relaxed mb-6"
          >
            {product.description}
          </motion.p>

          {/* Investment Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.5 }}
            className="grid grid-cols-2 gap-4 mb-6"
          >
            <div className="glass-card p-4 rounded-xl">
              <div className="text-sm text-muted-foreground">Min. Investment</div>
              <div className="text-lg font-bold text-primary">{product.minInvestment}</div>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <div className="text-sm text-muted-foreground">Min. Period</div>
              <div className="text-lg font-bold text-primary">{product.period}</div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.6 }}
            className="space-y-3 mb-8"
          >
            {product.features.map((feature: string, featureIndex: number) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: product.delay + 0.7 + featureIndex * 0.1 
                }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: product.delay + 0.8 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="btn-luxury w-full group relative overflow-hidden"
          >
            <span className="relative z-10">Schedule Consultation</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentProducts;