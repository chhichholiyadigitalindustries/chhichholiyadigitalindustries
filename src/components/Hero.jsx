import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Layers, Cpu, Globe, Terminal, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenProjectModal }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node & particle system
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
    const particles = [];
    const mouse = { x: null, y: null, radius: 140 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 1,
        color: Math.random() > 0.85 ? '#D6A33A' : '#A3A3A3',
        alpha: Math.random() * 0.5 + 0.2,
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.8;
            p.y -= (dy / dist) * force * 1.8;

            // Connect to mouse with subtle gold beam
            ctx.beginPath();
            ctx.strokeStyle = `rgba(214, 163, 58, ${force * 0.4})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color === '#D6A33A' ? `rgba(214, 163, 58, ${p.alpha})` : `rgba(216, 216, 216, ${p.alpha * 0.7})`;
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const opacity = (1 - dist / 130) * 0.18;
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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-cdi-black border-b border-white/5">
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
        aria-hidden="true"
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cdi-gold/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cdi-gold/30 bg-[#141414]/80 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(214,163,58,0.15)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cdi-gold animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-cdi-gold -ml-3.5" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-cdi-silver uppercase font-mono">
            CHHICHHOLIYA DIGITAL INDUSTRIES
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase font-display max-w-5xl mx-auto"
        >
          <span className="block text-metallic">WE ENGINEER</span>
          <span className="block text-gold-gradient drop-shadow-[0_4px_30px_rgba(214,163,58,0.25)]">
            DIGITAL POSSIBILITIES.
          </span>
        </motion.h1>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-cdi-silver-muted max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Building digital products, intelligent platforms and technology experiences designed for the next generation of business.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold text-cdi-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(214,163,58,0.4)] hover:shadow-[0_0_40px_rgba(214,163,58,0.6)] hover:scale-[1.02] transition-all duration-300 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141414] hover:bg-[#1A1A1A] border border-white/10 hover:border-cdi-silver text-cdi-white font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 transition-all duration-300"
          >
            <span>Explore CDI</span>
          </Link>
        </motion.div>

        {/* Secondary Micro-Copy Capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-cdi-silver-muted/80 uppercase font-mono tracking-widest"
        >
          <span className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-cdi-gold" /> Web
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cdi-gold" /> Mobile
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cdi-gold" /> AI
          </span>
          <span className="text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cdi-gold" /> Digital Platforms
          </span>
        </motion.div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center gap-2 pt-6"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-cdi-silver-muted uppercase font-mono">
          <span>DIGITAL TECHNOLOGY & PRODUCT ENGINEERING</span>
        </div>
      </motion.div>
    </section>
  );
}
