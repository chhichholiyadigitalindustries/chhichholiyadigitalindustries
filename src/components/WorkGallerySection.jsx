import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Film, 
  Layers, 
  Clock, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { WORK_PROJECTS, WORK_CATEGORIES } from '../data/workGalleryData';
import VideoPlayerModal from './VideoPlayerModal';

export default function WorkGallerySection({ onOpenProjectModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideoProject, setSelectedVideoProject] = useState(null);

  // Filter projects based on active tab
  const filteredProjects = activeCategory === 'All' 
    ? WORK_PROJECTS 
    : WORK_PROJECTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="relative py-28 sm:py-36 bg-cdi-black border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cdi-gold/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>03 // WORK GALLERY — ENGINEERING IN MOTION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
              REAL SYSTEMS. <span className="text-gold-gradient">WATCH OUR WORK.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-cdi-silver-muted font-light max-w-2xl leading-relaxed">
              Explore live video demonstrations and architectural walkthroughs of software, AI products, and mobile experiences engineered by CDI.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cdi-gold hover:text-cdi-gold-light transition-colors group shrink-0"
          >
            <span>EXPLORE FULL GALLERY ({WORK_PROJECTS.length} VIDEOS)</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {WORK_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-cdi-gold text-cdi-black border-cdi-gold font-bold shadow-[0_0_15px_rgba(214,163,58,0.3)]'
                    : 'bg-[#121212] text-cdi-silver border-white/10 hover:border-cdi-gold/40 hover:text-cdi-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, 6).map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-3xl bg-gradient-to-b from-[#141414] via-[#101010] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Video Preview Card / Thumbnail */}
                <div 
                  onClick={() => setSelectedVideoProject(project)}
                  className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer"
                >
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-cdi-gold/90 text-cdi-black flex items-center justify-center shadow-[0_0_30px_rgba(214,163,58,0.6)] group-hover:scale-110 group-hover:bg-cdi-gold transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cdi-gold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cdi-white flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cdi-gold" />
                      <span>{project.duration}</span>
                    </span>
                  </div>

                  {/* Bottom Strip on Thumbnail */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <span className="text-[11px] font-mono text-cdi-silver/80">
                      Client: {project.client}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <h3 
                      onClick={() => setSelectedVideoProject(project)}
                      className="text-lg font-bold text-cdi-white font-display uppercase tracking-tight group-hover:text-cdi-gold transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-cdi-silver-muted font-light line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#181818] border border-white/5 text-[10px] font-mono text-cdi-silver-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-transparent text-[10px] font-mono text-cdi-gold">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedVideoProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cdi-gold hover:text-cdi-gold-light transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Demo Video</span>
                    </button>
                    <span className="text-xs font-mono text-white/20">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#101010] to-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-cdi-gold/10 border border-cdi-gold/30 text-cdi-gold flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-cdi-white font-display uppercase">
                Need a Custom Digital Platform or Mobile App?
              </h4>
              <p className="text-xs text-cdi-silver-muted font-light">
                We engineer scalable web platforms, POS billing engines, and AI systems tailored to your business.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/work"
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#181818] hover:bg-[#222] border border-white/10 text-cdi-white text-xs font-mono uppercase tracking-wider transition-colors text-center"
            >
              All Video Demos →
            </Link>
            <button
              onClick={() => onOpenProjectModal && onOpenProjectModal('Web Engineering')}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(214,163,58,0.3)] hover:scale-105 transition-all text-center"
            >
              Start a Project
            </button>
          </div>
        </div>

      </div>

      {/* Embedded Video Modal */}
      <VideoPlayerModal
        isOpen={Boolean(selectedVideoProject)}
        onClose={() => setSelectedVideoProject(null)}
        project={selectedVideoProject}
        onOpenProjectModal={onOpenProjectModal}
      />
    </section>
  );
}
