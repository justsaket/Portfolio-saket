'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer ring springs smoothly behind
  const springX = useSpring(mouseX, { stiffness: 150, damping: 18, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 18, mass: 0.8 });

  const [clicking, setClicking]   = useState(false);
  const [hovering, setHovering]   = useState(false);
  const [magnetic, setMagnetic]   = useState(false);
  const [hidden,   setHidden]     = useState(true);
  const magnetRef = useRef<{ el: Element; rect: DOMRect } | null>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setHidden(false);

    const MAGNETIC = 'a, button, [role="button"]';
    const MAG_STRENGTH = 0.38;

    const move = (e: MouseEvent) => {
      const mx = e.clientX;
      const my = e.clientY;

      // Magnetic pull
      const el = (e.target as Element).closest(MAGNETIC);
      if (el) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width  / 2;
        const cy = rect.top  + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;
        mouseX.set(cx + dx * MAG_STRENGTH);
        mouseY.set(cy + dy * MAG_STRENGTH);
        setMagnetic(true);
      } else {
        mouseX.set(mx);
        mouseY.set(my);
        setMagnetic(false);
      }
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as Element).closest(MAGNETIC);
      setHovering(!!el);
    };

    const down = () => setClicking(true);
    const up   = () => setClicking(false);

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mousedown', down, { passive: true });
    document.addEventListener('mouseup',   up,   { passive: true });

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup',   up);
    };
  }, [mouseX, mouseY]);

  if (hidden) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width:  clicking ? 24 : hovering ? 52 : 38,
          height: clicking ? 24 : hovering ? 52 : 38,
          border: `1.5px solid ${hovering ? 'rgba(220,38,38,1)' : 'rgba(220,38,38,0.5)'}`,
          backgroundColor: hovering ? 'rgba(220,38,38,0.1)' : 'transparent',
          transition: 'width 0.2s, height 0.2s, border-color 0.15s, background-color 0.15s',
          mixBlendMode: 'normal',
        }}
      />

      {/* Inner dot — exact position */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width:  clicking ? 2 : 5,
          height: clicking ? 2 : 5,
          backgroundColor: 'rgb(220,38,38)',
          boxShadow: clicking
            ? '0 0 12px 4px rgba(220,38,38,0.6)'
            : '0 0 6px 2px rgba(220,38,38,0.4)',
          transition: 'width 0.08s, height 0.08s, box-shadow 0.12s',
        }}
      />

      {/* Click ripple */}
      {clicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[rgba(220,38,38,0.4)]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ width: 10, height: 10, opacity: 0.8 }}
          animate={{ width: 60, height: 60, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
