'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-10">
      {/* Decorative Elements */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hero-accent absolute right-[10%] top-[16%] h-9 w-9 rounded-full bg-[var(--c-accent)] shadow-[0_0_45px_var(--c-accent)] md:h-12 md:w-12"
      />

      <motion.svg
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 1.2 }}
        className="hero-squiggle absolute left-[7%] top-[19%] w-24 text-[var(--c-accent2)] md:w-36"
        viewBox="0 0 120 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <motion.path
          d="M5 25 Q 20 5, 35 25 T 65 25 T 95 25 T 115 18"
          strokeDasharray="1"
          strokeDashoffset="1"
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{ delay: 0.7, duration: 1.2 }}
        />
      </motion.svg>

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-eyebrow z-30 mb-3 flex flex-wrap items-center justify-center gap-3"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--c-muted)]">
          SAKET DANDEKAR
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--c-accent)]/30 bg-[var(--c-accent)]/10 px-3 py-1 text-xs text-[var(--c-accent-light)]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--c-accent)]" />
          Open to opportunities
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative flex w-full max-w-6xl flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display relative z-10 whitespace-nowrap text-center font-black leading-[0.82] tracking-tight text-[var(--c-strong)]"
          style={{ fontSize: 'min(9.5rem, calc(92vw / 13.20))' }}
        >
          DIGITAL MARKETING
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-20 h-[40vh] w-auto md:h-[50vh]"
        >
          <div className="portrait-mask h-full w-auto relative">
            <Image
              src="/saket-photo.jpg"
              alt="Saket Dandekar"
              width={620}
              height={760}
              priority
              className="h-full w-auto object-cover"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-display relative z-10 whitespace-nowrap text-center font-black leading-[0.82] tracking-tight text-outline mt-2 md:mt-2"
          style={{ fontSize: 'min(9.5rem, calc(92vw / 13.20))' }}
        >
          & GROWTH ANALYST
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hero-cta z-30 mt-5 max-w-xl text-center text-base text-[var(--c-muted)] md:mt-8 md:text-lg"
      >
        Driving growth through data-driven marketing, business intelligence, AI automation, and creative strategy.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="z-30 mt-6 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="hero-cta rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] px-7 py-3 font-semibold text-black shadow-lg shadow-[var(--c-accent)]/20 transition hover:opacity-90"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="hero-cta rounded-full border border-[var(--c-accent)]/50 px-7 py-3 font-semibold text-[var(--c-accent-light)] transition hover:bg-[var(--c-accent)]/10"
        >
          Let's Connect
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6 text-[var(--c-accent-light)]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
