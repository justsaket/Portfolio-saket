'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { creativeWork, creativeCategories, creativeByCategory } from '@/data/creative';
import { profile } from '@/data/profile';

export default function CreativeGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredWork = creativeByCategory(activeCategory);

  return (
    <section id="creative" ref={ref} className="relative py-32 px-6 bg-[var(--c-tile)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Creative <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto mb-8">
            Brand identity, packaging, social media creatives, advertising campaigns, and visual communication work.
          </p>

          {/* Archive Link */}
          <motion.a
            href={profile.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20 hover:bg-[var(--c-accent)]/20 transition font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            View Full Creative Archive
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {creativeCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--c-accent)] text-black shadow-lg shadow-[var(--c-accent)]/25'
                  : 'bg-[var(--c-bg)] text-[var(--c-text)] border border-[var(--c-border)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Creative Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWork.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group glass-hover rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setLightboxImage(item.id)}
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--c-accent)]/10 to-[var(--c-accent2)]/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-6xl opacity-50"
                  >
                    🎨
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <span className="text-white font-medium">View Creative</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                  {item.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-[var(--c-strong)] group-hover:text-[var(--c-accent)] transition">
                  {item.title}
                </h3>

                {item.tools && (
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full bg-[var(--c-bg)] border border-[var(--c-border)] text-xs text-[var(--c-text)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center glass-hover rounded-3xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-strong)] mb-4">
            Interested in Collaboration?
          </h3>
          <p className="text-[var(--c-muted)] mb-6 max-w-2xl mx-auto">
            Available for branding, design, and creative direction projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] text-black font-semibold shadow-lg shadow-[var(--c-accent)]/25 hover:shadow-xl hover:shadow-[var(--c-accent)]/40 transition"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Placeholder */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[var(--c-accent)] transition"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-[var(--c-tile)] rounded-2xl overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[var(--c-accent)]/20 to-[var(--c-accent2)]/20 flex items-center justify-center">
                <p className="text-[var(--c-muted)] text-center px-6">
                  Creative asset preview<br />
                  <span className="text-sm">View full archive for high-resolution assets</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
