import React from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  HelpCircle,
  Sparkles,
  Building2,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import { buildCanonicalUrl, buildServiceSchema } from '../data/seoConfig';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';

export default function ServiceLandingPage({ page }) {
  if (!page) return null;

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: page.serviceType, path: page.route },
  ];

  const canonicalUrl = buildCanonicalUrl(page.route);
  const serviceSchema = buildServiceSchema({
    name: page.serviceType,
    description: page.description,
    serviceType: page.primaryKeyword,
    url: canonicalUrl,
  });

  const titleParts = page.h1Title.split(' ');
  const splitIndex = Math.ceil(titleParts.length / 2);

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={page.route}
        title={page.title}
        description={page.description}
        breadcrumbs={breadcrumbs}
        schemas={[serviceSchema]}
      />

      <PageHeader
        eyebrow={page.eyebrow}
        title={page.h1Title}
        highlightTitle={page.h1Highlight}
        description={page.heroSummary}
        breadcrumbs={breadcrumbs}
      />

      {/* Quick Conversion Action Strip */}
      <section className="py-6 bg-[#0B0B0B] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-cdi-silver-muted">
            SERVING BUSINESSES ACROSS INDIA • DIRECT REMOTE DELIVERY BY CDI
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to={`/contact?service=${encodeURIComponent(page.defaultInquiryService)}`}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getWhatsAppUrl(`Hello CDI Team, I would like to enquire about ${page.serviceType} for my business.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#101814] border border-emerald-500/40 text-emerald-300 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href={CDI_BRAND.phones[0].tel}
              className="px-4 py-2.5 rounded-full bg-[#141414] border border-white/10 text-cdi-silver text-xs font-mono flex items-center gap-1.5 hover:text-cdi-gold"
            >
              <Phone className="w-3.5 h-3.5 text-cdi-gold" />
              <span>{CDI_BRAND.phones[0].display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Who This Service Is Built For & Business Problems Solved */}
      <section className="py-20 sm:py-28 bg-cdi-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Target Audience & Challenges */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
                01 // REAL BUSINESS CHALLENGES WE SOLVE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                WHY BUSINESSES UPGRADE WITH <span className="text-gold-gradient">CDI</span>
              </h2>
            </div>

            <div className="space-y-4">
              {page.businessProblems.map((prob, idx) => (
                <div
                  key={prob.title}
                  className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-2"
                >
                  <div className="text-xs font-mono text-cdi-gold uppercase">
                    Challenge 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-cdi-white font-display">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                    {prob.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Target Audience + What CDI Delivers */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cdi-gold text-xs font-mono uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Ideal Businesses Across India</span>
              </div>
              <ul className="space-y-2.5 text-sm text-cdi-silver">
                {page.audience.map((aud) => (
                  <li key={aud} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <span>{aud}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#171717] to-[#0D0D0D] border border-cdi-gold/30 space-y-4">
              <div className="flex items-center gap-2 text-cdi-gold text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Key Deliverables Included</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-cdi-silver font-light">
                {page.deliverables.map((del) => (
                  <li key={del} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cdi-gold shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Use Cases */}
      <section className="py-20 sm:py-28 bg-cdi-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
              02 // PRACTICAL APPLICATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              RELEVANT USE CASES FOR <span className="text-gold-gradient">INDIAN BUSINESSES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.useCases.map((uc, idx) => (
              <div
                key={uc.title}
                className="p-7 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0B0B0B] border border-white/10 hover:border-cdi-gold/40 transition-all space-y-3"
              >
                <span className="text-xs font-mono text-cdi-gold font-bold">
                  USE CASE 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-cdi-white font-display uppercase">
                  {uc.title}
                </h3>
                <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                  {uc.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest FAQs */}
      <section className="py-20 sm:py-28 bg-cdi-dark border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest inline-flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              <span>03 // FREQUENTLY ASKED QUESTIONS</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              CLEAR ANSWERS BEFORE YOU START
            </h2>
          </div>

          <div className="space-y-4">
            {page.faqs.map((item) => (
              <div
                key={item.q}
                className="p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-2"
              >
                <h3 className="text-base font-bold text-cdi-white font-display">
                  {item.q}
                </h3>
                <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources & Final CTA */}
      <section className="py-20 sm:py-28 bg-cdi-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#171717] to-[#0B0B0B] border border-cdi-gold/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cdi-gold uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Ready to Plan Your Project?</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-cdi-white font-display uppercase">
                DISCUSS {page.serviceType.toUpperCase()} WITH CDI
              </h2>
              <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
                Talk directly with {CDI_BRAND.founder.name} &amp; the CDI engineering team to define scope, timeline, and budget clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to={`/contact?service=${encodeURIComponent(page.defaultInquiryService)}`}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl(`Hello CDI Team, I want to discuss ${page.serviceType}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-[#121212] border border-emerald-500/40 text-emerald-300 font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          {page.relatedLinks && page.relatedLinks.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <span className="text-xs font-mono text-cdi-silver-muted uppercase tracking-wider block mb-4">
                Related Solutions &amp; Guides
              </span>
              <div className="flex flex-wrap gap-3">
                {page.relatedLinks.map((rel) => (
                  <Link
                    key={rel.path}
                    to={rel.path}
                    className="px-4 py-2 rounded-full bg-[#121212] border border-white/10 hover:border-cdi-gold/50 text-xs font-mono text-cdi-silver hover:text-cdi-gold transition-colors"
                  >
                    {rel.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
