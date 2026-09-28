'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const marketingServices = [
  {
    title: "SEO & SEM",
    icon: "🔍",
    description: "Search engine optimization and search engine marketing strategies for organic and paid growth.",
    capabilities: ["Keyword Research", "On-Page SEO", "Technical SEO", "Google Ads", "Bing Ads"]
  },
  {
    title: "Performance Marketing",
    icon: "📈",
    description: "Data-driven campaigns focused on measurable results and ROI optimization.",
    capabilities: ["Campaign Strategy", "A/B Testing", "Conversion Optimization", "Attribution Modeling", "ROI Analysis"]
  },
  {
    title: "Social Media Marketing",
    icon: "📱",
    description: "Strategic social media presence building and community engagement across platforms.",
    capabilities: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing", "Social Analytics"]
  },
  {
    title: "Content Marketing",
    icon: "✍️",
    description: "Strategic content creation and distribution to attract and engage target audiences.",
    capabilities: ["Content Strategy", "SEO Writing", "Blog Management", "Email Marketing", "Content Calendar"]
  },
  {
    title: "Brand Building",
    icon: "🎯",
    description: "Developing strong brand identity and positioning in the market.",
    capabilities: ["Brand Strategy", "Visual Identity", "Brand Messaging", "Market Positioning", "Brand Guidelines"]
  },
  {
    title: "E-commerce & CRM",
    icon: "🛒",
    description: "E-commerce optimization and customer relationship management systems.",
    capabilities: ["Shopify/WordPress", "Customer Journey", "CRM Implementation", "Sales Funnel", "Retention Strategy"]
  }
];

export default function MarketingSuite() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="marketing" ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-[var(--c-strong)] mb-6">
            Digital Marketing & <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-xl text-[var(--c-muted)] max-w-3xl mx-auto">
            Strategic marketing solutions combining SEO, SEM, social media, content, and performance marketing to drive measurable business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-hover rounded-2xl p-8 hover:shadow-xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-3 group-hover:text-[var(--c-accent)] transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--c-muted)] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Capabilities */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[var(--c-text)] mb-3">Key Capabilities:</h4>
                <ul className="space-y-1.5">
                  {service.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-sm text-[var(--c-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-accent)]" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marketing Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-[var(--c-strong)] mb-8 text-center">Marketing Tools & Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Google Analytics',
              'Google Ads',
              'Facebook Ads Manager',
              'SEMrush',
              'WordPress',
              'Shopify',
              'Mailchimp',
              'Hootsuite',
              'Canva'
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                className="px-6 py-3 rounded-full glass-hover text-[var(--c-text)] font-medium hover:border-[var(--c-accent)] transition"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
