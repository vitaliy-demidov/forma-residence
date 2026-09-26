import React, { useState } from 'react';
import { Layers, Sparkles, Check } from 'lucide-react';
import { MATERIALS_COLLECTION } from '../data/residenceData';
import { MaterialItem } from '../types';

export const MaterialLibrary: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem>(MATERIALS_COLLECTION[0]);

  return (
    <section id="materials-section" className="py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1780px] mx-auto border-t border-white/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/10 gap-6">
        <div>
          <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
            MATERIAL HARMONY
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mt-2">
            Tactile Materiality
          </h2>
        </div>
        <p className="max-w-md text-stone-400 text-sm font-light leading-relaxed">
          The residence rejects ornamentation in favor of natural materials left honest and raw. Materials are chosen for how they age, patinate, and catch daylight over decades.
        </p>
      </div>

      {/* Swatches Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATERIALS_COLLECTION.map((mat) => {
          const isSelected = selectedMaterial.name === mat.name;
          return (
            <div
              key={mat.name}
              onClick={() => setSelectedMaterial(mat)}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#c9b99a] bg-stone-900/60 ring-1 ring-[#c9b99a]/50'
                  : 'border-white/10 hover:border-white/30 bg-[#121216]/50'
              }`}
            >
              <div>
                {/* Material Color Chip & Origin */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      style={{ backgroundColor: mat.colorHex }}
                      className="w-8 h-8 rounded-full border border-white/20 shadow-inner"
                    />
                    <span className="text-[10px] font-mono text-stone-400 tracking-wider">
                      {mat.colorHex}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="flex items-center space-x-1 text-[#c9b99a] text-[10px] font-mono uppercase tracking-widest">
                      <Check className="w-3.5 h-3.5" />
                      <span>SELECTED</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-light text-white">{mat.name}</h3>
                <p className="text-xs font-mono text-[#c9b99a] mt-1">{mat.origin}</p>
                <p className="text-xs text-stone-300 font-light mt-3 leading-relaxed">
                  {mat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between text-stone-400">
                  <span>Texture:</span>
                  <span className="text-stone-200">{mat.texture}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Finish:</span>
                  <span className="text-stone-200">{mat.finish}</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Application:</span>
                  <span className="text-stone-200">{mat.application}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
