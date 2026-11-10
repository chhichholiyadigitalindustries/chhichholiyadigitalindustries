import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Sparkles, TrendingUp, Code2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

const PILLARS = [
  {
    icon: Layout,
    title: 'Product Thinking',
    desc: 'Crafting user-centric products that align functional architecture with long-term product vision.',
  },
  {
    icon: Code2,
    title: 'Engineering Rigor',
    desc: 'Writing clean, resilient, and performant code that scales gracefully under enterprise demands.',
  },
  {
    icon: Sparkles,
    title: 'Design Excellence',
    desc: 'Creating high-fidelity, polished visual systems that command authority and inspire trust.',
  },
  {
    icon: Cpu,
    title: 'Modern Innovation',
    desc: 'Deploying pragmatic AI, cloud pipelines, and smart automation to unlock operational leverage.',
  },
  {
    icon: TrendingUp,
    title: 'Business Understanding',
    desc: 'Building digital systems grounded in Indian and global market dynamics to drive real revenue.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-cdi-black overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cdi-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
            <span>01 // About CDI</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
            BUILT FOR THE <span className="text-gold-gradient">DIGITAL ERA.</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Monogram & Engineering Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0D0D0D] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group">
              {/* Subtle Animated Gold Aura */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-cdi-gold/15 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              {/* Precision Grid lines */}
              <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

              {/* Central Official Monogram Display */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6">
                <div className="relative w-48 sm:w-60 flex items-center justify-center">
                  {/* Outer Orbital Ring Accent */}
                  <motion.div
                    className="absolute inset-[-20px] rounded-full border border-cdi-gold/20 border-dashed"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  />
                  <BrandLogo
                    alt="Chhichholiya Digital Industries Monogram"
                    loading="lazy"
                    className="w-full h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(214,163,58,0.25)]"
                  />
                </div>

                <div className="mt-8 text-center">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-cdi-gold font-semibold">
                    DIGITAL ENGINEERING LAB
                  </span>
                  <p className="text-[13px] text-cdi-silver-muted mt-1 font-light">
                    Transforming complex business logic into high-precision technology platforms.
                  </p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cdi-silver-muted">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Engineering Standard
                </span>
                <span className="text-cdi-silver">CDI // ARCH-2026</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content & 5 Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-medium text-cdi-white leading-relaxed font-display">
                “We combine design, engineering and emerging technology to transform ideas into scalable digital experiences.”
              </p>
              <p className="text-base text-cdi-silver-muted leading-relaxed">
                Chhichholiya Digital Industries (CDI) is a modern Indian digital technology company. We engineer production-grade web systems, bespoke mobile applications, intelligent AI automation pipelines, and custom enterprise tools tailored to solve critical operational bottlenecks.
              </p>
            </div>

            {/* 5 Core Pillars */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-4 sm:p-5 rounded-2xl bg-[#121212]/80 border border-white/5 hover:border-cdi-gold/40 transition-all duration-300 ${
                      idx === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-[#1A1A1A] text-cdi-gold border border-white/5 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cdi-white tracking-wide">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-cdi-silver-muted mt-1 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
