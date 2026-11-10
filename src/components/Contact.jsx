import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Mail,
  Phone,
  AlertCircle,
  AlertTriangle,
  MessageCircle,
} from 'lucide-react';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';
import {
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  validateEnquiryForm,
  buildEnquiryLinks,
  submitEnquiry,
} from '../utils/enquirySubmit';

export default function Contact({ preselectedService }) {
  const resolveService = (svc) =>
    SERVICE_OPTIONS.find((opt) => svc && opt.toLowerCase().includes(svc.toLowerCase())) ||
    SERVICE_OPTIONS[0];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: INDUSTRY_OPTIONS[0],
    service: resolveService(preselectedService),
    budget: BUDGET_OPTIONS[1],
    description: '',
    consent: false,
    websiteTrap: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
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
    const res = await submitEnquiry(formData, 'CDI Embedded Contact Section');
    const links = buildEnquiryLinks(formData, res.inquiryId);

    setSubmittedInfo({
      id: res.inquiryId,
      data: { ...formData },
      links,
    });

    if (res.delivered) {
      setStatus('success');
    } else {
      setStatusMessage(res.reason);
      setStatus('fallback');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-cdi-dark overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cdi-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>// Project Enquiry</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              DISCUSS YOUR <span className="text-gold-gradient">PROJECT.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            Serving manufacturers, industrial businesses, retailers, and MSMEs across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-cdi-white font-display uppercase">
                Direct Consultation
              </h3>
              <p className="text-sm text-cdi-silver-muted leading-relaxed font-light">
                Speak directly with our team about your business website, web portal, mobile app, billing software, or automation goals.
              </p>

              <a
                href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a project for my business.')}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0F1814] border border-emerald-500/35 hover:border-emerald-400 flex items-center gap-3 text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider block font-semibold">
                    WhatsApp Business Chat
                  </span>
                  <span className="text-xs font-mono text-cdi-white">+91 7232076778</span>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/10 space-y-2">
                <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Official Phone Numbers
                </span>
                <div className="flex flex-wrap gap-4 text-xs font-mono">
                  {CDI_BRAND.phones.map((p) => (
                    <a key={p.raw} href={p.tel} className="text-cdi-white hover:text-cdi-gold underline decoration-white/20 underline-offset-4">
                      {p.display}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/10 flex flex-col gap-1.5">
                <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Official Email
                </span>
                <a
                  href={`mailto:${CDI_BRAND.email}`}
                  className="text-xs font-mono text-cdi-white hover:text-cdi-gold break-all underline decoration-white/20 underline-offset-4"
                >
                  {CDI_BRAND.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {status === 'success' && submittedInfo ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center space-y-5"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold block mb-1">
                        Delivered // Ref: {submittedInfo.id}
                      </span>
                      <h4 className="text-2xl font-bold text-cdi-white font-display">
                        Thank You, {submittedInfo.data.name}!
                      </h4>
                      <p className="text-sm text-cdi-silver-muted max-w-md mx-auto mt-2">
                        Your enquiry has been sent to {CDI_BRAND.email}. We will follow up on {submittedInfo.data.phone}.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-6 py-2.5 rounded-full bg-cdi-gold text-cdi-black text-xs font-bold font-mono uppercase"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                ) : status === 'fallback' && submittedInfo ? (
                  <motion.div
                    key="fallback"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-6 space-y-5"
                  >
                    <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/35 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-cdi-silver leading-relaxed">
                        {statusMessage} Send your pre-filled enquiry directly using WhatsApp or Email below (Ref: {submittedInfo.id}).
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={submittedInfo.links.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3.5 px-5 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Send via WhatsApp</span>
                      </a>
                      <a
                        href={submittedInfo.links.mailtoUrl}
                        className="py-3.5 px-5 rounded-xl bg-cdi-gold text-black font-bold text-xs uppercase flex items-center justify-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send via Email App</span>
                      </a>
                    </div>
                    <button onClick={() => setStatus('idle')} className="text-xs font-mono text-cdi-silver-muted underline">
                      ← Back to Form
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <input
                      type="text"
                      name="websiteTrap"
                      value={formData.websiteTrap}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold"
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Company / Business
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Business Name"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold"
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold"
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Industry
                        </label>
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                        >
                          {INDUSTRY_OPTIONS.map((ind) => (
                            <option key={ind} value={ind} className="bg-[#121212]">
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Service *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
                        >
                          {SERVICE_OPTIONS.map((svc) => (
                            <option key={svc} value={svc} className="bg-[#121212]">
                              {svc}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                          Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-xs focus:outline-none focus:border-cdi-gold"
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-1.5">
                        Project Description *
                      </label>
                      <textarea
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Describe your requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold resize-none"
                      />
                      {errors.description && (
                        <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.description}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="flex items-start gap-2.5 text-xs text-cdi-silver-muted cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 rounded border-white/20 bg-[#0D0D0D] text-cdi-gold"
                        />
                        <span>
                          I consent to CDI using these details to respond to my enquiry per the{' '}
                          <Link to="/privacy" className="text-cdi-gold underline">
                            Privacy Policy
                          </Link>.
                        </span>
                      </label>
                      {errors.consent && (
                        <span className="text-[11px] text-red-400 mt-1 block">{errors.consent}</span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(214,163,58,0.4)] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{status === 'sending' ? 'Verifying & Sending...' : 'Send Project Enquiry'}</span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
