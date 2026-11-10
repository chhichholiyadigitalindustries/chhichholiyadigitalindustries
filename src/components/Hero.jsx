import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Layers,
  Cpu,
  Globe,
  Terminal,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { getWhatsAppUrl } from '../config/brand';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Lighter particle count on mobile for faster INP and lower battery drain
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 24 : Math.min(Math.floor(window.innerWidth / 24), 55);
    const particles = [];
    const mouse = { x: null, y: null, radius: 130 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.9,
        color: Math.random() > 0.82 ? '#D6A33A' : '#A3A3A3',
        alpha: Math.random() * 0.45 + 0.2,
      });
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      if (document.visibilityState === 'hidden') {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.5;
            p.y -= (dy / dist) * force * 1.5;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(214, 163, 58, ${force * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          p.color === '#D6A33A'
            ? `rgba(214, 163, 58, ${p.alpha})`
            : `rgba(216, 216, 216, ${p.alpha * 0.65})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 15000) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / 122.5) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(216, 216, 216, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-cdi-black border-b border-white/5"
    >
      {/* Pure CSS Precision Grid (Zero Canvas CPU Overhead) */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-75"
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] bg-cdi-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[360px] h-[360px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cdi-gold/35 bg-[#141414]/90 backdrop-blur-md mb-7 shadow-[0_0_15px_rgba(214,163,58,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cdi-gold" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-cdi-silver uppercase font-mono">
            CHHICHHOLIYA DIGITAL INDUSTRIES (CDI)
          </span>
        </motion.div>

        {/* Main H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight leading-[1.06] uppercase font-display max-w-5xl mx-auto"
        >
          <span className="block text-metallic">WE ENGINEER</span>
          <span className="block text-gold-gradient drop-shadow-[0_4px_30px_rgba(214,163,58,0.25)]">
            DIGITAL POSSIBILITIES.
          </span>
        </motion.h1>

        {/* Clear Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-cdi-silver/90 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          A digital technology &amp; product engineering company building business websites, custom web applications, mobile apps, business software, and AI automation systems for manufacturers, MSMEs, retailers, and enterprises across India.
        </motion.p>

        {/* Service Area Pill */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-cdi-gold tracking-wider uppercase">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>Serving Businesses Across India via Dedicated Digital Delivery</span>
        </div>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold text-cdi-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(214,163,58,0.4)] hover:shadow-[0_0_40px_rgba(214,163,58,0.6)] hover:scale-[1.02] transition-all duration-300 group"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/15 hover:border-cdi-silver text-cdi-white font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 transition-all duration-300"
          >
            <span>Explore Our Services</span>
          </Link>

          <a
            href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a digital project for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#0F1814] hover:bg-[#13241D] border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Enquiry</span>
          </a>
        </motion.div>

        {/* Secondary Capabilities Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-cdi-silver-muted uppercase font-mono tracking-widest"
        >
          <Link to="/website-development-company-india" className="flex items-center gap-1.5 hover:text-cdi-gold transition-colors">
            <Globe className="w-3.5 h-3.5 text-cdi-gold" /> Business Websites
          </Link>
          <span className="text-white/20">•</span>
          <Link to="/mobile-app-development" className="flex items-center gap-1.5 hover:text-cdi-gold transition-colors">
            <Layers className="w-3.5 h-3.5 text-cdi-gold" /> Mobile Apps
          </Link>
          <span className="text-white/20">•</span>
          <Link to="/ai-solutions-automation" className="flex items-center gap-1.5 hover:text-cdi-gold transition-colors">
            <Cpu className="w-3.5 h-3.5 text-cdi-gold" /> AI &amp; Automation
          </Link>
          <span className="text-white/20">•</span>
          <Link to="/business-software-development" className="flex items-center gap-1.5 hover:text-cdi-gold transition-colors">
            <Terminal className="w-3.5 h-3.5 text-cdi-gold" /> Business Software
          </Link>
        </motion.div>
      </div>

      {/* Bottom Descriptor */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 pt-8">
        <div className="text-[10px] sm:text-[11px] tracking-[0.22em] text-cdi-silver-muted uppercase font-mono text-center px-4">
          DIGITAL TECHNOLOGY &amp; PRODUCT ENGINEERING COMPANY • UDYAM REGISTERED MSME
        </div>
      </div>
    </section>
  );
}
