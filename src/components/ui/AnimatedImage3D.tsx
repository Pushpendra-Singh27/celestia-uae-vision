import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedImage3DProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  perspective?: number;
  rotateX?: number;
  rotateY?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  revealDirection?: 'up' | 'down' | 'left' | 'right';
}

export function AnimatedImage3D({
  src,
  alt,
  className = '',
  containerClassName = '',
  perspective = 1000,
  rotateX = 5,
  rotateY = 5,
  scale = 1.05,
  duration = 0.6,
  delay = 0,
  revealDirection = 'up',
}: AnimatedImage3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  const getInitial = () => {
    switch (revealDirection) {
      case 'up':
        return { y: 50, opacity: 0 };
      case 'down':
        return { y: -50, opacity: 0 };
      case 'left':
        return { x: 50, opacity: 0 };
      case 'right':
        return { x: -50, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  };

  return (
    <div 
      ref={ref}
      className={cn('relative w-full h-full overflow-visible', containerClassName)}
      style={{ perspective, overflow: 'visible' }}
    >
      <motion.div
        className="w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          y,
          overflow: 'visible',
        }}
        initial={getInitial()}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        viewport={{ 
          once: true, 
          margin: '0px 0px -100px 0px',
          amount: 0.1
        }}
        whileHover={{
          scale,
          rotateX,
          rotateY,
          transition: { duration: 0.3 },
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          className={cn(
            'w-full h-full object-cover rounded-xl shadow-2xl',
            'border border-border/20',
            className
          )}
          style={{
            transform: 'translateZ(50px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}
        />
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'linear-gradient(145deg, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.1) 100%)',
            transform: 'translateZ(30px)',
            pointerEvents: 'none',
          }}
        />
      </motion.div>
    </div>
  );
}
