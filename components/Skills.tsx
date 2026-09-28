'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Growth & Marketing',
    skills: ['SEO', 'SEM', 'Social Media Marketing', 'Affiliate Marketing', 'Content Marketing', 'Performance Marketing', 'Brand Building', 'E-commerce', 'Facebook Ads Manager'],
    icon: '📈',
  },
  {
    title: 'Analytics & BI',
    skills: ['Power BI', 'Google Analytics', 'Advanced Excel', 'Data Analytics', 'Business Intelligence', 'Customer Segmentation', 'LTV Analysis', 'Workforce Analytics'],
    icon: '📊',
  },
  {
    title: 'AI & Automation',
    skills: ['n8n', 'AI Agents', 'API Integration', 'LinkedIn Automation', 'Lead Generation', 'Workflow Automation', 'Microsoft Copilot Studio'],
    icon: '🤖',
  },
  {
    title: 'Web & Technology',
    skills: ['HTML', 'CSS', 'WordPress', 'Shopify', 'Python', 'C++', 'UI/UX Basics', 'CRM Systems'],
    icon: '💻',
  },
  {
    title: 'Creative & Design',
    skills: ['Canva', 'Adobe Creative Cloud', 'CorelDRAW', 'Graphic Design', 'Branding', 'Social Media Creatives'],
    icon: '🎨',
  },
  {
    title: 'Business & Finance',
    skills: ['Tally Prime', 'Tally ERP', 'Financial Accounting', 'Strategic Planning', 'Business Development', 'SEBI Investor Certification'],
    icon: '💼',
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6 bg-[var(--c-tile)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-strong)] mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-[var(--c-muted)] max-w-2xl mx-auto">
            A versatile skillset combining marketing, analytics, automation, and creative capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              className="glass-hover rounded-2xl p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-[var(--c-strong)] mb-4">
                {category.title}
              </h3>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeCategory === index ? 'auto' : 0,
                  opacity: activeCategory === index ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent-light)] border border-[var(--c-accent)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
              {activeCategory !== index && (
                <p className="text-sm text-[var(--c-muted)] mt-2">
                  Hover to explore {category.skills.length} skills
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
