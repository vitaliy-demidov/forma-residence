import React from 'react';
import { X, Sparkles, MessageSquare, ShieldCheck, Ruler, Layers, Volume2, Sun } from 'lucide-react';
import { CurtainRoomVolume } from '../types';

interface RoomSpecDrawerProps {
  room: CurtainRoomVolume | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomSpecDrawer: React.FC<RoomSpecDrawerProps> = ({
  room,
  isOpen,
  onClose
}) => {
  if (!isOpen || !room) return null;

  const whatsappInquiry = encodeURIComponent(
    `Здравствуйте, MUAR A!\nИнтересует оформление текстилем по образцу проекта:\n` +
      `• Пространство: ${room.title} (${room.subtitle})\n` +
      `• Ткань: ${room.curtainSpec.fabricName}\n` +
      `• Складка: ${room.curtainSpec.pleatType} (${room.curtainSpec.fullnessRatio})\n` +
      `• Карниз: ${room.curtainSpec.motorization}\n` +
      `Прошу проконсультировать по стоимости и выезду дизайнера с образцами в Астане.`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-xl h-full bg-[#1D0E24] border-l border-[#C5A069]/30 p-6 sm:p-10 overflow-y-auto flex flex-col justify-between z-10 shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A069]/20">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#C5A069] uppercase">
                ТЕКСТИЛЬНАЯ СПЕЦИФИКАЦИЯ ОБЪЕКТА
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F7F4EF] mt-1">
                {room.title}
              </h3>
              <div className="text-xs font-mono text-[#D9BC8B] mt-0.5">
                {room.subtitle}
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-white/15 hover:border-[#C5A069] bg-[#23122B] flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Room Photo Preview */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-[#C5A069]/30 aspect-[16/9] relative group shadow-lg">
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs font-mono text-[#D9BC8B] uppercase">
                {room.number} · {room.curtainSpec.fullnessRatio}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-[#F7F4EF]/80 text-xs sm:text-sm font-sans leading-relaxed">
            {room.description}
          </p>

          {/* Technical Textile Specs Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="p-3.5 rounded-xl border border-white/10 bg-[#160B1C]">
              <div className="flex items-center space-x-2 text-[#C5A069] text-xs font-mono uppercase mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>Материал</span>
              </div>
              <p className="text-[#F7F4EF] text-xs font-medium">{room.curtainSpec.fabricName}</p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-[#160B1C]">
              <div className="flex items-center space-x-2 text-[#C5A069] text-xs font-mono uppercase mb-1">
                <Ruler className="w-3.5 h-3.5" />
                <span>Складка и пропорция</span>
              </div>
              <p className="text-[#F7F4EF] text-xs font-medium">{room.curtainSpec.pleatType}</p>
              <p className="text-[#D9BC8B] text-[10px] font-mono mt-0.5">{room.curtainSpec.fullnessRatio}</p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-[#160B1C]">
              <div className="flex items-center space-x-2 text-[#C5A069] text-xs font-mono uppercase mb-1">
                <Sun className="w-3.5 h-3.5" />
                <span>Светоизоляция</span>
              </div>
              <p className="text-[#F7F4EF] text-xs font-medium">{room.curtainSpec.lightBlockage}</p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-[#160B1C]">
              <div className="flex items-center space-x-2 text-[#C5A069] text-xs font-mono uppercase mb-1">
                <Volume2 className="w-3.5 h-3.5" />
                <span>Акустика</span>
              </div>
              <p className="text-[#F7F4EF] text-xs font-medium">{room.curtainSpec.acousticAbsorption}</p>
            </div>

            <div className="p-3.5 rounded-xl border border-white/10 bg-[#160B1C] sm:col-span-2">
              <div className="flex items-center space-x-2 text-[#C5A069] text-xs font-mono uppercase mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Карнизная трасса & Моторизация</span>
              </div>
              <p className="text-[#F7F4EF] text-xs font-medium">{room.curtainSpec.motorization}</p>
              <p className="text-[#F7F4EF]/60 text-[11px] font-sans mt-0.5">
                Тесьма: {room.curtainSpec.headingTape}
              </p>
            </div>
          </div>

          {/* Designer Quote */}
          <blockquote className="mt-6 p-4 rounded-xl border-l-2 border-[#C5A069] bg-[#23122B]/60 italic text-[#F7F4EF]/85 text-xs font-sans">
            "{room.quote}"
            <div className="not-italic text-[10px] font-mono text-[#D9BC8B] mt-2">
              — {room.designer}
            </div>
          </blockquote>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-6 border-t border-[#C5A069]/20 space-y-3">
          <a
            href={`https://wa.me/77015243141?text=${whatsappInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-[#C5A069] hover:bg-[#d9bc8b] text-[#160B1C] font-sans font-bold text-xs tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>ЗАКАЗАТЬ РАСЧЕТ ДЛЯ ЭТОГО ПРОСТРАНСТВА</span>
          </a>

          <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-[#F7F4EF]/50">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A069]" />
            <span>MUAR A · SINCE 2014 · АСТАНА</span>
          </div>
        </div>
      </div>
    </div>
  );
};
