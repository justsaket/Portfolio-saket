'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { automationProjects } from '@/data/projects';

export default function AutomationSuite() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="automation" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            AI & <span className="text-gradient">Automation</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto">
            Building intelligent automation systems using n8n, AI agents, and API integrations to streamline workflows and scale operations.
          </p>
        </motion.div>

        {/* Automation Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {automationProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-hover rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* Header */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
                  Automation System
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-strong)] group-hover:text-[var(--c-accent)] transition">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[var(--c-muted)] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Workflow Visualization */}
              <div className="relative p-6 rounded-2xl bg-[var(--c-bg)] border border-[var(--c-border)] mb-6">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--c-accent)]/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <span className="text-[var(--c-muted)]">Trigger</span>
                  </div>

                  <svg className="w-6 h-6 text-[var(--c-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--c-accent)]/20 flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <span className="text-[var(--c-muted)]">Process</span>
                  </div>

                  <svg className="w-6 h-6 text-[var(--c-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>

                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-[var(--c-accent)]/20 flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <span className="text-[var(--c-muted)]">Action</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[var(--c-tile)] border border-[var(--c-border)] text-sm text-[var(--c-text)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Automation Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Workflow Design",
              icon: "🔄",
              description: "Complex automation workflows connecting multiple platforms and services."
            },
            {
              title: "AI Integration",
              icon: "🧠",
              description: "Intelligent agents for decision-making and automated responses."
            },
            {
              title: "API Orchestration",
              icon: "🔌",
              description: "Seamless integration between different tools and platforms."
            }
          ].map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-6 glass-hover rounded-2xl"
            >
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h4 className="font-bold text-[var(--c-strong)] mb-2">{capability.title}</h4>
              <p className="text-sm text-[var(--c-muted)]">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
