'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'SaketP1',
    description: 'Modern web application showcasing advanced UI/UX design principles and responsive architecture.',
    url: 'https://saketp1.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Web Development',
  },
  {
    title: 'SaketP2',
    description: 'Interactive portfolio demonstrating creative design and smooth animations.',
    url: 'https://saketp2.vercel.app',
    tech: ['React', 'Framer Motion', 'CSS'],
    category: 'Web Development',
  },
  {
    title: 'SaketP3',
    description: 'Full-featured web application with modern design patterns and user-centric functionality.',
    url: 'https://saketp3.vercel.app',
    tech: ['Next.js', 'JavaScript', 'UI/UX'],
    category: 'Web Development',
  },
  {
    title: 'LinkedIn Posting Automation',
    description: 'AI-powered workflow automating LinkedIn content scheduling and posting using n8n.',
    tech: ['n8n', 'LinkedIn API', 'Automation'],
    category: 'AI & Automation',
  },
  {
    title: 'AI Calling Agents',
    description: 'Intelligent calling system built with n8n for automated customer interactions.',
    tech: ['n8n', 'AI', 'Voice Integration'],
    category: 'AI & Automation',
  },
  {
    title: 'Customer Segmentation & LTV Analysis',
    description: 'Power BI dashboard analyzing customer lifetime value and segmentation patterns.',
    tech: ['Power BI', 'Data Analytics', 'SQL'],
    category: 'Analytics',
  },
  {
    title: 'HR Attrition & Workforce Analytics',
    description: 'Comprehensive workforce analytics dashboard identifying attrition patterns.',
    tech: ['Power BI', 'Excel', 'HR Analytics'],
    category: 'Analytics',
  },
  {
    title: 'Financial Performance BI Dashboard',
    description: 'Real-time financial performance tracking and business intelligence dashboard.',
    tech: ['Power BI', 'Financial Modeling'],
    category: 'Analytics',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-strong)] mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[var(--c-muted)] max-w-2xl mx-auto">
            A selection of work spanning web development, AI automation, and business analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-hover rounded-2xl p-6 flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent-light)] border border-[var(--c-accent)]/20">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[var(--c-strong)] mb-3 group-hover:text-[var(--c-accent-light)] transition">
                {project.title}
              </h3>

              <p className="text-[var(--c-muted)] text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-[var(--c-bg)] text-[var(--c-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--c-accent-light)] font-semibold hover:gap-3 transition-all"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
