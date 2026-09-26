import React from 'react';
import { X, ArrowUpRight, Compass, Eye } from 'lucide-react';
import { RESIDENCE_ROOMS } from '../data/residenceData';
import { RoomSpec } from '../types';

interface RoomGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRoom: (index: number) => void;
  activeRoomIndex: number;
}

export const RoomGridModal: React.FC<RoomGridModalProps> = ({
  isOpen,
  onClose,
  onSelectRoom,
  activeRoomIndex
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-7xl max-h-[92vh] bg-[#0e0e11] border border-white/10 rounded-2xl p-6 sm:p-10 lg:p-12 overflow-y-auto flex flex-col z-10 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono tracking-widest text-[#c9b99a] uppercase">
                RESIDENCE DIRECTORY
              </span>
              <span className="text-xs font-mono text-stone-500">•</span>
              <span className="text-xs font-mono text-stone-400">8 ARCHITECTURAL VOLUMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-white mt-1">
              Residential Interiors Index
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/15 hover:border-white/50 bg-white/5 flex items-center justify-center text-stone-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESIDENCE_ROOMS.map((room, idx) => {
            const isActive = activeRoomIndex === idx;
            return (
              <div
                key={room.id}
                onClick={() => {
                  onSelectRoom(idx);
                  onClose();
                }}
                className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-500 relative flex flex-col justify-between ${
                  isActive
                    ? 'border-[#c9b99a] ring-1 ring-[#c9b99a]/50 bg-stone-900/60'
                    : 'border-white/10 hover:border-white/30 bg-[#141418]/60 hover:bg-[#181820]'
                }`}
              >
                {/* Image Aspect Box */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-stone-300">
                    {room.index}
                  </div>

                  {isActive && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#c9b99a] text-black text-[9px] font-mono font-semibold tracking-widest uppercase">
                      CURRENT
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#c9b99a] uppercase">
                      {room.number}
                    </span>
                    <h4 className="text-lg font-light text-white group-hover:text-stone-200 mt-1 transition-colors">
                      {room.title}
                    </h4>
                    <p className="text-xs text-stone-400 font-light mt-1.5 line-clamp-2">
                      {room.tagline}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-stone-400 group-hover:text-white transition-colors">
                    <span>{room.specs.area}</span>
                    <span className="flex items-center space-x-1 text-[#c9b99a] group-hover:translate-x-1 transition-transform">
                      <span>ENTER ROOM</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <span>SELECT ANY VOLUME TO JUMP DIRECTLY INTO THE WALKTHROUGH</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 text-stone-300 hover:text-white uppercase tracking-widest text-[11px] transition-colors"
          >
            RETURN TO RESIDENCE
          </button>
        </div>
      </div>
    </div>
  );
};
