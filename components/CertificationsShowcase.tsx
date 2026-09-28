'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { certifications } from '@/data/certifications';

export default function CertificationsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Group certifications by category
  const groupedCerts = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, typeof certifications>);

  const categoryIcons: Record<string, string> = {
    "Marketing": "📊",
    "Analytics": "📈",
    "Technology": "🤖",
    "Finance": "💼",
    "Design": "🎨"
  };

  return (
    <section id="certifications" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto">
            Continuous learning across marketing, analytics, AI, business, and creative domains.
          </p>
        </motion.div>

        {/* NISM Featured Certificate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 glass-hover rounded-3xl p-8 md:p-12 border-2 border-[var(--c-accent)]/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-6xl md:text-7xl">🏆</div>
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--c-accent)]/20 text-[var(--c-accent)] text-sm font-medium mb-3">
                Featured Credential
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-strong)] mb-2">
                NISM / SEBI Investor Certification
              </h3>
              <p className="text-lg text-[var(--c-muted)] mb-3">
                Securities and Exchange Board of India (SEBI) certified investor qualification.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--c-tile)] border border-[var(--c-border)]">
                <span className="font-bold text-[var(--c-accent)]">Score: 48/50</span>
                <span className="text-[var(--c-muted)]">•</span>
                <span className="text-[var(--c-muted)]">96%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications by Category */}
        <div className="space-y-12">
          {Object.entries(groupedCerts).map(([category, certs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-6 flex items-center gap-3">
                <span className="text-3xl">{categoryIcons[category] || "📜"}</span>
                {category}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + categoryIndex * 0.1 + index * 0.05 }}
                    className="group glass-hover rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Certificate Name */}
                    <h4 className="font-bold text-[var(--c-strong)] mb-2 group-hover:text-[var(--c-accent)] transition">
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <p className="text-sm text-[var(--c-muted)] mb-3">{cert.issuer}</p>

                    {/* Year */}
                    {cert.year && (
                      <p className="text-xs text-[var(--c-faint)]">{cert.year}</p>
                    )}

                    {/* Score */}
                    {cert.score && (
                      <p className="text-xs text-[var(--c-accent)] font-medium mt-2">Score: {cert.score}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center glass-hover rounded-3xl p-8"
        >
          <p className="text-lg text-[var(--c-muted)] italic max-w-2xl mx-auto">
            "Continuous learning across marketing, analytics, AI, and business domains to stay at the forefront of digital growth and innovation."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
