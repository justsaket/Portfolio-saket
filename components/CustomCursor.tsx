'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.6 });

  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true); // start hidden, show after mount

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setHidden(false);

    const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, [tabindex]:not([tabindex="-1"])';

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const over = (e: MouseEvent) => {
      setHovering(!!(e.target as Element).closest(INTERACTIVE));
    };
    const leave = () => setHovering(false);

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseleave', leave, { passive: true });
    document.addEventListener('mousedown', down, { passive: true });
    document.addEventListener('mouseup', up, { passive: true });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, [mouseX, mouseY]);

  if (hidden) return null;

  const ringSize = clicking ? 28 : hovering ? 48 : 38;
  const ringBorder = hovering ? 'rgba(220,38,38,0.95)' : 'rgba(220,38,38,0.55)';
  const ringBg = hovering ? 'rgba(220,38,38,0.08)' : 'transparent';

  return (
    <>
      {/* Outer ring — springs behind */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          border: `1.5px solid ${ringBorder}`,
          backgroundColor: ringBg,
          transition: 'width 0.18s, height 0.18s, border-color 0.18s, background-color 0.18s',
        }}
      />

      {/* Inner dot — exact position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          width: clicking ? 3 : 5,
          height: clicking ? 3 : 5,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: 'rgba(220,38,38,1)',
          boxShadow: '0 0 8px rgba(220,38,38,0.9)',
          transition: 'width 0.08s, height 0.08s',
        }}
      />
    </>
  );
}
