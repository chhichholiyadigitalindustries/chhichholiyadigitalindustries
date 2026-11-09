import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Smartphone, 
  Cloud,
  Layers,
  Terminal
} from 'lucide-react';

const TECH_CATEGORIES = [
  {
    id: 'frontend',
    name: 'FRONTEND',
    icon: Code2,
    desc: 'Performant, accessible, and reactive user interfaces.',
    stacks: [
      { name: 'React', level: 'Core UI Framework' },
      { name: 'Vite', level: 'Next-Gen Build Tool' },
      { name: 'TypeScript', level: 'Strict Type Safety' },
      { name: 'JavaScript (ESNext)', level: 'Modern Logic Engine' },
      { name: 'Tailwind CSS', level: 'Utility Architecture' },
    ],
  },
  {
    id: 'backend',
    name: 'BACKEND',
    icon: Server,
    desc: 'Robust server runtime and resilient API gateways.',
    stacks: [
      { name: 'Node.js', level: 'Asynchronous Runtime' },
      { name: 'Python', level: 'Data & Computation' },
      { name: 'REST APIs', level: 'High-Throughput Endpoints' },
      { name: 'FastAPI / Express', level: 'Microservice Frameworks' },
    ],
  },
  {
    id: 'database',
    name: 'DATABASE',
    icon: Database,
    desc: 'Persistent storage, high-availability schemas and ACID compliance.',
    stacks: [
      { name: 'PostgreSQL / MySQL', level: 'Relational Architecture' },
      { name: 'SQLite / Embedded', level: 'Offline-First Local Storage' },
      { name: 'NoSQL / Key-Value', level: 'Distributed Caching' },
      { name: 'Prisma / TypeORM', level: 'Safe Data Modeling' },
    ],
  },
  {
    id: 'ai',
    name: 'AI SYSTEMS',
    icon: Cpu,
    desc: 'Applied machine intelligence and cognitive business automation.',
    stacks: [
      { name: 'AI APIs & LLMs', level: 'Gemini, OpenAI & Claude' },
      { name: 'Intelligent Automation', level: 'Document & Data Processing' },
      { name: 'Vector Embeddings', level: 'Semantic Search Pipelines' },
      { name: 'Custom AI Assistants', level: 'Domain-Tuned Agents' },
    ],
  },
  {
    id: 'mobile',
    name: 'MOBILE',
    icon: Smartphone,
    desc: 'Cross-platform and native mobile applications.',
    stacks: [
      { name: 'Android', level: 'Native Ecosystem & APK' },
      { name: 'Cross-Platform Frameworks', level: 'React Native & Flutter' },
      { name: 'Local Hardware APIs', level: 'Camera, BLE & Storage' },
      { name: 'Offline Sync Engine', level: 'Background Queue & Sync' },
    ],
  },
  {
    id: 'cloud',
    name: 'CLOUD & DEVOPS',
    icon: Cloud,
    desc: 'Secure hosting, serverless pipelines, and edge delivery.',
    stacks: [
      { name: 'Cloud Infrastructure', level: 'AWS, GCP & DigitalOcean' },
      { name: 'Containerization', level: 'Docker Microservices' },
      { name: 'CI/CD Pipelines', level: 'Automated Test & Deploy' },
      { name: 'Edge CDN & Security', level: 'SSL, DDoS & Edge Caching' },
    ],
  },
];

export default function Technology() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="technology" className="relative py-28 sm:py-36 bg-cdi-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cdi-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>04 // Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              ENGINEERED WITH <span className="text-gold-gradient">MODERN TECHNOLOGY</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            Our technology selection is strictly driven by performance, maintainability, and enterprise reliability.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-2.5 whitespace-nowrap transition-all duration-300 border ${
                  isSelected
                    ? 'bg-cdi-gold text-cdi-black border-cdi-gold shadow-[0_0_15px_rgba(214,163,58,0.4)]'
                    : 'bg-[#121212] text-cdi-silver border-white/10 hover:border-white/25 hover:text-cdi-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Card */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0D0D0D] border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-1">
                Category // {TECH_CATEGORIES[selectedCategory].name}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-cdi-white font-display">
                {TECH_CATEGORIES[selectedCategory].name} ECOSYSTEM
              </h3>
            </div>
            <p className="text-sm text-cdi-silver-muted max-w-sm font-light">
              {TECH_CATEGORIES[selectedCategory].desc}
            </p>
          </div>

          {/* Stacks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECH_CATEGORIES[selectedCategory].stacks.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-xl bg-[#121212] border border-white/5 hover:border-cdi-gold/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-cdi-gold group-hover:rotate-12 transition-transform" />
                  <span className="text-sm font-bold text-cdi-white font-display">
                    {tech.name}
                  </span>
                </div>
                <span className="text-xs text-cdi-silver-muted font-mono block">
                  {tech.level}
                </span>
              </div>
            ))}
          </div>

          {/* Architectural Guarantee Footer */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-cdi-silver-muted gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cdi-gold" />
              100% Production-Grade Standards
            </span>
            <span>Zero Bloatware • Clean Architecture • Native Performance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
