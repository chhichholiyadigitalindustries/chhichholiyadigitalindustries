import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Services',
    path: '/services',
    children: [
      { name: 'All Engineering Services', path: '/services' },
      { name: 'Website Development India', path: '/website-development-company-india' },
      { name: 'Manufacturing Websites', path: '/manufacturing-website-development' },
      { name: 'Industrial & B2B Websites', path: '/industrial-website-development' },
      { name: 'Web Application Development', path: '/web-application-development' },
      { name: 'Mobile App Development', path: '/mobile-app-development' },
      { name: 'AI Solutions & Automation', path: '/ai-solutions-automation' },
      { name: 'Business Software', path: '/business-software-development' },
      { name: 'Digital Solutions for MSMEs', path: '/digital-solutions-for-msme' },
    ],
  },
  { name: 'Products', path: '/products' },
  { name: 'Work', path: '/work' },
  { name: 'Industries', path: '/industries' },
  { name: 'Engineering', path: '/engineering' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'cdi-glass-nav py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-b border-white/10'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* CDI Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cdi-gold rounded-lg p-1 shrink-0"
            aria-label="Chhichholiya Digital Industries Home"
          >
            <div className="relative h-9 sm:h-10 flex items-center">
              <BrandLogo
                alt="Chhichholiya Digital Industries (CDI) Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                fetchPriority="high"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-0.5 bg-[#101010]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-3.5 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-colors duration-200 rounded-full flex items-center gap-1 ${
                        isActive ? 'text-cdi-white font-semibold' : 'text-cdi-silver-muted hover:text-cdi-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.div
                            layoutId="activeNavIndicator"
                            className="absolute inset-0 bg-white/10 rounded-full border border-cdi-gold/40 shadow-[0_0_12px_rgba(214,163,58,0.25)]"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="w-3 h-3 relative z-10 opacity-70" />
                      </>
                    )}
                  </NavLink>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="p-2 rounded-2xl bg-[#111111]/98 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-0.5">
                          {item.children.map((sub) => (
                            <NavLink
                              key={sub.path}
                              to={sub.path}
                              className={({ isActive }) =>
                                `block px-3.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                                  isActive
                                    ? 'bg-cdi-gold/15 text-cdi-gold'
                                    : 'text-cdi-silver hover:bg-white/5 hover:text-cdi-white'
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-colors duration-200 rounded-full ${
                      isActive ? 'text-cdi-white font-semibold' : 'text-cdi-silver-muted hover:text-cdi-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute inset-0 bg-white/10 rounded-full border border-cdi-gold/40 shadow-[0_0_12px_rgba(214,163,58,0.25)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </>
                  )}
                </NavLink>
              )
            )}
          </nav>

          {/* Header Actions */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={getWhatsAppUrl('Hello CDI Team, I would like to enquire about digital services for my business.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with CDI on WhatsApp"
              className="p-2.5 rounded-full border border-emerald-500/30 bg-[#121212] hover:bg-emerald-500/10 hover:border-emerald-400 text-emerald-400 transition-all"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="relative group px-5 py-2.5 rounded-full overflow-hidden text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-cdi-gold/50 bg-gradient-to-r from-[#171717] to-[#121212] hover:border-cdi-gold hover:shadow-[0_0_20px_rgba(214,163,58,0.35)] text-cdi-white flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cdi-gold/20 via-transparent to-cdi-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-3.5 h-3.5 text-cdi-gold transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cdi-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={CDI_BRAND.phones[0].tel}
              aria-label={`Call CDI at ${CDI_BRAND.phones[0].display}`}
              className="p-2 rounded-lg text-cdi-gold bg-white/5 border border-white/10 sm:hidden"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cdi-silver hover:text-cdi-white hover:bg-white/5 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cdi-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cdi-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl xl:hidden flex flex-col gap-6 max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <div key={item.name}>
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base font-medium tracking-wide flex items-center justify-between py-2.5 border-b border-white/5 ${
                        isActive ? 'text-cdi-gold font-semibold' : 'text-cdi-silver hover:text-cdi-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-cdi-silver-muted font-mono">0{idx + 1}</span>
                    </NavLink>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-1.5 border-b border-white/5">
                        {item.children.slice(1).map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1 text-xs text-cdi-silver-muted hover:text-cdi-gold"
                          >
                            → {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(214,163,58,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a business website or software project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#141414] border border-emerald-500/40 text-emerald-400 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
