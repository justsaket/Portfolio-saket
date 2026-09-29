'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const analyticsProjects = [
  {
    id: 'customer-churn',
    title: 'Customer Churn Analysis',
    category: 'Business Intelligence',
    tools: ['Power BI', 'DAX', 'SQL'],
    description: 'Predictive analysis identifying at-risk customers and retention strategies',
    metrics: [
      { label: 'Customer Segments', value: '5' },
      { label: 'Churn Indicators', value: '12' },
      { label: 'Retention Rate', value: '85%' }
    ],
    insights: [
      'Identified 3 high-risk customer segments',
      'Payment frequency is strongest churn predictor',
      'Improved retention by 15% through targeted interventions'
    ]
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    category: 'Data Visualization',
    tools: ['Power BI', 'Excel', 'DAX'],
    description: 'Real-time sales tracking with KPI monitoring and trend analysis',
    metrics: [
      { label: 'KPIs Tracked', value: '18' },
      { label: 'Data Sources', value: '4' },
      { label: 'Refresh Rate', value: 'Hourly' }
    ],
    insights: [
      'Built automated ETL pipeline for multiple data sources',
      'Reduced reporting time from 3 days to real-time',
      'Enabled data-driven decision making for sales team'
    ]
  },
  {
    id: 'market-basket',
    title: 'Market Basket Analysis',
    category: 'Pattern Recognition',
    tools: ['Python', 'SQL', 'Power BI'],
    description: 'Product association analysis for cross-selling strategies',
    metrics: [
      { label: 'Product Combinations', value: '50+' },
      { label: 'Confidence Score', value: '78%' },
      { label: 'Revenue Uplift', value: '22%' }
    ],
    insights: [
      'Discovered high-value product associations',
      'Optimized product placement strategies',
      'Increased average order value significantly'
    ]
  },
  {
    id: 'marketing-roi',
    title: 'Marketing ROI Analytics',
    category: 'Performance Marketing',
    tools: ['Google Analytics', 'Power BI', 'Excel'],
    description: 'Multi-channel marketing performance and attribution analysis',
    metrics: [
      { label: 'Channels Analyzed', value: '8' },
      { label: 'Attribution Model', value: 'Time Decay' },
      { label: 'ROI Improvement', value: '35%' }
    ],
    insights: [
      'Identified best-performing marketing channels',
      'Optimized budget allocation across channels',
      'Improved overall marketing efficiency'
    ]
  }
];

export default function AnalyticsWorkspace() {
  const [selectedProject, setSelectedProject] = useState(analyticsProjects[0]);

  return (
    <section id="analytics" className="relative py-24 bg-[var(--c-bg)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block text-sm uppercase tracking-[0.3em] text-[var(--c-accent)] font-semibold mb-4">
            Data Analytics & BI
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Intelligence
            <span className="text-gradient-red"> Workspace</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            Transforming raw data into actionable business insights through advanced analytics
          </p>
        </motion.div>

        {/* Project Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {analyticsProjects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className={`relative p-6 rounded-xl border-2 transition-all text-left group ${
                selectedProject.id === project.id
                  ? 'bg-gradient-to-br from-[var(--c-accent)]/10 to-transparent border-[var(--c-accent)] shadow-lg shadow-[var(--c-accent)]/20'
                  : 'bg-[var(--c-bg-card)] border-[var(--c-border)] hover:border-[var(--c-accent)]/50'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                selectedProject.id === project.id ? 'bg-[var(--c-accent)]' : 'bg-[var(--c-surface)]'
              }`}>
                <svg className={`w-6 h-6 ${selectedProject.id === project.id ? 'text-white' : 'text-[var(--c-accent)]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[var(--c-strong)] mb-1">{project.title}</h3>
              <p className="text-xs text-[var(--c-accent)]">{project.category}</p>
            </motion.button>
          ))}
        </div>

        {/* Project Details */}
        <motion.div
          key={selectedProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left: Project Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-[var(--c-bg-card)] border border-[var(--c-border)]">
              <div className="flex items-center gap-2 mb-4">
                {selectedProject.tools.map((tool) => (
                  <span key={tool} className="px-3 py-1 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30 text-[var(--c-accent)] text-xs font-semibold">
                    {tool}
                  </span>
                ))}
              </div>

              <h3 className="text-3xl font-black text-[var(--c-strong)] mb-4">{selectedProject.title}</h3>
              <p className="text-lg text-[var(--c-text-muted)] mb-6">{selectedProject.description}</p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg bg-[var(--c-surface)]">
                    <div className="text-2xl font-black text-[var(--c-accent)] mb-1">{metric.value}</div>
                    <div className="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Insights */}
              <div>
                <h4 className="text-sm font-bold text-[var(--c-strong)] uppercase tracking-wider mb-3">Key Insights</h4>
                <ul className="space-y-2">
                  {selectedProject.insights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[var(--c-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[var(--c-text)]">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Visual Dashboard Preview */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[var(--c-surface)] to-[var(--c-bg-card)] border border-[var(--c-border)]">
            <div className="space-y-4">
              {/* Simulated Dashboard Components */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-4 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)]"
                >
                  <div className="text-xs text-[var(--c-text-muted)] mb-2">Total Revenue</div>
                  <div className="text-2xl font-black text-[var(--c-strong)]">₹24.5L</div>
                  <div className="text-xs text-green-500">↑ 23.5%</div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                  className="p-4 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)]"
                >
                  <div className="text-xs text-[var(--c-text-muted)] mb-2">Active Users</div>
                  <div className="text-2xl font-black text-[var(--c-strong)]">12.8K</div>
                  <div className="text-xs text-green-500">↑ 15.2%</div>
                </motion.div>
              </div>

              {/* Chart Simulation */}
              <div className="h-48 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)] p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-end justify-around p-4 gap-2">
                  {[40, 65, 45, 80, 55, 75, 60, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="flex-1 bg-gradient-to-t from-[var(--c-accent)] to-[var(--c-accent-light)] rounded-t"
                    />
                  ))}
                </div>
              </div>

              {/* Data Table Simulation */}
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-[var(--c-bg-card)] border border-[var(--c-border)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[var(--c-accent)]" />
                    <div className="flex-1">
                      <div className="h-2 w-24 bg-[var(--c-surface)] rounded" />
                    </div>
                    <div className="text-xs text-[var(--c-accent)]">95%</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
