'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Social Media Executive',
    company: 'Rungta International Skills University',
    period: 'Recent',
    description: 'Led social media strategy and content creation for university digital presence.',
    type: 'work',
  },
  {
    role: 'Co-Founder / Operations & Growth Lead',
    company: 'Digital Finvest',
    period: '2023 - 2024',
    description: 'Drove business operations, customer acquisition, and growth strategy for fintech startup.',
    type: 'work',
  },
  {
    role: 'Co-Founder / Operations Lead',
    company: 'Taste Plaza',
    period: '2022 - 2023',
    description: 'Built and scaled food delivery operations and marketing systems.',
    type: 'work',
  },
  {
    role: 'Business Development Executive',
    company: 'Chal Digital',
    period: '2021 - 2022',
    description: 'Developed client relationships and executed digital marketing campaigns.',
    type: 'work',
  },
  {
    role: 'B.Com',
    company: 'Hemchand Yadav University',
    period: 'Completed',
    description: 'Bachelor of Commerce with focus on business and finance.',
    type: 'education',
  },
];

const certifications = [
  'Google Analytics',
  'Power BI',
  'UI/UX Basics',
  'AI-Powered Advertising',
  'Microsoft Copilot Studio',
  'Content Marketing & SEO',
  'Digital Marketing',
  'Business Analytics',
  'Python Programming',
  'SEBI Investor Certification (NISM) - 48/50',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6 bg-[var(--c-tile)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-strong)] mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--c-accent-light)] mb-8 flex items-center gap-2">
              <span>💼</span> Professional Experience
            </h3>
            <div className="space-y-6 border-l-2 border-[var(--c-border)] pl-6">
              {experiences.filter(exp => exp.type === 'work').map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[30px] top-[6px] flex h-3 w-3 items-center justify-center rounded-full bg-[var(--c-accent)] ring-[3px] ring-[var(--c-accent)]/15" />
                  <div className="glass-hover rounded-xl p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-bold text-[var(--c-strong)]">{exp.role}</h4>
                      <span className="text-xs text-[var(--c-accent-light)]">{exp.period}</span>
                    </div>
                    <p className="text-sm text-[var(--c-muted)] mb-2">{exp.company}</p>
                    <p className="text-sm text-[var(--c-faint)]">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--c-accent-light)] mb-8 flex items-center gap-2">
              <span>🎓</span> Education
            </h3>
            <div className="space-y-6 border-l-2 border-[var(--c-border)] pl-6">
              {experiences.filter(exp => exp.type === 'education').map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[30px] top-[6px] flex h-3 w-3 items-center justify-center rounded-full bg-[var(--c-accent)] ring-[3px] ring-[var(--c-accent)]/15" />
                  <div className="glass-hover rounded-xl p-4">
                    <h4 className="font-bold text-[var(--c-strong)] mb-2">{exp.role}</h4>
                    <p className="text-sm text-[var(--c-muted)] mb-2">{exp.company}</p>
                    <p className="text-sm text-[var(--c-faint)]">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-6 text-center">
            Certifications & <span className="text-gradient">Learning</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                className="px-4 py-2 rounded-full bg-[var(--c-bg)] border border-[var(--c-border)] text-sm text-[var(--c-text)] hover:border-[var(--c-accent)] hover:bg-[var(--c-accent)]/5 transition"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
