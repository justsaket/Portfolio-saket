'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Creative {
  id: string;
  title: string;
  category: string;
  image: string;
  isGif?: boolean;
}

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'branding', label: 'Logo & Branding' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'advertising', label: 'Advertising' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'festivals', label: 'Festival Creatives' },
  { id: 'packaging', label: 'Packaging' },
];

const creativesData: Creative[] = [
  // Logo Designs (branding) - curated selection
  { id: 'logo-1', title: 'Logo Design', category: 'branding', image: '/creative/branding/Logo Designs/2.jpg' },
  { id: 'logo-2', title: 'Brand Identity', category: 'branding', image: '/creative/branding/Logo Designs/3.jpg' },
  { id: 'logo-3', title: 'Logo Concept', category: 'branding', image: '/creative/branding/Logo Designs/4.jpg' },
  { id: 'logo-4', title: 'Corporate Logo', category: 'branding', image: '/creative/branding/Logo Designs/5.jpg' },
  { id: 'logo-5', title: 'Minimal Logo', category: 'branding', image: '/creative/branding/Logo Designs/6.jpg' },
  { id: 'logo-6', title: 'Logo Mark', category: 'branding', image: '/creative/branding/Logo Designs/7.jpg' },
  { id: 'logo-7', title: 'Brand Symbol', category: 'branding', image: '/creative/branding/Logo Designs/8.jpg' },
  { id: 'logo-8', title: 'Logo System', category: 'branding', image: '/creative/branding/Logo Designs/9.jpg' },
  { id: 'logo-9', title: 'Wordmark Design', category: 'branding', image: '/creative/branding/Logo Designs/10.jpg' },
  { id: 'logo-10', title: 'Emblem Logo', category: 'branding', image: '/creative/branding/Logo Designs/11.jpg' },
  { id: 'logo-11', title: 'Abstract Logo', category: 'branding', image: '/creative/branding/Logo Designs/12.jpg' },
  { id: 'logo-12', title: 'Monogram Design', category: 'branding', image: '/creative/branding/Logo Designs/13.jpg' },
  { id: 'logo-13', title: 'Brand Exploration', category: 'branding', image: '/creative/branding/Logo Designs/14.jpg' },
  { id: 'logo-14', title: 'Iconic Logo', category: 'branding', image: '/creative/branding/Logo Designs/15.jpg' },
  { id: 'logo-15', title: 'Logo Variation', category: 'branding', image: '/creative/branding/Logo Designs/16.jpg' },
  { id: 'logo-16', title: 'Visual Identity', category: 'branding', image: '/creative/branding/Logo Designs/17.jpg' },
  { id: 'logo-17', title: 'Creative Logo', category: 'branding', image: '/creative/branding/Logo Designs/18.jpg' },
  { id: 'logo-18', title: 'Modern Logo', category: 'branding', image: '/creative/branding/Logo Designs/19.jpg' },
  { id: 'logo-19', title: 'Lettermark', category: 'branding', image: '/creative/branding/Logo Designs/20.jpg' },
  { id: 'logo-20', title: 'Logo Collection', category: 'branding', image: '/creative/branding/Logo Designs/21.png' },
  { id: 'logo-21', title: 'Geometric Logo', category: 'branding', image: '/creative/branding/Logo Designs/22.png' },
  { id: 'logo-22', title: 'Flat Logo', category: 'branding', image: '/creative/branding/Logo Designs/23.png' },
  { id: 'logo-23', title: 'Typography Logo', category: 'branding', image: '/creative/branding/Logo Designs/24.jpg' },
  { id: 'logo-24', title: 'Mascot Logo', category: 'branding', image: '/creative/branding/Logo Designs/25.png' },
  { id: 'logo-25', title: 'Vintage Logo', category: 'branding', image: '/creative/branding/Logo Designs/26.jpg' },
  { id: 'logo-26', title: 'Brand Logo', category: 'branding', image: '/creative/branding/Logo Designs/27.png' },
  { id: 'logo-27', title: 'Premium Logo', category: 'branding', image: '/creative/branding/Logo Designs/28.jpg' },
  { id: 'logo-28', title: 'Logo Redesign', category: 'branding', image: '/creative/branding/Logo Designs/29.png' },
  { id: 'brochure-1', title: 'Brochure Design', category: 'branding', image: '/creative/branding/Brochure/2.png' },
  { id: 'brochure-2', title: 'Brochure Layout', category: 'branding', image: '/creative/branding/Brochure/2-ai file{2}.png' },
  { id: 'brochure-3', title: 'Brochure Spread', category: 'branding', image: '/creative/branding/Brochure/2-ai file{3}.png' },

  // Social Media Posts
  { id: 'social-1', title: 'Social Post Design', category: 'social-media', image: '/creative/social-media/Social Media Posts/1.jpg' },
  { id: 'social-2', title: 'Instagram Post', category: 'social-media', image: '/creative/social-media/Social Media Posts/2.jpg' },
  { id: 'social-3', title: 'Social Campaign', category: 'social-media', image: '/creative/social-media/Social Media Posts/3.jpg' },
  { id: 'social-4', title: 'Brand Post', category: 'social-media', image: '/creative/social-media/Social Media Posts/4.jpg' },
  { id: 'social-5', title: 'Content Design', category: 'social-media', image: '/creative/social-media/Social Media Posts/5_.jpg' },
  { id: 'social-6', title: 'Engagement Post', category: 'social-media', image: '/creative/social-media/Social Media Posts/6.jpg' },
  { id: 'social-7', title: 'Story Design', category: 'social-media', image: '/creative/social-media/Social Media Posts/7.jpg' },
  { id: 'social-8', title: 'Marketing Post', category: 'social-media', image: '/creative/social-media/Social Media Posts/Bue Red and Beige Modern 3D Social Media Marketing Agency Instagram Post (1).jpg' },

  // Advertising - Sliders (PNG only, skip GIFs for grid)
  { id: 'slider-1', title: 'Slider Banner', category: 'advertising', image: '/creative/advertising/Slider/1.png' },
  { id: 'slider-2', title: 'Ad Slider', category: 'advertising', image: '/creative/advertising/Slider/2.png' },
  { id: 'slider-3', title: 'Banner Design', category: 'advertising', image: '/creative/advertising/Slider/3.png' },
  { id: 'slider-4', title: 'Web Banner', category: 'advertising', image: '/creative/advertising/Slider/4.png' },
  { id: 'slider-5', title: 'Ad Creative', category: 'advertising', image: '/creative/advertising/Slider/5.png' },
  { id: 'slider-6', title: 'Display Ad', category: 'advertising', image: '/creative/advertising/Slider/6.png' },

  // Advertising - YouTube Thumbnails (curated)
  { id: 'yt-1', title: 'YouTube Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/1.jpg' },
  { id: 'yt-2', title: 'Video Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/2.jpg' },
  { id: 'yt-3', title: 'Thumbnail Design', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/3.jpg' },
  { id: 'yt-4', title: 'Click-worthy Thumb', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/4.jpg' },
  { id: 'yt-5', title: 'Content Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/5.jpg' },
  { id: 'yt-6', title: 'Video Cover', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/6.jpg' },
  { id: 'yt-7', title: 'YT Creative', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/7.jpg' },
  { id: 'yt-8', title: 'Thumbnail Art', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/8.jpg' },
  { id: 'yt-9', title: 'Video Preview', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/9.jpg' },
  { id: 'yt-10', title: 'Engaging Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/10.jpg' },
  { id: 'yt-11', title: 'Channel Art', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/11.jpg' },
  { id: 'yt-12', title: 'Stream Design', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/12.jpg' },
  { id: 'yt-13', title: 'Podcast Cover', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/13.jpg' },
  { id: 'yt-14', title: 'Thumbnail Layout', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/14.jpg' },
  { id: 'yt-15', title: 'Video Graphic', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/15.jpg' },
  { id: 'yt-16', title: 'Visual Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/16.jpg' },
  { id: 'yt-17', title: 'Bold Thumbnail', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/17.jpg' },
  { id: 'yt-18', title: 'Eye-catching Thumb', category: 'advertising', image: '/creative/advertising/Youtube Thumbnail/18.jpg' },

  // Campaigns - Exclusive Designs (curated selection, skip GIFs)
  { id: 'camp-1', title: 'Campaign Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/1.png' },
  { id: 'camp-2', title: 'Exclusive Creative', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/2.jpg' },
  { id: 'camp-3', title: 'Brand Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/3.jpg' },
  { id: 'camp-4', title: 'Visual Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/4.jpg' },
  { id: 'camp-5', title: 'Creative Concept', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/5.jpg' },
  { id: 'camp-6', title: 'Design System', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/6.jpg' },
  { id: 'camp-7', title: 'Campaign Art', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/7.png' },
  { id: 'camp-8', title: 'Promotional Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/8.jpg' },
  { id: 'camp-9', title: 'Launch Creative', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/9.jpg' },
  { id: 'camp-10', title: 'Event Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/10.png' },
  { id: 'camp-11', title: 'Campaign Visual', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/11.png' },
  { id: 'camp-12', title: 'Promo Material', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/12.png' },
  { id: 'camp-13', title: 'Creative Suite', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/13.png' },
  { id: 'camp-14', title: 'Brand Activation', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/14.png' },
  { id: 'camp-15', title: 'Ad Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/15.png' },
  { id: 'camp-16', title: 'Marketing Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/16.png' },
  { id: 'camp-17', title: 'Growth Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/17.png' },
  { id: 'camp-18', title: 'Digital Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/18.png' },
  { id: 'camp-19', title: 'Creative Direction', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/19.png' },
  { id: 'camp-20', title: 'Media Campaign', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/20.jpg' },
  { id: 'camp-21', title: 'Impact Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/21.png' },
  { id: 'camp-22', title: 'Campaign Art II', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/22.png' },
  { id: 'camp-23', title: 'Brand Story', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/27.png' },
  { id: 'camp-24', title: 'Visual Narrative', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/28.png' },
  { id: 'camp-25', title: 'Series Design', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/29.jpg' },
  { id: 'camp-26', title: 'Portfolio Piece', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/30.jpg' },
  { id: 'camp-27', title: 'Design Execution', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/31.png' },
  { id: 'camp-28', title: 'Campaign Finale', category: 'campaigns', image: '/creative/campaigns/Exclusive Designs/32.png' },

  // Festival Specials (curated, skip GIFs)
  { id: 'fest-1', title: 'Festival Post', category: 'festivals', image: '/creative/festivals/Specials/2.png' },
  { id: 'fest-2', title: 'Celebration Design', category: 'festivals', image: '/creative/festivals/Specials/3.png' },
  { id: 'fest-3', title: 'Festival Creative', category: 'festivals', image: '/creative/festivals/Specials/4.png' },
  { id: 'fest-4', title: 'Festive Wishes', category: 'festivals', image: '/creative/festivals/Specials/5.jpg' },
  { id: 'fest-5', title: 'Occasion Post', category: 'festivals', image: '/creative/festivals/Specials/6.jpg' },
  { id: 'fest-6', title: 'Holiday Design', category: 'festivals', image: '/creative/festivals/Specials/7.jpg' },
  { id: 'fest-7', title: 'Special Day Post', category: 'festivals', image: '/creative/festivals/Specials/8.jpg' },
  { id: 'fest-8', title: 'Cultural Design', category: 'festivals', image: '/creative/festivals/Specials/9.jpg' },
  { id: 'fest-9', title: 'Traditional Art', category: 'festivals', image: '/creative/festivals/Specials/10.png' },
  { id: 'fest-10', title: 'Ethnic Design', category: 'festivals', image: '/creative/festivals/Specials/11.jpg' },
  { id: 'fest-11', title: 'Seasonal Post', category: 'festivals', image: '/creative/festivals/Specials/12.jpg' },
  { id: 'fest-12', title: 'Celebration Art', category: 'festivals', image: '/creative/festivals/Specials/13.png' },
  { id: 'fest-13', title: 'Festive Banner', category: 'festivals', image: '/creative/festivals/Specials/14.png' },
  { id: 'fest-14', title: 'Event Creative', category: 'festivals', image: '/creative/festivals/Specials/15.png' },
  { id: 'fest-15', title: 'Holiday Special', category: 'festivals', image: '/creative/festivals/Specials/16.png' },
  { id: 'fest-16', title: 'Festival Story', category: 'festivals', image: '/creative/festivals/Specials/17.png' },
  { id: 'fest-17', title: 'Festive Art', category: 'festivals', image: '/creative/festivals/Specials/18.png' },
  { id: 'fest-18', title: 'National Day', category: 'festivals', image: '/creative/festivals/Specials/19.png' },
  { id: 'fest-19', title: 'Ritual Design', category: 'festivals', image: '/creative/festivals/Specials/20.png' },
  { id: 'fest-20', title: 'Diwali Special', category: 'festivals', image: '/creative/festivals/Specials/21.png' },
  { id: 'fest-21', title: 'Holi Creative', category: 'festivals', image: '/creative/festivals/Specials/22.png' },
  { id: 'fest-22', title: 'Eid Wishes', category: 'festivals', image: '/creative/festivals/Specials/23.jpg' },
  { id: 'fest-23', title: 'Navratri Post', category: 'festivals', image: '/creative/festivals/Specials/24.png' },
  { id: 'fest-24', title: 'Pongal Design', category: 'festivals', image: '/creative/festivals/Specials/25.png' },
  { id: 'fest-25', title: 'Onam Creative', category: 'festivals', image: '/creative/festivals/Specials/26.png' },
  { id: 'fest-26', title: 'Ganesh Chaturthi', category: 'festivals', image: '/creative/festivals/Specials/27.png' },
  { id: 'fest-27', title: 'Makar Sankranti', category: 'festivals', image: '/creative/festivals/Specials/30.png' },
  { id: 'fest-28', title: 'Republic Day', category: 'festivals', image: '/creative/festivals/Specials/31.png' },
  { id: 'fest-29', title: 'Independence Day', category: 'festivals', image: '/creative/festivals/Specials/32.png' },
  { id: 'fest-30', title: 'Teachers Day', category: 'festivals', image: '/creative/festivals/Specials/33.png' },
  { id: 'fest-31', title: 'New Year Post', category: 'festivals', image: '/creative/festivals/Specials/34.png' },
  { id: 'fest-32', title: 'Christmas Design', category: 'festivals', image: '/creative/festivals/Specials/35.png' },
  { id: 'fest-33', title: 'Raksha Bandhan', category: 'festivals', image: '/creative/festivals/Specials/36.png' },
  { id: 'fest-34', title: 'Janmashtami', category: 'festivals', image: '/creative/festivals/Specials/37.png' },
  { id: 'fest-35', title: 'Durga Puja', category: 'festivals', image: '/creative/festivals/Specials/38.jpg' },
  { id: 'fest-36', title: 'Karwa Chauth', category: 'festivals', image: '/creative/festivals/Specials/39.png' },
  { id: 'fest-37', title: 'Chhath Puja', category: 'festivals', image: '/creative/festivals/Specials/40.png' },
  { id: 'fest-38', title: 'Festival Poster', category: 'festivals', image: '/creative/festivals/Specials/41.png' },
  { id: 'fest-39', title: 'Celebration Post', category: 'festivals', image: '/creative/festivals/Specials/42.png' },
  { id: 'fest-40', title: 'Seasonal Creative', category: 'festivals', image: '/creative/festivals/Specials/43.png' },
  { id: 'fest-41', title: 'Year-End Design', category: 'festivals', image: '/creative/festivals/Specials/44.png' },

  // Packaging
  { id: 'pack-1', title: 'Package Design', category: 'packaging', image: '/creative/packaging/Printables/1.jpg' },
];

export default function CreativeGalleryEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCreative, setSelectedCreative] = useState<Creative | null>(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredCreatives = selectedCategory === 'all'
    ? creativesData
    : creativesData.filter(c => c.category === selectedCategory);

  const displayedCreatives = filteredCreatives.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCreatives.length;

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
    setVisibleCount(18);
  }, [selectedCategory]);

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

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return creativesData.length;
    return creativesData.filter(c => c.category === catId).length;
  };

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
            {creativesData.length}+ original designs across branding, social media, advertising, and campaigns
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
              <span className="ml-2 text-xs opacity-70">({getCategoryCount(cat.id)})</span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {displayedCreatives.map((creative, index) => (
              <motion.div
                key={creative.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.03, 0.5) }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden bg-[var(--c-bg-card)] border border-[var(--c-border)] cursor-pointer hover:border-[var(--c-accent)] transition-colors"
                onClick={() => openLightbox(creative)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <Image
                  src={creative.image}
                  alt={creative.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  unoptimized={creative.isGif}
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--c-accent)]/20 border border-[var(--c-accent)] text-[var(--c-accent)] text-xs font-semibold mb-2">
                    {categories.find(c => c.id === creative.category)?.label || creative.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{creative.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setVisibleCount(prev => prev + 18)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--c-bg-card)] border-2 border-[var(--c-border)] text-[var(--c-text)] font-semibold hover:border-[var(--c-accent)] hover:text-[var(--c-accent)] transition-all"
            >
              Load More ({filteredCreatives.length - visibleCount} remaining)
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}

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
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition z-10"
                aria-label="Close"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute top-6 left-6 text-white/60 text-sm font-medium z-10">
                {filteredCreatives.findIndex(c => c.id === selectedCreative.id) + 1} / {filteredCreatives.length}
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); prevCreative(); }}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                aria-label="Previous"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextCreative(); }}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
                aria-label="Next"
              >
                <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <motion.div
                key={selectedCreative.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl max-h-[85vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={selectedCreative.image}
                    alt={selectedCreative.title}
                    width={1200}
                    height={900}
                    className="max-h-[75vh] w-auto h-auto object-contain rounded-xl"
                    sizes="90vw"
                    quality={100}
                    unoptimized={selectedCreative.isGif}
                  />
                </div>
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 rounded-full bg-[var(--c-accent)]/20 border border-[var(--c-accent)] text-[var(--c-accent)] text-sm font-semibold mb-2">
                    {categories.find(c => c.id === selectedCreative.category)?.label || selectedCreative.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedCreative.title}</h3>
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
            View Complete Archive on Drive
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
