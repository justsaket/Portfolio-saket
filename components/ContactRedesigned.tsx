'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { profile } from '@/data/profile';

export default function ContactRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // Honeypot field
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          website: formState.website // Honeypot
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setTimeout(() => {
        setFormState({ name: '', email: '', subject: '', message: '', website: '' });
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try emailing directly.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--c-accent)] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-2xl mx-auto">
            Open to opportunities in digital marketing, analytics, automation, and growth strategy. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="glass-hover rounded-2xl p-6 group hover:border-[var(--c-accent)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">📧</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--c-strong)] mb-2">Email</h3>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-[var(--c-accent)] hover:underline break-all"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-hover rounded-2xl p-6 group hover:border-[var(--c-accent)] transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">📱</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--c-strong)] mb-2">Phone</h3>
                    <a
                      href={`tel:${profile.contact.phone}`}
                      className="text-[var(--c-accent)] hover:underline"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="glass-hover rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--c-strong)] mb-2">Location</h3>
                    <p className="text-[var(--c-muted)]">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-hover rounded-2xl p-6">
              <h3 className="font-bold text-[var(--c-strong)] mb-4">Connect Online</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] hover:bg-[var(--c-accent)]/20 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] hover:bg-[var(--c-accent)]/20 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={profile.contact.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] hover:bg-[var(--c-accent)]/20 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  Portfolio
                </a>
                <a
                  href="/Resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] hover:bg-[var(--c-accent)]/20 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-hover rounded-2xl p-8 space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="website"
                value={formState.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--c-text)] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)] focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--c-text)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)] focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--c-text)] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)] focus:border-transparent transition"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--c-text)] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--c-accent)] focus:border-transparent transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] text-white font-semibold shadow-lg shadow-[var(--c-accent)]/25 hover:shadow-xl hover:shadow-[var(--c-accent)]/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-green-500"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-red-500"
                >
                  {errorMessage || 'Something went wrong. Please try again or email directly.'}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center glass-hover rounded-3xl p-12"
        >
          <p className="text-2xl md:text-3xl font-bold text-[var(--c-strong)] mb-4">
            {profile.name}
          </p>
          <p className="text-xl text-gradient font-semibold mb-2">
            {profile.title}
          </p>
          <p className="text-[var(--c-muted)] italic max-w-3xl mx-auto">
            Where marketing strategy meets data intelligence, automation, and creative execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
