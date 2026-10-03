'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { experiences, education } from '@/data/experience';

const allTimelineItems = [
  ...experiences.map(e => ({
    ...e,
    year: e.period.match(/\d{4}/)?.[0] || '2020',
    sortKey: e.current ? 9999 : parseInt(e.period.match(/\d{4}/)?.[0] || '2020'),
  })),
].sort((a, b) => b.sortKey - a.sortKey);

const typeColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  work: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', dot: 'bg-blue-500' },
  entrepreneurship: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', dot: 'bg-purple-500' },
  education: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', dot: 'bg-emerald-500' },
};

const typeLabels: Record<string, string> = {
  work: 'Professional',
  entrepreneurship: 'Entrepreneurship',
  education: 'Education',
};

export default function ExperienceRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all'
    ? allTimelineItems
    : allTimelineItems.filter(item => item.type === activeFilter);

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-[var(--c-surface)] to-[var(--c-bg)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--c-accent)] font-semibold mb-4">
            Career Journey
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-text-strong)] mb-6">
            Experience &
            <span className="text-gradient-red"> Growth</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-2xl mx-auto">
            From marketing executive to entrepreneur — building, scaling, and creating impact
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {['all', 'work', 'entrepreneurship'].map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[var(--c-accent)] text-white shadow-lg shadow-[var(--c-accent)]/25'
                  : 'bg-[var(--c-bg-card)] border border-[var(--c-border)] text-[var(--c-text-muted)] hover:border-[var(--c-accent)]/50 hover:text-[var(--c-text)]'
              }`}
            >
              {filter === 'all' ? 'All Experience' : typeLabels[filter]}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--c-accent)] via-[var(--c-border)] to-transparent" />

          <div className="space-y-12">
            {filteredItems.map((item, index) => {
              const colors = typeColors[item.type];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${colors.dot} ring-4 ring-[var(--c-bg)] relative`}>
                      {item.current && (
                        <span className="animate-ping absolute inset-0 rounded-full bg-[var(--c-accent)] opacity-75" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)] hover:border-[var(--c-accent)]/40 transition-all group"
                    >
                      {/* Badge + Period */}
                      <div className={`flex items-center gap-3 mb-3 flex-wrap ${isLeft ? 'md:justify-end' : ''}`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.border} ${colors.text} border`}>
                          {typeLabels[item.type]}
                        </span>
                        <span className="text-sm text-[var(--c-text-muted)] font-mono">
                          {item.period}
                        </span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Role */}
                      <h3 className="text-xl md:text-2xl font-black text-[var(--c-text-strong)] mb-2 group-hover:text-[var(--c-accent)] transition-colors">
                        {item.role}
                      </h3>

                      {/* Company */}
                      <p className="text-[var(--c-accent)] font-semibold mb-3">{item.company}</p>

                      {/* Description */}
                      <p className="text-sm text-[var(--c-text-muted)] leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Year Label - opposite side */}
                  <div className={`hidden md:flex flex-1 ${isLeft ? 'md:pl-12 justify-start' : 'md:pr-12 justify-end'}`}>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.3 }}
                      viewport={{ once: true }}
                      className="text-6xl font-black text-[var(--c-text-strong)] select-none"
                    >
                      {item.year}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <motion.span className="inline-block text-sm uppercase tracking-[0.3em] text-emerald-400 font-semibold mb-4">
              Academic Background
            </motion.span>
            <h3 className="text-3xl md:text-4xl font-black text-[var(--c-text-strong)]">
              Education
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.slice(0, 3).map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)] hover:border-emerald-500/40 transition-all group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>

                  <h4 className="text-lg font-bold text-[var(--c-text-strong)] mb-2 group-hover:text-emerald-400 transition-colors">
                    {edu.role}
                  </h4>
                  <p className="text-emerald-400 font-medium text-sm mb-3">{edu.company}</p>
                  <p className="text-sm text-[var(--c-text-muted)] leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '5+', label: 'Years Experience', color: 'text-[var(--c-accent)]' },
              { value: '3', label: 'Startups Built', color: 'text-purple-400' },
              { value: '6+', label: 'Roles Held', color: 'text-blue-400' },
              { value: 'MBA', label: 'Business Administration', color: 'text-emerald-400' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
