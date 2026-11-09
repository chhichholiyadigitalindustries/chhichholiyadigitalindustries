import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Palette, 
  Maximize2, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

const PRINCIPLES = [
  {
    id: '01',
    title: 'ENGINEERED, NOT ASSEMBLED',
    tagline: 'Custom Architecture',
    desc: 'Every product is built around the actual requirement. We avoid bloated off-the-shelf templates in favor of tailored, maintainable codebases.',
    icon: ShieldCheck,
    span: 'lg:col-span-7',
  },
  {
    id: '02',
    title: 'DESIGN WITH PURPOSE',
    tagline: 'Visual Quality & Usability',
    desc: 'Visual excellence combined with ergonomic usability. Our interfaces inspire trust and guide user interaction without visual clutter.',
    icon: Palette,
    span: 'lg:col-span-5',
  },
  {
    id: '03',
    title: 'BUILT TO SCALE',
    tagline: 'Future-Proof Systems',
    desc: 'Architecture designed for future expansion. From initial MVP to high-concurrency loads, our data schemas and components scale smoothly.',
    icon: Maximize2,
    span: 'lg:col-span-5',
  },
  {
    id: '04',
    title: 'BUSINESS FIRST',
    tagline: 'Pragmatic Impact',
    desc: 'Technology must solve a real business problem. We prioritize features and systems that generate direct operational efficiency and commercial value.',
    icon: TrendingUp,
    span: 'lg:col-span-7',
  },
  {
    id: '05',
    title: 'CONTINUOUS INNOVATION',
    tagline: 'Forward Momentum',
    desc: 'Always exploring better ways to build. We actively integrate state-of-the-art AI tooling, responsive performance optimizations, and modern web APIs.',
    icon: Sparkles,
    span: 'lg:col-span-12',
  },
];

export default function WhyCDI() {
  return (
    <section className="relative py-28 sm:py-36 bg-cdi-black overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cdi-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>06 // Engineering Principles</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              WHY CHOOSE <span className="text-gold-gradient">CDI</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            Our architectural philosophy is founded on five uncompromising engineering principles.
          </p>
        </div>

        {/* Asymmetric Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`${principle.span} p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 flex flex-col justify-between group shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-cdi-gold tracking-widest uppercase font-semibold">
                      // {principle.tagline}
                    </span>
                    <div className="p-3 rounded-xl bg-[#1D1D1D] text-cdi-silver group-hover:text-cdi-gold border border-white/5 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-cdi-white font-display tracking-wide uppercase group-hover:text-cdi-gold-light transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-sm sm:text-base text-cdi-silver-muted mt-3 font-light leading-relaxed">
                    {principle.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cdi-silver-muted">
                  <span>STANDARD #{principle.id}</span>
                  <span className="text-white/20 group-hover:text-cdi-gold transition-colors">CDI PRINCIPLE</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
