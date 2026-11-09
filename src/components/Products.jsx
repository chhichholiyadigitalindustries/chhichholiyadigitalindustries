import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Receipt, 
  BookOpen, 
  Sparkles, 
  ShieldCheck, 
  Store, 
  ArrowUpRight, 
  Lock, 
  Cpu, 
  Layers, 
  Activity 
} from 'lucide-react';

const BRANDX_FEATURES = [
  { icon: Receipt, label: 'GST Invoicing & Billing', desc: 'Instant GST-compliant invoices and quick tax calculations.' },
  { icon: Store, label: 'Smart POS Terminal', desc: 'Seamless barcode scanning and rapid counter checkouts.' },
  { icon: BookOpen, label: 'Customer Digital Ledger', desc: 'Khata & credit management with automated payment reminders.' },
  { icon: Building2, label: 'Digital Business Presence', desc: 'Instant online storefront for local retail discovery.' },
  { icon: Sparkles, label: 'AI Business Assistance', desc: 'Smart inventory forecasting and sales analytics.' },
  { icon: ShieldCheck, label: 'Offline-First Sync', desc: 'Uninterrupted operations during local network outages.' },
];

const FUTURE_LABS = [
  {
    id: 'CDI-LAB-01',
    title: 'CDI NeuralCore',
    category: 'Intelligent Automation',
    desc: 'Autonomous enterprise workflow orchestration and document intelligence engine for Indian businesses.',
    status: 'In Active Engineering',
    tag: 'AI / API',
    icon: Cpu,
  },
  {
    id: 'CDI-LAB-02',
    title: 'CDI OpsMatrix',
    category: 'Operations Command',
    desc: 'High-throughput inventory, multi-warehouse logistics, and real-time ledger synchronization pipeline.',
    status: 'Architecture Stage',
    tag: 'DISTRIBUTED SYSTEMS',
    icon: Activity,
  },
  {
    id: 'CDI-LAB-03',
    title: 'CDI CloudEngine',
    category: 'Edge Infrastructure',
    desc: 'Bespoke micro-deployment and auto-scaling infrastructure wrapper for zero-downtime applications.',
    status: 'Research & Prototyping',
    tag: 'CLOUD / DEVOPS',
    icon: Layers,
  },
];

export default function Products({ onOpenProjectModal }) {
  const [activeTab, setActiveTab] = useState('flagship');

  return (
    <section id="products" className="relative py-28 sm:py-36 bg-cdi-black overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cdi-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>03 // Products & Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              PRODUCTS & <span className="text-gold-gradient">PLATFORMS</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            Engineering proprietary technology products alongside bespoke client enterprise solutions.
          </p>
        </div>

        {/* Flagship Spotlight: BrandX */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/15 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Subtle Accent Grid */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-cdi-gold/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Info */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cdi-gold/15 border border-cdi-gold/40 text-cdi-gold text-xs font-mono font-semibold uppercase tracking-wider">
                  Flagship CDI Product
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cdi-silver-muted text-xs font-mono">
                  Status: Active Engineering
                </span>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-cdi-white font-display">
                  BRAND<span className="text-cdi-gold">X</span>
                </h3>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-cdi-silver-muted block mt-1">
                  Business Technology Platform
                </span>
              </div>

              <p className="text-base text-cdi-silver leading-relaxed font-light">
                An all-in-one digital business platform designed specifically for Indian retailers, vyaparis, and MSMEs to modernize day-to-day operations with enterprise efficiency.
              </p>

              {/* Core Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {BRANDX_FEATURES.map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.label} className="p-3.5 rounded-xl bg-[#141414]/90 border border-white/5 flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-cdi-gold/10 text-cdi-gold shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-cdi-white block">{feat.label}</span>
                        <span className="text-[11px] text-cdi-silver-muted leading-tight block mt-0.5">{feat.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenProjectModal}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:shadow-[0_0_25px_rgba(214,163,58,0.4)] transition-all"
                >
                  <span>Inquire About BrandX</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-cdi-silver-muted">
                  CDI Enterprise Suite
                </span>
              </div>
            </div>

            {/* Right Graphic: Architectural Mockup / Engine Schematic */}
            <div className="lg:col-span-6 relative">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
                  <span className="text-cdi-silver flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cdi-gold animate-pulse" />
                    BRANDX // CORE ECOSYSTEM
                  </span>
                  <span className="text-white/40">v1.4 ARCH</span>
                </div>

                {/* Simulated Platform Modules */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cdi-gold/20 flex items-center justify-center text-cdi-gold font-bold text-xs">
                        GST
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-cdi-white">Automated Tax & Invoicing</div>
                        <div className="text-[10px] text-cdi-silver-muted font-mono">Real-time GSTR-1 ready outputs</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">ACTIVE</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-cdi-silver font-bold text-xs">
                        POS
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-cdi-white">High-Speed Counter POS</div>
                        <div className="text-[10px] text-cdi-silver-muted font-mono">Sub-100ms offline barcode scan</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">ACTIVE</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cdi-gold/20 flex items-center justify-center text-cdi-gold font-bold text-xs">
                        AI
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-cdi-white">Vyapar AI Intelligence</div>
                        <div className="text-[10px] text-cdi-silver-muted font-mono">Automated demand & ledger balance forecast</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-cdi-gold bg-cdi-gold/10 px-2.5 py-0.5 rounded-full">OPTIMIZED</span>
                  </div>
                </div>

                {/* Bottom Tech Footprint */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cdi-silver-muted">
                  <span>Stack: React Native • Node • SQLite</span>
                  <span>Encryption: AES-256</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Products in Development */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold font-semibold">
                CDI LABS // PIPELINE
              </span>
              <span className="text-xs text-white/30">•</span>
              <span className="text-xs text-cdi-silver-muted font-light">
                More products in development
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FUTURE_LABS.map((lab, index) => {
              const Icon = lab.icon;
              return (
                <motion.div
                  key={lab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#121212]/80 border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[11px] font-mono text-cdi-gold tracking-widest">
                        {lab.id}
                      </span>
                      <div className="p-2 rounded-lg bg-white/5 text-cdi-silver group-hover:text-cdi-gold border border-white/5 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-cdi-white tracking-wide font-display">
                      {lab.title}
                    </h4>
                    <span className="text-xs text-cdi-silver-muted font-mono uppercase tracking-wider mt-0.5 block">
                      {lab.category}
                    </span>

                    <p className="text-xs text-cdi-silver-muted mt-3 font-light leading-relaxed">
                      {lab.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cdi-silver-muted">{lab.tag}</span>
                    <span className="text-cdi-gold/80 flex items-center gap-1.5">
                      <Lock className="w-3 h-3" /> {lab.status}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
