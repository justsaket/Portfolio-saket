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
    period: "2024 - Present",
    description: "Led social media strategy, content creation, and digital presence management for university brand.",
    type: "work",
    current: true
  },
  {
    role: "Co-Founder / Operations & Growth Lead",
    company: "Digital Finvest",
    period: "2023 - 2024",
    description: "Drove business operations, customer acquisition strategy, and growth systems for fintech startup. Built marketing automation workflows and managed financial product campaigns.",
    type: "entrepreneurship"
  },
  {
    role: "Co-Founder / Operations Lead",
    company: "Taste Plaza",
    period: "2022 - 2023",
    description: "Built and scaled food delivery operations, marketing systems, and customer acquisition channels.",
    type: "entrepreneurship"
  },
  {
    role: "Co-Founder",
    company: "Asketrulize",
    period: "2022",
    description: "Founded and operated digital services startup focusing on business growth solutions.",
    type: "entrepreneurship"
  },
  {
    role: "Business Development Executive",
    company: "Chal Digital",
    period: "2021 - 2022",
    description: "Developed client relationships, executed digital marketing campaigns, and drove business growth through strategic partnerships.",
    type: "work"
  },
  {
    role: "Network Marketing Associate",
    company: "Forever Living Products",
    period: "2020 - 2021",
    description: "Built customer networks, managed product marketing, and developed sales systems.",
    type: "work"
  }
];

export const education: Experience[] = [
  {
    role: "B.Com (Bachelor of Commerce)",
    company: "Hemchand Yadav University",
    period: "Completed",
    description: "Bachelor of Commerce with focus on business, finance, and accounting.",
    type: "education"
  },
  {
    role: "Diploma in Computer Applications",
    company: "ITCT",
    period: "Completed",
    description: "Comprehensive computer applications program covering programming, web development, and digital tools.",
    type: "education"
  },
  {
    role: "Higher Secondary Education (Class XII)",
    company: "CBSE",
    period: "Completed",
    description: "Higher secondary education with strong academic performance.",
    type: "education"
  },
  {
    role: "Secondary Education (Class X)",
    company: "CBSE",
    period: "Completed",
    description: "Secondary education with excellent results.",
    type: "education"
  }
];
