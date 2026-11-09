import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Film, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Filter
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import VideoPlayerModal from '../components/VideoPlayerModal';
import { WORK_PROJECTS, WORK_CATEGORIES, WORK_STATS } from '../data/workGalleryData';

export default function WorkPage({ onOpenProjectModal }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideoProject, setSelectedVideoProject] = useState(null);

  // Filter projects by both category and search query
  const filteredProjects = useMemo(() => {
    return WORK_PROJECTS.filter((project) => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery = 
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.techStack.some(t => t.toLowerCase().includes(query)) ||
        project.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="overflow-hidden">
      {/* 1. HERO HEADER */}
      <PageHeader
        eyebrow="WORK GALLERY & VIDEO SHOWCASE"
        title="ENGINEERED WORK &"
        highlightTitle="VIDEO DEMOS"
        description="Step inside our engineering showcase. Watch authentic video walkthroughs of production web architectures, Android POS systems, conversational AI engines, and enterprise platforms built by Chhichholiya Digital Industries."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Work Gallery', path: '/work' }
        ]}
      />

      {/* 2. STATS BAR */}
      <section className="relative py-12 bg-[#090909] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {WORK_STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#111111] border border-white/5 text-center space-y-1"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-mono block">
                  {stat.value}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-cdi-white font-display uppercase tracking-wide">
                  {stat.label}
                </h4>
                <p className="text-[11px] font-mono text-cdi-silver-muted">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER BAR */}
      <section className="relative py-10 bg-cdi-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {WORK_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 border ${
                      isActive
                        ? 'bg-cdi-gold text-cdi-black border-cdi-gold font-bold shadow-[0_0_15px_rgba(214,163,58,0.3)]'
                        : 'bg-[#121212] text-cdi-silver border-white/10 hover:border-cdi-gold/40 hover:text-cdi-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cdi-silver-muted" />
              <input
                type="text"
                placeholder="Search projects or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#121212] border border-white/10 focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold text-xs font-mono text-cdi-white placeholder:text-cdi-silver-muted/60 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-xs font-mono text-cdi-silver-muted">
            <span>Showing {filteredProjects.length} of {WORK_PROJECTS.length} Work Showcases</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-cdi-gold hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 4. MAIN VIDEO GALLERY GRID */}
      <section className="relative py-20 sm:py-28 bg-cdi-black min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {filteredProjects.length === 0 ? (
            <div className="p-16 rounded-3xl bg-[#111] border border-white/10 text-center max-w-lg mx-auto space-y-4">
              <Film className="w-12 h-12 text-cdi-gold/50 mx-auto" />
              <h3 className="text-xl font-bold text-cdi-white font-display uppercase">
                No Video Projects Found
              </h3>
              <p className="text-xs font-mono text-cdi-silver-muted">
                No work matches your query "{searchQuery}". Try selecting "All" or a different category.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 rounded-full bg-cdi-gold text-cdi-black text-xs font-mono uppercase font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="rounded-3xl bg-gradient-to-b from-[#141414] via-[#101010] to-[#0A0A0A] border border-white/10 hover:border-cdi-gold/50 transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-2xl"
                  >
                    {/* Video Poster with Play Button */}
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

                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-cdi-gold/90 text-cdi-black flex items-center justify-center shadow-[0_0_30px_rgba(214,163,58,0.6)] group-hover:scale-110 group-hover:bg-cdi-gold transition-all duration-300">
                          <Play className="w-6 h-6 fill-current ml-1" />
                        </div>
                      </div>

                      {/* Badges on Video Top */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cdi-gold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-cdi-white flex items-center gap-1">
                          <Clock className="w-3 h-3 text-cdi-gold" />
                          <span>{project.duration}</span>
                        </span>
                      </div>

                      {/* Client info */}
                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="text-[11px] font-mono text-cdi-silver/90">
                          {project.client}
                        </span>
                      </div>
                    </div>

                    {/* Information Area */}
                    <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <h3 
                          onClick={() => setSelectedVideoProject(project)}
                          className="text-lg sm:text-xl font-bold text-cdi-white font-display uppercase tracking-tight group-hover:text-cdi-gold transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs text-cdi-silver-muted font-light leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Deliverables Bullet list */}
                      <div className="space-y-1.5 pt-1">
                        {project.highlights.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-cdi-silver/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#181818] border border-white/5 text-[10px] font-mono text-cdi-silver-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Metrics strip */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                          {project.metrics.map((m, i) => (
                            <div key={i} className="p-1.5 rounded-lg bg-[#141414] text-center">
                              <span className="text-xs font-mono font-bold text-cdi-gold block">
                                {m.value}
                              </span>
                              <span className="text-[9px] font-mono text-cdi-silver-muted block truncate">
                                {m.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Bar */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedVideoProject(project)}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cdi-gold hover:text-cdi-gold-light transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Watch Video Demo</span>
                        </button>

                        <button
                          onClick={() => onOpenProjectModal && onOpenProjectModal(project.category)}
                          className="text-xs font-mono text-cdi-silver hover:text-cdi-white flex items-center gap-1"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-cdi-gold" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

        </div>
      </section>

      {/* 5. ENGINEERING APPROACH SECTION */}
      <section className="relative py-28 bg-[#090909] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                <Cpu className="w-3.5 h-3.5" />
                <span>CDI DELIVERY METHODOLOGY</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                HOW WE DELIVER <br />
                <span className="text-gold-gradient">PRODUCTION EXCELLENCE</span>
              </h2>
              <p className="text-sm sm:text-base text-cdi-silver font-light leading-relaxed">
                Every video demo in this gallery represents clean software architecture, automated testing pipelines, and real user verification. We engineer digital products from ground-up without brittle templates.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cdi-gold/10 border border-cdi-gold/30 text-cdi-gold shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cdi-white font-display uppercase">
                      Architecture Before Code
                    </h4>
                    <p className="text-xs text-cdi-silver-muted mt-1 leading-relaxed">
                      Rigorous technical specifications, data models, and system sequence diagrams prior to sprint development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-cdi-gold/10 border border-cdi-gold/30 text-cdi-gold shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-cdi-white font-display uppercase">
                      Hardware & Network Resilience
                    </h4>
                    <p className="text-xs text-cdi-silver-muted mt-1 leading-relaxed">
                      Zero-crash offline billing, WebUSB/Bluetooth thermal printing, and dynamic network caching built for Indian connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-cdi-gold/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest">
                    READY FOR YOUR PROJECT?
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                  Let's Engineer Your Digital Platform.
                </h3>

                <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                  Have a web application, Android app, or AI-powered solution you need built with engineering precision? Talk directly with CDI.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onOpenProjectModal && onOpenProjectModal('Web Engineering')}
                    className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(214,163,58,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Start a Project Specification</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/contact"
                    className="px-6 py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#222] border border-white/10 text-cdi-white text-xs font-mono uppercase tracking-wider transition-colors text-center"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Video Modal */}
      <VideoPlayerModal
        isOpen={Boolean(selectedVideoProject)}
        onClose={() => setSelectedVideoProject(null)}
        project={selectedVideoProject}
        onOpenProjectModal={onOpenProjectModal}
      />
    </div>
  );
}
