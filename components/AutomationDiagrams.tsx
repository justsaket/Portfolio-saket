'use client';

import { motion } from 'framer-motion';

const automationProjects = [
  {
    id: 'linkedin-automation',
    title: 'LinkedIn Lead Generation Bot',
    description: 'AI-powered LinkedIn automation for targeted outreach',
    flow: [
      { step: 'Profile Scan', icon: '🔍', description: 'Target identification' },
      { step: 'AI Analysis', icon: '🤖', description: 'Profile scoring' },
      { step: 'Personalized Outreach', icon: '✉️', description: 'Custom messages' },
      { step: 'Follow-up', icon: '🔄', description: 'Automated sequences' }
    ],
    tools: ['Python', 'AI APIs', 'Selenium', 'CRM Integration'],
    result: '500+ qualified leads generated monthly'
  },
  {
    id: 'email-workflows',
    title: 'Email Marketing Automation',
    description: 'Intelligent email sequences with behavioral triggers',
    flow: [
      { step: 'Trigger Event', icon: '⚡', description: 'User action detected' },
      { step: 'Segment Analysis', icon: '📊', description: 'User categorization' },
      { step: 'Dynamic Content', icon: '📝', description: 'Personalized email' },
      { step: 'Performance Track', icon: '📈', description: 'Engagement metrics' }
    ],
    tools: ['Zapier', 'Mailchimp', 'Google Sheets', 'Webhooks'],
    result: '85% open rate, 45% click-through rate'
  },
  {
    id: 'ai-calling',
    title: 'AI Voice Assistant',
    description: 'Automated calling system for lead qualification',
    flow: [
      { step: 'Lead Import', icon: '📥', description: 'CRM sync' },
      { step: 'AI Call', icon: '📞', description: 'Voice interaction' },
      { step: 'Qualification', icon: '✅', description: 'Score & categorize' },
      { step: 'CRM Update', icon: '💾', description: 'Auto-sync results' }
    ],
    tools: ['AI Voice API', 'Twilio', 'CRM', 'NLP'],
    result: '1000+ calls handled per day'
  },
  {
    id: 'data-pipeline',
    title: 'Marketing Data Pipeline',
    description: 'Automated ETL for marketing analytics',
    flow: [
      { step: 'Data Extract', icon: '🔄', description: 'Multi-source pull' },
      { step: 'Transform', icon: '⚙️', description: 'Clean & process' },
      { step: 'Load', icon: '📊', description: 'Dashboard sync' },
      { step: 'Alert', icon: '🔔', description: 'Anomaly detection' }
    ],
    tools: ['Python', 'Google Sheets API', 'Power BI', 'Cloud Functions'],
    result: 'Real-time reporting automated'
  }
];

export default function AutomationDiagrams() {
  return (
    <section id="automation" className="relative py-24 bg-[var(--c-bg)]">
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
            AI & Automation
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Intelligent
            <span className="text-gradient-red"> Systems</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            Building AI-powered workflows that scale business operations and automate growth
          </p>
        </motion.div>

        {/* Automation Projects */}
        <div className="space-y-12">
          {automationProjects.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: projectIndex * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)]"
            >
              {/* Project Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-black text-[var(--c-strong)] mb-2">{project.title}</h3>
                <p className="text-lg text-[var(--c-text-muted)] mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30 text-[var(--c-accent)] text-xs font-semibold">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Workflow Diagram */}
              <div className="grid md:grid-cols-4 gap-4 mb-8">
                {project.flow.map((node, index) => (
                  <div key={node.step} className="relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative p-6 rounded-xl bg-[var(--c-bg)] border-2 border-[var(--c-border)] hover:border-[var(--c-accent)] transition-all group"
                    >
                      {/* Icon */}
                      <div className="text-4xl mb-3 text-center">{node.icon}</div>

                      {/* Step Info */}
                      <h4 className="font-bold text-center text-[var(--c-strong)] mb-2">{node.step}</h4>
                      <p className="text-xs text-center text-[var(--c-text-muted)]">{node.description}</p>

                      {/* Pulse Animation on Hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-[var(--c-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Connection Arrow */}
                    {index < project.flow.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index + 1) * 0.1 }}
                        className="hidden md:block absolute top-1/2 -right-2 z-10"
                      >
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg className="w-4 h-4 text-[var(--c-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}

                    {/* Data Pulse Effect */}
                    {index < project.flow.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, left: '0%' }}
                        animate={{ opacity: [0, 1, 0], left: ['0%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="hidden md:block absolute top-1/2 left-full w-2 h-2 bg-[var(--c-accent)] rounded-full"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30">
                <svg className="w-6 h-6 text-[var(--c-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-[var(--c-strong)]">Result:</span>
                <span className="text-[var(--c-accent)] font-semibold">{project.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
