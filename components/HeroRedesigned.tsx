'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { profile } from '@/data/profile';

export default function HeroRedesigned() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="absolute -right-1/4 top-1/4 w-[800px] h-[800px] rounded-full bg-[var(--c-accent)] blur-[120px]"
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Top Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mb-8 md:mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--c-text-muted)] font-medium">
            {profile.location}
          </span>
          <span className="h-1 w-1 rounded-full bg-[var(--c-text-muted)]" />
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/20 text-[var(--c-accent-light)]">
            <span className="w-2 h-2 rounded-full bg-[var(--c-accent)] animate-pulse" />
            {profile.availability}
          </span>
        </motion.div>

        {/* Hero Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Typography & Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight text-[var(--c-text-strong)]">
                  {profile.name.split(' ')[0]}
                  <br />
                  <span className="text-outline">{profile.name.split(' ')[1]}</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-3"
              >
                <h2 className="text-2xl md:text-4xl font-bold text-gradient">
                  {profile.title}
                </h2>
                <p className="text-lg md:text-xl text-[var(--c-text-muted)] leading-relaxed max-w-lg">
                  {profile.tagline}
                </p>
              </motion.div>

              {/* Capability Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap gap-2"
              >
                {['Marketing', 'Analytics', 'AI Automation', 'Creative', 'Business'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="px-4 py-2 text-sm rounded-full border border-[var(--c-border)] bg-[var(--c-bg-card)] text-[var(--c-text)] hover:border-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-dark)] text-black font-semibold shadow-lg shadow-[var(--c-accent)]/25 hover:shadow-xl hover:shadow-[var(--c-accent)]/40 transition-all flex items-center gap-2"
              >
                View Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#creative"
                className="px-8 py-4 rounded-full border-2 border-[var(--c-accent)] text-[var(--c-accent)] font-semibold hover:bg-[var(--c-accent)]/10 transition"
              >
                Creative Portfolio
              </a>
              <a
                href="/Resume.pdf"
                download
                className="px-8 py-4 rounded-full border-2 border-[var(--c-border)] text-[var(--c-text)] font-semibold hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition"
              >
                Download Resume
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                className="px-8 py-4 rounded-full border-2 border-[var(--c-border)] text-[var(--c-text)] font-semibold hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition"
              >
                Let's Connect
              </a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="/Resume.pdf"
                download
                className="text-sm text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition underline"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Photo with Editorial Treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Photo Frame with Gradient Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--c-accent)] to-[var(--c-accent-dark)] p-[2px]">
                <div className="w-full h-full rounded-3xl bg-[var(--c-bg)] overflow-hidden">
                  <Image
                    src="/saket-photo.jpg"
                    alt="Saket Dandekar - Digital Marketing & Growth Analyst"
                    width={800}
                    height={1000}
                    priority
                    quality={95}
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                    className="w-full h-full object-cover object-center"
                    style={{
                      objectPosition: 'center center',
                      maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                    }}
                  />
                </div>
              </div>

              {/* Floating Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-[var(--c-bg-card)] border border-[var(--c-border)] rounded-2xl p-4 shadow-xl backdrop-blur-sm"
              >
                <p className="text-sm text-[var(--c-text-muted)]">Based in</p>
                <p className="text-lg font-bold text-[var(--c-text-strong)]">Bhilai, India</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <button
            onClick={() => document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
          >
            <span className="text-xs uppercase tracking-wider">Explore</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
