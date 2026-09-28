'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { analyticsProjects } from '@/data/projects';

export default function AnalyticsSuite() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="analytics" ref={ref} className="relative py-32 px-6 bg-[var(--c-tile)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Analytics & <span className="text-gradient">Business Intelligence</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto">
            Transforming raw data into actionable insights through Power BI dashboards, customer analytics, and predictive modeling.
          </p>
        </motion.div>

        {/* Analytics Projects */}
        <div className="space-y-12">
          {analyticsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                      Analytics Project
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-[var(--c-strong)] mb-4 group-hover:text-[var(--c-accent)] transition">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-[var(--c-muted)] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[var(--c-bg)] border border-[var(--c-border)] text-sm text-[var(--c-text)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Insights Section */}
                  <div className="pt-4">
                    <h4 className="font-bold text-[var(--c-strong)] mb-3">Analytical Approach:</h4>
                    <ul className="space-y-2 text-[var(--c-muted)]">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--c-accent)] mt-1">→</span>
                        <span>Data collection and cleaning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--c-accent)] mt-1">→</span>
                        <span>Statistical analysis and modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--c-accent)] mt-1">→</span>
                        <span>Dashboard design and visualization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--c-accent)] mt-1">→</span>
                        <span>Actionable insights and recommendations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Visual Placeholder */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-hover group-hover:shadow-2xl transition-all duration-500">
                    {/* Dashboard Preview Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">📊</div>
                        <p className="text-[var(--c-muted)] text-sm">
                          Dashboard Preview
                        </p>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between opacity-50">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Power BI', 'Google Analytics', 'Advanced Excel', 'SQL', 'Python', 'Data Visualization', 'Statistical Analysis'].map((tool) => (
              <span
                key={tool}
                className="px-6 py-3 rounded-full glass-hover text-[var(--c-text)] font-medium hover:border-[var(--c-accent)] transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
