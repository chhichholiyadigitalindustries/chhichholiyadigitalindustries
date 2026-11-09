import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Server, 
  Database, 
  Bot, 
  Smartphone, 
  Terminal, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Code, 
  Lock, 
  FileText, 
  Layers, 
  Zap, 
  Eye
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const TECH_DOMAINS = [
  {
    title: 'Web Technologies',
    category: 'CLIENT-SIDE ARCHITECTURE',
    icon: Globe,
    desc: 'Modern, high-performance web frameworks and tools delivering fast load times, modular components, and responsive experiences.',
    stack: [
      { name: 'React', desc: 'Component-driven user interface engineering' },
      { name: 'Vite', desc: 'Ultra-fast build tooling and optimized bundle delivery' },
      { name: 'TypeScript', desc: 'Type-safe codebase architecture and defect prevention' },
      { name: 'JavaScript (ESNext)', desc: 'Modern ECMAScript standards and async execution' },
      { name: 'Tailwind / Modern CSS', desc: 'Utility-first styling systems with custom tokens' }
    ]
  },
  {
    title: 'Backend Systems',
    category: 'SERVER-SIDE & API INFRASTRUCTURE',
    icon: Server,
    desc: 'Scalable server environments, RESTful service layers, and asynchronous microservices designed for throughput and dependability.',
    stack: [
      { name: 'Node.js', desc: 'Event-driven, high-concurrency server applications' },
      { name: 'Python', desc: 'Data processing, scripting, and backend automation' },
      { name: 'REST APIs', desc: 'Standardized, versioned endpoint architectures' },
      { name: 'Microservices Architecture', desc: 'Decoupled domain services for horizontal scaling' }
    ]
  },
  {
    title: 'Data & Storage',
    category: 'DATA PERSISTENCE & CACHING',
    icon: Database,
    desc: 'Structured database management systems chosen according to relational consistency and document scalability requirements.',
    stack: [
      { name: 'Modern SQL', desc: 'PostgreSQL & MySQL for ACID-compliant transactional data' },
      { name: 'NoSQL Databases', desc: 'Document stores for unstructured data and rapid scaling' },
      { name: 'High-Availability Schemas', desc: 'Normalized models with strict indexing and audit integrity' },
      { name: 'Client-Side Persistence', desc: 'IndexedDB & local storage for offline-first resilience' }
    ]
  },
  {
    title: 'AI & Intelligent Systems',
    category: 'COGNITIVE INTEGRATION',
    icon: Bot,
    desc: 'Applied artificial intelligence, intelligent workflows, and cognitive API integrations structured with reference to ISO/IEC 22989.',
    stack: [
      { name: 'AI APIs & LLMs', desc: 'Conversational interfaces and context-aware generation' },
      { name: 'Automated Pipelines', desc: 'Data extraction, NLP parsing, and task automation' },
      { name: 'Multilingual Processing', desc: 'Regional language support for Indian enterprise contexts' },
      { name: 'Inference Gateways', desc: 'Secure proxy layers with rate-limiting and audit logging' }
    ]
  },
  {
    title: 'Mobile Architecture',
    category: 'PORTABLE APPLICATION DEVELOPMENT',
    icon: Smartphone,
    desc: 'Mobile applications engineered for native performance, battery efficiency, and hardware utility.',
    stack: [
      { name: 'Android Development', desc: 'Targeted Android architectures optimized for regional devices' },
      { name: 'Cross-Platform Frameworks', desc: 'Multi-platform technology where appropriate' },
      { name: 'Hardware SDKs', desc: 'Thermal printing, camera barcode scanning, Bluetooth peripherals' },
      { name: 'Offline Sync Engines', desc: 'Background synchronization on network reconnection' }
    ]
  },
  {
    title: 'Infrastructure & DevOps',
    category: 'DEPLOYMENT & SECURITY',
    icon: Terminal,
    desc: 'Reliable cloud environments, continuous deployment pipelines, and proactive security practices.',
    stack: [
      { name: 'Cloud Environments', desc: 'Managed cloud hosts, serverless functions, and static CDNs' },
      { name: 'API Security Protocols', desc: 'JWT/OAuth authentication, CORS configuration, and encryption' },
      { name: 'Deployment Pipelines', desc: 'Automated CI/CD build checks and zero-downtime rollouts' },
      { name: 'Performance Monitoring', desc: 'Uptime tracking, error boundary captures, and logging' }
    ]
  }
];

const PRINCIPLES_DATA = [
  {
    title: 'Maintainability',
    icon: Code,
    desc: 'We write clean, modular, and self-documenting codebases with clear separation of concerns so systems can be maintained effortlessly.'
  },
  {
    title: 'Performance',
    icon: Zap,
    desc: 'We rigorously optimize assets, bundle sizes, database queries, and rendering loops for lightning-fast real-world execution.'
  },
  {
    title: 'Security Awareness',
    icon: Lock,
    desc: 'We implement defense-in-depth principles: strict input sanitization, secure headers, encrypted credentials, and least-privilege access.'
  },
  {
    title: 'Scalability',
    icon: Layers,
    desc: 'We design system architectures that gracefully handle expanding data volumes and increased user concurrency without architectural rewrites.'
  },
  {
    title: 'Accessibility',
    icon: Eye,
    desc: 'We adhere to modern web accessibility best practices (semantic HTML, proper ARIA attributes, keyboard navigation, and high contrast).'
  },
  {
    title: 'Testing',
    icon: ShieldCheck,
    desc: 'We validate components, data flows, and critical business logic through systematic test verification and quality assurance.'
  },
  {
    title: 'Documentation',
    icon: FileText,
    desc: 'We treat technical documentation as a first-class citizen, ensuring APIs, architecture diagrams, and workflows are clearly specified.'
  }
];

export default function TechnologyPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="TECHNOLOGY // ARCHITECTURE & ECOSYSTEM"
        title="ENGINEERED ON"
        highlightTitle="MODERN TECHNOLOGY."
        description="A robust, modular technology stack built for speed, resilience, security, and long-term architectural stability."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Technology' }
        ]}
      />

      {/* 2. Technology Domains Grid */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>01 // TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              CORE TECHNICAL <span className="text-gold-gradient">CAPABILITIES</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              CDI utilizes battle-tested, modern technologies carefully selected to match each project's architectural and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TECH_DOMAINS.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.title}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#161616] via-[#111111] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#181818] px-2.5 py-1 rounded-md border border-white/5">
                        {domain.category}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#1A1A1A] text-cdi-silver">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide mb-3">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-cdi-silver-muted font-light leading-relaxed mb-6">
                      {domain.desc}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-white/5">
                      {domain.stack.map((item) => (
                        <div key={item.name} className="text-xs">
                          <span className="font-mono font-semibold text-cdi-white flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cdi-gold" />
                            {item.name}
                          </span>
                          <p className="text-[11px] text-cdi-silver-muted font-light ml-3 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-white/20 text-right">
                    DOMAIN 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#101010] border border-white/5 text-center text-xs font-mono text-cdi-silver-muted">
            * Specific technology selection depends on project scale, operational environment, and performance requirements.
          </div>
        </div>
      </section>

      {/* 3. 7 Core Engineering Principles */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>02 // DISCIPLINED ENGINEERING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              7 ENGINEERING <span className="text-gold-gradient">PRINCIPLES</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Every digital solution built at Chhichholiya Digital Industries adheres to seven foundational engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES_DATA.map((prin, idx) => {
              const Icon = prin.icon;
              return (
                <div
                  key={prin.title}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest">
                      STANDARD // 0{idx + 1}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#1A1A1A] text-cdi-gold group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors">
                    {prin.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                    {prin.desc}
                  </p>
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
            ENGINEER YOUR SYSTEM ON <span className="text-gold-gradient">SOLID ARCHITECTURE</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Build with modern frameworks, reliable data layers, and clean engineering practices.
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
