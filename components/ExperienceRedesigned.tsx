'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences, education } from '@/data/experience';

export default function ExperienceRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const entrepreneurshipExp = experiences.filter(e => e.type === 'entrepreneurship');
  const workExp = experiences.filter(e => e.type === 'work');

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-2xl mx-auto">
            My professional journey spanning marketing, entrepreneurship, analytics, and growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--c-accent)] mb-8 flex items-center gap-3">
              <span className="text-3xl">💼</span> Professional Experience
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-[var(--c-border)]">
              {workExp.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[30px] top-2 flex h-3 w-3 items-center justify-center rounded-full bg-[var(--c-accent)] ring-4 ring-[var(--c-bg)]">
                    {exp.current && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--c-accent)] opacity-75" />
                    )}
                  </span>

                  <div className="glass-hover rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-[var(--c-strong)] text-lg">{exp.role}</h4>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        exp.current
                          ? 'bg-[var(--c-accent)]/20 text-[var(--c-accent)]'
                          : 'bg-[var(--c-tile)] text-[var(--c-muted)]'
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--c-muted)] font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-[var(--c-faint)]">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Entrepreneurship */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[var(--c-accent)] mb-8 flex items-center gap-3">
              <span className="text-3xl">🚀</span> Entrepreneurship
            </h3>

            <div className="space-y-6 relative pl-6 border-l-2 border-[var(--c-border)]">
              {entrepreneurshipExp.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-[var(--c-accent)] ring-4 ring-[var(--c-bg)]" />

                  <div className="glass-hover rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-bold text-[var(--c-strong)] text-lg">{exp.role}</h4>
                      <span className="text-xs px-3 py-1 rounded-full bg-[var(--c-tile)] text-[var(--c-muted)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[var(--c-muted)] font-medium mb-2">{exp.company}</p>
                    <p className="text-sm text-[var(--c-faint)]">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-8 text-center flex items-center justify-center gap-3">
            <span className="text-3xl">🎓</span> Education
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-hover rounded-xl p-6"
              >
                <h4 className="font-bold text-[var(--c-strong)] mb-2">{edu.role}</h4>
                <p className="text-[var(--c-muted)] font-medium mb-2">{edu.company}</p>
                <p className="text-sm text-[var(--c-faint)]">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
