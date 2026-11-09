import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GitBranch, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  FileText, 
  Terminal,
  Activity,
  Code
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const STANDARDS_DETAILED = [
  {
    code: 'ISO/IEC 29110-1-1',
    title: 'Software Engineering — Lifecycle Profiles for Very Small Entities (VSEs)',
    category: 'SOFTWARE ENGINEERING LIFECYCLE',
    icon: GitBranch,
    overview: 'Provides an overview and foundational framework of lifecycle profiles applicable to Very Small Entities (enterprises with fewer than 25 people) developing systems and software.',
    cdiImplementation: [
      'Structured project initiation & task scoping',
      'Systematic requirements gathering and functional baseline tracking',
      'Formal architecture definition prior to implementation',
      'Continuous verification against acceptance criteria'
    ]
  },
  {
    code: 'ISO/IEC 29110-1-2',
    title: 'Vocabulary & Reference Framework for VSE Lifecycle Management',
    category: 'STANDARDIZED TERMINOLOGY & PROCESSES',
    icon: FileText,
    overview: 'Defines standard vocabulary and reference terminology for engineering processes, documentation, and product deliverables within lightweight agile development environments.',
    cdiImplementation: [
      'Standardized documentation templates and API schemas',
      'Clear definition of technical deliverables and artifacts',
      'Uniform code review vocabulary and issue taxonomy',
      'Consistent change management protocols'
    ]
  },
  {
    code: 'ISO/IEC 22989',
    title: 'Information Technology — Artificial Intelligence Concepts & Terminology',
    category: 'AI & COGNITIVE SYSTEMS',
    icon: Cpu,
    overview: 'Establishes standardized terminology, concepts, and architectural classifications for artificial intelligence and machine learning systems.',
    cdiImplementation: [
      'Clear boundary definitions between deterministic and AI subsystems',
      'Structured prompt engineering and context management pipelines',
      'Data privacy and validation guards for model inputs/outputs',
      'Documented cognitive system behavior and edge case fallbacks'
    ]
  },
  {
    code: 'ISO/IEC 25002',
    title: 'Systems and Software Quality Requirements and Evaluation (SQuaRE)',
    category: 'SOFTWARE QUALITY & METRICS',
    icon: ShieldCheck,
    overview: 'Outlines quality requirement models and evaluation criteria for software products, focusing on functional suitability, reliability, performance efficiency, and maintainability.',
    cdiImplementation: [
      'Modular code design with low coupling and high cohesion',
      'Automated error monitoring and graceful exception handling',
      'Responsive performance testing and Core Web Vitals optimization',
      'Cross-browser and cross-device compatibility verification'
    ]
  }
];

const LIFECYCLE_STEPS = [
  {
    num: '01',
    name: 'PLAN',
    title: 'Discovery & Scoping',
    desc: 'Deep-dive into business objectives, technical constraints, data schemas, and functional deliverables.'
  },
  {
    num: '02',
    name: 'DESIGN',
    title: 'Architecture & UX',
    desc: 'Creating modular system blueprints, database entity relationships, and ergonomic user interface design systems.'
  },
  {
    num: '03',
    name: 'ENGINEER',
    title: 'Clean Implementation',
    desc: 'Writing maintainable, type-safe codebases utilizing modern client frameworks and robust backend services.'
  },
  {
    num: '04',
    name: 'TEST',
    title: 'Validation & Quality',
    desc: 'Comprehensive testing for responsiveness, security, API contracts, edge cases, and performance.'
  },
  {
    num: '05',
    name: 'IMPROVE',
    title: 'Refinement & Scale',
    desc: 'Monitoring real-world metrics, fine-tuning response times, and iterating based on operational feedback.'
  }
];

export default function EngineeringPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="CREDENTIALS // ENGINEERING EXCELLENCE"
        title="ENGINEERED TO"
        highlightTitle="RECOGNIZED STANDARDS."
        description="Our development practices are structured with reference to internationally recognized software engineering, artificial intelligence, and software quality standards."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Engineering & Standards' }
        ]}
      />

      {/* 2. Business Foundation & Dual Badges */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Udyam MSME Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cdi-gold/10 rounded-full blur-[60px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    GOVERNMENT MSME REGISTRATION
                  </span>
                  <div className="p-3 rounded-2xl bg-[#1D1D1D] text-cdi-gold border border-white/5">
                    <Building2 className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-wide">
                  UDYAM REGISTERED
                </h2>

                <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                  Chhichholiya Digital Industries is registered as a Micro, Small or Medium Enterprise under India's formal Udyam Registration framework.
                </p>

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

              {/* Udyam Custom Badge */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-cdi-gold/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-extrabold font-display text-sm flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(214,163,58,0.3)]">
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
            </div>

            {/* Standards-Aligned Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-cdi-gold/10 rounded-full blur-[60px] pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    INTERNATIONAL STANDARDS REFERENCED
                  </span>
                  <div className="p-3 rounded-2xl bg-[#1D1D1D] text-cdi-gold border border-white/5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-wide">
                  STANDARDS-ALIGNED
                </h2>

                <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                  CDI structures its development practices with reference to recognized international standards covering software engineering, artificial intelligence concepts and software quality.
                </p>

                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>ISO/IEC 29110 VSE lifecycle discipline</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>ISO/IEC 22989 AI terminology & concept clarity</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>ISO/IEC 25002 software quality evaluation reference</span>
                  </div>
                </div>
              </div>

              {/* Standards-Aligned Custom Badge */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-cdi-gold/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-extrabold font-display text-sm flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(214,163,58,0.3)]">
                    CDI
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-mono font-bold tracking-wider text-cdi-white uppercase">
                      STANDARDS-ALIGNED
                    </span>
                    <span className="text-[11px] font-mono text-cdi-gold font-semibold tracking-wider">
                      ISO/IEC 29110 · 22989 · 25002
                    </span>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-cdi-silver-muted mt-0.5">
                      ENGINEERED WITH INTERNATIONAL STANDARDS IN MIND
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal / Reference Disclaimer */}
          <div className="p-6 rounded-2xl bg-[#101010] border border-white/10 text-xs font-mono text-cdi-silver-muted/90 leading-relaxed">
            <span className="text-cdi-gold font-semibold block mb-1">// STANDARDS USAGE & CLARITY NOTICE</span>
            CDI currently uses these international standards as reference points for its engineering and development practices. This does not constitute ISO certification or endorsement. We do not use official ISO logos or claim accredited certification.
          </div>
        </div>
      </section>

      {/* 3. Detailed Standards Breakdowns */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>02 // REFERENCED FRAMEWORKS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              HOW WE APPLY <span className="text-gold-gradient">STANDARDS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {STANDARDS_DETAILED.map((std) => {
              const Icon = std.icon;
              return (
                <div
                  key={std.code}
                  className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-mono font-bold text-cdi-gold bg-[#1A1A1A] px-3 py-1 rounded-full border border-white/5">
                        {std.code}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#1A1A1A] text-cdi-gold">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide mb-3">
                      {std.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed mb-6">
                      {std.overview}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-white/5">
                      <span className="text-xs font-mono uppercase tracking-wider text-cdi-gold block mb-2">
                        // CDI ENGINEERING IMPLEMENTATION
                      </span>
                      {std.cdiImplementation.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-cdi-silver font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Engineering Lifecycle Flow: PLAN → DESIGN → ENGINEER → TEST → IMPROVE */}
      <section className="relative py-28 sm:py-36 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>03 // DISCIPLINED LIFECYCLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              PLAN → DESIGN → ENGINEER <br />
              <span className="text-gold-gradient">→ TEST → IMPROVE</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Every digital solution at CDI progresses through a 5-phase engineering lifecycle designed to minimize technical debt and ensure software reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {LIFECYCLE_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-mono font-extrabold text-cdi-gold block mb-3">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-cdi-white font-display uppercase tracking-wide">
                    {step.name}
                  </h3>
                  <span className="text-[11px] font-mono text-cdi-silver block mb-3">
                    {step.title}
                  </span>
                  <p className="text-xs text-cdi-silver-muted font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative py-24 sm:py-32 bg-cdi-black overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            ENGINEER WITH <span className="text-gold-gradient">CONFIDENCE</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Partner with a digital engineering company that values architecture, structured lifecycles, and software quality.
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
