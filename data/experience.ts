export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'entrepreneurship';
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    role: "Social Media Executive",
    company: "Rungta International Skills University",
    period: "Nov 2025 – Apr 2026",
    description: "Led social media content planning and digital branding. Used design tools and AI platforms for content creation, workflow management, and team collaboration.",
    type: "work",
    current: false
  },
  {
    role: "Co-Founder / Operations & Growth Lead",
    company: "Digital Finvest | Taste Plaza | Asketrulize",
    period: "Nov 2024 – Present",
    description: "Managed online financial product services (insurance, mutual funds, SIPs, loans), built scalable lead generation systems, handled business operations, customer acquisition, and digital promotions across multiple ventures.",
    type: "entrepreneurship",
    current: true
  },
  {
    role: "Business Development Executive",
    company: "Chal Digital",
    period: "Jul 2023 – Mar 2024",
    description: "Executed affiliate and performance marketing campaigns to drive revenue growth. Expanded brand reach through influencer partnerships and generated qualified leads.",
    type: "work"
  },
  {
    role: "Network Marketing Associate",
    company: "Forever Living Products",
    period: "Jun 2022 – Apr 2023",
    description: "Built and maintained a loyal client base, trained new associates in sales techniques, and strengthened customer relationship management skills.",
    type: "work"
  }
];

export const education: Experience[] = [
  {
    role: "MBA (Masters in Business Administration)",
    company: "Deen Dayal Upadhyay Gorakhpur University",
    period: "2022 – 2024",
    description: "Master of Business Administration with specialization in Digital Marketing — covering marketing strategy, consumer behavior, digital channels, and marketing analytics.",
    type: "education"
  },
  {
    role: "B.Com (Bachelor of Commerce)",
    company: "Hemchand Yadav University",
    period: "Jun 2025",
    description: "Bachelor of Commerce with focus on business, finance, and accounting.",
    type: "education"
  },
  {
    role: "Diploma in Computer Applications",
    company: "ITCT",
    period: "Jan 2025",
    description: "Comprehensive computer applications program covering programming, web development, and digital tools.",
    type: "education"
  },
  {
    role: "Higher Secondary Education (Class XII)",
    company: "CBSE Board",
    period: "Jul 2022",
    description: "Higher secondary education with strong academic performance.",
    type: "education"
  },
  {
    role: "Secondary Education (Class X)",
    company: "CBSE Board",
    period: "Jul 2020",
    description: "Secondary education with excellent results.",
    type: "education"
  }
];
