import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Mail, 
  Phone, 
  Building, 
  User, 
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

const PROJECT_TYPES = [
  'Website',
  'Mobile App',
  'AI Product',
  'Business Software',
  'UI/UX',
  'Custom Technology',
  'Other',
];

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: preselectedService || 'Website',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a contact number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief overview of your project.';
    }
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

    const emailSubject = `🚀 New Project Inquiry: ${formData.name} [${formData.projectType}] - Ref #${generatedId}`;

    try {
      // Direct FormSubmit backend delivery straight to chhichholiyadigitalindustries@gmail.com
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
          "Company / Org": formData.company || "N/A",
          "Project Type": formData.projectType,
          "Project Scope & Requirements": formData.message,
          "Submission Source": "CDI Official Corporate Portal"
        })
      });
    } catch (err) {
      console.warn('FormSubmit background notification error:', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebratory gold confetti for client
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D6A33A', '#F2C45A', '#FFFFFF'],
      });
    } catch (err) {
      // Fallback gracefully
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-cdi-dark overflow-hidden border-t border-white/5">
      {/* Background Precision Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cdi-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cdi-gold/30 bg-[#121212] text-[11px] font-mono tracking-widest text-cdi-gold uppercase mb-4">
              <span>07 // Inquiries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-cdi-white font-display uppercase">
              LET'S BUILD <span className="text-gold-gradient">SOMETHING.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cdi-silver-muted max-w-md font-light leading-relaxed">
            Submit your project requirements. Our engineering team reviews all technical inquiries directly.
          </p>
        </div>

        {/* Contact Form & Architecture Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Context Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-cdi-white font-display">
                ENGINEERING CONSULTATION
              </h3>
              <p className="text-sm text-cdi-silver-muted leading-relaxed font-light">
                Whether you need a full-scale web ecosystem, a native mobile application, custom AI agents, or an enterprise SaaS platform, we provide architectural clarity and transparent scoping.
              </p>

              {/* Official Direct Email Card */}
              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-cdi-gold/30 flex flex-col gap-2">
                <span className="text-[11px] font-mono text-cdi-gold uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cdi-gold" /> Official Project Mailbox
                </span>
                <a
                  href="mailto:chhichholiyadigitalindustries@gmail.com"
                  className="text-xs sm:text-sm font-mono text-cdi-white hover:text-cdi-gold font-medium break-all transition-colors underline decoration-cdi-gold/40 underline-offset-4"
                >
                  chhichholiyadigitalindustries@gmail.com
                </a>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10">
                <div className="flex items-center gap-3 text-sm text-cdi-silver">
                  <div className="p-2 rounded-lg bg-[#1D1D1D] text-cdi-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Direct technical roadmap & feasibility review</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-cdi-silver">
                  <div className="p-2 rounded-lg bg-[#1D1D1D] text-cdi-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Strict NDA and IP protection standards</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-cdi-silver">
                  <div className="p-2 rounded-lg bg-[#1D1D1D] text-cdi-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>End-to-end milestone-based delivery</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 font-mono text-xs text-cdi-silver-muted">
                <span className="text-cdi-gold block font-semibold mb-1">// RESPONSE PROTOCOL</span>
                All inquiries sent to <span className="text-cdi-silver font-medium">chhichholiyadigitalindustries@gmail.com</span> receive an evaluation within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-cdi-gold/20 border border-cdi-gold flex items-center justify-center text-cdi-gold shadow-[0_0_30px_rgba(214,163,58,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-cdi-gold block mb-1">
                        Inquiry Submitted Successfully // Ref: {inquiryId}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-bold text-cdi-white font-display">
                        Thank You, {formData.name}!
                      </h4>
                      <p className="text-sm text-cdi-silver-muted max-w-md mx-auto mt-2 font-light leading-relaxed">
                        Your project details have been successfully received and delivered to our engineering team. We will review your scope and get in touch with you shortly at <span className="text-cdi-white font-medium">{formData.email}</span> / <span className="text-cdi-white font-medium">{formData.phone}</span>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#0D0D0D] border border-white/5 w-full max-w-md text-left text-xs font-mono space-y-1.5 text-cdi-silver-muted">
                      <div className="text-cdi-gold font-semibold mb-1">// SUBMISSION SUMMARY</div>
                      <div>• Name: <span className="text-cdi-white">{formData.name}</span></div>
                      <div>• Service: <span className="text-cdi-white">{formData.projectType}</span></div>
                      <div>• Phone: <span className="text-cdi-white">{formData.phone}</span></div>
                      <div>• Company: <span className="text-cdi-white">{formData.company || 'Not Specified'}</span></div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            projectType: 'Website',
                            message: '',
                          });
                        }}
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-cdi-gold to-cdi-gold-light text-cdi-black text-xs font-bold font-mono uppercase tracking-wider hover:shadow-[0_0_20px_rgba(214,163,58,0.4)] transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                          Your Name <span className="text-cdi-gold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Abhishek Sharma"
                            className={`w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border ${
                              errors.name ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-cdi-gold'
                            } text-cdi-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cdi-gold transition-all`}
                          />
                        </div>
                        {errors.name && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                          Work Email <span className="text-cdi-gold">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="abhishek@company.com"
                            className={`w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border ${
                              errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-cdi-gold'
                            } text-cdi-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cdi-gold transition-all`}
                          />
                        </div>
                        {errors.email && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                          Phone Number <span className="text-cdi-gold">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border ${
                            errors.phone ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-cdi-gold'
                          } text-cdi-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cdi-gold transition-all`}
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Enterprises Ltd."
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm placeholder:text-white/20 focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold transition-all"
                        />
                      </div>
                    </div>

                    {/* Project Type Dropdown */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                        Project Type <span className="text-cdi-gold">*</span>
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 text-cdi-white text-sm focus:outline-none focus:border-cdi-gold focus:ring-1 focus:ring-cdi-gold transition-all cursor-pointer"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#121212] text-cdi-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-cdi-silver mb-2">
                        Project Description & Scope <span className="text-cdi-gold">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your requirements, timeline, core features or objectives..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#0D0D0D] border ${
                          errors.message ? 'border-red-500/80 focus:ring-red-500' : 'border-white/10 focus:border-cdi-gold'
                        } text-cdi-white text-sm placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-cdi-gold transition-all resize-none`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-cdi-gold via-cdi-gold-light to-cdi-gold text-cdi-black font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(214,163,58,0.4)] hover:shadow-[0_0_35px_rgba(214,163,58,0.6)] transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 rounded-full border-2 border-cdi-black border-t-transparent animate-spin" />
                            <span>Processing Transmission...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Project Inquiry</span>
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
  );
}
