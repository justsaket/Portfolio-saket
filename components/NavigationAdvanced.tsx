'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';

const mainNavItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Automation', href: '#automation' },
  { label: 'Creative', href: '#creative' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const commandPaletteCommands = [
  ...mainNavItems,
  { label: 'Resume', href: '/Resume.pdf' },
  { label: 'LinkedIn', href: profile.contact.linkedin },
  { label: 'GitHub', href: profile.contact.github },
  { label: 'Portfolio', href: profile.contact.portfolio },
];

export default function NavigationAdvanced() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setCommandPaletteOpen(false);
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

  const filteredCommands = commandPaletteCommands.filter(cmd =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
          isScrolled ? 'w-auto' : 'w-[90%] max-w-6xl'
        }`}
      >
        <div className={`liquid-nav rounded-full px-4 md:px-6 py-3 shadow-lg transition-all duration-500 ${
          isScrolled ? 'backdrop-blur-xl bg-[var(--c-tile)]/90' : ''
        }`}>
          <div className="flex items-center justify-between gap-4 md:gap-6">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-lg md:text-xl font-black text-[var(--c-strong)] hover:text-[var(--c-accent)] transition whitespace-nowrap"
            >
              <span className="text-xl md:text-2xl">SD</span>
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {mainNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-[var(--c-text)] hover:text-[var(--c-accent)] transition group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--c-accent)] rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Command Palette Trigger */}
              <button
                onClick={() => setCommandPaletteOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-[var(--c-tile)] border border-[var(--c-border)] text-xs md:text-sm text-[var(--c-muted)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden xl:inline">Search</span>
                <kbd className="hidden xl:inline px-1.5 py-0.5 text-xs bg-[var(--c-bg)] rounded border border-[var(--c-border)]">
                  ⌘K
                </kbd>
              </button>

              {/* Resume Button */}
              <a
                href="/Resume.pdf"
                download
                className="hidden md:inline-block px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] text-black text-xs md:text-sm font-semibold hover:opacity-90 transition whitespace-nowrap"
              >
                Resume
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-[var(--c-strong)] p-2"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-4 top-24 liquid-nav rounded-3xl p-8 overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-4">
                {mainNavItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-bold text-[var(--c-text)] hover:text-[var(--c-accent)] transition"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 mt-8 border-t border-[var(--c-border)] space-y-4"
                >
                  <a
                    href="/Resume.pdf"
                    download
                    className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] text-black font-semibold"
                  >
                    Download Resume
                  </a>
                  <div className="flex justify-center gap-4">
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--c-muted)] hover:text-[var(--c-accent)]">
                      LinkedIn
                    </a>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-[var(--c-muted)] hover:text-[var(--c-accent)]">
                      GitHub
                    </a>
                  </div>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {commandPaletteOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-start justify-center pt-[20vh] px-4"
            onClick={() => setCommandPaletteOpen(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl liquid-nav rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-[var(--c-border)]">
                <svg className="w-5 h-5 text-[var(--c-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search navigation..."
                  className="flex-1 bg-transparent border-none outline-none text-[var(--c-text)] placeholder:text-[var(--c-muted)]"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-xs bg-[var(--c-bg)] rounded border border-[var(--c-border)] text-[var(--c-muted)]">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-auto p-2">
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd) => (
                    <a
                      key={cmd.label}
                      href={cmd.href}
                      onClick={() => setCommandPaletteOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--c-tile)] transition group"
                    >
                      <span className="text-[var(--c-text)] group-hover:text-[var(--c-accent)] transition">
                        {cmd.label}
                      </span>
                      <svg className="w-4 h-4 ml-auto text-[var(--c-muted)] opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))
                ) : (
                  <div className="text-center py-8 text-[var(--c-muted)]">
                    No results found
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
