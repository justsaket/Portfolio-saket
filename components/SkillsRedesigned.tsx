'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { skillCategories } from '@/data/skills';

export default function SkillsRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6 bg-[var(--c-tile)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto">
            A versatile skillset combining marketing, analytics, automation, and creative capabilities.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
              className="glass-hover rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{category.icon}</div>
                <motion.svg
                  animate={{ rotate: expandedCategory === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-[var(--c-muted)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>

              <h3 className="text-xl font-bold text-[var(--c-strong)] mb-2">
                {category.title}
              </h3>

              <p className="text-sm text-[var(--c-muted)] mb-4">
                {category.description}
              </p>

              {/* Skills List */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === index ? 'auto' : 0,
                  opacity: expandedCategory === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--c-border)]">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-[var(--c-accent)]/10 text-xs text-[var(--c-accent)] border border-[var(--c-accent)]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Count Badge */}
              {expandedCategory !== index && (
                <div className="mt-2 text-xs text-[var(--c-muted)]">
                  {category.skills.length} skills • Click to expand
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
