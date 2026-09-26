import React from 'react';
import { ArrowUpRight, Award, Trophy } from 'lucide-react';
import { STUDIO_PROJECTS, STUDIO_STATS } from '../data/residenceData';

export const StudioWorks: React.FC = () => {
  return (
    <section id="studio-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto border-t border-white/10">
      {/* Studio Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 border-b border-white/10">
        {STUDIO_STATS.map((s, i) => (
          <div key={i} className="text-left">
            <span className="text-[10px] font-mono tracking-widest text-[#c9b99a] uppercase">
              {s.label}
            </span>
            <p className="text-2xl sm:text-3xl font-light text-white mt-1">
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Selected Works Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between py-12 gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
            PORTFOLIO HIGHLIGHTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
            Selected Residences
          </h2>
        </div>
        <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed">
          Each commission is an unrepeatable response to its site, climate, and client rhythm. We accept a maximum of four residential projects per calendar year.
        </p>
      </div>

      {/* Works Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {STUDIO_PROJECTS.map((proj, idx) => (
          <div
            key={idx}
            className="group rounded-xl overflow-hidden border border-white/10 bg-[#121216] hover:border-white/30 transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-stone-300 uppercase">
                {proj.year} • {proj.type}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-[#c9b99a]">
                  {proj.location}
                </span>
                <span className="text-xs font-mono text-stone-400">{proj.sqft}</span>
              </div>
              <h3 className="text-2xl font-light text-white mt-2 group-hover:text-stone-200 transition-colors">
                {proj.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-light mt-3 leading-relaxed">
                {proj.description}
              </p>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-stone-400 group-hover:text-white transition-colors">
                <span>VIEW MONOGRAPH</span>
                <ArrowUpRight className="w-4 h-4 text-[#c9b99a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
