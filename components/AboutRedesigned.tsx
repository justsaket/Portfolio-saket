'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '@/data/profile';

export default function AboutRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 bg-[var(--c-tile)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-black text-[var(--c-strong)] mb-6"
              >
                About <span className="text-gradient">Saket</span>
              </motion.h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-[var(--c-text)] leading-relaxed">
              <p className="text-xl font-medium text-[var(--c-strong)]">
                {profile.about.intro}
              </p>

              <p>
                {profile.about.positioning}
              </p>

              <p>
                {profile.about.capabilities}
              </p>

              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="pl-6 border-l-4 border-[var(--c-accent)] italic text-[var(--c-muted)]"
              >
                "I don't just analyze data or run campaigns—I build systems where marketing intelligence drives automated growth, supported by creative impact."
              </motion.blockquote>
            </div>
          </motion.div>

          {/* Right: Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Location Card */}
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📍</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--c-strong)] mb-2">Location</h3>
                  <p className="text-[var(--c-muted)]">{profile.location}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--c-strong)] mb-2">Email</h3>
                  <a href={`mailto:${profile.contact.email}`} className="text-[var(--c-accent)] hover:underline">
                    {profile.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--c-strong)] mb-2">Phone</h3>
                  <a href={`tel:${profile.contact.phone}`} className="text-[var(--c-accent)] hover:underline">
                    {profile.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--c-strong)] mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 rounded-full bg-[var(--c-accent)]/10 text-sm text-[var(--c-accent)]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-hover rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🗣️</div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--c-strong)] mb-2">Languages</h3>
                  <p className="text-[var(--c-muted)]">{profile.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
