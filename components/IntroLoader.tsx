'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Check if user has seen intro before
    const hasSeenIntro = sessionStorage.getItem('intro-seen');

    if (hasSeenIntro) {
      setIsVisible(false);
      return;
    }

    // Intro sequence timing
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2800),
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('intro-seen', 'true');
      }, 3800)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const skipIntro = () => {
    setIsVisible(false);
    sessionStorage.setItem('intro-seen', 'true');
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--c-bg)]"
      >
        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          whileHover={{ opacity: 1 }}
          onClick={skipIntro}
          className="fixed top-8 right-8 text-sm text-[var(--c-muted)] hover:text-[var(--c-text)] transition z-10"
        >
          Skip →
        </motion.button>

        {/* Intro sequence */}
        <div className="text-center">
          {/* Step 1: Greeting */}
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="greeting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-light text-[var(--c-text)]">
                  नमस्ते
                </h2>
              </motion.div>
            )}

            {/* Step 2: Introduction */}
            {step === 1 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <p className="text-lg md:text-xl text-[var(--c-muted)]">I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--c-strong)]">
                  Saket
                </h1>
              </motion.div>
            )}

            {/* Step 3: Professional identity */}
            {step === 2 && (
              <motion.div
                key="identity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto px-6"
              >
                <p className="text-xl md:text-2xl text-[var(--c-text)] leading-relaxed">
                  Digital Marketing & Growth Analyst
                </p>
                <p className="mt-4 text-base md:text-lg text-[var(--c-muted)]">
                  Marketing · Analytics · Automation · Creative
                </p>
              </motion.div>
            )}

            {/* Step 4: Transition out */}
            {step === 3 && (
              <motion.div
                key="transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[var(--c-accent)]"
              >
                <div className="w-12 h-12 border-4 border-[var(--c-accent)] border-t-transparent rounded-full animate-spin mx-auto" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
