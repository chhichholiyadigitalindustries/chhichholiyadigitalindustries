import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Compass, 
  Layout, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const FLOW_STEPS = [
  { id: '01', title: 'IDEA', icon: Lightbulb, desc: 'Concept clarity & problem definition' },
  { id: '02', title: 'STRATEGY', icon: Compass, desc: 'Technical & architectural roadmap' },
  { id: '03', title: 'DESIGN', icon: Layout, desc: 'High-fidelity UI/UX & component systems' },
  { id: '04', title: 'ENGINEERING', icon: Cpu, desc: 'Resilient frontend & backend development' },
  { id: '05', title: 'TESTING', icon: CheckCircle2, desc: 'Performance, security & QA validation' },
  { id: '06', title: 'DEPLOYMENT', icon: Rocket, desc: 'Zero-downtime cloud release' },
  { id: '07', title: 'GROWTH', icon: TrendingUp, desc: 'Scaling, analytics & iteration' },
];

export default function EngineeringVisual() {
  const [activeStep, setActiveStep] = useState(3); // Default on Engineering

  return (
    <section className="relative py-24 sm:py-32 bg-cdi-dark overflow-hidden border-y border-white/5">
      {/* Precision Grid Lines */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cdi-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-[#141414] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
            <span>Engineering Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
            FROM IDEA TO <span className="text-gold-gradient">DIGITAL REALITY</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver-muted mt-4 font-light">
            A continuous, disciplined engineering methodology designed to minimize technical debt and maximize velocity.
          </p>
        </div>

        {/* Industrial Interactive Flow Bar (Desktop & Tablet) */}
        <div className="hidden lg:block relative py-8">
          {/* Central Connecting Bus Line */}
          <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-white/10 via-cdi-gold/40 to-white/10 -translate-y-1/2 z-0" />

          <div className="relative z-10 grid grid-cols-7 gap-3">
            {FLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <motion.div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group flex flex-col items-center p-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#181818] border border-cdi-gold/60 shadow-[0_0_25px_rgba(214,163,58,0.25)] scale-105'
                      : 'bg-[#101010]/80 border border-white/5 hover:border-white/20 hover:bg-[#141414]'
                  }`}
                >
                  {/* Step Number */}
                  <span className={`text-[10px] font-mono tracking-widest mb-2 font-bold ${
                    isActive ? 'text-cdi-gold' : 'text-white/40'
                  }`}>
                    {step.id}
                  </span>

                  {/* Icon Node */}
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-cdi-gold text-cdi-black shadow-[0_0_15px_#D6A33A]'
                      : 'bg-[#181818] text-cdi-silver group-hover:text-cdi-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <span className={`text-xs font-bold font-display uppercase tracking-wider mt-3 ${
                    isActive ? 'text-cdi-white' : 'text-cdi-silver-muted'
                  }`}>
                    {step.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Description Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-xl mx-auto p-5 rounded-2xl bg-[#141414] border border-cdi-gold/30 text-center shadow-xl"
          >
            <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-widest block mb-1">
              Phase {FLOW_STEPS[activeStep].id} // Focus Area
            </span>
            <p className="text-sm text-cdi-white font-medium">
              {FLOW_STEPS[activeStep].desc}
            </p>
          </motion.div>
        </div>

        {/* Mobile & Small Screen Vertical Flow */}
        <div className="lg:hidden space-y-3">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="p-4 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <span className="text-xs font-mono font-bold text-cdi-gold">
                    {step.id}
                  </span>
                  <div className="p-2 rounded-lg bg-[#1D1D1D] text-cdi-silver">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cdi-white font-display uppercase">
                      {step.title}
                    </h4>
                    <p className="text-xs text-cdi-silver-muted font-light">{step.desc}</p>
                  </div>
                </div>
                {idx < FLOW_STEPS.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-white/20 shrink-0" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
