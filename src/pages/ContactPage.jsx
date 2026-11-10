import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Send,
  CheckCircle2,
  Sparkles,
  Mail,
  Phone,
  Building2,
  Clock,
  ChevronDown,
  AlertCircle,
  MessageCircle,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SeoHead from '../components/SeoHead';
import { CORE_SEO_PAGES } from '../data/seoConfig';
import { CDI_BRAND, getWhatsAppUrl } from '../config/brand';
import {
  INDUSTRY_OPTIONS,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  validateEnquiryForm,
  buildEnquiryLinks,
  submitEnquiry,
} from '../utils/enquirySubmit';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialServiceParam = searchParams.get('service');

  const matchedService =
    SERVICE_OPTIONS.find(
      (opt) => initialServiceParam && opt.toLowerCase().includes(initialServiceParam.toLowerCase())
    ) || SERVICE_OPTIONS[0];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: INDUSTRY_OPTIONS[0],
    service: matchedService,
    budget: BUDGET_OPTIONS[1],
    description: '',
    consent: false,
    websiteTrap: '',
  });

  useEffect(() => {
    if (initialServiceParam) {
      const match = SERVICE_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(initialServiceParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [initialServiceParam]);

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
    const validationErrors = validateEnquiryForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setStatusMessage('');

    const result = await submitEnquiry(formData, 'CDI Official Contact Page');
    const links = buildEnquiryLinks(formData, result.inquiryId);

    setSubmittedInfo({
      id: result.inquiryId,
      data: { ...formData },
      links,
    });

    if (result.delivered) {
      setStatus('success');
      try {
        const confettiModule = await import('canvas-confetti');
        confettiModule.default({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D6A33A', '#F2C45A', '#FFFFFF'],
        });
      } catch {
        // Ignore optional visual confetti failure
      }
    } else {
      setStatusMessage(result.reason);
      setStatus('fallback');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: INDUSTRY_OPTIONS[0],
      service: SERVICE_OPTIONS[0],
      budget: BUDGET_OPTIONS[1],
      description: '',
      consent: false,
      websiteTrap: '',
    });
    setErrors({});
    setSubmittedInfo(null);
    setStatus('idle');
    setStatusMessage('');
  };

  const seo = CORE_SEO_PAGES['/contact'];

  return (
    <div className="overflow-hidden bg-cdi-black text-cdi-white">
      <SeoHead
        route={seo.route}
        title={seo.title}
        description={seo.description}
        breadcrumbs={seo.breadcrumbs}
      />

      <PageHeader
        eyebrow="CONTACT // DISCUSS YOUR PROJECT"
        title="START A PROJECT"
        highlightTitle="WITH CDI."
        description="Share your business requirements for a website, web application, mobile app, custom software, or AI automation. Serving businesses across India."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact' },
        ]}
      />

      <section className="relative py-20 sm:py-28 bg-cdi-dark border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Verified Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-white/10 shadow-2xl space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cdi-gold uppercase tracking-widest block mb-2">
                    DIRECT BUSINESS CHANNELS
                  </span>
                  <h2 className="text-2xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                    {CDI_BRAND.legalName}
                  </h2>
                  <p className="text-xs font-mono text-cdi-gold mt-1">
                    {CDI_BRAND.positioning}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-cdi-silver-muted font-light leading-relaxed">
                  We work directly with manufacturers, industrial suppliers, MSMEs, retailers, and startups across India through transparent remote engineering consultations.
                </p>

                <div className="space-y-3.5 pt-4 border-t border-white/5">
                  {/* WhatsApp Quick CTA */}
                  <a
                    href={getWhatsAppUrl('Hello CDI Team, I would like to discuss a project requirement.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-[#0F1814] border border-emerald-500/35 hover:border-emerald-400 flex items-center justify-between gap-3 transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                          DIRECT WHATSAPP ENQUIRY
                        </span>
                        <span className="text-xs font-mono text-cdi-white">
                          Chat directly on +91 7232076778
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-emerald-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {/* Official Phone Numbers */}
                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 space-y-2.5">
                    <span className="text-[11px] font-mono text-cdi-silver-muted uppercase tracking-wider flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-cdi-gold" />
                      <span>BUSINESS CONTACT NUMBERS</span>
                    </span>
                    <div className="flex flex-col gap-2">
                      {CDI_BRAND.phones.map((phone) => (
                        <a
                          key={phone.raw}
                          href={phone.tel}
                          className="text-sm font-mono text-cdi-white hover:text-cdi-gold transition-colors flex items-center justify-between"
                        >
                          <span>{phone.display}</span>
                          <span className="text-[10px] text-cdi-silver-muted">Tap to Call</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-cdi-gold shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono text-cdi-silver-muted uppercase tracking-wider block">
                        OFFICIAL EMAIL
                      </span>
                      <a
                        href={`mailto:${CDI_BRAND.email}`}
                        className="text-xs font-mono text-cdi-white hover:text-cdi-gold transition-colors underline decoration-white/20 underline-offset-4 break-all"
                      >
                        {CDI_BRAND.email}
                      </a>
                    </div>
                  </div>

                  {/* Leadership & Registration */}
                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <Building2 className="w-5 h-5 text-cdi-gold shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs font-mono text-cdi-silver">
                      <span className="text-[11px] text-cdi-silver-muted uppercase tracking-wider block">
                        LEADERSHIP &amp; STANDING
                      </span>
                      <p>Founder: {CDI_BRAND.founder.name}</p>
                      <p>COO: {CDI_BRAND.coo.name}</p>
                      <p className="text-cdi-gold">{CDI_BRAND.registrationLabel}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0F0F0F] border border-white/5 flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-cdi-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-cdi-silver-muted uppercase tracking-wider block">
                        ENQUIRY RESPONSE
                      </span>
                      <p className="text-xs font-mono text-cdi-silver">
                        Direct requirement review &amp; scoping call scheduled within 1 business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Validated Lead Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0A0A0A] border border-cdi-gold/40 shadow-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {status === 'success' && submittedInfo ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-8 space-y-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div>
                        <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-2">
                          DELIVERY CONFIRMED // REF: {submittedInfo.id}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-cdi-white font-display uppercase">
                          Thank You, {submittedInfo.data.name}
                        </h2>
                      </div>

                      <p className="text-sm text-cdi-silver max-w-md mx-auto font-light leading-relaxed">
                        Your enquiry has been transmitted to <span className="text-cdi-gold font-mono">{CDI_BRAND.email}</span>. Our team will reach out via <span className="text-cdi-white font-mono">{submittedInfo.data.phone}</span> or email.
                      </p>

                      <div className="p-5 rounded-2xl bg-[#0F0F0F] border border-white/10 text-left text-xs font-mono space-y-2 max-w-md mx-auto text-cdi-silver-muted">
                        <div className="flex justify-between gap-4 border-b border-white/5 pb-1.5">
                          <span>INDUSTRY:</span>
                          <span className="text-cdi-white text-right">{submittedInfo.data.industry}</span>
                        </div>
                        <div className="flex justify-between gap-4 border-b border-white/5 pb-1.5">
                          <span>SERVICE:</span>
                          <span className="text-cdi-white text-right">{submittedInfo.data.service}</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span>BUDGET:</span>
                          <span className="text-cdi-white text-right">{submittedInfo.data.budget}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={submittedInfo.links.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono uppercase tracking-wider hover:bg-emerald-600/30 transition-colors flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Also Share on WhatsApp</span>
                        </a>
                        <button
                          onClick={handleReset}
                          className="px-6 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#222] border border-white/10 text-cdi-white text-xs font-mono uppercase tracking-wider transition-colors"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </motion.div>
                  ) : status === 'fallback' && submittedInfo ? (
                    <motion.div
                      key="fallback"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-6 space-y-6"
                    >
                      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/35 flex items-start gap-4">
                        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                        <div className="space-y-1.5">
                          <h3 className="text-base font-bold text-cdi-white font-display uppercase">
                            Automatic Relay Unconfirmed — Send Directly in One Click
                          </h3>
                          <p className="text-xs text-cdi-silver leading-relaxed">
                            {statusMessage} We will never show a fake confirmation—use either direct button below so your specification reaches CDI immediately (Ref: {submittedInfo.id}).
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a
                          href={submittedInfo.links.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Send Pre-Filled via WhatsApp</span>
                        </a>

                        <a
                          href={submittedInfo.links.mailtoUrl}
                          className="py-4 px-6 rounded-2xl bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Open Pre-Filled Email App</span>
                        </a>
                      </div>

                      <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/10 text-xs font-mono text-cdi-silver space-y-1">
                        <div>Or call us directly:</div>
                        <div className="flex flex-wrap gap-4 pt-1">
                          {CDI_BRAND.phones.map((p) => (
                            <a key={p.raw} href={p.tel} className="text-cdi-gold underline">
                              {p.display}
                            </a>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => setStatus('idle')}
                        className="text-xs font-mono text-cdi-silver-muted hover:text-cdi-white underline"
                      >
                        ← Edit Form Details
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="border-b border-white/10 pb-4">
                        <span className="text-xs font-mono text-cdi-gold uppercase tracking-widest block mb-1">
                          PROJECT ENQUIRY SPECIFICATION
                        </span>
                        <h2 className="text-2xl font-extrabold text-cdi-white font-display uppercase tracking-tight">
                          DISCUSS YOUR PROJECT
                        </h2>
                      </div>

                      {/* Anti-spam honeypot */}
                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="websiteTrap">Leave blank</label>
                        <input
                          id="websiteTrap"
                          type="text"
                          name="websiteTrap"
                          tabIndex={-1}
                          autoComplete="off"
                          value={formData.websiteTrap}
                          onChange={handleChange}
                        />
                      </div>

                      {errors.form && (
                        <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{errors.form}</span>
                        </div>
                      )}

                      {/* Name & Business */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Your Name <span className="text-cdi-gold">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Rajesh Verma"
                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold placeholder:text-white/25"
                          />
                          {errors.name && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.name}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-company" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Business / Company Name
                          </label>
                          <input
                            id="contact-company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. Verma Precision Industries"
                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold placeholder:text-white/25"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Email Address <span className="text-cdi-gold">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@business.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold placeholder:text-white/25"
                          />
                          {errors.email && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.email}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-phone" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Phone / WhatsApp Number <span className="text-cdi-gold">*</span>
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold placeholder:text-white/25"
                          />
                          {errors.phone && (
                            <span className="text-[11px] text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> {errors.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Industry & Service */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-industry" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Industry / Business Type
                          </label>
                          <div className="relative">
                            <select
                              id="contact-industry"
                              name="industry"
                              value={formData.industry}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold appearance-none cursor-pointer"
                            >
                              {INDUSTRY_OPTIONS.map((ind) => (
                                <option key={ind} value={ind} className="bg-[#121212]">
                                  {ind}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-cdi-silver-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-service" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                            Required Service
                          </label>
                          <div className="relative">
                            <select
                              id="contact-service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold appearance-none cursor-pointer"
                            >
                              {SERVICE_OPTIONS.map((svc) => (
                                <option key={svc} value={svc} className="bg-[#121212]">
                                  {svc}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-cdi-silver-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      {/* Approximate Budget */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-budget" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                          Approximate Project Budget
                        </label>
                        <div className="relative">
                          <select
                            id="contact-budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold appearance-none cursor-pointer"
                          >
                            {BUDGET_OPTIONS.map((bgt) => (
                              <option key={bgt} value={bgt} className="bg-[#121212]">
                                {bgt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-cdi-silver-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-description" className="text-xs font-mono uppercase tracking-wider text-cdi-silver block">
                          Project Description &amp; Requirements <span className="text-cdi-gold">*</span>
                        </label>
                        <textarea
                          id="contact-description"
                          name="description"
                          rows={4}
                          required
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Tell us what you need built (e.g., manufacturing product catalogue, B2B web portal, custom billing software, mobile app)..."
                          className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/15 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold placeholder:text-white/25 resize-none"
                        />
                        {errors.description && (
                          <span className="text-[11px] text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.description}
                          </span>
                        )}
                      </div>

                      {/* Consent Checkbox */}
                      <div className="space-y-1">
                        <label className="flex items-start gap-3 text-xs text-cdi-silver-muted cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-0.5 rounded border-white/20 bg-[#0D0D0D] text-cdi-gold focus:ring-cdi-gold"
                          />
                          <span>
                            I agree to share these details with {CDI_BRAND.displayName} so the team can contact me regarding this project enquiry. See our{' '}
                            <Link to="/privacy" className="text-cdi-gold underline">
                              Privacy Policy
                            </Link>.
                          </span>
                        </label>
                        {errors.consent && (
                          <span className="text-[11px] text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.consent}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={status === 'sending'}
                          className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold-dark text-cdi-black font-bold uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(214,163,58,0.35)] transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {status === 'sending' ? (
                            <>
                              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                              <span>VERIFYING &amp; SENDING ENQUIRY...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              <span>SUBMIT PROJECT ENQUIRY</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
