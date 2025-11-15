import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated blurred orbs */}
        <motion.div
          className="absolute -top-40 -right-32 w-96 h-96 bg-primary/35 rounded-full blur-3xl"
          animate={{
            x: [0, 32, -12, 0],
            y: [0, -24, 12, 0],
            rotate: [0, 24, -12, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary-glow/45 rounded-full blur-3xl"
          animate={{
            x: [0, -26, 18, 0],
            y: [0, 18, -16, 0],
            rotate: [0, -18, 12, 0]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Diagonal light band */}
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -inset-x-40 -top-40 h-72 rotate-[-8deg] bg-gradient-to-r from-primary/0 via-primary/12 to-primary-glow/0" />
          <div className="absolute -inset-x-32 top-10 h-64 rotate-[6deg] bg-gradient-to-r from-primary-glow/0 via-primary-glow/10 to-primary/0" />
        </div>

        {/* Rotating central glow */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: [0, 10, -8, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-[32rem] h-[32rem] rounded-full bg-radial from-primary/12 to-transparent blur-3xl" />
        </motion.div>

        {/* Soft radial and border accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),_transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        {/* Animated highlight sweep */}
        <motion.div
          className="absolute inset-y-10 -left-1/3 w-1/2 bg-gradient-to-r from-white/12 via-white/4 to-transparent blur-3xl"
          animate={{ x: ['0%', '160%'] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Subtle pulsing texture overlay */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.04),_transparent_70%)] mix-blend-screen"
          animate={{ opacity: [0.15, 0.3, 0.18, 0.15] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-luxury bg-clip-text text-transparent leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
