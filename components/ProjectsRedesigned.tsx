'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { featuredProjects, webProjects } from '@/data/projects';

export default function ProjectsRedesigned() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" ref={ref} className="relative py-32 px-6 bg-[var(--c-bg-card)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-text-strong)] mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            A selection of web applications, automation systems, and analytics dashboards demonstrating technical execution and business impact.
          </p>
        </motion.div>

        {/* Featured Web Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-[var(--c-text-strong)] mb-10 flex items-center gap-3"
          >
            <span className="text-4xl">🌐</span> Web Applications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group glass-hover rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Project Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-[var(--c-accent)]/20 to-[var(--c-accent-dark)]/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl opacity-50"
                    >
                      🚀
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[var(--c-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  {/* View Label */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--c-bg)]/90 backdrop-blur-sm text-xs font-medium text-[var(--c-text)] opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project →
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-[var(--c-text-strong)] group-hover:text-[var(--c-accent)] transition mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-[var(--c-text-muted)] leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[var(--c-bg)] border border-[var(--c-border)] text-xs text-[var(--c-text)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link Indicator */}
                  <div className="flex items-center gap-2 text-sm text-[var(--c-accent)] font-medium pt-2">
                    <span>Explore Project</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* All Featured Projects Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass-hover rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-text-strong)] mb-4">
            View All Work
          </h3>
          <p className="text-[var(--c-text-muted)] mb-6 max-w-2xl mx-auto">
            Explore the complete portfolio including analytics dashboards, automation systems, and creative projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#analytics"
              className="px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition font-medium"
            >
              Analytics Projects
            </a>
            <a
              href="#automation"
              className="px-6 py-3 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 transition font-medium"
            >
              Automation Systems
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
