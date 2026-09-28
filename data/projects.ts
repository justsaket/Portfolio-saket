export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  github?: string;
  tech: string[];
  featured?: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "saketp1",
    title: "SaketP1",
    category: "Web Development",
    description: "Modern web application showcasing advanced UI/UX design principles, responsive architecture, and interactive user experiences.",
    url: "https://saketp1.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    featured: true
  },
  {
    id: "saketp2",
    title: "SaketP2",
    category: "Web Development",
    description: "Interactive portfolio demonstrating creative design patterns, smooth animations, and modern web technologies.",
    url: "https://saketp2.vercel.app",
    tech: ["React", "Framer Motion", "CSS", "UI/UX"],
    featured: true
  },
  {
    id: "saketp3",
    title: "SaketP3",
    category: "Web Development",
    description: "Full-featured web application with contemporary design patterns and user-centric functionality.",
    url: "https://saketp3.vercel.app",
    tech: ["Next.js", "JavaScript", "Modern UI"],
    featured: true
  },
  {
    id: "linkedin-automation",
    title: "LinkedIn Posting Automation",
    category: "AI & Automation",
    description: "AI-powered workflow automating LinkedIn content scheduling, posting, and engagement tracking using n8n automation platform.",
    tech: ["n8n", "LinkedIn API", "Automation", "Workflow Design"],
    featured: true
  },
  {
    id: "ai-calling-agent",
    title: "AI Calling Agents",
    category: "AI & Automation",
    description: "Intelligent calling system built with n8n for automated customer interactions and lead qualification workflows.",
    tech: ["n8n", "AI", "Voice Integration", "Automation"],
    featured: true
  },
  {
    id: "api-lead-gen",
    title: "API-Based Lead Generation",
    category: "AI & Automation",
    description: "Automated lead generation system using API integrations and intelligent workflow orchestration.",
    tech: ["APIs", "n8n", "Lead Generation", "Integration"],
    featured: false
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation & LTV Analysis",
    category: "Analytics",
    description: "Power BI dashboard analyzing customer lifetime value patterns, segmentation strategies, and revenue optimization opportunities.",
    tech: ["Power BI", "Data Analytics", "SQL", "Customer Analytics"],
    featured: true
  },
  {
    id: "hr-attrition",
    title: "HR Attrition & Workforce Analytics",
    category: "Analytics",
    description: "Comprehensive workforce analytics dashboard identifying attrition patterns, employee engagement metrics, and retention strategies.",
    tech: ["Power BI", "Excel", "HR Analytics", "Predictive Modeling"],
    featured: true
  },
  {
    id: "financial-bi",
    title: "Financial Performance BI Dashboard",
    category: "Analytics",
    description: "Real-time financial performance tracking dashboard with KPI monitoring and business intelligence insights.",
    tech: ["Power BI", "Financial Modeling", "Business Intelligence"],
    featured: true
  },
  {
    id: "mutual-fund",
    title: "Mutual Fund Performance Analysis",
    category: "Analytics",
    description: "Comparative analysis dashboard for mutual fund performance tracking and investment decision support.",
    tech: ["Power BI", "Financial Analysis", "Data Visualization"],
    featured: false
  }
];

export const analyticsProjects = projects.filter(p => p.category === "Analytics");
export const automationProjects = projects.filter(p => p.category === "AI & Automation");
export const webProjects = projects.filter(p => p.category === "Web Development");
export const featuredProjects = projects.filter(p => p.featured);
