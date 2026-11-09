import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Bot, 
  Building, 
  Palette, 
  Code2, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Zap, 
  Flame, 
  Receipt, 
  CreditCard, 
  Store,
  Terminal,
  Server,
  Database
} from 'lucide-react';
import Hero from '../components/Hero';
import WorkGallerySection from '../components/WorkGallerySection';

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Web Engineering',
    desc: 'Modern websites, web applications and digital platforms.',
    tag: 'WEB & ARCHITECTURE'
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    desc: 'Scalable mobile experiences for Android and future multi-platform environments.',
    tag: 'NATIVE & MULTI-PLATFORM'
  },
  {
    icon: Bot,
    title: 'AI & Intelligent Systems',
    desc: 'AI-powered products, automation and intelligent digital experiences.',
    tag: 'INTELLIGENT SYSTEMS'
  },
  {
    icon: Building,
    title: 'Business Software',
    desc: 'Technology solutions designed around real operational business needs.',
    tag: 'ENTERPRISE & MSME'
  },
  {
    icon: Palette,
    title: 'UI/UX Engineering',
    desc: 'Interfaces that combine clarity, usability and visual precision.',
    tag: 'EXPERIENCE DESIGN'
  },
  {
    icon: Code2,
    title: 'Custom Technology',
    desc: 'Purpose-built software for unique business and product requirements.',
    tag: 'CUSTOM SYSTEMS'
  },
];

const PRINCIPLES = [
  {
    num: '01',
    title: 'Business First',
    desc: 'Technology begins with the problem, not the technology.'
  },
  {
    num: '02',
    title: 'Design With Purpose',
    desc: 'Every interface should have a reason to exist.'
  },
  {
    num: '03',
    title: 'Built to Scale',
    desc: 'Architecture should support tomorrow, not only today.'
  },
  {
    num: '04',
    title: 'Quality by Process',
    desc: 'Planning, engineering and testing are treated as part of the product.'
  },
  {
    num: '05',
    title: 'Continuous Innovation',
    desc: 'Technology evolves. CDI evolves with it.'
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    name: 'DISCOVER',
    desc: 'Understand the business, users and problem.'
  },
  {
    num: '02',
    name: 'DEFINE',
    desc: 'Translate requirements into a clear product direction.'
  },
  {
    num: '03',
    name: 'DESIGN',
    desc: 'Create the experience, architecture and interaction model.'
  },
  {
    num: '04',
    name: 'ENGINEER',
    desc: 'Build the product with modern technology.'
  },
  {
    num: '05',
    name: 'TEST',
    desc: 'Validate functionality, usability, performance and quality.'
  },
  {
    num: '06',
    name: 'LAUNCH',
    desc: 'Prepare the product for real-world use and continuous improvement.'
  },
];

const TECH_CATEGORIES = [
  {
    title: 'Frontend',
    icon: Globe,
    items: ['React', 'Vite', 'JavaScript', 'TypeScript', 'Modern CSS / Tailwind']
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'REST APIs']
  },
  {
    title: 'Data',
    icon: Database,
    items: ['Modern SQL / NoSQL databases']
  },
  {
    title: 'AI',
    icon: Bot,
    items: ['AI APIs', 'Automation', 'Intelligent systems']
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Android', 'Cross-platform technologies where appropriate']
  },
  {
    title: 'Infrastructure',
    icon: Terminal,
    items: ['Cloud', 'APIs', 'Deployment', 'Security practices']
  }
];

export default function Home({ onOpenProjectModal }) {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <Hero onOpenProjectModal={onOpenProjectModal} />

      {/* 2. COMPANY INTRO: TECHNOLOGY BUILT WITH PURPOSE */}
      <section className="relative py-24 sm:py-32 bg-cdi-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                <span>WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.15]">
                TECHNOLOGY BUILT <br />
                <span className="text-gold-gradient">WITH PURPOSE.</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-cdi-silver font-light leading-relaxed max-w-3xl">
                Chhichholiya Digital Industries is a digital technology and product engineering company focused on building modern software, applications, AI-powered systems and digital platforms.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-cdi-gold/50 text-cdi-white text-xs font-mono uppercase tracking-widest transition-all duration-300 group"
                >
                  <span>DISCOVER CDI →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-cdi-gold text-xs font-mono">
                  <Terminal className="w-4 h-4" />
                  <span>ENGINEERING PROFILE</span>
                </div>
                <h3 className="text-lg font-bold text-cdi-white font-display uppercase">
                  CHHICHOLIYA DIGITAL INDUSTRIES
                </h3>
                <p className="text-xs text-cdi-silver-muted leading-relaxed">
                  Engineering modern Indian digital platforms, business software, and intelligent digital experiences.
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-cdi-silver/70">
                  <span>FOUNDATION: UDYAM MSME</span>
                  <span className="text-cdi-gold">ESTD. 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES: WHAT WE ENGINEER */}
      <section className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
                <span>01 // CAPABILITIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                WHAT WE <span className="text-gold-gradient">ENGINEER</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors group"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#1A1A1A] px-2.5 py-1 rounded-md border border-white/5">
                        {cap.tag}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#181818] text-cdi-silver group-hover:text-cdi-gold group-hover:scale-110 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-3 text-sm text-cdi-silver-muted font-light leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs font-mono text-cdi-silver hover:text-cdi-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <span>VIEW DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cdi-gold" />
                    </Link>
                    <span className="text-xs font-mono text-white/20">0{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS: PRODUCTS IN THE MAKING */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cdi-gold/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>02 // INNOVATION LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              PRODUCTS IN <span className="text-gold-gradient">THE MAKING</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Introduce CDI's technology products. Built with modern engineering and real-world utility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PRODUCT 1: BRANDX */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/30 hover:border-cdi-gold/60 transition-all duration-300 shadow-2xl flex flex-col justify-between relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    BUSINESS TECHNOLOGY PLATFORM
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cdi-gold/10 text-cdi-gold border border-cdi-gold/30 text-[10px] font-mono uppercase tracking-wider">
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cdi-gold text-cdi-black font-extrabold font-display flex items-center justify-center text-lg">
                    X
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display tracking-tight uppercase">
                      BrandX
                    </h3>
                    <span className="text-xs font-mono text-cdi-silver-muted">
                      Business Technology Platform
                    </span>
                  </div>
                </div>

                <p className="text-sm text-cdi-silver font-light leading-relaxed mt-4">
                  An all-in-one business platform concept designed for Indian Vyaparis, retailers and MSMEs.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6 pt-6 border-t border-white/5">
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <Receipt className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>GST Invoicing</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>Thermal POS Receipts</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <Store className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>Customer Khata</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>Digital Presence</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>UPI Tools</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-xs font-mono text-cdi-silver flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-cdi-gold" />
                    <span>AI Assistance</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors"
                >
                  <span>EXPLORE BRANDX →</span>
                </Link>
                <span className="text-[11px] font-mono text-cdi-silver-muted">CONCEPT & PROTOTYPE</span>
              </div>
            </motion.div>

            {/* PRODUCT 2: AP CORE AGENT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 shadow-2xl flex flex-col justify-between relative group overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    AI PRODUCT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-cdi-silver border border-white/10 text-[10px] font-mono uppercase tracking-wider">
                    CONCEPT
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#222] border border-white/10 text-cdi-gold font-extrabold font-display flex items-center justify-center text-lg">
                    AP
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display tracking-tight uppercase">
                      AP Core Agent
                    </h3>
                    <span className="text-xs font-mono text-cdi-silver-muted">
                      India-Focused AI Assistant Concept
                    </span>
                  </div>
                </div>

                <p className="text-sm text-cdi-silver font-light leading-relaxed mt-4">
                  An India-focused AI assistant concept designed around conversational AI, multilingual interaction and intelligent digital experiences.
                </p>

                <div className="space-y-3 mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-xs font-mono text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>Conversational AI engine</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>Multilingual interaction capabilities</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-cdi-silver">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>Intelligent digital workflows</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors"
                >
                  <span>VIEW PRODUCT →</span>
                </Link>
                <span className="text-[11px] font-mono text-cdi-silver-muted">AI PRODUCT CONCEPT</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WORK GALLERY & VIDEO DEMOS */}
      <WorkGallerySection onOpenProjectModal={onOpenProjectModal} />

      {/* 6. WHY CDI: ENGINEERED, NOT ASSEMBLED */}
      <section className="relative py-28 sm:py-36 bg-cdi-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>04 // CORE PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              ENGINEERED, <span className="text-gold-gradient">NOT ASSEMBLED.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              CDI builds software with structured engineering discipline rather than stitching together fragile shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((prin) => (
              <div
                key={prin.num}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 group"
              >
                <span className="text-2xl font-mono font-bold text-cdi-gold block mb-4">
                  {prin.num}
                </span>
                <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors">
                  {prin.title}
                </h3>
                <p className="mt-3 text-sm text-cdi-silver-muted font-light leading-relaxed">
                  {prin.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING & STANDARDS PREVIEW */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                <span>05 // CREDENTIALS & STANDARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.1]">
                ENGINEERED TO <br />
                <span className="text-gold-gradient">RECOGNIZED STANDARDS</span>
              </h2>
              <p className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                CDI structures its development practices with reference to recognized international standards covering software engineering, artificial intelligence concepts and software quality.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#121212] border border-white/10">
                  <span className="text-xs font-mono text-cdi-gold block mb-1">ISO/IEC 29110-1-1 & 1-2</span>
                  <p className="text-xs text-cdi-silver-muted">Software Engineering VSE Lifecycle</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#121212] border border-white/10">
                  <span className="text-xs font-mono text-cdi-gold block mb-1">ISO/IEC 22989 & 25002</span>
                  <p className="text-xs text-cdi-silver-muted">AI Terminology & Software Quality</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/engineering"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(214,163,58,0.3)] transition-all hover:scale-105"
                >
                  <span>EXPLORE OUR ENGINEERING APPROACH →</span>
                </Link>
              </div>
            </div>

            {/* Badges Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Udyam Badge */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-cdi-gold/40 shadow-xl flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cdi-gold to-cdi-gold-dark text-cdi-black font-extrabold font-display text-sm flex items-center justify-center shrink-0">
                  CDI
                </div>
                <div>
                  <span className="text-xs font-mono text-cdi-silver-muted uppercase tracking-widest block">
                    GOVERNMENT OF INDIA
                  </span>
                  <h3 className="text-lg font-extrabold text-cdi-white font-display uppercase tracking-wide">
                    UDYAM REGISTERED
                  </h3>
                  <span className="text-xs font-mono text-cdi-gold">MSME • INDIA</span>
                </div>
              </div>

              {/* Standards-Aligned Badge */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-[#181818] to-[#0E0E0E] border border-white/10 shadow-xl flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#222] border border-white/10 text-cdi-gold font-extrabold font-display text-sm flex items-center justify-center shrink-0">
                  ISO
                </div>
                <div>
                  <span className="text-xs font-mono text-cdi-silver-muted uppercase tracking-widest block">
                    FRAMEWORK REFERENCE
                  </span>
                  <h3 className="text-lg font-extrabold text-cdi-white font-display uppercase tracking-wide">
                    STANDARDS-ALIGNED
                  </h3>
                  <span className="text-[11px] font-mono text-cdi-silver">
                    ISO/IEC 29110 · 22989 · 25002
                  </span>
                </div>
              </div>

              <p className="text-[11px] font-mono text-cdi-silver-muted/70 leading-normal">
                * CDI references these international standards for engineering process structure. This does not constitute ISO certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY: THE TECHNOLOGY BEHIND THE EXPERIENCE */}
      <section className="relative py-28 sm:py-36 bg-cdi-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
                <span>06 // TECH STACK</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                THE TECHNOLOGY BEHIND <br />
                <span className="text-gold-gradient">THE EXPERIENCE</span>
              </h2>
            </div>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors group"
            >
              <span>VIEW FULL TECH ARCHITECTURE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-[#1A1A1A] text-cdi-gold border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-cdi-white font-display uppercase">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-cdi-silver">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cdi-gold/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. PROCESS: FROM IDEA TO ENGINEERED PRODUCT */}
      <section className="relative py-28 sm:py-36 bg-cdi-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>07 // PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              FROM IDEA TO <br />
              <span className="text-gold-gradient">ENGINEERED PRODUCT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 relative group"
              >
                <span className="text-3xl font-mono font-extrabold text-white/20 group-hover:text-cdi-gold transition-colors block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-cdi-white font-display uppercase tracking-wide">
                  {step.name}
                </h3>
                <p className="mt-2 text-sm text-cdi-silver-muted font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VISION & FINAL CINEMATIC SECTION */}
      <section className="relative py-32 sm:py-44 bg-gradient-to-b from-[#0A0A0A] via-cdi-black to-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cdi-gold/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
            <span>VISION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.05]">
            THE NEXT DIGITAL INDUSTRY <br />
            <span className="text-gold-gradient">IS BEING BUILT NOW.</span>
          </h2>

          <p className="text-base sm:text-xl text-cdi-silver max-w-2xl mx-auto font-light leading-relaxed">
            CDI exists to turn ambitious ideas into useful, intelligent and scalable technology.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(214,163,58,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>HAVE AN IDEA? LET'S ENGINEER IT.</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-white/10 hover:border-cdi-gold/40 text-cdi-white font-medium uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2"
            >
              <span>DISCOVER CDI</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
