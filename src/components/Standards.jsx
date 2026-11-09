import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  FileText,
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

const STANDARDS_CARDS = [
  {
    standard: 'ISO/IEC 29110',
    title: 'Software Engineering & VSE Lifecycle',
    label: 'SOFTWARE ENGINEERING',
    icon: GitBranch,
    desc: 'Reference framework for lifecycle practices applicable to Very Small Entities (VSEs) involved in systems and software engineering.',
    supportingReferences: ['ISO/IEC 29110-1-1', 'ISO/IEC 29110-1-2'],
    highlights: [
      'Structured lifecycle management',
      'Defined engineering deliverables',
      'Systematic requirements tracking'
    ]
  },
  {
    standard: 'ISO/IEC 22989',
    title: 'Artificial Intelligence Concepts',
    label: 'ARTIFICIAL INTELLIGENCE',
    icon: Cpu,
    desc: 'International reference for artificial intelligence concepts and terminology, supporting clearer understanding and structured communication around AI systems.',
    supportingReferences: null,
    highlights: [
      'Standardized AI terminology',
      'Cognitive architecture clarity',
      'Structured model deployment'
    ]
  },
  {
    standard: 'ISO/IEC 25002',
    title: 'Software Quality',
    label: 'SOFTWARE QUALITY',
    icon: ShieldCheck,
    desc: 'Reference for software quality requirements and evaluation models, supporting a quality-focused approach to digital product engineering.',
    supportingReferences: null,
    highlights: [
      'Reliability & performance metrics',
      'Maintainable code architecture',
      'Quality evaluation models'
    ]
  }
];

const APPROACH_STEPS = [
  { name: 'PLAN', desc: 'Requirements & Scoping' },
  { name: 'DESIGN', desc: 'Architecture & UX' },
  { name: 'ENGINEER', desc: 'Modular Codebase' },
  { name: 'TEST', desc: 'Validation & Quality' },
  { name: 'IMPROVE', desc: 'Iterative Refinement' },
];

export default function Standards() {
  return (
    <section 
      id="credentials" 
      aria-labelledby="credentials-heading"
      className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden border-t border-white/5"
    >
      {/* Background Precision Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cdi-gold/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
            <span>05 // Credentials & Standards</span>
          </div>
          
          <h2 
            id="credentials-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase leading-[1.1]"
          >
            BUSINESS CREDENTIALS & <br className="hidden sm:inline" />
            <span className="text-gold-gradient">ENGINEERING STANDARDS</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-cdi-silver font-medium leading-relaxed">
            Built with a registered business foundation and an engineering mindset shaped by recognized international standards.
          </p>

          <p className="mt-3 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
            Chhichholiya Digital Industries combines a formal MSME business foundation with structured software engineering practices. Our goal is to build reliable digital products through disciplined planning, engineering, testing and continuous improvement.
          </p>
        </div>

        {/* Top Row: Two Primary Foundation Cards (MSME + Standards-Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* CREDENTIAL 01 — MSME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cdi-gold/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                  GOVERNMENT MSME REGISTRATION
                </span>
                <div className="p-3 rounded-2xl bg-[#1D1D1D] text-cdi-gold border border-white/5 shadow-inner">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-wide">
                UDYAM REGISTERED
              </h3>

              <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                Chhichholiya Digital Industries is registered as a Micro, Small or Medium Enterprise under India's Udyam Registration framework.
              </p>

              {/* Verified Points */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Formal Indian MSME enterprise standing</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Udyam Registration framework alignment</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Commercial & legal digital operations</span>
                </div>
              </div>
            </div>

            {/* Custom CDI Udyam Badge */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-cdi-gold/30 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-extrabold font-display text-xs flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(214,163,58,0.3)]">
                  CDI
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wider text-cdi-white uppercase">
                    UDYAM REGISTERED
                  </span>
                  <span className="text-[11px] font-mono text-cdi-gold font-semibold tracking-wider">
                    MSME • INDIA
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-cdi-silver-muted mt-0.5">
                    REGISTERED BUSINESS ENTITY
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CREDENTIAL 02 — ENGINEERING STANDARDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cdi-gold/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              {/* Header Bar */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                  INTERNATIONAL STANDARDS REFERENCED
                </span>
                <div className="p-3 rounded-2xl bg-[#1D1D1D] text-cdi-gold border border-white/5 shadow-inner">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-wide">
                STANDARDS-ALIGNED ENGINEERING
              </h3>

              <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                CDI structures its software and digital product development practices with reference to recognized international standards covering software engineering, artificial intelligence concepts and software quality.
              </p>

              {/* Verified Points */}
              <div className="mt-6 space-y-2.5 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Internationally referenced engineering models</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Rigorous VSE lifecycle discipline</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                  <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                  <span>Continuous quality & performance metrics</span>
                </div>
              </div>
            </div>

            {/* Custom CDI Standards-Aligned Badge */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-cdi-gold/30 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-extrabold font-display text-xs flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(214,163,58,0.3)]">
                  CDI
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-wider text-cdi-white uppercase">
                    STANDARDS-ALIGNED
                  </span>
                  <span className="text-[11px] font-mono text-cdi-gold font-semibold tracking-wider">
                    ISO/IEC 29110 · ISO/IEC 22989 · ISO/IEC 25002
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-cdi-silver-muted mt-0.5">
                    ENGINEERED WITH INTERNATIONAL STANDARDS IN MIND
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Middle Row: Three Standards Reference Cards */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold font-semibold">
              // REFERENCED INTERNATIONAL STANDARDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STANDARDS_CARDS.map((card, idx) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.standard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-white/10 hover:border-cdi-gold/50 shadow-xl transition-all duration-400 flex flex-col justify-between"
                >
                  <div className="absolute inset-0 rounded-3xl bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Tag & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest">
                        {card.label}
                      </span>
                      <div className="p-2.5 rounded-xl bg-[#1D1D1D] text-cdi-silver group-hover:text-cdi-gold group-hover:bg-[#252525] border border-white/5 transition-all shadow-inner">
                        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Standard Number */}
                    <h4 className="text-2xl font-extrabold text-cdi-white font-display tracking-tight group-hover:text-cdi-gold-light transition-colors">
                      {card.standard}
                    </h4>

                    {/* Standard Title */}
                    <h5 className="text-xs font-semibold text-cdi-silver uppercase tracking-wider font-mono mt-1">
                      {card.title}
                    </h5>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                      {card.desc}
                    </p>

                    {/* Supporting References if present (ISO/IEC 29110-1-1 / 1-2) */}
                    {card.supportingReferences && (
                      <div className="mt-4 p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5">
                        <span className="text-[10px] font-mono text-cdi-gold tracking-wider uppercase block mb-1">
                          Supporting References:
                        </span>
                        <div className="flex flex-wrap gap-2 text-[11px] font-mono text-cdi-silver">
                          {card.supportingReferences.map((ref) => (
                            <span key={ref} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="mt-5 space-y-1.5 pt-3 border-t border-white/5">
                      {card.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-cdi-silver/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold/80 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cdi-silver-muted">
                    <span>REFERENCE FRAMEWORK</span>
                    <span className="text-white/30 group-hover:text-cdi-gold transition-colors">CDI ARCHITECTURE</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Engineering Process: PLAN -> DESIGN -> ENGINEER -> TEST -> IMPROVE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 shadow-2xl"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold font-semibold block mb-1">
              ENGINEERING PROCESS
            </span>
            <p className="text-sm sm:text-base text-cdi-white font-medium">
              Recognized standards provide the reference. Engineering discipline turns them into better digital products.
            </p>
          </div>

          {/* Horizontal Process Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
            {APPROACH_STEPS.map((step, index) => (
              <div
                key={step.name}
                className="relative p-4 rounded-2xl bg-[#121212] border border-white/5 text-center flex flex-col items-center justify-center group hover:border-cdi-gold/40 transition-colors"
              >
                <span className="text-[10px] font-mono text-white/40 mb-1 font-bold">
                  0{index + 1}
                </span>
                <span className="text-xs sm:text-sm font-bold font-display uppercase tracking-wider text-cdi-white group-hover:text-cdi-gold transition-colors">
                  {step.name}
                </span>
                <span className="text-[10px] text-cdi-silver-muted font-mono mt-0.5">
                  {step.desc}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legal / Accuracy Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs font-mono text-cdi-silver-muted/60 leading-relaxed">
            <strong className="text-cdi-silver-muted/80 font-semibold">Standards Reference:</strong> CDI uses these international standards as reference points for its engineering and development practices. This does not constitute ISO certification or endorsement.
          </p>
        </div>

      </div>
    </section>
  );
}
