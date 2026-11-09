import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ 
  eyebrow, 
  title, 
  highlightTitle, 
  description,
  breadcrumbs = [{ name: 'Home', path: '/' }]
}) {
  return (
    <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-24 bg-cdi-black overflow-hidden border-b border-white/5">
      {/* Background Precision Grid & Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cdi-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-cdi-silver-muted mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.name}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-cdi-gold transition-colors">
                  {crumb.name}
                </Link>
              ) : (
                <span className="text-cdi-silver">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Eyebrow Chip */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-5"
          >
            <span>{eyebrow}</span>
          </motion.div>
        )}

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-cdi-white font-display uppercase leading-[1.08] max-w-4xl"
        >
          {title}{' '}
          {highlightTitle && (
            <span className="text-gold-gradient block sm:inline">
              {highlightTitle}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-cdi-silver-muted font-normal leading-relaxed max-w-3xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
