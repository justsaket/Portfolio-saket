'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({ items, speed = 30, reverse = false, className = '' }: MarqueeProps) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex gap-8"
        animate={{ x: reverse ? ['0%', '33.33%'] : ['0%', '-33.33%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--c-text-muted)] px-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)] flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
