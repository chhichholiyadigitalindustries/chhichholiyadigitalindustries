import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Layout, Code2, ShieldAlert, Rocket } from 'lucide-react';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'DISCOVER',
    icon: Search,
    desc: 'Understand the business, audience and objective.',
    deliverables: ['Stakeholder alignment', 'Technical feasibility analysis', 'User workflow mapping'],
  },
  {
    num: '02',
    title: 'DEFINE',
    icon: Compass,
    desc: 'Convert requirements into a clear product direction.',
    deliverables: ['System architecture doc', 'Core MVP scoping', 'Database schema design'],
  },
  {
    num: '03',
    title: 'DESIGN',
    icon: Layout,
    desc: 'Create the user experience and visual system.',
    deliverables: ['Design tokens & components', 'High-fidelity wireframes', 'Responsive UX flows'],
  },
  {
    num: '04',
    title: 'ENGINEER',
    icon: Code2,
    desc: 'Build the technology with scalable architecture.',
    deliverables: ['Modular component code', 'Resilient API endpoints', 'Security & state management'],
  },
  {
    num: '05',
    title: 'TEST',
    icon: ShieldAlert,
    desc: 'Validate performance, usability and reliability.',
    deliverables: ['Automated regression tests', 'Load & stress benchmarking', 'Cross-browser validation'],
  },
  {
    num: '06',
    title: 'LAUNCH',
    icon: Rocket,
    desc: 'Deploy, measure and continuously improve.',
    deliverables: ['CI/CD zero-downtime release', 'Production telemetry monitoring', 'Iterative post-launch updates'],
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden border-t border-white/5">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cdi-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>05 // Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              HOW WE <span className="text-gold-gradient">BUILD</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            A battle-tested engineering sequence combining architectural clarity with agile precision.
          </p>
        </div>

        {/* 6 Steps Grid with Editorial Numbered Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group p-8 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0D0D0D] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Large Number & Minimal Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-display text-white/20 group-hover:text-gold-gradient transition-colors">
                      {step.num}
                    </span>
                    <div className="p-3 rounded-xl bg-[#1D1D1D] text-cdi-silver group-hover:text-cdi-gold border border-white/5 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-cdi-white font-display tracking-wider uppercase group-hover:text-cdi-gold-light transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase block mb-2 font-semibold">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-cdi-silver/80">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cdi-gold/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
