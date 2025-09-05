import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealSection({ children, className }: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const borderRadius = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["2rem", "0rem"]
  );

  const width = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["90%", "100%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        width,
        borderRadius,
      }}
      className={cn(
        "mx-auto overflow-hidden bg-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
