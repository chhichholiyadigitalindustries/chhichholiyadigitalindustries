import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, Home, Terminal } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';

export default function NotFoundPage() {
  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route="/404"
        title="404 — Page Not Found | Chhichholiya Digital Industries (CDI)"
        description="The requested page could not be found on the Chhichholiya Digital Industries website."
        noindex={true}
      />
      <PageHeader
        eyebrow="ERROR 404 // ROUTE NOT FOUND"
        title="PAGE DOES NOT"
        highlightTitle="EXIST."
        description="The requested digital endpoint could not be resolved on the Chhichholiya Digital Industries network."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: '404 Not Found' }
        ]}
      />

      <section className="relative py-20 sm:py-32 bg-cdi-dark border-b border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#141414] border border-cdi-gold/40 text-cdi-gold mx-auto flex items-center justify-center font-mono font-extrabold text-2xl shadow-2xl">
            404
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
            LOOKING FOR A SPECIFIC ENGINEERING SPEC?
          </h2>

          <p className="text-sm text-cdi-silver-muted font-light leading-relaxed">
            Please check the URL or use our primary navigation to explore CDI's capabilities, proprietary products, standards alignment, or contact our engineering team.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(214,163,58,0.3)] transition-all hover:scale-105 flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>

            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#222] border border-white/10 text-cdi-white font-medium uppercase tracking-wider text-xs transition-colors"
            >
              <span>EXPLORE SERVICES</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
