import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, AlertTriangle, MessageCircle, Mail, Phone } from 'lucide-react';
import { CDI_BRAND } from '../config/brand';
import {
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  validateEnquiryForm,
  buildEnquiryLinks,
  submitEnquiry,
} from '../utils/enquirySubmit';

export default function ProjectModal({ isOpen, onClose, defaultService }) {
  const resolveService = (svc) =>
    SERVICE_OPTIONS.find((opt) => svc && opt.toLowerCase().includes(svc.toLowerCase())) ||
    SERVICE_OPTIONS[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: INDUSTRY_OPTIONS[0],
    service: resolveService(defaultService),
    budget: BUDGET_OPTIONS[1],
    description: '',
    consent: true,
    websiteTrap: '',
  });

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: resolveService(defaultService),
      }));
    }
  }, [isOpen, defaultService]);

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'fallback'
  const [statusMessage, setStatusMessage] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateEnquiryForm(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setStatus('sending');
    const res = await submitEnquiry(formData, 'CDI Quick Project Modal');
    const links = buildEnquiryLinks(formData, res.inquiryId);

    setSubmittedInfo({
      id: res.inquiryId,
      data: { ...formData },
      links,
    });

    if (res.delivered) {
      setStatus('success');
      try {
        const confettiModule = await import('canvas-confetti');
        confettiModule.default({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.5 },
          colors: ['#D6A33A', '#F2C45A', '#FFFFFF'],
        });
      } catch {}
    } else {
      setStatusMessage(res.reason);
      setStatus('fallback');
    }
  };

  const handleClose = () => {
    setStatus('idle');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#121212] border border-cdi-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 z-10 overflow-hidden my-auto"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-cdi-gold/10 rounded-full blur-[80px] pointer-events-none" />

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cdi-silver hover:text-cdi-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {status === 'success' && submittedInfo ? (
            <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-widest block">
                  Enquiry Verified &amp; Delivered // Ref: {submittedInfo.id}
                </span>
                <h4 className="text-2xl font-bold text-cdi-white font-display mt-1">
                  Thank You, {submittedInfo.data.name}!
                </h4>
                <p className="text-xs sm:text-sm text-cdi-silver-muted max-w-md mx-auto mt-2 leading-relaxed">
                  Your project details have been delivered to {CDI_BRAND.email}. We will contact you shortly on {submittedInfo.data.phone}.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 justify-center">
                <a
                  href={submittedInfo.links.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Also Chat on WhatsApp</span>
                </a>
                <button
                  onClick={handleClose}
                  className="px-7 py-2.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : status === 'fallback' && submittedInfo ? (
            <div className="py-4 space-y-5">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/35 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-cdi-white uppercase font-display">
                    Direct Delivery Verification Unavailable
                  </h4>
                  <p className="text-xs text-cdi-silver mt-1">
                    {statusMessage} Send your pre-filled enquiry directly using WhatsApp or Email below (Ref: {submittedInfo.id}):
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={submittedInfo.links.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>
                <a
                  href={submittedInfo.links.mailtoUrl}
                  className="py-3.5 px-5 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email App</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-cdi-silver-muted pt-2 border-t border-white/10">
                <a href={CDI_BRAND.phones[0].tel} className="inline-flex items-center gap-1.5 text-cdi-gold">
                  <Phone className="w-3.5 h-3.5" /> {CDI_BRAND.phones[0].display}
                </a>
                <button onClick={() => setStatus('idle')} className="underline hover:text-white">
                  Back to Form
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5 pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-cdi-gold/30 bg-[#1A1A1A] text-[10px] font-mono tracking-widest text-cdi-gold uppercase mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Discuss Your Project</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-cdi-white font-display">
                  PROJECT SPECIFICATION ENQUIRY
                </h3>
                <p className="text-xs text-cdi-silver-muted mt-1 font-light">
                  Share your requirements to discuss timelines, scope, and technology architecture with CDI.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                <input
                  type="text"
                  name="websiteTrap"
                  value={formData.websiteTrap}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Business / Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                    />
                    {errors.phone && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold cursor-pointer"
                    >
                      {INDUSTRY_OPTIONS.map((ind) => (
                        <option key={ind} value={ind} className="bg-[#121212]">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#121212]">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Est. Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold cursor-pointer"
                    >
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b} className="bg-[#121212]">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                    Project Requirements *
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Briefly describe what your business needs..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold resize-none"
                  />
                  {errors.description && (
                    <span className="text-[10px] text-red-400 mt-0.5 block">{errors.description}</span>
                  )}
                </div>

                <label className="flex items-center gap-2 text-[11px] text-cdi-silver-muted cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="rounded border-white/20 bg-[#0A0A0A] text-cdi-gold"
                  />
                  <span>I authorize CDI to contact me regarding this project enquiry.</span>
                </label>
                {errors.consent && <span className="text-[10px] text-red-400 block">{errors.consent}</span>}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(214,163,58,0.4)] disabled:opacity-50"
                  >
                    {status === 'sending' ? (
                      <span>Verifying &amp; Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Project Spec</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
