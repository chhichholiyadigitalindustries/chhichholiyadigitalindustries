import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040404] text-cdi-silver-muted border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Precision Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cdi-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cdi-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <img
                src="/assets/cdi-logo.png"
                alt="Chhichholiya Digital Industries Logo"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <div>
              <h2 className="text-base font-extrabold text-cdi-white font-display uppercase tracking-wider">
                CHHICHOLIYA DIGITAL INDUSTRIES
              </h2>
              <p className="text-xs font-mono text-cdi-gold mt-1">
                Engineering Digital Possibilities.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cdi-silver-muted max-w-sm font-light leading-relaxed">
              Modern digital products, intelligent platforms and technology experiences designed for the next generation of business.
            </p>

            <div className="space-y-2 text-xs font-mono text-cdi-silver/80 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>UDYAM REGISTERED MSME • INDIA</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="text-cdi-gold">// MAIL:</span>
                <a
                  href="mailto:chhichholiyadigitalindustries@gmail.com"
                  className="text-cdi-silver hover:text-cdi-gold transition-colors font-mono underline decoration-white/20 underline-offset-4"
                >
                  chhichholiyadigitalindustries@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              Company
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase">
              <li>
                <Link to="/about" className="hover:text-cdi-gold transition-colors">
                  // About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cdi-gold transition-colors">
                  // Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-cdi-gold transition-colors">
                  // Products
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-cdi-gold transition-colors">
                  // Work Gallery
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-cdi-gold transition-colors">
                  // Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase">
              <li>
                <Link to="/industries" className="hover:text-cdi-gold transition-colors">
                  // Industries
                </Link>
              </li>
              <li>
                <Link to="/engineering" className="hover:text-cdi-gold transition-colors">
                  // Engineering
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-cdi-gold transition-colors">
                  // Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cdi-gold transition-colors">
                  // Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Top Button */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              Legal & Compliance
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase">
              <li>
                <Link to="/privacy" className="hover:text-cdi-gold transition-colors">
                  // Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-cdi-gold transition-colors">
                  // Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="p-3 rounded-xl bg-[#121212] hover:bg-[#1A1A1A] border border-white/10 hover:border-cdi-gold/40 text-cdi-silver hover:text-cdi-gold transition-all flex items-center gap-2 text-xs font-mono uppercase"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cdi-silver-muted/80">
          <div>
            © 2026 <span className="text-cdi-silver">Chhichholiya Digital Industries</span>. All rights reserved.
          </div>
          <div className="text-cdi-gold font-medium tracking-wider">
            ENGINEERED BY CHHICHHOLIYA DIGITAL INDUSTRIES
          </div>
        </div>
      </div>
    </footer>
  );
}
