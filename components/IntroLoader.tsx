'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
  { text: 'नमस्ते',    lang: 'Hindi' },
  { text: 'Hello',     lang: 'English' },
  { text: 'Привет',    lang: 'Russian' },
  { text: 'నమస్కారం',  lang: 'Telugu' },
  { text: 'வணக்கம்',   lang: 'Tamil' },
];

type Phase = 'greetings' | 'intro-name' | 'intro-pills' | 'intro-tagline' | 'done';

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [gIdx, setGIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('greetings');

  useEffect(() => {
    if (sessionStorage.getItem('intro-seen')) {
      setVisible(false);
      return;
    }

    const EACH = 520;
    const total = greetings.length;
    const timers: ReturnType<typeof setTimeout>[] = [];

    for (let i = 1; i < total; i++) {
      timers.push(setTimeout(() => setGIdx(i), i * EACH));
    }

    const after = total * EACH + 300;
    timers.push(setTimeout(() => setPhase('intro-name'),    after));
    timers.push(setTimeout(() => setPhase('intro-pills'),   after + 950));
    timers.push(setTimeout(() => setPhase('intro-tagline'), after + 1800));
    timers.push(setTimeout(() => {
      setPhase('done');
      setTimeout(() => {
        setVisible(false);
        sessionStorage.setItem('intro-seen', 'true');
      }, 700);
    }, after + 3500));

    return () => timers.forEach(clearTimeout);
  }, []);

  const skip = () => {
    setVisible(false);
    sessionStorage.setItem('intro-seen', 'true');
  };

  if (!visible) return null;

  const isIntro = phase === 'intro-name' || phase === 'intro-pills' || phase === 'intro-tagline';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={phase === 'done' ? { opacity: 0, scale: 1.02 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[200] bg-[var(--c-bg)] overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.4, opacity: isIntro ? 0.06 : 0.04 }}
          transition={{ duration: 2.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--c-accent)] blur-[130px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(var(--c-border) 1px,transparent 1px),linear-gradient(90deg,var(--c-border) 1px,transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Skip */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={skip}
        className="absolute top-7 right-7 z-10 text-[11px] uppercase tracking-[0.3em] text-[var(--c-text-muted)] hover:text-[var(--c-accent)] px-4 py-2 rounded-full border border-[var(--c-border)] hover:border-[var(--c-accent)] transition-colors"
      >
        Skip esc
      </motion.button>

      {/* Centre content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">

        {/* ── GREETINGS ── */}
        <AnimatePresence mode="wait">
          {phase === 'greetings' && (
            <motion.div
              key={`g${gIdx}`}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0  }}
              exit={   { opacity: 0, y: -32 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <h1
                className="font-black tracking-tight leading-none select-none"
                style={{
                  fontSize: 'clamp(5rem, 18vw, 12rem)',
                  color: 'var(--c-text-strong)',
                  textShadow: '0 0 60px rgba(220,38,38,0.15)',
                }}
              >
                {greetings[gIdx].text}
              </h1>
              <span className="mt-5 text-xs uppercase tracking-[0.55em] text-[var(--c-text-muted)] font-medium">
                {greetings[gIdx].lang}
              </span>

              {/* Progress dots */}
              <div className="mt-10 flex items-center gap-2">
                {greetings.map((_, i) => (
                  <motion.div
                    key={i}
                    className="rounded-full"
                    animate={{
                      width:  i === gIdx ? 24 : 6,
                      height: 6,
                      backgroundColor: i === gIdx ? '#DC2626' : i < gIdx ? '#5a1212' : '#2a2a2a',
                    }}
                    transition={{ duration: 0.28 }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── INTRO ── */}
        <AnimatePresence>
          {isIntro && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-6 max-w-3xl w-full"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-[11px] uppercase tracking-[0.5em] text-[var(--c-text-muted)] font-semibold"
              >
                — Introducing —
              </motion.p>

              {/* Name block */}
              <motion.div
                initial={{ opacity: 0, scale: 0.86, y: 32 }}
                animate={{ opacity: 1, scale: 1,    y: 0  }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="leading-none"
              >
                <div
                  className="font-black tracking-tighter leading-[0.88] text-[var(--c-text-strong)]"
                  style={{ fontSize: 'clamp(4.5rem, 16vw, 10rem)' }}
                >
                  Saket
                </div>
                <div
                  className="font-black tracking-tighter leading-[0.88]"
                  style={{
                    fontSize: 'clamp(4.5rem, 16vw, 10rem)',
                    WebkitTextStroke: '2.5px #DC2626',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  Dandekar
                </div>
              </motion.div>

              {/* Pills */}
              {(phase === 'intro-pills' || phase === 'intro-tagline') && (
                <motion.div
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{ opacity: 1,  y: 0,  filter: 'blur(0px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap justify-center gap-2.5"
                >
                  {['Digital Marketing','Growth Analytics','AI Automation','Creative Strategy'].map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.08, duration: 0.32 }}
                      className="px-5 py-2 rounded-full text-sm font-semibold border border-[var(--c-border)] bg-[var(--c-bg-card)] text-[var(--c-text)]"
                    >
                      {t}
                    </motion.span>
                  ))}
                </motion.div>
              )}

              {/* Tagline & loader bar */}
              {phase === 'intro-tagline' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-4"
                >
                  <p className="text-base text-[var(--c-text-muted)] font-light max-w-xs leading-relaxed">
                    Where data meets creativity —{' '}
                    <span className="text-[var(--c-accent)] font-semibold">building brands that grow.</span>
                  </p>
                  <div className="w-36 h-px bg-[var(--c-border)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[var(--c-accent)]"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.6, ease: 'linear' }}
                    />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[var(--c-text-muted)] opacity-50">
                    Entering Portfolio
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
