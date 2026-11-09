import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Building, 
  Palette, 
  Code2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Terminal,
  Server
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const SERVICES_DATA = [
  {
    num: '01',
    title: 'Web Engineering',
    category: 'ARCHITECTURE & WEB PLATFORMS',
    icon: Globe,
    desc: 'Engineering high-performance corporate websites, complex web applications, and resilient digital platforms built with modern client and server architectures.',
    capabilities: [
      'Modern web application development (React / Vite / TypeScript)',
      'High-performance corporate digital portals',
      'API design and seamless backend integrations',
      'Core Web Vitals optimization and sub-second load times',
      'Full responsive architectures across all device viewports'
    ],
    deliverables: [
      'Production-ready, modular web codebase',
      'Optimized asset pipeline & CDN deployment setup',
      'Complete component design system & documentation',
      'SEO metadata architecture & semantic structured data'
    ]
  },
  {
    num: '02',
    title: 'Mobile Application Development',
    category: 'NATIVE & CROSS-PLATFORM',
    icon: Smartphone,
    desc: 'Architecting intuitive, high-performance mobile applications engineered for native Android environments and extensible multi-platform deployments.',
    capabilities: [
      'Native Android application engineering',
      'Cross-platform mobile frameworks where appropriate',
      'Offline-first data persistence and synchronization',
      'Hardware integration (Thermal printers, BLE, Camera scanners)',
      'Rigorous memory management and battery efficiency'
    ],
    deliverables: [
      'Signed production APK / App Bundle releases',
      'Offline caching layer & database integration',
      'Device permissions & secure biometric authentication',
      'Complete mobile API integration layer'
    ]
  },
  {
    num: '03',
    title: 'AI & Intelligent Systems',
    category: 'COGNITIVE ARCHITECTURE & AUTOMATION',
    icon: Bot,
    desc: 'Integrating cognitive systems, machine learning APIs, and conversational AI into business operations to automate workflows and elevate user experiences.',
    capabilities: [
      'Conversational AI assistants & intelligent customer bots',
      'Multilingual processing tailored for Indian regional languages',
      'Intelligent workflow automation and document analysis',
      'AI API integration with strict data privacy protocols',
      'Context-aware knowledge base retrieval'
    ],
    deliverables: [
      'Configured AI inference pipelines & secure API gateways',
      'Custom conversational interaction interfaces',
      'Automated data parsing & structured intelligence outputs',
      'Standardized AI architecture aligned with ISO/IEC 22989'
    ]
  },
  {
    num: '04',
    title: 'Business Software',
    category: 'OPERATIONAL PLATFORMS & COMMERCE',
    icon: Building,
    desc: 'Developing specialized operational business software engineered around the authentic workflows of Indian enterprises, retailers and MSMEs.',
    capabilities: [
      'GST billing, automated invoicing and tax calculation engines',
      'Customer credit (Khata) ledgers with real-time audit trails',
      'Inventory control and multi-location warehouse tracking',
      'POS receipt generation with thermal print support',
      'Payment collection workflows and UPI integrations'
    ],
    deliverables: [
      'Custom business management dashboard & reporting',
      'Role-based staff access control & security protocols',
      'Automated financial ledger & invoice generation module',
      'Secure data backup & recovery protocols'
    ]
  },
  {
    num: '05',
    title: 'UI/UX Engineering',
    category: 'INTERFACE SYSTEMS & INTERACTION DESIGN',
    icon: Palette,
    desc: 'Crafting sophisticated digital design systems and user interfaces that bridge visual luxury with flawless ergonomic utility.',
    capabilities: [
      'Design token architectures and scalable component systems',
      'High-fidelity interactive prototyping & UX wireframing',
      'Accessibility auditing and compliance (WCAG standards)',
      'Fluid micro-interactions and micro-animations',
      'Information architecture design for complex workflows'
    ],
    deliverables: [
      'Complete reusable UI component library',
      'Interactive design tokens & typography scales',
      'Validated user flow diagrams & screen specifications',
      'Responsive design guidelines across mobile and desktop'
    ]
  },
  {
    num: '06',
    title: 'Custom Technology Solutions',
    category: 'PROPRIETARY SYSTEMS & INTEGRATION',
    icon: Code2,
    desc: 'Building bespoke software solutions, proprietary digital utilities, and custom integration pipelines engineered for unique business models.',
    capabilities: [
      'Custom API gateways and secure middleware development',
      'Database architecture design (Relational SQL / Document NoSQL)',
      'Legacy system modernization and migration strategies',
      'Third-party software & hardware SDK integrations',
      'High-concurrency data processing pipelines'
    ],
    deliverables: [
      'Clean, fully documented bespoke backend services',
      'Database migration scripts & schema definitions',
      'Comprehensive API documentation & endpoint tests',
      'Deployment automation & containerization configurations'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="CAPABILITIES // ENGINEERING DISCIPLINES"
        title="SERVICES & DIGITAL"
        highlightTitle="ENGINEERING."
        description="Comprehensive engineering disciplines designed to build modern software, intelligent digital platforms and scalable technology products."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services' }
        ]}
      />

      {/* 2. Services List */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-16 sm:space-y-24">
            {SERVICES_DATA.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <motion.div
                  key={srv.num}
                  id={`service-${srv.num}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161616] via-[#111111] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 shadow-2xl relative group overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Number, Title, Overview */}
                    <div className="lg:col-span-6 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-4xl sm:text-5xl font-mono font-extrabold text-cdi-gold">
                          {srv.num}
                        </span>
                        <div className="p-3.5 rounded-2xl bg-[#1A1A1A] text-cdi-gold border border-white/5 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      <div>
                        <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
                          {srv.category}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                          {srv.title}
                        </h2>
                      </div>

                      <p className="text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
                        {srv.desc}
                      </p>

                      <div className="pt-4">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(214,163,58,0.25)] transition-all hover:scale-105"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>REQUEST {srv.title.toUpperCase()}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Capabilities & Deliverables */}
                    <div className="lg:col-span-6 space-y-8 bg-[#0D0D0D] p-6 sm:p-8 rounded-2xl border border-white/5">
                      {/* Capabilities */}
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold flex items-center gap-2 mb-4">
                          <Zap className="w-3.5 h-3.5 text-cdi-gold" />
                          CORE CAPABILITIES
                        </span>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-cdi-silver font-light">
                          {srv.capabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Deliverables */}
                      <div className="pt-6 border-t border-white/5">
                        <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold font-semibold flex items-center gap-2 mb-4">
                          <Layers className="w-3.5 h-3.5" />
                          TYPICAL DELIVERABLES
                        </span>
                        <ul className="space-y-2 text-xs font-mono text-cdi-silver-muted">
                          {srv.deliverables.map((del) => (
                            <li key={del} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="relative py-24 sm:py-32 bg-cdi-black overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            NEED A CUSTOM <span className="text-gold-gradient">ENGINEERING SPEC?</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Discuss your technical architecture, functional requirements, and project scope directly with CDI engineers.
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
