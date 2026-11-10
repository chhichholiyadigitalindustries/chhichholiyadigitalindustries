import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const INTERACTIVE_SELECTOR = 'button, a, input, select, textarea, summary, [data-cursor-hover]';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible((prev) => (prev ? prev : true));
    };

    const handleMouseOver = (e) => {
      if (e.target instanceof Element && e.target.closest(INTERACTIVE_SELECTOR)) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target instanceof Element &&
        e.target.closest(INTERACTIVE_SELECTOR) &&
        !(e.relatedTarget instanceof Element && e.relatedTarget.closest(INTERACTIVE_SELECTOR))
      ) {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-cdi-gold shadow-[0_0_8px_#D6A33A]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cdi-gold/40 bg-cdi-gold/5"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 14),
          y: mousePosition.y - (isHovered ? 24 : 14),
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? 'rgba(242, 196, 90, 0.8)' : 'rgba(214, 163, 58, 0.35)',
          backgroundColor: isHovered ? 'rgba(214, 163, 58, 0.12)' : 'rgba(214, 163, 58, 0.03)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.2 }}
      />
    </>
  );
}
