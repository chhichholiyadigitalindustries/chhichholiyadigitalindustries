import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Store, 
  HeartPulse, 
  GraduationCap, 
  Briefcase, 
  Film, 
  Rocket, 
  Factory,
  Cog,
  Truck,
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import { CORE_SEO_PAGES } from '../data/seoConfig';

const INDUSTRIES_DATA = [
  {
    num: '01',
    title: 'Manufacturing & Factories',
    tag: 'INDUSTRIAL & OEM PRODUCTION',
    icon: Factory,
    desc: 'Modern B2B websites, searchable digital product catalogues, and dealer enquiry portals engineered for Indian manufacturing units and OEM suppliers.',
    solutions: [
      'Digital product catalogues replacing heavy PDFs',
      'Factory capability & quality-control showcase pages',
      'Bulk order & OEM Request-for-Quote (RFQ) forms',
      'Pan-India dealer and distributor enquiry portals'
    ]
  },
  {
    num: '02',
    title: 'Industrial Suppliers & Fabrication',
    tag: 'B2B ENGINEERING & JOB-WORK',
    icon: Cog,
    desc: 'Purpose-built websites and quoting portals for machinery suppliers, CNC workshops, fabrication units, and industrial equipment vendors.',
    solutions: [
      'Technical dimension, grade & tolerance specification tables',
      'Workshop machinery & production capacity documentation',
      'Instant WhatsApp & email specification sharing',
      'Job-card tracking and internal production logs'
    ]
  },
  {
    num: '03',
    title: 'Distributors & Wholesalers',
    tag: 'SUPPLY CHAIN & B2B COMMERCE',
    icon: Truck,
    desc: 'Custom B2B ordering portals, multi-warehouse stock tracking, and dealer-wise billing platforms for Indian wholesalers and distributors.',
    solutions: [
      'Dealer login portals for bulk order placement',
      'Multi-godown inventory and dispatch visibility',
      'Tiered pricing and GST-compliant invoice generation',
      'Automated receivable reminders and customer ledgers'
    ]
  },
  {
    num: '04',
    title: 'Retail & MSME',
    tag: 'COMMERCE & RETAIL',
    icon: Store,
    desc: 'Digital tools for shopkeepers, retailers and growing businesses. Streamlining daily sales, customer credit ledgers, thermal POS receipts and GST billing.',
    solutions: [
      'Point-of-sale (POS) and thermal receipt systems',
      'Digital Khata and customer ledger accounting',
      'Inventory tracking across multi-counter retail shops',
      'Dynamic UPI QR and digital payment collection tools'
    ]
  },
  {
    num: '05',
    title: 'Healthcare',
    tag: 'HEALTHCARE & CLINICAL SYSTEMS',
    icon: HeartPulse,
    desc: 'Digital experiences and software for healthcare-related workflows. Organizing clinic appointments, patient intake, records management and secure communications.',
    solutions: [
      'Patient scheduling and appointment management portals',
      'Secure digital medical records and prescription archives',
      'Clinical operations dashboards and billing workflows',
      'Patient notification and diagnostic report portals'
    ]
  },
  {
    num: '06',
    title: 'Education',
    tag: 'EDTECH & LEARNING SYSTEMS',
    icon: GraduationCap,
    desc: 'Platforms and digital products for educational organizations, coaching institutes, schools and digital learning creators.',
    solutions: [
      'Interactive student learning management systems (LMS)',
      'Digital attendance, fee invoicing and parent portals',
      'Secure online examination and assessment platforms',
      'Mobile learning applications with offline lesson access'
    ]
  },
  {
    num: '07',
    title: 'Business Services',
    tag: 'PROFESSIONAL SERVICES',
    icon: Briefcase,
    desc: 'Custom technology for service-based organizations, consultancies, legal firms, accounting practices and agency operations.',
    solutions: [
      'Client onboarding portals and document exchange workflows',
      'Task management and automated milestone tracking',
      'Time logging and automated client billing systems',
      'Internal knowledge base and team collaboration portals'
    ]
  },
  {
    num: '08',
    title: 'Media & Creative',
    tag: 'CONTENT & DIGITAL MEDIA',
    icon: Film,
    desc: 'Digital platforms and technology for creative businesses, design studios, media publishers and digital content networks.',
    solutions: [
      'High-performance editorial and publishing web platforms',
      'Digital asset management and media distribution portals',
      'Creative portfolio systems with clean interactive design',
      'Audience analytics and subscription management tools'
    ]
  },
  {
    num: '09',
    title: 'Startups & Ventures',
    tag: 'EMERGING BUSINESSES',
    icon: Rocket,
    desc: 'Technology for startups, founders and new digital ventures needing rapid, modular MVP development and scalable architectures.',
    solutions: [
      'Fast-to-market Minimum Viable Product (MVP) engineering',
      'Full-stack prototype development (Web + Android)',
      'Cloud backend architecture built to scale cleanly',
      'AI feature integration and modern API infrastructure'
    ]
  }
];

export default function IndustriesPage() {
  const seo = CORE_SEO_PAGES['/industries'];

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={seo.route}
        title={seo.title}
        description={seo.description}
        breadcrumbs={seo.breadcrumbs}
      />
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="DOMAINS // REAL-WORLD APPLIED TECHNOLOGY"
        title="TECHNOLOGY FOR"
        highlightTitle="REAL-WORLD BUSINESS."
        description="CDI designs and engineers specialized software solutions tailored to the operational demands and user workflows of distinct industries."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Industries' }
        ]}
      />

      {/* 2. Industries Grid */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>01 // SECTORS & DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              INDUSTRY <span className="text-gold-gradient">FOCUS AREAS</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              We apply software engineering principles to solve practical domain problems across commercial, healthcare, educational and startup ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#161616] via-[#111111] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-mono text-cdi-gold tracking-widest uppercase bg-[#1A1A1A] px-2.5 py-1 rounded-md border border-white/5">
                        {ind.tag}
                      </span>
                      <div className="p-3 rounded-2xl bg-[#181818] text-cdi-silver group-hover:text-cdi-gold group-hover:scale-110 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide group-hover:text-cdi-gold transition-colors mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed mb-6">
                      {ind.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cdi-gold block mb-2">
                        // KEY CAPABILITIES
                      </span>
                      {ind.solutions.map((sol) => (
                        <div key={sol} className="flex items-start gap-2 text-xs text-cdi-silver font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold shrink-0 mt-0.5" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="text-xs font-mono text-cdi-silver hover:text-cdi-gold flex items-center gap-1.5 transition-colors uppercase tracking-wider"
                    >
                      <span>DISCUSS USE CASE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cdi-gold" />
                    </Link>
                    <span className="text-xs font-mono text-white/20">{ind.num}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-[#101010] border border-white/5 text-center text-xs font-mono text-cdi-silver-muted">
            * CDI designs custom digital platforms for these industry focus areas. All solutions are architected to client specifications.
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <section className="relative py-24 sm:py-32 bg-cdi-black overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            LOOKING TO BUILD FOR YOUR <span className="text-gold-gradient">INDUSTRY?</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            Share your domain workflows and business objectives with CDI’s product engineering team.
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
