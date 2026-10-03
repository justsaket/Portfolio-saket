'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    up:    { hidden: { opacity: 0, y: 48 },  visible: { opacity: 1, y: 0 } },
    left:  { hidden: { opacity: 0, x: -48 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 48 },  visible: { opacity: 1, x: 0 } },
    fade:  { hidden: { opacity: 0 },          visible: { opacity: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[direction]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
