import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  Receipt, 
  Flame, 
  Store, 
  Globe, 
  CreditCard, 
  Bot, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck,
  FlaskConical,
  Zap,
  Code
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function ProductsPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="PRODUCTS // PROPRIETARY TECHNOLOGY"
        title="PRODUCTS IN"
        highlightTitle="THE MAKING."
        description="CDI designs and develops proprietary digital products, business platforms and cognitive AI systems to solve real-world operational challenges."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products' }
        ]}
      />

      {/* 2. Featured Product 01: BrandX */}
      <section className="relative py-24 sm:py-32 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/40 shadow-2xl relative overflow-hidden">
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cdi-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase bg-cdi-gold/10 px-3 py-1 rounded-full border border-cdi-gold/30">
                    BUSINESS TECHNOLOGY PLATFORM
                  </span>
                  <span className="text-xs font-mono text-cdi-silver-muted uppercase tracking-wider bg-[#141414] px-3 py-1 rounded-full border border-white/5">
                    FLAGSHIP PLATFORM CONCEPT
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cdi-gold to-cdi-gold-dark text-cdi-black font-extrabold font-display text-2xl flex items-center justify-center shadow-lg">
                    X
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                      BrandX
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-cdi-gold font-medium mt-1">
                      ALL-IN-ONE BUSINESS SUPER APP FOR INDIAN VYAPARIS, RETAILERS & MSMEs
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                  An all-in-one business platform concept designed for Indian Vyaparis, retailers and MSMEs. BrandX unifies daily retail operations, fast billing, customer credit accounting, and digital presence into a single streamlined system.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <Receipt className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">GST Invoicing</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Compliant B2B & B2C bill creation with tax calculation</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <Flame className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Thermal POS Receipts</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Instant printing for 58mm/80mm Bluetooth & USB printers</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <Store className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Customer Khata</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Digital credit/debit ledger with automatic audit trail</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <Globe className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Digital Business Presence</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Instant digital store catalog & merchant profile</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <CreditCard className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">UPI Tools</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Dynamic QR code generation & payment collection utilities</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3">
                    <Bot className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">AI Assistance</h3>
                      <p className="text-[11px] text-cdi-silver-muted font-light mt-0.5">Smart insights, product auto-tagging & business summaries</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(214,163,58,0.3)] transition-all hover:scale-105"
                  >
                    <span>INQUIRE ABOUT BRANDX</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <span className="text-xs font-mono text-cdi-silver-muted">
                    STATUS: CONCEPT & ACTIVE PROTOTYPING
                  </span>
                </div>
              </div>

              {/* Visual Specification Mockup Card */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4">
                    <span className="text-cdi-gold">// PRODUCT ARCHITECTURE</span>
                    <span className="text-cdi-silver-muted">BRANDX V1.0</span>
                  </div>

                  <div className="space-y-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                      <span className="text-cdi-gold block mb-1">FRONTEND LAYER:</span>
                      <p className="text-cdi-silver">High-responsiveness React / Vite Web & Android Hybrid</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                      <span className="text-cdi-gold block mb-1">OFFLINE PERSISTENCE:</span>
                      <p className="text-cdi-silver">Local-first IndexedDB / SQLite with background synchronization</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#141414] border border-white/5">
                      <span className="text-cdi-gold block mb-1">COMMERCE ENGINES:</span>
                      <p className="text-cdi-silver">HSN/SAC tax engine, thermal esc/pos parser, UPI link generator</p>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-cdi-silver-muted/80">
                    * Proprietary technology concept developed by Chhichholiya Digital Industries.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Product 02: AP Core Agent */}
      <section className="relative py-24 sm:py-32 bg-cdi-black border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold text-cdi-gold tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    AI PRODUCT
                  </span>
                  <span className="text-xs font-mono text-cdi-silver-muted uppercase tracking-wider bg-[#141414] px-3 py-1 rounded-full border border-white/5">
                    COGNITIVE SYSTEM CONCEPT
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#222] border border-white/10 text-cdi-gold font-extrabold font-display text-2xl flex items-center justify-center shadow-lg">
                    AP
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                      AP Core Agent
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-cdi-gold font-medium mt-1">
                      INDIA-FOCUSED AI ASSISTANT
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                  An India-focused AI assistant concept designed around conversational AI, multilingual interaction and intelligent digital experiences tailored for regional contexts and operational workflows.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Multilingual Interaction</h3>
                      <p className="text-xs text-cdi-silver-muted font-light mt-0.5">Designed to interpret regional Indian languages, Hindi-English code-switching and conversational business queries.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Operational Context Engine</h3>
                      <p className="text-xs text-cdi-silver-muted font-light mt-0.5">Assists users with product queries, accounting inquiries, invoice lookup, and business process automation.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs font-mono font-bold text-cdi-white uppercase">Standards-Informed Design</h3>
                      <p className="text-xs text-cdi-silver-muted font-light mt-0.5">Structured with reference to ISO/IEC 22989 for artificial intelligence concepts and cognitive modeling.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#222] border border-white/10 hover:border-cdi-gold/40 text-cdi-white font-medium uppercase tracking-wider text-xs transition-all"
                  >
                    <span>EXPLORE AI COLLABORATION</span>
                    <ArrowRight className="w-4 h-4 text-cdi-gold" />
                  </Link>
                  <span className="text-xs font-mono text-cdi-silver-muted">
                    STATUS: RESEARCH & ARCHITECTURAL CONCEPT
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#0D0D0D] border border-white/10 space-y-6">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4">
                    <span className="text-cdi-gold">// AI CORE CAPABILITIES</span>
                    <span className="text-cdi-silver-muted">COGNITIVE LAB</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs text-cdi-silver">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cdi-gold" />
                      <span>Natural Language Query Understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cdi-gold" />
                      <span>Automated Commerce Summarization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cdi-gold" />
                      <span>Multi-channel Message Routing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cdi-gold" />
                      <span>Voice-to-Text Transaction Logging</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The CDI Product Lab */}
      <section className="relative py-28 sm:py-36 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>03 // RESEARCH & EXPERIMENTATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              THE CDI <span className="text-gold-gradient">PRODUCT LAB</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
              At CDI, our Product Lab serves as the experimental incubator where we prototype new concepts in business software, cognitive AI tools, and specialized developer utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 space-y-4">
              <FlaskConical className="w-6 h-6 text-cdi-gold" />
              <h3 className="text-xl font-bold text-cdi-white font-display uppercase">
                COMMERCE & POS PROTOCOLS
              </h3>
              <p className="text-xs text-cdi-silver-muted font-light leading-relaxed">
                Exploring lightweight, hardware-agnostic communication protocols for POS devices, receipt printers and inventory scanners.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 space-y-4">
              <Cpu className="w-6 h-6 text-cdi-gold" />
              <h3 className="text-xl font-bold text-cdi-white font-display uppercase">
                REGIONAL AI MODELS
              </h3>
              <p className="text-xs text-cdi-silver-muted font-light leading-relaxed">
                Evaluating small language models and efficient inference techniques for resource-constrained client environments.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-white/10 space-y-4">
              <Code className="w-6 h-6 text-cdi-gold" />
              <h3 className="text-xl font-bold text-cdi-white font-display uppercase">
                OFFLINE-FIRST ARCHITECTURE
              </h3>
              <p className="text-xs text-cdi-silver-muted font-light leading-relaxed">
                Developing conflict-free replicated data types (CRDTs) and local-first persistence models for uninterrupted business software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="relative py-24 sm:py-32 bg-cdi-black overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            BUILD A PROPRIETARY DIGITAL PRODUCT WITH <span className="text-gold-gradient">CDI</span>
          </h2>
          <p className="text-sm sm:text-base text-cdi-silver font-light max-w-2xl mx-auto">
            From concept prototyping to full-stack engineering, partner with CDI to engineer scalable digital products.
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
