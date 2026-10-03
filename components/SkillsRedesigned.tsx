'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skillCategories } from '@/data/skills';

const categoryColors: Record<string, string> = {
  'Growth & Marketing': '#DC2626',
  'Analytics & BI': '#3B82F6',
  'AI & Automation': '#8B5CF6',
  'Web & Technology': '#10B981',
  'Creative & Design': '#F59E0B',
  'Business & Finance': '#EC4899',
};

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[var(--c-text)] group-hover:text-[var(--c-text-strong)] transition-colors">{name}</span>
        <span className="text-xs text-[var(--c-text-muted)] font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-[var(--c-border)] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${color}40)` }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function RadialProgress({ value, label, color, delay }: { value: number; label: string; color: string; delay: number }) {
  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="36" fill="none" stroke="var(--c-border)" strokeWidth="4" />
          <motion.circle
            cx="40" cy="40" r="36" fill="none"
            stroke={color} strokeWidth="4" strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3, duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-black text-[var(--c-text-strong)]">{value}%</span>
        </div>
      </div>
      <span className="text-[10px] text-[var(--c-text-muted)] mt-2 text-center leading-tight">{label}</span>
    </motion.div>
  );
}

const skillLevels: Record<string, Record<string, number>> = {
  'Growth & Marketing': {
    'SEO': 92, 'SEM': 88, 'Social Media Marketing': 95, 'Performance Marketing': 90,
    'Content Marketing': 87, 'Lead Generation': 93, 'Brand Building': 85, 'E-commerce': 82,
    'Facebook Ads Manager': 91, 'Campaign Planning': 89, 'Growth Hacking': 86, 'CRM Systems': 80,
    'Affiliate Marketing': 78, 'Customer Acquisition': 88,
  },
  'Analytics & BI': {
    'Power BI': 94, 'Google Analytics': 91, 'Advanced Excel': 93, 'Data Analytics': 90,
    'Business Intelligence': 88, 'Dashboard Design': 92, 'KPI Tracking': 89, 'Data Visualization': 91,
    'Customer Segmentation': 87, 'LTV Analysis': 85, 'Workforce Analytics': 83, 'Financial Analysis': 82,
    'HR Analytics': 80,
  },
  'AI & Automation': {
    'n8n': 90, 'AI Agents': 88, 'API Integration': 85, 'Workflow Design': 92,
    'LinkedIn Automation': 91, 'Lead Generation Automation': 89, 'AI Calling Systems': 84,
    'Microsoft Copilot Studio': 82, 'Process Automation': 87, 'Integration Architecture': 80,
  },
  'Web & Technology': {
    'HTML': 90, 'CSS': 88, 'JavaScript': 82, 'WordPress': 92, 'Shopify': 85,
    'Python': 78, 'C++': 72, 'UI/UX Basics': 80, 'Web Design': 86, 'CMS Management': 88,
  },
  'Creative & Design': {
    'Graphic Design': 93, 'Branding': 90, 'Social Media Creatives': 95, 'Packaging Design': 88,
    'Advertising Design': 91, 'Campaign Design': 89, 'Canva': 96, 'Adobe Creative Cloud': 82,
    'CorelDRAW': 80, 'Visual Communication': 87, 'Typography': 84, 'Color Theory': 83,
  },
  'Business & Finance': {
    'Financial Accounting': 85, 'Tally Prime': 90, 'Tally ERP': 88, 'Strategic Planning': 86,
    'Business Development': 89, 'Operations Management': 84, 'Business Analysis': 82,
    'Financial Modeling': 78, 'SEBI/NISM Certification': 96,
  },
};

export default function SkillsRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const activeData = skillCategories[activeCategory];
  const color = categoryColors[activeData.title] || '#DC2626';
  const levels = skillLevels[activeData.title] || {};
  const topSkills = activeData.skills
    .map(s => ({ name: s, level: levels[s] || 75 }))
    .sort((a, b) => b.level - a.level);

  const categoryAvg = Math.round(topSkills.reduce((sum, s) => sum + s.level, 0) / topSkills.length);

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-[var(--c-bg)] to-[var(--c-surface)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--c-accent)] font-semibold mb-4">
            Skills & Expertise
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-text-strong)] mb-6">
            Technical
            <span className="text-gradient-red"> Arsenal</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            A versatile skillset combining marketing, analytics, automation, and creative capabilities
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`group relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'text-white shadow-lg'
                  : 'text-[var(--c-text-muted)] bg-[var(--c-bg-card)] border border-[var(--c-border)] hover:border-[var(--c-accent)]/50 hover:text-[var(--c-text)]'
              }`}
              style={activeCategory === index ? { background: categoryColors[category.title] } : {}}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
              {activeCategory === index && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 rounded-xl"
                  style={{ background: categoryColors[category.title], zIndex: -1 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Skill Detail Panel */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left: Radial Overview */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)]">
            <h3 className="text-xl font-bold text-[var(--c-text-strong)] mb-2">{activeData.title}</h3>
            <p className="text-sm text-[var(--c-text-muted)] mb-8">{activeData.description}</p>

            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--c-border)" strokeWidth="6" />
                  <motion.circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke={color} strokeWidth="6" strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 52 - (categoryAvg / 100) * 2 * Math.PI * 52 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-[var(--c-text-strong)]">{categoryAvg}%</span>
                  <span className="text-[10px] text-[var(--c-text-muted)] uppercase tracking-wider">Proficiency</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <RadialProgress value={topSkills[0]?.level || 0} label={topSkills[0]?.name || ''} color={color} delay={0.2} />
              <RadialProgress value={topSkills[1]?.level || 0} label={topSkills[1]?.name || ''} color={color} delay={0.3} />
              <RadialProgress value={topSkills[2]?.level || 0} label={topSkills[2]?.name || ''} color={color} delay={0.4} />
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--c-border)] text-center">
              <div className="text-2xl font-black" style={{ color }}>{topSkills.length}</div>
              <div className="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">Total Skills</div>
            </div>
          </div>

          {/* Right: Skill Bars */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)]">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-[var(--c-text-strong)]">Skill Proficiency</h4>
              <span className="text-xs px-3 py-1 rounded-full border border-[var(--c-border)] text-[var(--c-text-muted)]">
                Sorted by proficiency
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {topSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.05}
                  color={color}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom: All Categories Summary */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skillCategories.map((category, index) => {
            const catLevels = skillLevels[category.title] || {};
            const catSkills = category.skills.map(s => catLevels[s] || 75);
            const avg = Math.round(catSkills.reduce((a, b) => a + b, 0) / catSkills.length);
            const catColor = categoryColors[category.title] || '#DC2626';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(index)}
                className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 text-center ${
                  activeCategory === index
                    ? 'border-[var(--c-accent)] bg-[var(--c-accent)]/5 shadow-lg shadow-[var(--c-accent)]/10'
                    : 'border-[var(--c-border)] bg-[var(--c-bg-card)] hover:border-[var(--c-accent)]/30'
                }`}
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-lg font-black mb-1" style={{ color: catColor }}>{avg}%</div>
                <div className="text-[10px] text-[var(--c-text-muted)] uppercase tracking-wider leading-tight">{category.title}</div>
                <div className="mt-2 h-1 rounded-full bg-[var(--c-border)] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${avg}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: catColor }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
