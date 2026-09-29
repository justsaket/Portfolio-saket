export interface Creative {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Social Media' | 'Advertising' | 'Festival' | 'Campaign';
  description?: string;
  tools?: string[];
  year?: string;
  image?: string;
}

// Sample of actual creative work from portfolio
export const creativeWork: Creative[] = [
  // Branding & Logo Designs
  {
    id: 'brand-logos',
    title: 'Brand Identity & Logo Designs',
    category: 'Branding',
    tools: ['Canva', 'CorelDRAW', 'Adobe Illustrator'],
    description: 'Custom logo designs and brand identity systems for various clients including Trendo, Spicy Crave, and Taste Plaza.',
    image: '/creative/branding/Logo Designs'
  },
  {
    id: 'brand-brochures',
    title: 'Business Brochures & Marketing Collateral',
    category: 'Branding',
    tools: ['CorelDRAW', 'Canva'],
    description: 'Professional brochure designs for business presentations and marketing materials.',
    image: '/creative/branding/Brochure'
  },

  // Social Media Creatives
  {
    id: 'social-posts',
    title: 'Social Media Post Designs',
    category: 'Social Media',
    tools: ['Canva', 'Adobe Creative Suite'],
    description: 'Engaging social media graphics for Instagram, Facebook, LinkedIn, and other platforms.',
    image: '/creative/social-media/Social Media Posts'
  },

  // Advertising & Promotional
  {
    id: 'youtube-thumbnails',
    title: 'YouTube Thumbnail Designs',
    category: 'Advertising',
    tools: ['Canva', 'Photoshop'],
    description: 'Eye-catching YouTube thumbnails optimized for click-through rates.',
    image: '/creative/advertising/Youtube Thumbnail'
  },
  {
    id: 'web-sliders',
    title: 'Website Banner & Slider Designs',
    category: 'Advertising',
    tools: ['Canva', 'Figma'],
    description: 'Web banners and carousel sliders for digital marketing campaigns.',
    image: '/creative/advertising/Slider'
  },

  // Packaging & Printables
  {
    id: 'printables',
    title: 'Print Design & Packaging',
    category: 'Packaging',
    tools: ['CorelDRAW', 'Adobe InDesign'],
    description: 'Print-ready designs for product packaging, labels, and promotional materials.',
    image: '/creative/packaging/Printables'
  },

  // Festival & Special Campaigns
  {
    id: 'festival-specials',
    title: 'Festival & Special Occasion Campaigns',
    category: 'Festival',
    tools: ['Canva'],
    description: 'Seasonal and festival-themed creative campaigns for special occasions.',
    image: '/creative/festivals/Specials'
  },

  // Campaign Work
  {
    id: 'exclusive-campaigns',
    title: 'Exclusive Marketing Campaigns',
    category: 'Campaign',
    tools: ['Canva', 'Photoshop'],
    description: 'Full-scale marketing campaign designs including multi-platform creative assets.',
    image: '/creative/campaigns/Exclusive Designs'
  },
];

export const creativeCategories = [
  'All',
  'Branding',
  'Social Media',
  'Advertising',
  'Packaging',
  'Festival',
  'Campaign',
] as const;

export const creativeByCategory = (category: string) => {
  if (category === 'All') return creativeWork;
  return creativeWork.filter(c => c.category === category);
};

// Creative statistics
export const creativeStats = {
  totalProjects: 163,
  categories: 7,
  toolsUsed: ['Canva', 'CorelDRAW', 'Adobe Creative Suite', 'Figma', 'Photoshop', 'Illustrator'],
  clientSectors: ['Food & Beverage', 'Tech Startups', 'Education', 'Fintech', 'E-commerce']
};
