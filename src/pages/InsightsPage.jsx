import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FlaskConical, 
  Bot, 
  Cpu, 
  Code2, 
  Palette, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Layers, 
  Terminal, 
  Clock 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const LAB_CATEGORIES = [
  {
    title: 'AI Experiments',
    icon: Bot,
    desc: 'Research into natural language processing, multimodal interfaces, and efficient regional language model integration.'
  },
  {
    title: 'Product Engineering',
    icon: Code2,
    desc: 'Prototypes around local-first data synchronization, POS hardware drivers, and scalable transactional architectures.'
  },
  {
    title: 'Software Architecture',
    icon: Layers,
    desc: 'Deep-dives into component modularity, API contract verification, and microservices boundary design.'
  },
  {
    title: 'Digital Product Design',
    icon: Palette,
    desc: 'Explorations into high-contrast enterprise ergonomics, design token governance, and accessible micro-interactions.'
  },
  {
    title: 'Technology Exploration',
    icon: Cpu,
    desc: 'Benchmarking emerging web runtimes, WebAssembly capabilities, and offline persistence engines.'
  }
];

export default function InsightsPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="R&D // RESEARCH & INSIGHTS"
        title="CDI TECHNOLOGY"
        highlightTitle="LAB."
        description="Explorations, technical research, and architectural experiments conducted at Chhichholiya Digital Industries."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Insights / Lab' }
        ]}
      />

      {/* 2. The Lab is Evolving Hero Card */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/40 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] text-cdi-gold border border-cdi-gold/30 mx-auto flex items-center justify-center shadow-lg">
              <FlaskConical className="w-8 h-8 animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
              <span>RESEARCH STATUS: ACTIVE EXPLORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              THE LAB IS <span className="text-gold-gradient">EVOLVING.</span>
            </h2>

            <p className="text-base sm:text-lg text-cdi-silver max-w-2xl mx-auto font-light leading-relaxed">
              New technology experiments, product explorations and engineering insights will appear here as we document our active research initiatives.
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-2 text-xs font-mono text-cdi-silver-muted">
              <Clock className="w-4 h-4 text-cdi-gold" />
              <span>ONGOING RESEARCH & DEVELOPMENT IN PROGRESS</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Categories */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>01 // RESEARCH AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              AREAS OF <span className="text-gold-gradient">INVESTIGATION</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Our engineering team regularly investigates emerging software paradigms and architectural challenges across five core streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LAB_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#181818] px-2.5 py-1 rounded-md border border-white/5">
                        STREAM 0{idx + 1}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#1A1A1A] text-cdi-silver group-hover:text-cdi-gold transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors mb-3">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-white/20">
                    LAB DOMAIN // CDI-R&D
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            HAVE AN AMBITIOUS <span className="text-gold-gradient">TECH IDEA?</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Collaborate with CDI to research, prototype, and build your digital technology concept.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(214,163,58,0.3)] transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4" />
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
