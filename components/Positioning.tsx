'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const domains = [
  {
    title: "Digital Marketing & Growth",
    icon: "📈",
    description: "Performance marketing, SEO, SEM, social media, content strategy, brand building, customer acquisition, and growth systems.",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Data Analytics & BI",
    icon: "📊",
    description: "Power BI dashboards, customer segmentation, LTV analysis, workforce analytics, financial intelligence, and data-driven decision making.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    description: "n8n workflows, AI agents, LinkedIn automation, API integrations, lead generation systems, and intelligent process automation.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Creative Design",
    icon: "🎨",
    description: "Branding, graphic design, social media creatives, packaging, advertising campaigns, and visual communication.",
    color: "from-green-500 to-emerald-500"
  }
];

export default function Positioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="positioning" ref={ref} className="relative py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--c-accent) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-[var(--c-text-strong)] mb-6"
          >
            Where <span className="text-gradient">Everything Connects</span>
          </motion.h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto leading-relaxed">
            I operate at the intersection of marketing, data, automation, and creative strategy—
            where growth meets intelligence.
          </p>
        </motion.div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative glass-hover rounded-3xl p-8 md:p-10"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className="text-6xl mb-6">{domain.icon}</div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--c-text-strong)] mb-4 group-hover:text-[var(--c-accent)] transition-colors">
                  {domain.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--c-text-muted)] leading-relaxed">
                  {domain.description}
                </p>

                {/* Decorative Element */}
                <motion.div
                  className={`absolute top-8 right-8 w-20 h-20 rounded-full bg-gradient-to-br ${domain.color} opacity-10 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mt-20 p-12 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-bg)] border border-[var(--c-border)]"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--c-text-strong)] mb-6">
              The Integration Advantage
            </h3>
            <p className="text-lg text-[var(--c-text-muted)] leading-relaxed mb-8">
              Most professionals specialize in one area. I bridge all four—creating marketing campaigns
              informed by data analytics, automated through AI workflows, and elevated by creative design.
              This integration turns insights into action and action into measurable growth.
            </p>

            {/* Flow Diagram */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20">
                Data Insights
              </span>
              <span className="text-[var(--c-text-muted)]">→</span>
              <span className="px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20">
                Marketing Strategy
              </span>
              <span className="text-[var(--c-text-muted)]">→</span>
              <span className="px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20">
                Automated Execution
              </span>
              <span className="text-[var(--c-text-muted)]">→</span>
              <span className="px-4 py-2 rounded-full bg-[var(--c-accent)]/10 text-[var(--c-accent)] border border-[var(--c-accent)]/20">
                Creative Impact
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
