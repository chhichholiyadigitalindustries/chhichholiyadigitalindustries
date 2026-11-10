import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040404] text-cdi-silver-muted border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cdi-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cdi-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand & Direct Contact Col */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <BrandLogo
                alt="Chhichholiya Digital Industries Logo"
                className="h-11 w-auto object-contain"
                loading="lazy"
              />
            </Link>

            <div>
              <h2 className="text-base font-extrabold text-cdi-white font-display uppercase tracking-wider">
                {CDI_BRAND.legalName}
              </h2>
              <p className="text-xs font-mono text-cdi-gold mt-1">
                {CDI_BRAND.positioning}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-cdi-silver-muted max-w-sm font-light leading-relaxed">
              Engineering business websites, custom web applications, mobile apps, business software, and practical AI solutions for manufacturers, MSMEs, and enterprises across India.
            </p>

            <div className="space-y-2.5 text-xs font-mono text-cdi-silver/90 pt-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>UDYAM REGISTERED MSME • SERVING ALL INDIA</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail className="w-3.5 h-3.5 text-cdi-gold shrink-0" />
                <a
                  href={`mailto:${CDI_BRAND.email}`}
                  className="text-cdi-silver hover:text-cdi-gold transition-colors break-all underline decoration-white/20 underline-offset-4"
                >
                  {CDI_BRAND.email}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                {CDI_BRAND.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={phone.tel}
                    className="inline-flex items-center gap-1.5 text-cdi-silver hover:text-cdi-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-cdi-gold shrink-0" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a digital project for my business.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101010] border border-emerald-500/30 hover:border-emerald-400 text-emerald-400 text-xs font-mono uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={CDI_BRAND.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Founder Abhishek Chhichholiya on LinkedIn"
                  title="Founder LinkedIn"
                  className="p-2.5 rounded-xl bg-[#101010] border border-white/10 hover:border-cdi-gold/50 text-cdi-silver hover:text-cdi-gold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={CDI_BRAND.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chhichholiya Digital Industries on Instagram"
                  title="CDI Instagram"
                  className="p-2.5 rounded-xl bg-[#101010] border border-white/10 hover:border-cdi-gold/50 text-cdi-silver hover:text-cdi-gold transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={CDI_BRAND.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chhichholiya Digital Industries on Facebook"
                  title="CDI Facebook Page"
                  className="p-2.5 rounded-xl bg-[#101010] border border-white/10 hover:border-cdi-gold/50 text-cdi-silver hover:text-cdi-gold transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* India Solutions Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              India Solutions
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link to="/website-development-company-india" className="hover:text-cdi-gold transition-colors">
                  // Website Development India
                </Link>
              </li>
              <li>
                <Link to="/manufacturing-website-development" className="hover:text-cdi-gold transition-colors">
                  // Manufacturing Websites
                </Link>
              </li>
              <li>
                <Link to="/industrial-website-development" className="hover:text-cdi-gold transition-colors">
                  // Industrial & B2B Websites
                </Link>
              </li>
              <li>
                <Link to="/web-application-development" className="hover:text-cdi-gold transition-colors">
                  // Web Applications
                </Link>
              </li>
              <li>
                <Link to="/mobile-app-development" className="hover:text-cdi-gold transition-colors">
                  // Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/ai-solutions-automation" className="hover:text-cdi-gold transition-colors">
                  // AI Solutions & Automation
                </Link>
              </li>
              <li>
                <Link to="/business-software-development" className="hover:text-cdi-gold transition-colors">
                  // Business Software
                </Link>
              </li>
              <li>
                <Link to="/digital-solutions-for-msme" className="hover:text-cdi-gold transition-colors">
                  // Digital Solutions for MSME
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              Company
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase">
              <li>
                <Link to="/about" className="hover:text-cdi-gold transition-colors">
                  // About CDI
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
            </ul>
          </div>

          {/* Legal & Top Button */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cdi-white font-semibold block">
              Connect & Legal
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase">
              <li>
                <Link to="/contact" className="hover:text-cdi-gold transition-colors">
                  // Start a Project
                </Link>
              </li>
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

            <div className="p-3.5 rounded-xl bg-[#0D0D0D] border border-white/5 text-[11px] font-mono space-y-1">
              <div className="text-cdi-gold uppercase">Leadership</div>
              <div className="text-cdi-silver">Founder: {CDI_BRAND.founder.name}</div>
              <div className="text-cdi-silver">COO: {CDI_BRAND.coo.name}</div>
            </div>

            <div className="pt-2">
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
            © 2026 <span className="text-cdi-silver">{CDI_BRAND.displayName}</span>. All rights reserved.
          </div>
          <div className="text-cdi-gold font-medium tracking-wider">
            ENGINEERED BY {CDI_BRAND.legalName}
          </div>
        </div>
      </div>
    </footer>
  );
}
