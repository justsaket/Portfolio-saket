export interface Creative {
  id: string;
  title: string;
  category: 'Branding' | 'Packaging' | 'Social Media' | 'Advertising' | 'Product Visuals' | 'Campaign' | 'Festival';
  description?: string;
  tools?: string[];
  year?: string;
  image?: string;
}

export const creativeWork: Creative[] = [
  {
    id: 'brand-1',
    title: 'Brand Identity Design',
    category: 'Branding',
    tools: ['Canva', 'CorelDRAW'],
  },
  {
    id: 'social-1',
    title: 'Social Media Campaign',
    category: 'Social Media',
    tools: ['Canva', 'Adobe Creative Cloud'],
  },
  {
    id: 'packaging-1',
    title: 'Product Packaging',
    category: 'Packaging',
    tools: ['CorelDRAW'],
  },
  {
    id: 'ads-1',
    title: 'Advertising Creative',
    category: 'Advertising',
    tools: ['Canva'],
  },
  {
    id: 'product-1',
    title: 'Product Photography & Design',
    category: 'Product Visuals',
    tools: ['Photography', 'Canva'],
  },
  {
    id: 'festival-1',
    title: 'Festival Campaign',
    category: 'Festival',
    tools: ['Canva'],
  },
];

export const creativeCategories = [
  'All',
  'Branding',
  'Packaging',
  'Social Media',
  'Advertising',
  'Product Visuals',
  'Campaign',
  'Festival',
] as const;

export const creativeByCategory = (category: string) => {
  if (category === 'All') return creativeWork;
  return creativeWork.filter(c => c.category === category);
};
