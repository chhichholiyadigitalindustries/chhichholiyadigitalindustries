import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Vision({ onOpenProjectModal }) {
  return (
    <section className="relative py-32 sm:py-44 bg-cdi-dark overflow-hidden border-t border-white/5">
      {/* Immersive Dark Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cdi-gold/10 blur-[180px] rounded-full pointer-events-none" />

      {/* Subtle Background Monogram Silhouette */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <BrandLogo
          alt=""
          loading="lazy"
          className="w-[800px] max-w-full h-auto object-contain filter grayscale"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#161616] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Long-Term Vision</span>
        </motion.div>

        {/* Large Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight uppercase font-display text-cdi-white"
        >
          THE NEXT DIGITAL INDUSTRY <br className="hidden sm:inline" />
          <span className="text-gold-gradient">IS BEING BUILT NOW.</span>
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-base sm:text-xl md:text-2xl text-cdi-silver-muted font-light leading-relaxed max-w-3xl mx-auto"
        >
          CDI exists to turn ambitious ideas into technology that can create lasting value. We are committed to engineering products that power businesses forward across India and global markets.
        </motion.p>
      </div>
    </section>
  );
}
