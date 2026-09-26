import React from 'react';
import { Quote, Sparkles, ShieldCheck, SunDim } from 'lucide-react';

export const ArchitecturalMonograph: React.FC = () => {
  return (
    <section id="monograph-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
          SPATIAL PHILOSOPHY
        </span>
        <h2 className="text-4xl sm:text-6xl font-serif italic text-white mt-4 font-normal leading-tight">
          "A residence should unfold not as isolated boxes, but as one continuous spatial sequence."
        </h2>
        <p className="mt-6 text-stone-400 font-mono text-xs uppercase tracking-widest">
          FORMA MONOGRAPH 04 • PRINCIPAL ARCHITECT'S NOTE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="p-8 rounded-xl border border-white/10 bg-[#121215]/50 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#c9b99a] mb-6">
              <SunDim className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              PRINCIPLE 01
            </span>
            <h3 className="text-xl font-light text-white mt-2">
              The Solar Choreography
            </h3>
            <p className="mt-4 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Every opening is calculated to track the sun from the low morning light entering the Primary Suite to the deep golden dusk washing over the Grand View terrace.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-stone-400">
            Passive Solar Absorption • Net-Zero Ready
          </div>
        </div>

        <div className="p-8 rounded-xl border border-white/10 bg-[#121215]/50 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#c9b99a] mb-6">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              PRINCIPLE 02
            </span>
            <h3 className="text-xl font-light text-white mt-2">
              Monolithic Thermal Mass
            </h3>
            <p className="mt-4 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              In-situ cast board-formed concrete provides natural structural thermal flywheel performance, stabilizing indoor comfort without forced ventilation air currents.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-stone-400">
            Acoustic Isolation: STC 62 • In-Slab Hydronic Cooling
          </div>
        </div>

        <div className="p-8 rounded-xl border border-white/10 bg-[#121215]/50 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] flex items-center justify-center text-[#c9b99a] mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-stone-400 uppercase">
              PRINCIPLE 03
            </span>
            <h3 className="text-xl font-light text-white mt-2">
              The Vanishing Envelope
            </h3>
            <p className="mt-4 text-stone-300 text-xs sm:text-sm font-light leading-relaxed">
              Flush floor thresholds and motorized pocket glass elements ensure that interior volume dissolves into open landscape with zero visual friction.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono text-stone-400">
            Zero-Threshold Tracks • Triple Glazing
          </div>
        </div>
      </div>
    </section>
  );
};
