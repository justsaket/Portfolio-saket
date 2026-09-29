'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Creative {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Branding' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'advertising', label: 'Advertising' },
  { id: 'packaging', label: 'Packaging' },
  { id: 'campaigns', label: 'Campaigns' },
];

// Placeholder creative data - will be populated with actual assets
const creativesData: Creative[] = [
  // Branding
  { id: '1', title: 'Brand Identity System', category: 'branding', image: '/creative/branding/sample-1.jpg' },
  { id: '2', title: 'Logo Design Collection', category: 'branding', image: '/creative/logo-designs/sample-1.jpg' },

  // Social Media
  { id: '3', title: 'Social Media Campaign', category: 'social-media', image: '/creative/social-media-posts/sample-1.jpg' },
  { id: '4', title: 'Instagram Story Series', category: 'social-media', image: '/creative/social-media-posts/sample-2.jpg' },

  // Advertising
  { id: '5', title: 'Digital Ad Campaign', category: 'advertising', image: '/creative/advertising/sample-1.jpg' },
  { id: '6', title: 'Banner Ad System', category: 'advertising', image: '/creative/slider/sample-1.jpg' },

  // More will be dynamically loaded from actual files
];

export default function CreativeGalleryEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null);
  const [creatives, setCreatives] = useState<Creative[]>(creativesData);

  const filteredCreatives = selectedCategory === 'all'
    ? creatives
    : creatives.filter(c => c.category === selectedCategory);

  const openLightbox = (creative: Creative) => {
    setSelectedCreative(creative);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setSelectedCreative(null), 300);
  };

  const nextCreative = () => {
    if (!selectedCreative) return;
    const currentIndex = filteredCreatives.findIndex(c => c.id === selectedCreative.id);
    const nextIndex = (currentIndex + 1) % filteredCreatives.length;
    setSelectedCreative(filteredCreatives[nextIndex]);
  };

  const prevCreative = () => {
    if (!selectedCreative) return;
    const currentIndex = filteredCreatives.findIndex(c => c.id === selectedCreative.id);
    const prevIndex = currentIndex === 0 ? filteredCreatives.length - 1 : currentIndex - 1;
    setSelectedCreative(filteredCreatives[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextCreative();
      if (e.key === 'ArrowLeft') prevCreative();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedCreative]);

  return (
    <section id="creative" className="relative py-24 bg-[var(--c-bg)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--c-accent)] font-semibold mb-4"
          >
            Creative Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Visual
            <span className="text-gradient-red"> Storytelling</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            A curated collection of brand identities, campaigns, and digital creatives
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent-dark)] text-white shadow-lg shadow-[var(--c-accent)]/30'
                  : 'bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text-muted)] hover:border-[var(--c-accent)] hover:text-[var(--c-text)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCreatives.map((creative, index) => (
              <motion.div
                key={creative.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--c-bg-card)] border border-[var(--c-border)] cursor-pointer"
                onClick={() => openLightbox(creative)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                  src={creative.image}
                  alt={creative.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--c-accent)]/20 border border-[var(--c-accent)] text-[var(--c-accent)] text-xs font-semibold mb-2">
                    {creative.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-xl font-bold text-white">{creative.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && selectedCreative && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition z-10"
                aria-label="Close"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevCreative(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextCreative(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text)] hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition"
                aria-label="Next"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={selectedCreative.image}
                    alt={selectedCreative.title}
                    fill
                    className="object-contain"
                    sizes="90vw"
                    quality={100}
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-[var(--c-accent)]/20 border border-[var(--c-accent)] text-[var(--c-accent)] text-sm font-semibold mb-3">
                    {selectedCreative.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedCreative.title}</h3>
                  {selectedCreative.description && (
                    <p className="text-[var(--c-text-muted)]">{selectedCreative.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://drive.google.com/drive/folders/158EhPqMiCwT8OOZFJHC-UC4k-ACSL-T6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[var(--c-accent)] text-[var(--c-accent)] font-semibold hover:bg-[var(--c-accent)]/10 transition"
          >
            View Complete Archive
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
