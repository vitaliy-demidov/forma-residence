import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { CURTAIN_VOLUMES } from '../data/muarData';

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
      <div className="relative w-full max-w-7xl max-h-[92vh] bg-[#1D0E24] border border-[#C5A069]/30 rounded-3xl p-6 sm:p-10 lg:p-12 overflow-y-auto flex flex-col z-10 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-8 border-b border-[#C5A069]/20">
          <div>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono tracking-widest text-[#C5A069] uppercase">
                КАТАЛОГ ПРОЕКТОВ MUAR A
              </span>
              <span className="text-xs font-mono text-white/30">•</span>
              <span className="text-xs font-mono text-[#D9BC8B]">8 КУТЮРНЫХ ПРОСТРАНСТВ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F4EF] mt-1">
              Реализованные интерьеры в Астане
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/15 hover:border-[#C5A069] bg-[#23122B] flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURTAIN_VOLUMES.map((room, idx) => {
            const isActive = activeRoomIndex === idx;
            return (
              <div
                key={room.id}
                onClick={() => {
                  onSelectRoom(idx);
                  onClose();
                }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? 'border-[#C5A069] ring-1 ring-[#C5A069] bg-[#23122B]'
                    : 'border-white/10 hover:border-[#C5A069]/50 bg-[#160B1C]/80 hover:bg-[#23122B]/70'
                }`}
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160B1C] via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#160B1C]/80 backdrop-blur-md border border-[#C5A069]/30 text-[10px] font-mono tracking-widest text-[#D9BC8B]">
                    {room.index}
                  </div>

                  {isActive && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#C5A069] text-[#160B1C] text-[9px] font-mono font-bold tracking-widest uppercase">
                      ВЫБРАНО
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#C5A069] uppercase">
                      {room.subtitle}
                    </span>
                    <h4 className="font-serif text-lg text-[#F7F4EF] group-hover:text-[#D9BC8B] mt-1 transition-colors">
                      {room.title}
                    </h4>
                    <p className="text-xs text-[#F7F4EF]/70 font-sans mt-1.5 line-clamp-2">
                      {room.curtainSpec.fabricName}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#F7F4EF]/60 group-hover:text-white transition-colors">
                    <span>{room.curtainSpec.fullnessRatio}</span>
                    <span className="flex items-center space-x-1 text-[#C5A069] group-hover:translate-x-1 transition-transform">
                      <span>ПЕРЕЙТИ</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 pt-6 border-t border-[#C5A069]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F7F4EF]/60">
          <span>ВЫБЕРИТЕ ПРОСТРАНСТВО ДЛЯ ПЕРЕМЕЩЕНИЯ В 3D-КИНЕМАТИКУ</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-[#C5A069]/30 hover:border-[#C5A069] text-[#D9BC8B] uppercase tracking-widest text-[11px] transition-colors"
          >
            ВЕРНУТЬСЯ В АТЕЛЬЕ
          </button>
        </div>
      </div>
    </div>
  );
};
