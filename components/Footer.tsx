'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--c-bg-card)] border-t border-[var(--c-border)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-[var(--c-text-strong)] mb-3">
              {profile.name}
            </h3>
            <p className="text-[var(--c-accent)] font-semibold mb-3">
              {profile.title}
            </p>
            <p className="text-sm text-[var(--c-text-muted)] leading-relaxed max-w-md">
              Driving growth through data-driven marketing, business intelligence, AI automation, and creative strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[var(--c-text-strong)] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Work', 'Marketing', 'Analytics', 'Automation', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-[var(--c-text-strong)] mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                >
                  Portfolio Archive
                </a>
              </li>
              <li>
                <a
                  href="/Resume.pdf"
                  download
                  className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="text-[var(--c-text-muted)] hover:text-[var(--c-accent)] transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--c-border)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--c-text-muted)]">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="text-center">
            Built with Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-center">
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
