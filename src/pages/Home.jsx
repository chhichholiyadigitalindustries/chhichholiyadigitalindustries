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
  Factory,
  Wrench,
  Truck,
  Store,
  Rocket,
  Cog,
  Receipt,
  Flame,
  CreditCard,
  Terminal,
  MessageCircle,
  Phone,
  BookOpen,
} from 'lucide-react';
import Hero from '../components/Hero';
import WorkGallerySection from '../components/WorkGallerySection';
import SeoHead from '../components/SeoHead';
import { CORE_SEO_PAGES } from '../data/seoConfig';
import { INSIGHTS_ARTICLES } from '../data/insightsArticles';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';

const INDIAN_BUSINESS_SECTORS = [
  {
    icon: Factory,
    title: 'Manufacturing Companies',
    benefit:
      'Replace heavy, unsearchable PDFs with structured digital product catalogues, factory capability pages, and direct OEM / bulk enquiry workflows.',
    outcome: 'Attracts pan-India B2B & dealer enquiries without relying solely on aggregators.',
    path: '/manufacturing-website-development',
    cta: 'Manufacturing Websites →',
  },
  {
    icon: Cog,
    title: 'Industrial Suppliers',
    benefit:
      'Present technical specifications, material grades, tolerance charts, and RFQ forms cleanly so procurement teams can evaluate your capability quickly.',
    outcome: 'Reduces back-and-forth calls and captures clearer RFQs from serious buyers.',
    path: '/industrial-website-development',
    cta: 'Industrial Web Solutions →',
  },
  {
    icon: Wrench,
    title: 'Fabrication Businesses',
    benefit:
      'Showcase CNC, sheet-metal, structural, and custom job-work capacities alongside direct WhatsApp specification sharing for fast quotes.',
    outcome: 'Helps engineering contractors verify workshop readiness in minutes.',
    path: '/industrial-website-development',
    cta: 'Fabrication & B2B Sites →',
  },
  {
    icon: Truck,
    title: 'Distributors & Wholesalers',
    benefit:
      'Streamline dealer re-ordering, tier pricing visibility, stock tracking, and GST billing workflows through custom web portals and business software.',
    outcome: 'Cuts manual order-taking errors and speeds up dispatch cycles.',
    path: '/business-software-development',
    cta: 'Business & Order Software →',
  },
  {
    icon: Store,
    title: 'Retail Businesses',
    benefit:
      'Combine local online discovery with modern showroom websites, organized product showcases, customer credit tracking, and POS-ready billing tools.',
    outcome: 'Strengthens customer trust and simplifies daily counter operations.',
    path: '/digital-solutions-for-msme',
    cta: 'Retail & Showroom Tech →',
  },
  {
    icon: Rocket,
    title: 'MSMEs & Startups',
    benefit:
      'Launch credible corporate websites, minimum viable web or mobile apps, and practical AI automations phased realistically around your business budget.',
    outcome: 'Build durable digital assets you fully own without template bloat.',
    path: '/digital-solutions-for-msme',
    cta: 'MSME Digital Solutions →',
  },
];

const CAPABILITIES = [
  {
    icon: Globe,
    title: 'Business Website Development',
    desc: 'Fast, mobile-first corporate, manufacturing, and B2B websites engineered for clarity, credibility, and search visibility across India.',
    tag: 'WEBSITES & CATALOGUES',
    path: '/website-development-company-india',
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    desc: 'Interactive B2B dealer portals, internal dashboards, job-card trackers, and cloud SaaS systems built around your exact operational rules.',
    tag: 'WEB PORTALS & SAAS',
    path: '/web-application-development',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    desc: 'Dependable Android and cross-platform business apps with offline-first data sync, field tracking, and thermal POS hardware support.',
    tag: 'ANDROID & MULTI-PLATFORM',
    path: '/mobile-app-development',
  },
  {
    icon: Bot,
    title: 'AI Solutions & Automation',
    desc: 'Practical AI assistants, invoice/document parsing, and workflow automation that eliminate repetitive manual tasks for your team.',
    tag: 'APPLIED AI SYSTEMS',
    path: '/ai-solutions-automation',
  },
  {
    icon: Building,
    title: 'Business Software Development',
    desc: 'Custom GST billing, inventory control, customer khata ledgers, and operational software built for Indian factories, shops, and offices.',
    tag: 'OPERATIONAL SOFTWARE',
    path: '/business-software-development',
  },
  {
    icon: Palette,
    title: 'UI/UX & Product Engineering',
    desc: 'Clean visual interfaces, structured information architecture, and complete digital product design from wireframes to production code.',
    tag: 'DESIGN & PRODUCT',
    path: '/services',
  },
];

const PROJECT_PROCESS = [
  {
    num: '01',
    name: 'Requirement Discussion',
    desc: 'We listen to your business model, target buyers, operational bottlenecks, and practical goals before suggesting any technology.',
  },
  {
    num: '02',
    name: 'Planning & Proposal',
    desc: 'You receive a clear scope breakdown, milestone timeline, and transparent budget estimate—with zero hidden lock-ins.',
  },
  {
    num: '03',
    name: 'UI/UX and Development',
    desc: 'We design clean, responsive screens and build modular frontend, backend, and database systems tailored to your requirements.',
  },
  {
    num: '04',
    name: 'Testing & Quality Review',
    desc: 'Every form, link, mobile layout, speed metric, and business workflow is tested before launch.',
  },
  {
    num: '05',
    name: 'Deployment & Handover',
    desc: 'Your website or software is deployed cleanly with SEO fundamentals, domain setup, and full handover guidance.',
  },
  {
    num: '06',
    name: 'Ongoing Support (Optional)',
    desc: 'Continued maintenance, feature upgrades, and technical assistance whenever your business expands.',
  },
];

export default function Home({ onOpenProjectModal }) {
  const seo = CORE_SEO_PAGES['/'];

  return (
    <div className="overflow-hidden">
      <SeoHead
        route={seo.route}
        title={seo.title}
        description={seo.description}
        breadcrumbs={seo.breadcrumbs}
      />

      {/* 1. HERO SECTION */}
      <Hero onOpenProjectModal={onOpenProjectModal} />

      {/* 2. WHO WE ARE & POSITIONING */}
      <section className="relative py-20 sm:py-28 bg-cdi-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                <span>WHO WE ARE // DIGITAL PRODUCT ENGINEERING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.15]">
                TECHNOLOGY DESIGNED AROUND <br />
                <span className="text-gold-gradient">REAL BUSINESS REQUIREMENTS.</span>
              </h2>
              <p className="text-base sm:text-lg text-cdi-silver font-light leading-relaxed max-w-3xl">
                {CDI_BRAND.displayName} ({CDI_BRAND.shortName}) is an Indian digital technology and product engineering company. Led by Founder {CDI_BRAND.founder.name} and COO {CDI_BRAND.coo.name}, we partner with manufacturers, industrial suppliers, MSMEs, retailers, and growing enterprises across India to build dependable websites, web applications, mobile apps, business software, and AI automation systems.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/15 hover:border-cdi-gold/50 text-cdi-white text-xs font-mono uppercase tracking-widest transition-all duration-300"
                >
                  <span>About CDI &amp; Leadership →</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cdi-gold/10 border border-cdi-gold/40 text-cdi-gold hover:bg-cdi-gold/20 text-xs font-mono uppercase tracking-widest transition-all"
                >
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-cdi-gold text-xs font-mono">
                  <Terminal className="w-4 h-4" />
                  <span>COMPANY PROFILE</span>
                </div>
                <h3 className="text-lg font-bold text-cdi-white font-display uppercase">
                  {CDI_BRAND.legalName}
                </h3>
                <p className="text-xs text-cdi-silver-muted leading-relaxed">
                  Serving businesses nationwide across India through structured digital consulting, custom software architecture, and transparent project handover.
                </p>
                <div className="pt-3 border-t border-white/10 space-y-2 text-[11px] font-mono text-cdi-silver">
                  <div className="flex justify-between">
                    <span className="text-cdi-silver-muted">FOUNDER:</span>
                    <span>{CDI_BRAND.founder.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cdi-silver-muted">COO:</span>
                    <span>{CDI_BRAND.coo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cdi-silver-muted">STANDING:</span>
                    <span className="text-cdi-gold">UDYAM MSME • INDIA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL SOLUTIONS FOR INDIAN BUSINESSES (PHASE 3 PRIORITY) */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
                <span>01 // BUILT FOR INDIA</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                DIGITAL SOLUTIONS FOR <span className="text-gold-gradient">INDIAN BUSINESSES</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
                Practical websites, digital catalogues, and software tailored to how Indian factories, suppliers, distributors, and retail businesses actually operate and win customers.
              </p>
            </div>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors shrink-0"
            >
              <span>All Industries We Serve</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {INDIAN_BUSINESS_SECTORS.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0B0B0B] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="p-3 rounded-2xl bg-[#1A1A1A] text-cdi-gold border border-white/5 w-fit group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                      {sector.benefit}
                    </p>
                    <p className="text-xs font-mono text-cdi-silver/90 pt-2 border-t border-white/5">
                      Business Value: {sector.outcome}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <Link
                      to={sector.path}
                      className="text-xs font-mono uppercase tracking-wider text-cdi-gold hover:text-cdi-gold-light inline-flex items-center gap-1.5"
                    >
                      <span>{sector.cta}</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES: WHAT WE BUILD */}
      <section className="relative py-24 sm:py-32 bg-cdi-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
                <span>02 // CORE SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                WHAT WE <span className="text-gold-gradient">BUILD</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#1A1A1A] px-2.5 py-1 rounded-md border border-white/5">
                        {cap.tag}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#181818] text-cdi-silver group-hover:text-cdi-gold transition-colors">
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

                  <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={cap.path}
                      className="text-xs font-mono text-cdi-silver hover:text-cdi-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <span>Explore Service</span>
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

      {/* 5. WORK GALLERY & DEMONSTRATIONS */}
      <WorkGallerySection onOpenProjectModal={onOpenProjectModal} />

      {/* 6. PRODUCTS IN THE MAKING (INTERNAL PRODUCT CONCEPTS) */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>04 // INTERNAL INNOVATION LAB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              CDI PRODUCT <span className="text-gold-gradient">CONCEPTS</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              Alongside client software engineering, CDI actively develops proprietary internal platforms and AI R&amp;D concepts tailored for Indian commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* BRANDX */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/30 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    INTERNAL PLATFORM CONCEPT
                  </span>
                  <span className="px-3 py-1 rounded-full bg-cdi-gold/10 text-cdi-gold border border-cdi-gold/30 text-[10px] font-mono uppercase">
                    IN DEVELOPMENT
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cdi-gold text-cdi-black font-extrabold font-display flex items-center justify-center text-lg">
                    X
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase">
                      BrandX
                    </h3>
                    <span className="text-xs font-mono text-cdi-silver-muted">
                      Business Operations Concept for Retailers &amp; MSMEs
                    </span>
                  </div>
                </div>

                <p className="text-sm text-cdi-silver font-light leading-relaxed">
                  An all-in-one digital platform concept combining GST invoicing, thermal POS receipts, customer khata, UPI collection utilities, and digital presence tools.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-white/5 text-xs font-mono text-cdi-silver">
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <Receipt className="w-3.5 h-3.5 text-cdi-gold" /> <span>GST Invoicing</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-cdi-gold" /> <span>Thermal POS</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <Store className="w-3.5 h-3.5 text-cdi-gold" /> <span>Khata Ledger</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-cdi-gold" /> <span>Storefront</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <CreditCard className="w-3.5 h-3.5 text-cdi-gold" /> <span>UPI Tools</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-white/5 flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-cdi-gold" /> <span>AI Assist</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link to="/products" className="text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light">
                  Explore BrandX Concept →
                </Link>
              </div>
            </div>

            {/* AP CORE AGENT */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase">
                    EXPERIMENTAL AI R&amp;D
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-cdi-silver border border-white/10 text-[10px] font-mono uppercase">
                    PROTOTYPE
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#222] border border-white/10 text-cdi-gold font-extrabold font-display flex items-center justify-center text-lg">
                    AP
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase">
                      AP Core Agent
                    </h3>
                    <span className="text-xs font-mono text-cdi-silver-muted">
                      India-Focused AI Assistant Research Concept
                    </span>
                  </div>
                </div>

                <p className="text-sm text-cdi-silver font-light leading-relaxed">
                  An experimental conversational AI assistant designed for bilingual English/Hindi business workflows, product query lookup, and structured document summarization.
                </p>

                <div className="space-y-2.5 mt-6 pt-5 border-t border-white/5 text-xs font-mono text-cdi-silver">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>Document &amp; catalogue-grounded responses</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>English &amp; Hindi business language awareness</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0" />
                    <span>Workflow automation API integration</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link to="/products" className="text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light">
                  View AI Prototype Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRANSPARENT PROJECT DELIVERY PROCESS (PHASE 9) */}
      <section className="relative py-24 sm:py-32 bg-cdi-black border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>05 // TRANSPARENT DELIVERY PROCESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              HOW WE DELIVER <span className="text-gold-gradient">YOUR PROJECT</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              A clear, milestone-driven process built around business clarity, structured development, and thorough quality checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_PROCESS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 group"
              >
                <span className="text-3xl font-mono font-extrabold text-white/20 group-hover:text-cdi-gold transition-colors block mb-3">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-cdi-white font-display uppercase tracking-wide">
                  {step.name}
                </h3>
                <p className="mt-2.5 text-sm text-cdi-silver-muted font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CREDENTIALS & ENGINEERING STANDARDS */}
      <section className="relative py-24 sm:py-28 bg-cdi-dark border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                <span>06 // CREDENTIALS &amp; STANDARDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.1]">
                REGISTERED MSME &amp; <span className="text-gold-gradient">STANDARDS-ALIGNED</span>
              </h2>
              <p className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                Chhichholiya Digital Industries operates as an Udyam-registered Indian MSME and structures its development lifecycle with reference to international engineering frameworks (ISO/IEC 29110, 22989, and 25002).
              </p>
              <div className="pt-2">
                <Link
                  to="/engineering"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-cdi-gold/40 text-cdi-white font-semibold uppercase tracking-wider text-xs transition-all"
                >
                  <span>Explore Engineering Standards →</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-[#111111] border border-cdi-gold/40 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cdi-gold to-cdi-gold-dark text-cdi-black font-extrabold font-display text-sm flex items-center justify-center shrink-0">
                  CDI
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cdi-silver-muted uppercase tracking-widest block">
                    INDIAN BUSINESS REGISTRATION
                  </span>
                  <h3 className="text-base font-extrabold text-cdi-white font-display uppercase">
                    UDYAM REGISTERED MSME
                  </h3>
                  <span className="text-xs font-mono text-cdi-gold">INDIA • DIGITAL SERVICES</span>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#111111] border border-white/10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1D1D1D] border border-white/10 text-cdi-gold font-extrabold font-display text-xs flex items-center justify-center shrink-0">
                  REF
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cdi-silver-muted uppercase tracking-widest block">
                    ENGINEERING PROCESS REFERENCE
                  </span>
                  <h3 className="text-base font-extrabold text-cdi-white font-display uppercase">
                    ISO/IEC 29110 · 22989 · 25002
                  </h3>
                  <span className="text-[11px] font-mono text-cdi-silver-muted">
                    Process reference frameworks (not ISO certification)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PRACTICAL BUSINESS GUIDES (INSIGHTS PREVIEW) */}
      <section className="relative py-24 sm:py-28 bg-cdi-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
                07 // INSIGHTS FOR INDIAN BUSINESSES
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                GUIDES &amp; <span className="text-gold-gradient">RESOURCES</span>
              </h2>
            </div>
            <Link to="/insights" className="text-xs font-mono uppercase tracking-widest text-cdi-gold hover:underline">
              View All {INSIGHTS_ARTICLES.length} Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INSIGHTS_ARTICLES.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                to={article.route}
                className="p-7 rounded-3xl bg-[#111111] border border-white/10 hover:border-cdi-gold/40 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono text-cdi-gold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-cdi-white font-display leading-snug group-hover:text-cdi-gold transition-colors">
                    {article.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                    {article.summary}
                  </p>
                </div>
                <span className="text-xs font-mono text-cdi-gold inline-flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Read Full Guide
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="relative py-28 sm:py-36 bg-gradient-to-b from-[#0A0A0A] via-cdi-black to-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cdi-gold/10 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
            <span>START A CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-[1.08]">
            READY TO BUILD A RELIABLE <br />
            <span className="text-gold-gradient">DIGITAL SYSTEM FOR YOUR BUSINESS?</span>
          </h2>

          <p className="text-base sm:text-lg text-cdi-silver max-w-2xl mx-auto font-light leading-relaxed">
            Discuss your website, web portal, mobile app, or automation project directly with CDI.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(214,163,58,0.4)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a digital project for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#101814] hover:bg-[#14231C] border border-emerald-500/40 text-emerald-300 font-semibold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={CDI_BRAND.phones[0].tel}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#121212] hover:bg-[#1A1A1A] border border-white/10 text-cdi-white font-mono text-xs transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cdi-gold" />
              <span>{CDI_BRAND.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
