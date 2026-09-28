export interface Certification {
  title: string;
  issuer: string;
  category: string;
  year?: string;
  score?: string;
  featured?: boolean;
}

export const certifications: Certification[] = [
  // Marketing
  {
    title: "Google Analytics",
    issuer: "Google",
    category: "Marketing",
  },
  {
    title: "Content Marketing & SEO",
    issuer: "Professional Certification",
    category: "Marketing",
  },
  {
    title: "Digital Marketing",
    issuer: "Professional Certification",
    category: "Marketing",
  },
  {
    title: "AI-Powered Advertising",
    issuer: "Professional Certification",
    category: "Marketing",
  },

  // Analytics & BI
  {
    title: "Power BI",
    issuer: "Microsoft",
    category: "Analytics",
  },
  {
    title: "Business Analytics",
    issuer: "Professional Certification",
    category: "Analytics",
  },
  {
    title: "Data Analytics",
    issuer: "Professional Certification",
    category: "Analytics",
  },

  // AI & Technology
  {
    title: "Microsoft Copilot Studio",
    issuer: "Microsoft",
    category: "Technology",
  },
  {
    title: "Python Programming",
    issuer: "Professional Certification",
    category: "Technology",
  },
  {
    title: "Mobile App Product Management",
    issuer: "Professional Certification",
    category: "Technology",
  },

  // Business & Finance
  {
    title: "SEBI Investor Certification Examination",
    issuer: "NISM (National Institute of Securities Markets)",
    category: "Finance",
    score: "48/50",
    featured: true
  },

  // Design & Creative
  {
    title: "UI/UX Basics",
    issuer: "Professional Certification",
    category: "Design",
  },
  {
    title: "WordPress Development",
    issuer: "Professional Certification",
    category: "Design",
  },
  {
    title: "Creative Project Management",
    issuer: "Professional Certification",
    category: "Design",
  }
];

export const certificationsByCategory = {
  marketing: certifications.filter(c => c.category === "Marketing"),
  analytics: certifications.filter(c => c.category === "Analytics"),
  technology: certifications.filter(c => c.category === "Technology"),
  finance: certifications.filter(c => c.category === "Finance"),
  design: certifications.filter(c => c.category === "Design"),
};

export const featuredCertifications = certifications.filter(c => c.featured);
