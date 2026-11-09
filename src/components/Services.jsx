import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  Boxes, 
  Palette, 
  Sliders, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    icon: Globe,
    title: 'WEB ENGINEERING',
    shortDesc: 'Modern corporate websites, business websites, web applications and high-performance digital experiences.',
    capabilities: ['Scalable Web Architecture', 'Enterprise React Systems', 'SEO & Core Web Vitals', 'High-Speed Load Times'],
  },
  {
    id: '02',
    icon: Smartphone,
    title: 'MOBILE APPLICATIONS',
    shortDesc: 'Android and cross-platform mobile applications designed around real business requirements.',
    capabilities: ['Native & Cross-Platform', 'Offline-First Data Sync', 'Fluid Native Gestures', 'Secure Auth & In-App Workflows'],
  },
  {
    id: '03',
    icon: Cpu,
    title: 'AI & INTELLIGENT SYSTEMS',
    shortDesc: 'AI-powered assistants, automation, intelligent workflows and next-generation digital products.',
    capabilities: ['LLM & API Integrations', 'Automated Business Workflows', 'Smart Data Extractors', 'Conversational AI Systems'],
  },
  {
    id: '04',
    icon: Boxes,
    title: 'DIGITAL PRODUCTS',
    shortDesc: 'Custom SaaS platforms, business tools, dashboards and digital ecosystems.',
    capabilities: ['SaaS Multi-Tenant Platforms', 'Executive Analytics Dashboards', 'Role-Based Access Control', 'Billing & Ledger Engines'],
  },
  {
    id: '05',
    icon: Palette,
    title: 'UI / UX ENGINEERING',
    shortDesc: 'Interfaces that combine visual quality, usability and strong product thinking.',
    capabilities: ['Design System Architecture', 'Interactive Prototyping', 'Precision Micro-Interactions', 'Accessible Usability'],
  },
  {
    id: '06',
    icon: Sliders,
    title: 'CUSTOM TECHNOLOGY',
    shortDesc: 'Purpose-built solutions for unique business and operational requirements.',
    capabilities: ['Bespoke API Integrations', 'Legacy System Modernization', 'Internal Operations Tooling', 'Custom Business Automation'],
  },
];

export default function Services({ onSelectService }) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden border-t border-white/5">
      {/* Background Subtle Tech Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cdi-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>02 // Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              WHAT WE <span className="text-gold-gradient">BUILD</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            From first concept to production-ready digital products engineered for long-term reliability.
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isHovered = activeCard === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative p-7 sm:p-8 rounded-2xl bg-gradient-to-b from-[#161616] to-[#0E0E0E] border border-white/10 hover:border-cdi-gold/50 shadow-xl transition-all duration-400 flex flex-col justify-between"
              >
                {/* Subtle Card Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-2xl bg-radial-glow transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-bold tracking-widest text-cdi-silver-muted group-hover:text-cdi-gold transition-colors duration-300">
                      // {service.id}
                    </span>
                    <div className="p-3 rounded-xl bg-[#1D1D1D] text-cdi-silver group-hover:text-cdi-gold group-hover:bg-[#252525] border border-white/5 transition-all duration-300 shadow-inner">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-cdi-white tracking-wide uppercase font-display group-hover:text-cdi-gold-light transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-cdi-silver-muted mt-3 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Capabilities List */}
                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-4">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2 text-xs text-cdi-silver/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold/70 shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-4 flex items-center justify-between border-t border-white/5">
                  <button
                    onClick={() => onSelectService && onSelectService(service.title)}
                    className="text-xs font-semibold uppercase tracking-wider text-cdi-silver group-hover:text-cdi-gold flex items-center gap-2 transition-colors focus:outline-none"
                  >
                    <span>Request Spec</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cdi-gold" />
                  </button>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
                    CDI SPEC
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
