import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';

const mainNavItems = [
  { label: 'Analytics', href: '#analytics' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Automation', href: '#automation' },
  { label: 'Creative', href: '#creative' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function NavigationRebuilt() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-xl bg-[var(--c-bg)]/80 border-b border-[var(--c-border)]' : ''
      }`}
    >
      {/* 3-ZONE GRID LAYOUT */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8 h-20">

          {/* LEFT ZONE: Logo & Status */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              <span className="text-2xl font-black text-[var(--c-text-strong)] group-hover:text-[var(--c-accent)] transition-colors">
                SD
              </span>
            </button>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)]">
              <span className="w-2 h-2 rounded-full bg-[var(--c-accent)] animate-pulse" />
              <span className="text-xs text-[var(--c-text-muted)] font-medium">Open to work</span>
            </div>
          </div>

          {/* CENTER ZONE: Main Navigation - TRULY CENTERED */}
          <nav className="hidden lg:flex justify-center">
            <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)]">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--c-text-muted)] hover:text-[var(--c-text-strong)] transition-colors rounded-full group"
                >
                  {item.label}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-[var(--c-accent-glow)] border border-[var(--c-accent)] opacity-0 group-hover:opacity-100"
                    layoutId="activeNav"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                  <span className="relative z-10">{item.label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* RIGHT ZONE: Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)] text-sm text-[var(--c-text-muted)] hover:border-[var(--c-accent)] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden xl:inline">Search</span>
              <kbd className="hidden xl:inline px-2 py-0.5 text-xs bg-[var(--c-bg)] rounded border border-[var(--c-border)]">⌘K</kbd>
            </button>

            <a
              href="/Resume.pdf"
              download
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
