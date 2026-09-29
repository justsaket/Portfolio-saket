'use client';

import { motion } from 'framer-motion';

const marketingStrategies = [
  {
    id: 'seo-sem',
    icon: '🔍',
    title: 'SEO & SEM',
    description: 'Search optimization and paid search campaigns',
    capabilities: ['Keyword Research', 'On-Page SEO', 'Google Ads', 'Performance Max'],
    metrics: { primary: '250%', label: 'Organic Growth' }
  },
  {
    id: 'social-media',
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Multi-platform social strategy and execution',
    capabilities: ['Content Strategy', 'Community Management', 'Paid Social', 'Influencer Marketing'],
    metrics: { primary: '2M+', label: 'Reach Generated' }
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'Content Marketing',
    description: 'Strategic content creation and distribution',
    capabilities: ['Blog Strategy', 'Video Marketing', 'Email Campaigns', 'Content Calendar'],
    metrics: { primary: '5X', label: 'Engagement Rate' }
  },
  {
    id: 'performance',
    icon: '📊',
    title: 'Performance Marketing',
    description: 'Data-driven growth and conversion optimization',
    capabilities: ['Funnel Optimization', 'A/B Testing', 'CRO', 'Attribution Modeling'],
    metrics: { primary: '35%', label: 'ROI Improvement' }
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-Commerce Marketing',
    description: 'End-to-end e-commerce growth strategy',
    capabilities: ['Product Listing', 'Cart Optimization', 'Retargeting', 'Marketplace Strategy'],
    metrics: { primary: '₹15L+', label: 'Revenue Generated' }
  },
  {
    id: 'brand',
    icon: '🎯',
    title: 'Brand Strategy',
    description: 'Brand positioning and storytelling',
    capabilities: ['Brand Identity', 'Messaging', 'Positioning', 'Campaign Strategy'],
    metrics: { primary: '120%', label: 'Brand Awareness' }
  }
];

const campaigns = [
  {
    title: 'University Brand Launch',
    client: 'Rungta International Skills University',
    result: 'Successfully launched university social media presence',
    channels: ['Instagram', 'Facebook', 'LinkedIn']
  },
  {
    title: 'Fintech Growth Campaign',
    client: 'Digital Finvest',
    result: 'Drove customer acquisition through digital channels',
    channels: ['Google Ads', 'Social Media', 'Email']
  },
  {
    title: 'Food Delivery Operations',
    client: 'Taste Plaza',
    result: 'Built and scaled food delivery marketing system',
    channels: ['Local SEO', 'Social Media', 'Referral']
  }
];

export default function MarketingStrategy() {
  return (
    <section id="marketing" className="relative py-24 bg-gradient-to-b from-[var(--c-bg)] to-[var(--c-surface)]">
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
            Digital Marketing & Growth
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Growth
            <span className="text-gradient-red"> Strategy</span>
          </h2>
          <p className="text-xl text-[var(--c-text-muted)] max-w-3xl mx-auto">
            Full-stack digital marketing across channels, platforms, and customer journey stages
          </p>
        </motion.div>

        {/* Marketing Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {marketingStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-[var(--c-bg-card)] border border-[var(--c-border)] hover:border-[var(--c-accent)] transition-all hover:shadow-lg hover:shadow-[var(--c-accent)]/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{strategy.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-2">{strategy.title}</h3>
              <p className="text-[var(--c-text-muted)] mb-6">{strategy.description}</p>

              {/* Capabilities */}
              <div className="space-y-2 mb-6">
                {strategy.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)]" />
                    <span className="text-sm text-[var(--c-text)]">{cap}</span>
                  </div>
                ))}
              </div>

              {/* Metric */}
              <div className="pt-6 border-t border-[var(--c-border)]">
                <div className="text-3xl font-black text-[var(--c-accent)]">{strategy.metrics.primary}</div>
                <div className="text-xs text-[var(--c-text-muted)] uppercase tracking-wider">{strategy.metrics.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Campaign Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--c-bg-card)] to-[var(--c-surface)] border border-[var(--c-border)]"
        >
          <h3 className="text-3xl font-black text-[var(--c-strong)] mb-8 text-center">Featured Campaigns</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[var(--c-bg)] border border-[var(--c-border)]"
              >
                <div className="text-sm text-[var(--c-accent)] font-semibold mb-2">{campaign.client}</div>
                <h4 className="text-xl font-bold text-[var(--c-strong)] mb-3">{campaign.title}</h4>
                <p className="text-[var(--c-text-muted)] mb-4">{campaign.result}</p>

                <div className="flex flex-wrap gap-2">
                  {campaign.channels.map((channel) => (
                    <span key={channel} className="px-3 py-1 rounded-full bg-[var(--c-accent)]/10 border border-[var(--c-accent)]/30 text-[var(--c-accent)] text-xs">
                      {channel}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Marketing Funnel Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-black text-[var(--c-strong)] mb-8 text-center">Customer Journey Optimization</h3>

          <div className="grid md:grid-cols-4 gap-4">
            {['Awareness', 'Consideration', 'Conversion', 'Retention'].map((stage, index) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-6 rounded-xl bg-[var(--c-bg-card)] border-2 border-[var(--c-border)] text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--c-accent)] to-[var(--c-accent-dark)] flex items-center justify-center text-white font-black">
                  {index + 1}
                </div>
                <h4 className="font-bold text-lg text-[var(--c-strong)]">{stage}</h4>

                {/* Connection Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 -translate-y-1/2">
                    <svg className="w-4 h-4 text-[var(--c-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
