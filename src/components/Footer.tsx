import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090b] py-16 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto text-stone-400">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
        <div>
          <span className="font-sans text-2xl font-light tracking-[0.28em] text-white uppercase">
            FORMA
          </span>
          <p className="text-xs font-mono text-stone-500 mt-2">
            A RESIDENCE, UNFOLDING IN ONE CONTINUOUS TAKE.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs font-mono tracking-widest uppercase">
          <a href="#walkthrough-section" className="hover:text-white transition-colors">
            Residence
          </a>
          <a href="#blueprint-section" className="hover:text-white transition-colors">
            Blueprint
          </a>
          <a href="#materials-section" className="hover:text-white transition-colors">
            Materiality
          </a>
          <a href="#studio-section" className="hover:text-white transition-colors">
            Monograph
          </a>
          <a href="#inquiry-section" className="hover:text-white transition-colors">
            Commissions
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 text-xs font-mono tracking-widest text-stone-300 hover:text-white transition-colors uppercase"
        >
          <span>BACK TO SUMMIT</span>
          <ArrowUp className="w-4 h-4 text-[#c9b99a]" />
        </button>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-stone-500 gap-4">
        <span>© 2026 FORMA SPATIAL ARCHITECTURE STUDIO. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center space-x-6">
          <span>AD100 ARCHITECTURE HONOREE</span>
          <span>•</span>
          <span>BIG SUR / KYOTO / ENGADIN</span>
        </div>
      </div>
    </footer>
  );
};
