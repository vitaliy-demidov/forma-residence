import React from 'react';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';

interface EditorialTextileHeroProps {
  onBrowseFabrics: () => void;
  onSelectCategory: (category: 'curtains' | 'bedding' | 'b2b') => void;
}

export const EditorialTextileHero: React.FC<EditorialTextileHeroProps> = ({
  onBrowseFabrics,
  onSelectCategory,
}) => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-8 max-w-[1580px] mx-auto overflow-hidden">
      {/* Hero Top Grid: Left Editorial Typography & Right Large Interior Photo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headline, Subheadline & 2 Pill CTAs (5 cols) */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8 z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#B88E52]/25 text-[#B88E52] text-[11px] font-mono tracking-widest uppercase">
            <Sparkles className="w-3 h-3" />
            <span>SINCE 2014 · АСТАНА · СОБСТВЕННЫЙ ЦЕХ 350 М²</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#221C16] leading-[1.08] tracking-tight">
            Элегантный текстиль для{' '}
            <span className="italic font-normal text-[#B88E52] block sm:inline">
              роскошных интерьеров
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#6C6256] leading-relaxed max-w-lg">
            Преображаем пространства премиальным текстилем с 2014 года. 
            Кутюрный пошив портьер с идеальной волной 1:2.0, моторизация Somfy 
            и более 7 000 образцов европейских тканей.
          </p>

          {/* 2 Exact Pill Buttons as in Pinterest Reference */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={onBrowseFabrics}
              className="px-7 py-3.5 rounded-full bg-white hover:bg-[#F5F0E8] text-[#221C16] border border-[#B88E52]/30 font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              КАТАЛОГ ТКАНЕЙ
            </button>

            <a
              href="https://wa.me/77015243141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20MUAR%20A!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%88%D1%82%D0%BE%D1%80%D0%B0%D0%BC"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#EADCCB] hover:bg-[#decaba] text-[#3A2F24] border border-[#B88E52]/20 font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
            >
              СВЯЗАТЬСЯ В WHATSAPP
            </a>
          </div>
        </div>

        {/* Right Column: Hero Interior Image (7 cols) */}
        <div className="lg:col-span-7 relative">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/11] sm:aspect-[16/10] shadow-2xl border border-[#B88E52]/20 group">
            <img
              src="/assets/muar/case-bedroom-couture-new.webp"
              alt="Кутюрные шторы и покрывала MUAR A"
              className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000"
            />
            {/* Subtle luxury warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Float badge at bottom right */}
            <div className="absolute bottom-5 right-5 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-[#B88E52]/30 text-xs font-mono text-[#221C16] shadow-lg">
              <span className="text-[#B88E52] font-semibold">РЕЗИДЕНЦИЯ АСТАНА</span> · ВОЛНА 1:2.0
            </div>
          </div>
        </div>
      </div>

      {/* 3 Exact Product Category Cards (Overlapping/Floating below Hero) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 sm:mt-16">
        {/* Card 1: DRAPERIES */}
        <div
          onClick={() => onSelectCategory('curtains')}
          className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#B88E52]/20 shadow-lg cursor-pointer bg-white"
        >
          <img
            src="/assets/muar/case-astana-lounge-new.webp"
            alt="Портьеры и шторы"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white tracking-wide uppercase mb-1">
              ПОРТЬЕРЫ & ШТОРЫ
            </h3>
            <div className="text-[11px] font-mono text-[#EADCCB] uppercase tracking-widest mb-3">
              DRAPERIES · ВОЛНА 1:2.0
            </div>
            <div className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-[#221C16] text-xs font-sans font-semibold uppercase tracking-wider self-start transition-all">
              <span>ПОДРОБНЕЕ</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B88E52]" />
            </div>
          </div>
        </div>

        {/* Card 2: BEDDING */}
        <div
          onClick={() => onSelectCategory('bedding')}
          className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#B88E52]/20 shadow-lg cursor-pointer bg-white"
        >
          <img
            src="/assets/muar/master-bed-after.webp"
            alt="Покрывала и постельное убранство"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white tracking-wide uppercase mb-1">
              ПОКРЫВАЛА & ДЕКОР
            </h3>
            <div className="text-[11px] font-mono text-[#EADCCB] uppercase tracking-widest mb-3">
              BEDDING & CUSHIONS
            </div>
            <div className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-[#221C16] text-xs font-sans font-semibold uppercase tracking-wider self-start transition-all">
              <span>ПОДРОБНЕЕ</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B88E52]" />
            </div>
          </div>
        </div>

        {/* Card 3: WINDOW TREATMENTS / B2B */}
        <div
          onClick={() => onSelectCategory('b2b')}
          className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#B88E52]/20 shadow-lg cursor-pointer bg-white"
        >
          <img
            src="/assets/muar/b2b-canopy-hall-1.webp"
            alt="Контрактные системы и солнцезащита"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
            <h3 className="font-serif text-2xl text-white tracking-wide uppercase mb-1">
              КОНТРАКТНЫЕ СИСТЕМЫ
            </h3>
            <div className="text-[11px] font-mono text-[#EADCCB] uppercase tracking-widest mb-3">
              WINDOW TREATMENTS & B2B
            </div>
            <div className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-[#221C16] text-xs font-sans font-semibold uppercase tracking-wider self-start transition-all">
              <span>ПОДРОБНЕЕ</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#B88E52]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
