import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Compass } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section id="statement" className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden border-y border-white/5">
      {/* Precision Background Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cdi-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-[#171717]/80 text-[11px] font-mono tracking-widest text-cdi-silver-muted uppercase mb-8"
        >
          <span className="w-1 h-1 rounded-full bg-cdi-gold" />
          <span>Core Philosophy</span>
        </motion.div>

        {/* Large Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight sm:leading-tight text-cdi-white font-display"
        >
          “Technology should do more than exist.{' '}
          <span className="text-gold-gradient block mt-2 sm:mt-1">
            It should move business forward.”
          </span>
        </motion.h2>

        {/* Supporting Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-cdi-silver-muted font-light leading-relaxed max-w-3xl mx-auto"
        >
          Chhichholiya Digital Industries creates modern digital experiences and technology products that connect ideas with real-world impact.
        </motion.p>

        {/* Engineering Value Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10"
        >
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#141414]/60 border border-white/5">
            <ShieldCheck className="w-6 h-6 text-cdi-gold mb-2" />
            <span className="text-sm font-semibold text-cdi-white">Engineering Rigor</span>
            <span className="text-xs text-cdi-silver-muted mt-1 text-center">Built with modular, battle-tested architectural standards.</span>
          </div>

          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#141414]/60 border border-white/5">
            <Zap className="w-6 h-6 text-cdi-gold mb-2" />
            <span className="text-sm font-semibold text-cdi-white">High Performance</span>
            <span className="text-xs text-cdi-silver-muted mt-1 text-center">Optimized for sub-second speeds and scalable execution.</span>
          </div>

          <div className="flex flex-col items-center p-5 rounded-2xl bg-[#141414]/60 border border-white/5">
            <Compass className="w-6 h-6 text-cdi-gold mb-2" />
            <span className="text-sm font-semibold text-cdi-white">Strategic Intent</span>
            <span className="text-xs text-cdi-silver-muted mt-1 text-center">Every digital asset is aligned with tangible business growth.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
