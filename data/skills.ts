export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Growth & Marketing",
    icon: "📈",
    description: "Strategic marketing and customer acquisition",
    skills: [
      "SEO",
      "SEM",
      "Social Media Marketing",
      "Affiliate Marketing",
      "Content Marketing",
      "Performance Marketing",
      "Brand Building",
      "E-commerce",
      "Lead Generation",
      "Customer Acquisition",
      "CRM Systems",
      "Facebook Ads Manager",
      "Campaign Planning",
      "Growth Hacking"
    ]
  },
  {
    title: "Analytics & BI",
    icon: "📊",
    description: "Data analytics and business intelligence",
    skills: [
      "Power BI",
      "Google Analytics",
      "Advanced Excel",
      "Data Analytics",
      "Business Intelligence",
      "Customer Segmentation",
      "LTV Analysis",
      "Workforce Analytics",
      "Financial Analysis",
      "HR Analytics",
      "Dashboard Design",
      "KPI Tracking",
      "Data Visualization"
    ]
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    description: "Workflow automation and AI systems",
    skills: [
      "n8n",
      "AI Agents",
      "API Integration",
      "LinkedIn Automation",
      "Lead Generation Automation",
      "Workflow Design",
      "AI Calling Systems",
      "Microsoft Copilot Studio",
      "Process Automation",
      "Integration Architecture"
    ]
  },
  {
    title: "Web & Technology",
    icon: "💻",
    description: "Web development and technical skills",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "Shopify",
      "Python",
      "C++",
      "UI/UX Basics",
      "Web Design",
      "CMS Management"
    ]
  },
  {
    title: "Creative & Design",
    icon: "🎨",
    description: "Visual design and creative production",
    skills: [
      "Graphic Design",
      "Branding",
      "Social Media Creatives",
      "Packaging Design",
      "Advertising Design",
      "Campaign Design",
      "Canva",
      "Adobe Creative Cloud",
      "CorelDRAW",
      "Visual Communication",
      "Typography",
      "Color Theory"
    ]
  },
  {
    title: "Business & Finance",
    icon: "💼",
    description: "Business operations and financial management",
    skills: [
      "Financial Accounting",
      "Tally Prime",
      "Tally ERP",
      "Strategic Planning",
      "Business Development",
      "Operations Management",
      "Business Analysis",
      "Financial Modeling",
      "SEBI/NISM Certification"
    ]
  }
];
