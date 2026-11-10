import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import { CORE_SEO_PAGES } from '../data/seoConfig';

export default function PrivacyPage() {
  const seo = CORE_SEO_PAGES['/privacy'];

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={seo.route}
        title={seo.title}
        description={seo.description}
        breadcrumbs={seo.breadcrumbs}
      />
      <PageHeader
        eyebrow="LEGAL // PRIVACY COMMITMENT"
        title="PRIVACY"
        highlightTitle="POLICY."
        description="Privacy policy and data governance practices of Chhichholiya Digital Industries."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy' }
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
              1. Overview & Scope
            </h2>
            <p>
              Chhichholiya Digital Industries ("CDI", "we", "our", or "us") respects your privacy and is committed to protecting information collected through our official website, digital platforms, and project inquiry channels.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              2. Information We Collect
            </h2>
            <p>
              When you submit a project inquiry or contact us, we may collect information including your name, business/company name, email address, phone number, project requirements, and budget specifications. We only collect information voluntarily provided by you.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              3. Purpose of Data Use
            </h2>
            <p>
              We use the collected information solely to evaluate project requirements, prepare technical specifications and proposals, respond to inquiries, and communicate regarding potential software engineering collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              4. Data Confidentiality & Security
            </h2>
            <p>
              CDI does not sell, rent, or trade your personal or business information to third-party marketing companies. Project inquiries and technical disclosures are treated with standard commercial confidentiality.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-cdi-white font-display uppercase tracking-wide">
              5. Contact Us Regarding Privacy
            </h2>
            <p>
              If you have any questions or requests regarding your data, you may contact us at:{' '}
              <a href="mailto:chhichholiyadigitalindustries@gmail.com" className="text-cdi-gold underline font-mono">
                chhichholiyadigitalindustries@gmail.com
              </a>.
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
