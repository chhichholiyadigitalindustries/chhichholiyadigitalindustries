import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Work', path: '/work' },
  { name: 'Technology', path: '/technology' },
  { name: 'Industries', path: '/industries' },
  { name: 'Engineering', path: '/engineering' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar({ onOpenProjectModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'cdi-glass-nav py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.85)] border-b border-white/10'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* CDI Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cdi-gold rounded-lg p-1"
            aria-label="Chhichholiya Digital Industries Home"
          >
            <div className="relative h-10 sm:h-11 flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/cdi-logo.png`}
                alt="Chhichholiya Digital Industries Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-[#101010]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 text-[11px] tracking-wider uppercase font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? 'text-cdi-white font-semibold'
                      : 'text-cdi-silver-muted hover:text-cdi-white'
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
            ))}
          </nav>

          {/* Header Action: Start a Project */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative group px-5 py-2.5 rounded-full overflow-hidden text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-cdi-gold/50 bg-gradient-to-r from-[#171717] to-[#121212] hover:border-cdi-gold hover:shadow-[0_0_20px_rgba(214,163,58,0.35)] text-cdi-white flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cdi-gold/20 via-transparent to-cdi-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-3.5 h-3.5 text-cdi-gold transition-transform group-hover:rotate-12" />
              <span className="relative z-10">Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cdi-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center xl:hidden">
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
            <nav className="flex flex-col gap-3">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium tracking-wide flex items-center justify-between py-2 border-b border-white/5 ${
                      isActive ? 'text-cdi-gold font-semibold' : 'text-cdi-silver hover:text-cdi-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-cdi-silver-muted font-mono">0{idx + 1}</span>
                  </NavLink>
                );
              })}
            </nav>

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(214,163,58,0.4)]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
