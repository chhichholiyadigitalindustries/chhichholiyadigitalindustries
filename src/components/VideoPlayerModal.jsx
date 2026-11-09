import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Calendar,
  Building2,
  Share2,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

export default function VideoPlayerModal({ 
  isOpen, 
  onClose, 
  project, 
  onOpenProjectModal 
}) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);

  // Reset state when project changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setProgress(0);
      setCurrentTime(0);
      setHasError(false);
      setIsMuted(true);
    }
  }, [isOpen, project]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Auto-hide controls during active playback
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    setCurrentTime(current);
    setDuration(total);
    setProgress(total > 0 ? (current / total) * 100 : 0);
  };

  const handleSeek = (e) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekFraction = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = seekFraction * duration;
    videoRef.current.currentTime = newTime;
    setProgress(seekFraction * 100);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/90 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl my-auto rounded-3xl bg-gradient-to-b from-[#141414] via-[#0D0D0D] to-[#080808] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.95)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Title & Close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cdi-gold animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-cdi-gold uppercase">
                {project.category} // PROJECT VIDEO DEMO
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-cdi-silver hover:text-cdi-white bg-white/5 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cdi-gold"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content Layout: Video Top/Left + Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Video Player Column */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              className="lg:col-span-8 bg-black relative flex items-center justify-center min-h-[300px] sm:min-h-[420px] aspect-video group overflow-hidden"
            >
              {project.videoType === 'youtube' ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.videoSrc}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={project.videoSrc}
                    poster={project.thumbnail}
                    autoPlay
                    playsInline
                    muted={isMuted}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    onError={() => setHasError(true)}
                    onClick={togglePlay}
                    className="w-full h-full object-contain cursor-pointer"
                  />

                  {/* Fallback Notice if Video URL is blocked or unreachable */}
                  {hasError && (
                    <div className="absolute inset-0 bg-[#0A0A0A]/95 flex flex-col items-center justify-center p-6 text-center z-20">
                      <div className="p-4 rounded-2xl bg-cdi-gold/10 border border-cdi-gold/30 text-cdi-gold mb-3">
                        <Play className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold text-cdi-white font-display uppercase">
                        Video Stream Offline or Local File Pending
                      </h4>
                      <p className="text-xs text-cdi-silver-muted max-w-md mt-2">
                        To play this demo video offline, save your MP4 file to{' '}
                        <code className="text-cdi-gold font-mono bg-white/5 px-1.5 py-0.5 rounded">
                          {project.localVideoFallback || 'public/assets/videos/'}
                        </code>
                      </p>
                      <button
                        onClick={() => {
                          setHasError(false);
                          if (videoRef.current) {
                            videoRef.current.load();
                            videoRef.current.play().catch(() => {});
                          }
                        }}
                        className="mt-4 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-cdi-white text-xs font-mono flex items-center gap-2"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Retry Playback</span>
                      </button>
                    </div>
                  )}

                  {/* Center Big Play Button Overlay when Paused */}
                  {!isPlaying && !hasError && (
                    <div 
                      onClick={togglePlay}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
                    >
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cdi-gold text-cdi-black flex items-center justify-center shadow-[0_0_40px_rgba(214,163,58,0.7)] hover:scale-110 transition-transform"
                      >
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                      </motion.div>
                    </div>
                  )}

                  {/* High-Tech Custom Video Controls Bar */}
                  <div 
                    className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 z-10 ${
                      showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* Scrubber Bar */}
                    <div 
                      onClick={handleSeek}
                      className="relative w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer transition-all mb-3 overflow-hidden group/scrub"
                    >
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-white rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between text-xs font-mono text-cdi-white">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="p-1.5 rounded-lg hover:bg-white/10 text-cdi-gold transition-colors"
                          aria-label={isPlaying ? 'Pause' : 'Play'}
                        >
                          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="p-1.5 rounded-lg hover:bg-white/10 text-cdi-silver hover:text-white transition-colors"
                          aria-label={isMuted ? 'Unmute' : 'Mute'}
                        >
                          {isMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-cdi-gold" />}
                        </button>

                        {/* Timestamp */}
                        <div className="text-[11px] text-cdi-silver-muted font-mono">
                          <span className="text-cdi-white">{formatTime(currentTime)}</span>
                          <span className="mx-1">/</span>
                          <span>{formatTime(duration) || project.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleFullscreen}
                          className="p-1.5 rounded-lg hover:bg-white/10 text-cdi-silver hover:text-white transition-colors"
                          aria-label="Toggle fullscreen"
                        >
                          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Project Details Column */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 max-h-[580px] overflow-y-auto border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0C0C0C]">
              <div className="space-y-4">
                
                {/* Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-cdi-gold/10 text-cdi-gold border border-cdi-gold/30 text-[10px] font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 text-cdi-silver border border-white/10 text-[10px] font-mono">
                    Year: {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-cdi-white font-display uppercase tracking-tight leading-snug">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-cdi-gold">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cdi-silver font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-cdi-silver-muted uppercase tracking-wider block mb-2">
                      Key Engineering Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-cdi-silver/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cdi-gold shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                {project.techStack && (
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-cdi-silver-muted uppercase tracking-wider block mb-2">
                      Engineered With:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-white/10 text-[10px] font-mono text-cdi-silver"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-[#141414] border border-white/5 text-center">
                        <span className="text-sm font-extrabold text-cdi-gold font-mono block">
                          {m.value}
                        </span>
                        <span className="text-[9px] font-mono text-cdi-silver-muted block truncate">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    if (onOpenProjectModal) {
                      onOpenProjectModal(project.category);
                    }
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(214,163,58,0.35)] hover:scale-[1.02] transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enquire About Similar Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[10px] font-mono text-center text-cdi-silver-muted">
                  Client: {project.client} • Engineered by CDI
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
