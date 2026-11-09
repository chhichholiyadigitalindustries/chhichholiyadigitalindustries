import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export default function CTA({ onOpenProjectModal }) {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-cdi-black overflow-hidden border-t border-white/5">
      {/* Background Animated Monogram Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <motion.img
          src={`${import.meta.env.BASE_URL}assets/cdi-logo.png`}
          alt=""
          className="w-[700px] max-w-full object-contain filter drop-shadow-[0_0_50px_#D6A33A]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cdi-gold/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#141414] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Initiate Collaboration</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase font-display text-cdi-white">
          HAVE AN IDEA? <br className="hidden sm:inline" />
          <span className="text-gold-gradient">LET'S ENGINEER IT.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-6 text-base sm:text-lg text-cdi-silver-muted font-light max-w-2xl mx-auto leading-relaxed">
          Tell us what you're building. We'll help turn the concept into a scalable, high-performance digital product.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold text-cdi-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(214,163,58,0.4)] hover:shadow-[0_0_40px_rgba(214,163,58,0.6)] hover:scale-[1.02] transition-all group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#contact"
            onClick={handleContactClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] hover:bg-[#1C1C1C] border border-white/15 hover:border-cdi-gold text-cdi-white font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 transition-all"
          >
            <MessageSquare className="w-4 h-4 text-cdi-gold" />
            <span>Contact CDI</span>
          </a>
        </div>
      </div>
    </section>
  );
}
