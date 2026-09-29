export interface Creative {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  tools?: string[];
}

export const creativeCategories = [
  { id: 'all', label: 'All Work', count: 0 },
  { id: 'branding', label: 'Branding & Logos', count: 0 },
  { id: 'social-media', label: 'Social Media', count: 0 },
  { id: 'advertising', label: 'Advertising', count: 0 },
  { id: 'packaging', label: 'Packaging', count: 0 },
  { id: 'campaigns', label: 'Campaigns', count: 0 },
  { id: 'brochures', label: 'Brochures', count: 0 },
  { id: 'youtube', label: 'YouTube Thumbnails', count: 0 },
];

export const creatives: Creative[] = [
  // Portfolio Overview Reference
  {
    id: 'portfolio-overview',
    title: 'Creative Portfolio Overview',
    category: 'branding',
    image: '/creative/portfolio-overview.png',
    description: 'Comprehensive creative portfolio showcasing 150+ projects across multiple categories',
    tools: ['Canva', 'Photoshop', 'Illustrator']
  },

  // Branding & Logo Designs
  {
    id: 'brand-1',
    title: 'Brand Identity System',
    category: 'branding',
    image: '/creative/branding/brand-identity.jpg',
    description: 'Complete brand identity including logo, colors, typography',
    tools: ['Canva', 'Illustrator']
  },
  {
    id: 'logo-1',
    title: 'Modern Logo Collection',
    category: 'branding',
    image: '/creative/logo-designs/logo-set-1.jpg',
    description: 'Professional logo designs for various industries',
    tools: ['Canva', 'Adobe Illustrator']
  },

  // Social Media Designs
  {
    id: 'social-1',
    title: 'Instagram Campaign Series',
    category: 'social-media',
    image: '/creative/social-media-posts/instagram-1.jpg',
    description: 'Engaging social media posts for brand campaigns',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 'social-2',
    title: 'Social Media Content Pack',
    category: 'social-media',
    image: '/creative/social-media-posts/social-pack-1.jpg',
    description: 'Ready-to-use social media templates',
    tools: ['Canva', 'Adobe Creative Suite']
  },

  // Advertising & Banners
  {
    id: 'ad-1',
    title: 'Digital Ad Campaign',
    category: 'advertising',
    image: '/creative/advertising/digital-ad-1.jpg',
    description: 'High-converting digital advertising designs',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 'slider-1',
    title: 'Website Banner System',
    category: 'advertising',
    image: '/creative/slider/banner-1.jpg',
    description: 'Responsive website sliders and banners',
    tools: ['Canva', 'Figma']
  },

  // Packaging Designs
  {
    id: 'package-1',
    title: 'Product Packaging Design',
    category: 'packaging',
    image: '/creative/packaging/package-1.jpg',
    description: 'Eye-catching product packaging concepts',
    tools: ['Canva', 'Adobe InDesign']
  },

  // Festival & Special Campaigns
  {
    id: 'festival-1',
    title: 'Festival Campaign Creatives',
    category: 'campaigns',
    image: '/creative/festivals/festival-1.jpg',
    description: 'Festive season marketing campaigns',
    tools: ['Canva', 'Photoshop']
  },
  {
    id: 'special-1',
    title: 'Exclusive Marketing Campaign',
    category: 'campaigns',
    image: '/creative/specials/special-campaign-1.jpg',
    description: 'Premium marketing campaign designs',
    tools: ['Canva', 'Illustrator']
  },

  // Brochures
  {
    id: 'brochure-1',
    title: 'Business Brochure Design',
    category: 'brochures',
    image: '/creative/brochure/brochure-1.jpg',
    description: 'Professional business brochures and marketing collateral',
    tools: ['Canva', 'InDesign']
  },

  // YouTube Thumbnails
  {
    id: 'yt-1',
    title: 'YouTube Thumbnail Pack',
    category: 'youtube',
    image: '/creative/youtube-thumbnail/thumbnail-1.jpg',
    description: 'Click-worthy YouTube thumbnails',
    tools: ['Canva', 'Photoshop']
  },
];

// Calculate category counts
creativeCategories.forEach(cat => {
  if (cat.id === 'all') {
    cat.count = creatives.length;
  } else {
    cat.count = creatives.filter(c => c.category === cat.id).length;
  }
});
