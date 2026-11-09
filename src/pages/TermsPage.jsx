import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function TermsPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <PageHeader
        eyebrow="LEGAL // TERMS OF SERVICE"
        title="TERMS &"
        highlightTitle="CONDITIONS."
        description="Terms and conditions governing the use of the Chhichholiya Digital Industries website."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms & Conditions' }
        ]}
      />

      <section className="relative py-20 sm:py-28 bg-cdi-dark border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-cdi-silver-muted font-light leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-[#121212] border border-white/10 text-xs font-mono text-cdi-silver">
            <span className="text-cdi-gold font-bold block mb-1">EFFECTIVE DATE: JANUARY 2026</span>
            <span>ENTITY: CHHICHHOLIYA DIGITAL INDUSTRIES (CDI)</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or inquiry services.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              2. Intellectual Property Rights
            </h2>
            <p>
              All content on this website, including but not limited to text, trademarks, CDI monogram, design systems, visual assets, and code architectures, is the property of Chhichholiya Digital Industries and protected by applicable copyright and intellectual property laws.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              3. Engineering Standards & References
            </h2>
            <p>
              References to international standards (e.g., ISO/IEC 29110, ISO/IEC 22989, ISO/IEC 25002) describe technical frameworks used as reference points for internal software engineering discipline. Such references do not constitute official accredited certification or institutional endorsement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              4. Project Proposals & Engagements
            </h2>
            <p>
              Submission of a project inquiry through this website does not constitute a binding commercial contract. Formal engineering engagements are governed by separate written master service agreements, statements of work (SOW), and technical milestone schedules.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              5. Governing Law
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts of India.
            </p>
          </div>

          <div className="pt-8 border-t border-white/10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-cdi-gold uppercase tracking-wider hover:text-cdi-gold-light"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
