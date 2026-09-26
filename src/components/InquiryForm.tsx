import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const InquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    scope: 'Full Interior Architecture & Construction',
    budget: '$5M – $10M',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
            COMMISSIONS & INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
            Initiate a Dialogue
          </h2>
          <p className="mt-6 text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            FORMA accepts a limited number of private residential commissions worldwide. We provide full-scope interior architecture, custom furniture curation, spatial lighting design, and construction oversight.
          </p>

          <div className="mt-10 space-y-6 border-t border-white/10 pt-8 text-xs font-mono">
            <div>
              <span className="text-stone-500 uppercase tracking-widest block mb-1">
                STUDIO LOCATIONS
              </span>
              <p className="text-stone-300">540 W 26th Street, Chelsea, New York, NY 10001</p>
              <p className="text-stone-300">Rämistrasse 34, 8001 Zürich, Switzerland</p>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-widest block mb-1">
                DIRECT INQUIRIES
              </span>
              <p className="text-stone-200">commissions@forma-studios.com</p>
              <p className="text-stone-400">+1 (212) 840-9200</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl border border-white/10 bg-[#101014] relative">
          {submitted ? (
            <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-light text-white">Inquiry Received</h3>
              <p className="text-stone-400 text-sm max-w-md mx-auto">
                Thank you for your interest in FORMA. A studio partner will review your project brief and reply within two business days.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-stone-300 hover:text-white"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="E.g. Elena Rostova"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#c9b99a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="elena@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#c9b99a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                    PROJECT SITE / LOCATION *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="E.g. Aspen, CO / Lake Como, Italy"
                    className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#c9b99a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                    PROJECT SCOPE
                  </label>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#141418] border border-white/10 text-white text-sm focus:outline-none focus:border-[#c9b99a] transition-colors"
                  >
                    <option>Full Architecture & Construction</option>
                    <option>Interior Architecture & Curation</option>
                    <option>Complete Residential Renovation</option>
                    <option>Commercial / Cultural Commission</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                  ESTIMATED CAPITAL BUDGET
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['$2M – $5M', '$5M – $10M', '$10M+'].map((tier) => (
                    <button
                      key={tier}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: tier })}
                      className={`py-2.5 rounded-lg text-xs font-mono tracking-wider border transition-all ${
                        formData.budget === tier
                          ? 'border-[#c9b99a] bg-[#c9b99a]/10 text-white font-medium'
                          : 'border-white/10 text-stone-400 hover:border-white/30'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-widest text-stone-400 uppercase mb-2">
                  PROJECT VISION & ASPIRATIONS
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the site topography, intended timeline, and your architectural aspirations..."
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-[#c9b99a] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[#c9b99a] transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <span>TRANSMIT COMMISSION BRIEF</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
