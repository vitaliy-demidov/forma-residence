import React from 'react';
import { X, Maximize2, Compass, Layers, Sun, Armchair, Sparkles } from 'lucide-react';
import { RoomSpec } from '../types';

interface RoomSpecDrawerProps {
  room: RoomSpec | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomSpecDrawer: React.FC<RoomSpecDrawerProps> = ({
  room,
  isOpen,
  onClose
}) => {
  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="relative w-full max-w-xl h-full bg-[#111114] border-l border-white/10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#c9b99a] uppercase">
                ARCHITECTURAL SPECIFICATION
              </span>
              <h3 className="text-3xl font-light tracking-wide text-white mt-1">
                {room.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/15 hover:border-white/40 bg-white/5 flex items-center justify-center text-stone-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Room Image Preview */}
          <div className="mt-8 rounded-lg overflow-hidden border border-white/10 aspect-[16/9] relative group">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-mono tracking-widest text-stone-300 uppercase">
                {room.number} • {room.tagline}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-6 text-stone-300 text-sm sm:text-base font-light leading-relaxed">
            {room.description}
          </p>

          {/* Architectural Specs Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded border border-white/10 bg-white/[0.02]">
              <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono uppercase tracking-wider mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#c9b99a]" />
                <span>Dimensions & Volume</span>
              </div>
              <p className="text-white text-sm font-medium">{room.specs.area}</p>
              <p className="text-stone-400 text-xs mt-0.5">Ceiling: {room.specs.ceiling}</p>
            </div>

            <div className="p-4 rounded border border-white/10 bg-white/[0.02]">
              <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono uppercase tracking-wider mb-1">
                <Sun className="w-3.5 h-3.5 text-[#c9b99a]" />
                <span>Solar Exposure</span>
              </div>
              <p className="text-white text-sm font-medium">{room.specs.exposure}</p>
            </div>

            <div className="p-4 rounded border border-white/10 bg-white/[0.02] sm:col-span-2">
              <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c9b99a]" />
                <span>Lighting Architecture</span>
              </div>
              <p className="text-stone-200 text-xs sm:text-sm font-light leading-relaxed">
                {room.specs.lighting}
              </p>
            </div>
          </div>

          {/* Materiality Palette */}
          <div className="mt-8">
            <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-[#c9b99a]" />
              <span>Material Palette</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {room.specs.materials.map((mat, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-mono tracking-wider border border-white/15 bg-white/[0.03] text-stone-200"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Furniture & Curation */}
          <div className="mt-8">
            <div className="flex items-center space-x-2 text-stone-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Armchair className="w-3.5 h-3.5 text-[#c9b99a]" />
              <span>Curation & Custom Furniture</span>
            </div>
            <ul className="space-y-2">
              {room.specs.furniture.map((furn, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-stone-300 font-light flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9b99a]/80"></span>
                  <span>{furn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architectural Quote */}
          <blockquote className="mt-10 p-5 border-l-2 border-[#c9b99a] bg-white/[0.02] italic text-stone-300 text-sm">
            "{room.quote}"
          </blockquote>
        </div>

        {/* Footer actions */}
        <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] font-mono text-stone-400 uppercase tracking-widest">
            FORMA RESIDENCE ARCHIVE
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};
