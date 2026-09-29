'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';

const mainNavItems = [
  { label: 'Analytics', href: '#analytics' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Automation', href: '#automation' },
  { label: 'Creative', href: '#creative' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function NavigationAdvanced() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation - PROPER 3-ZONE LAYOUT */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-[var(--c-bg)]/90 border-b border-[var(--c-border)] shadow-lg' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8 h-20">

            {/* LEFT ZONE: Logo & Status */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-3 group"
              >
                <div className="relative">
                  <span className="text-2xl font-black text-[var(--c-text-strong)] group-hover:text-[var(--c-accent)] transition-colors">
                    SD
                  </span>
                  <motion.div
                    className="absolute -inset-2 rounded-lg bg-[var(--c-accent)]/20 -z-10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </button>
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)]">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[var(--c-accent)]"
                />
                <span className="text-xs text-[var(--c-text-muted)] font-medium">Open to work</span>
              </div>
            </div>

            {/* CENTER ZONE: Main Navigation - TRULY CENTERED */}
            <nav className="hidden lg:flex justify-center">
              <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-[var(--c-bg-card)]/50 border border-[var(--c-border)] backdrop-blur-sm">
                {mainNavItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="relative px-4 py-2 text-sm font-medium text-[var(--c-text-muted)] hover:text-[var(--c-text-strong)] transition-colors rounded-full group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </nav>

            {/* RIGHT ZONE: Actions */}
            <div className="flex items-center gap-3">
              <a
                href="/Resume.pdf"
                download
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-dark)] text-white text-sm font-semibold shadow-lg hover:shadow-[var(--c-accent)]/50 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text-strong)]"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-24 left-4 right-4 bg-[var(--c-bg-card)] border border-[var(--c-border)] rounded-2xl p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-2">
                {mainNavItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg font-medium text-[var(--c-text)] hover:text-[var(--c-accent)] hover:bg-[var(--c-bg-hover)] rounded-lg transition-all"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4 mt-4 border-t border-[var(--c-border)]"
                >
                  <a
                    href="/Resume.pdf"
                    download
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-dark)] text-white font-semibold"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                  <div className="flex justify-center gap-4 mt-4">
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)]">
                      LinkedIn
                    </a>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)]">
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
