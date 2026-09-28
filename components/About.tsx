'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[var(--c-strong)] mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--c-accent)] to-[var(--c-accent2)] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-[var(--c-text)] leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            I'm a <span className="font-semibold text-[var(--c-accent-light)]">Digital Marketing & Growth Analyst</span> with hands-on experience in performance marketing, financial services, business operations, AI-powered automation, analytics, and customer acquisition.
          </p>

          <p>
            My work sits at the intersection of <span className="font-semibold text-[var(--c-accent-light)]">marketing, analytics, automation, and creative strategy</span>. I help businesses grow through data-driven decision-making, AI-powered workflows, compelling content, and strategic execution.
          </p>

          <p>
            From building <span className="font-semibold text-[var(--c-accent-light)]">Power BI dashboards</span> that transform raw data into actionable insights, to creating <span className="font-semibold text-[var(--c-accent-light)]">AI agents</span> that automate lead generation and customer workflows, I bridge the gap between business goals and technical implementation.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[var(--c-border)]">
            <div>
              <span className="font-semibold text-[var(--c-accent-light)]">Location:</span>
              <span className="ml-2 text-[var(--c-muted)]">Bhilai, Chhattisgarh, India</span>
            </div>
            <div>
              <span className="font-semibold text-[var(--c-accent-light)]">Email:</span>
              <span className="ml-2 text-[var(--c-muted)]">b4u.iamsaket@gmail.com</span>
            </div>
            <div>
              <span className="font-semibold text-[var(--c-accent-light)]">Phone:</span>
              <span className="ml-2 text-[var(--c-muted)]">+91 7999733626</span>
            </div>
            <div>
              <span className="font-semibold text-[var(--c-accent-light)]">Status:</span>
              <span className="ml-2 text-[var(--c-muted)]">Open to opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
