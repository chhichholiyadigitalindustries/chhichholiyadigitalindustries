import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const SERVICE_OPTIONS = [
  'Web Engineering',
  'Mobile Applications',
  'AI & Intelligent Systems',
  'Digital Products / SaaS',
  'UI / UX Engineering',
  'Custom Enterprise Technology',
  'BrandX Inquiry',
];

export default function ProjectModal({ isOpen, onClose, defaultService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || 'Web Engineering',
    timeline: 'Within 1-2 Months',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Valid email is required.';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.message.trim()) errs.message = 'Please provide a short brief.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const generatedId = `CDI-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(generatedId);

    const emailSubject = `🚀 New Project Spec: ${formData.name} [${formData.service}] - Ref #${generatedId}`;

    try {
      await fetch("https://formsubmit.co/ajax/chhichholiyadigitalindustries@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: emailSubject,
          _replyto: formData.email,
          _captcha: "false",
          _template: "table",
          "Reference ID": generatedId,
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Client Phone": formData.phone,
          "Requested Service": formData.service,
          "Project Requirements": formData.message,
          "Submission Source": "CDI Quick Project Modal"
        })
      });
    } catch (err) {
      console.warn('Modal submit error:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#D6A33A', '#F2C45A', '#FFFFFF'],
      });
    } catch (err) {}
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#121212] border border-cdi-gold/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-cdi-gold/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-cdi-silver hover:text-cdi-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-cdi-gold/20 border border-cdi-gold flex items-center justify-center text-cdi-gold shadow-[0_0_25px_rgba(214,163,58,0.4)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-widest block">
                  Inquiry Submitted Successfully // Ref: {inquiryId}
                </span>
                <h4 className="text-2xl font-bold text-cdi-white font-display mt-1">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs sm:text-sm text-cdi-silver-muted max-w-md mx-auto mt-2 leading-relaxed">
                  Your project requirements have been received by our engineering team. We will review the details and contact you shortly at <span className="text-cdi-white font-medium">{formData.email}</span> / <span className="text-cdi-white font-medium">{formData.phone}</span>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/5 w-full max-w-md text-left text-xs font-mono space-y-1 text-cdi-silver-muted">
                <div>• Service: <span className="text-cdi-white">{formData.service}</span></div>
                <div>• Phone: <span className="text-cdi-white">{formData.phone}</span></div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-8 py-2.5 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(214,163,58,0.4)] transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-cdi-gold/30 bg-[#1A1A1A] text-[10px] font-mono tracking-widest text-cdi-gold uppercase mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Start a Project</span>
                </div>
                <h3 className="text-2xl font-bold text-cdi-white font-display">
                  ENGINEER YOUR NEXT PRODUCT
                </h3>
                <p className="text-xs sm:text-sm text-cdi-silver-muted mt-1 font-light">
                  Provide initial details to receive an architectural scope and technical estimate.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold"
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold"
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold"
                    />
                    {errors.phone && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-cdi-silver mb-1">
                      Primary Service *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#121212]">
                          {svc}
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
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you want to engineer..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0A0A] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold resize-none"
                  />
                  {errors.message && <span className="text-[10px] text-red-400 mt-0.5 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(214,163,58,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Queueing Transmission...</span>
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
