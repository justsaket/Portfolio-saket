'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const analyticsProjects = [
  {
    id: 'customer-segmentation',
    title: 'Customer Segmentation & LTV Analysis',
    category: 'Analytics Project',
    description: 'Power BI dashboard analyzing customer lifetime value patterns, segmentation strategies, and revenue optimization opportunities.',
    tools: ['Power BI', 'DAX', 'SQL', 'Customer Analytics'],
    approach: [
      'Data collection and cleaning',
      'Statistical analysis and modeling',
      'Dashboard design and visualization',
      'Actionable insights and recommendations'
    ],
    dashboardType: 'segmentation',
    metrics: {
      segments: 5,
      avgLTV: '₹45,280',
      retention: '78%',
      churnRate: '22%'
    }
  },
  {
    id: 'hr-attrition',
    title: 'HR Attrition & Workforce Analytics',
    category: 'Analytics Project',
    description: 'Comprehensive workforce analytics dashboard identifying attrition patterns, employee engagement metrics, and retention strategies.',
    tools: ['Power BI', 'Excel', 'HR Analytics', 'Predictive Modeling'],
    approach: [
      'Data collection and cleaning',
      'Statistical analysis and modeling',
      'Dashboard design and visualization',
      'Actionable insights and recommendations'
    ],
    dashboardType: 'attrition',
    metrics: {
      attritionRate: '18.5%',
      avgTenure: '4.2 yrs',
      satisfaction: '72%',
      departments: 8
    }
  },
  {
    id: 'financial-performance',
    title: 'Financial Performance BI Dashboard',
    category: 'Analytics Project',
    description: 'Real-time financial performance tracking dashboard with KPI monitoring and business intelligence insights.',
    tools: ['Power BI', 'Financial Modeling', 'KPI Tracking', 'DAX'],
    approach: [
      'Data collection and cleaning',
      'Statistical analysis and modeling',
      'Dashboard design and visualization',
      'Actionable insights and recommendations'
    ],
    dashboardType: 'financial',
    metrics: {
      revenue: '₹2.4Cr',
      profit: '₹48L',
      margin: '20%',
      growth: '+35%'
    }
  },
  {
    id: 'mutual-fund',
    title: 'Mutual Fund Performance Analysis',
    category: 'Analytics Project',
    description: 'Comparative analysis dashboard for mutual fund performance tracking and investment decision support systems.',
    tools: ['Power BI', 'Financial Analysis', 'Data Visualization', 'Excel'],
    approach: [
      'Data collection and cleaning',
      'Statistical analysis and modeling',
      'Dashboard design and visualization',
      'Actionable insights and recommendations'
    ],
    dashboardType: 'mutualfund',
    metrics: {
      funds: 24,
      avgReturn: '14.8%',
      bestPerformer: '+28%',
      volatility: 'Medium'
    }
  }
];

const DashboardPreview = ({ project }: { project: typeof analyticsProjects[0] }) => {
  if (project.dashboardType === 'segmentation') {
    return (
      <div className="space-y-4">
        {/* Segment Distribution */}
        <div className="grid grid-cols-5 gap-2">
          {['Premium', 'High Value', 'Medium', 'Low Value', 'At Risk'].map((segment, i) => {
            const heights = [85, 70, 55, 40, 25];
            const colors = ['from-green-500', 'from-blue-500', 'from-yellow-500', 'from-orange-500', 'from-red-500'];
            return (
              <motion.div
                key={segment}
                initial={{ height: 0 }}
                whileInView={{ height: `${heights[i]}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative bg-gradient-to-t ${colors[i]} to-transparent rounded-t-lg p-2`}
              >
                <div className="absolute top-0 left-0 right-0 text-center">
                  <div className="text-xs font-bold text-white mb-1">{['20%', '30%', '25%', '15%', '10%'][i]}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-center pb-1">
                  <div className="text-[8px] text-white/80">{segment}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LTV Trend Line */}
        <div className="h-20 rounded-lg bg-[var(--c-surface)] p-3 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 200 50">
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              d="M 0,40 Q 50,35 100,25 T 200,15"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {[0, 50, 100, 150, 200].map((x, i) => (
              <motion.circle
                key={x}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * i, duration: 0.3 }}
                cx={x}
                cy={[40, 35, 25, 20, 15][i]}
                r="3"
                fill="#DC2626"
              />
            ))}
          </svg>
          <div className="absolute top-1 right-2 text-[8px] text-[var(--c-text-muted)]">LTV Trend ↗</div>
        </div>
      </div>
    );
  }

  if (project.dashboardType === 'attrition') {
    return (
      <div className="space-y-4">
        {/* Attrition by Department */}
        <div className="grid grid-cols-4 gap-2">
          {['Sales', 'Tech', 'HR', 'Ops'].map((dept, i) => {
            const values = [25, 15, 10, 18];
            return (
              <motion.div
                key={dept}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-lg bg-[var(--c-surface)] text-center"
              >
                <div className="text-lg font-black text-[var(--c-accent)]">{values[i]}%</div>
                <div className="text-[8px] text-[var(--c-text-muted)]">{dept}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Satisfaction Gauge */}
        <div className="h-24 rounded-lg bg-[var(--c-surface)] p-3 flex items-center justify-center relative">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            {/* Background Arc */}
            <path
              d="M 15,75 A 35,35 0 1,1 85,75"
              fill="none"
              stroke="var(--c-border)"
              strokeWidth="8"
            />
            {/* Animated Arc */}
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 0.72 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              d="M 15,75 A 35,35 0 1,1 85,75"
              fill="none"
              stroke="#DC2626"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute text-center">
            <div className="text-2xl font-black text-[var(--c-strong)]">72%</div>
            <div className="text-[8px] text-[var(--c-text-muted)]">Satisfaction</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.dashboardType === 'financial') {
    return (
      <div className="space-y-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Revenue', value: '₹2.4Cr', change: '+35%', positive: true },
            { label: 'Profit', value: '₹48L', change: '+28%', positive: true },
            { label: 'Margin', value: '20%', change: '+3%', positive: true },
            { label: 'Expenses', value: '₹1.9Cr', change: '+12%', positive: false }
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-3 rounded-lg bg-[var(--c-surface)]"
            >
              <div className="text-[8px] text-[var(--c-text-muted)] mb-1">{kpi.label}</div>
              <div className="text-sm font-black text-[var(--c-strong)]">{kpi.value}</div>
              <div className={`text-[8px] ${kpi.positive ? 'text-green-500' : 'text-red-500'}`}>
                {kpi.positive ? '↑' : '↓'} {kpi.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="h-20 rounded-lg bg-[var(--c-surface)] p-2 flex items-end justify-around gap-1">
          {[45, 52, 48, 65, 58, 72, 68, 85].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex-1 bg-gradient-to-t from-[var(--c-accent)] to-[var(--c-accent-light)] rounded-t"
            />
          ))}
        </div>
      </div>
    );
  }

  if (project.dashboardType === 'mutualfund') {
    return (
      <div className="space-y-4">
        {/* Fund Performance Bars */}
        <div className="space-y-2">
          {[
            { name: 'Equity Growth', return: 28, risk: 'High' },
            { name: 'Balanced Fund', return: 18, risk: 'Medium' },
            { name: 'Debt Fund', return: 12, risk: 'Low' },
            { name: 'Index Fund', return: 15, risk: 'Medium' }
          ].map((fund, i) => (
            <motion.div
              key={fund.name}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="space-y-1"
            >
              <div className="flex justify-between text-[8px]">
                <span className="text-[var(--c-text)]">{fund.name}</span>
                <span className="text-[var(--c-accent)] font-bold">+{fund.return}%</span>
              </div>
              <div className="h-2 bg-[var(--c-border)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(fund.return / 30) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                  className={`h-full rounded-full ${
                    fund.risk === 'High' ? 'bg-red-500' :
                    fund.risk === 'Medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Risk Distribution Pie */}
        <div className="h-20 rounded-lg bg-[var(--c-surface)] p-3 flex items-center justify-center">
          <svg className="w-16 h-16" viewBox="0 0 100 100">
            <motion.circle
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#DC2626"
              strokeWidth="20"
              strokeDasharray="75 125"
              transform="rotate(-90 50 50)"
            />
            <motion.circle
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EAB308"
              strokeWidth="20"
              strokeDasharray="50 175"
              strokeDashoffset="-75"
              transform="rotate(-90 50 50)"
            />
            <motion.circle
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray="25 200"
              strokeDashoffset="-125"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="ml-4 text-[8px] space-y-1">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-[var(--c-text-muted)]">High 30%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-[var(--c-text-muted)]">Med 50%</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[var(--c-text-muted)]">Low 20%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default function AnalyticsWorkspaceEnhanced() {
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
            Analytics & Business Intelligence
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Data-Driven
            <span className="text-gradient-red"> Insights</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            Transforming raw data into actionable business insights through Power BI dashboards, customer analytics, and predictive modeling
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {analyticsProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)] hover:border-[var(--c-accent)] transition-all"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30 text-[var(--c-accent)] text-xs font-semibold">
                  {project.category}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-black text-[var(--c-strong)] mb-3">{project.title}</h3>
              <p className="text-[var(--c-text-muted)] mb-6">{project.description}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 rounded-md bg-[var(--c-surface)] text-[var(--c-text)] text-xs">
                    {tool}
                  </span>
                ))}
              </div>

              {/* Dashboard Preview */}
              <div className="p-6 rounded-xl bg-[var(--c-bg)] border border-[var(--c-border)] mb-6">
                <DashboardPreview project={project} />
              </div>

              {/* Analytical Approach */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[var(--c-strong)] mb-3">Analytical Approach:</h4>
                <ul className="space-y-2">
                  {project.approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--c-text-muted)]">
                      <span className="text-[var(--c-accent)] mt-0.5">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Metrics */}
              <div className="mt-6 pt-6 border-t border-[var(--c-border)] grid grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-black text-[var(--c-accent)]">{value}</div>
                    <div className="text-[8px] text-[var(--c-text-muted)] uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
