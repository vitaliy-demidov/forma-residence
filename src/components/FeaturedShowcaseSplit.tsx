import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedShowcaseSplitProps {
  onCalculateDraperies: () => void;
  onCalculateBedding: () => void;
}

export const FeaturedShowcaseSplit: React.FC<FeaturedShowcaseSplitProps> = ({
  onCalculateDraperies,
  onCalculateBedding,
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-[1580px] mx-auto">
      {/* 2 Large Side-by-Side Cards (Exact Layout as in Pinterest Reference) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Card: Luxury Draperies */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] border border-[#B88E52]/25 shadow-xl group bg-[#221C16]">
          <img
            src="/assets/muar/case-dos-marquise.webp"
            alt="Кутюрные портьеры с подхватами"
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-1000"
          />
          {/* Gradient Overlay for Editorial Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <div className="max-w-md space-y-3">
              <span className="text-[11px] font-mono text-[#EADCCB] uppercase tracking-widest block">
                HAUTE COUTURE · АВСТРИЙСКАЯ ТЕСЬМА BANDEX
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Luxury Draperies
              </h2>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Архитектурная драпировка с фиксированным коэффициентом 1:2.0. 
                Двойной нижний подгиб 10 см, утяжелители 50 г/м и ручное формование волны.
              </p>

              <div className="pt-3">
                <button
                  onClick={onCalculateDraperies}
                  className="px-8 py-4 rounded-xl bg-[#B88E52] hover:bg-[#a67d43] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer"
                >
                  <span>РАССЧИТАТЬ СТОИМОСТЬ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card: Premium Bedding */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] border border-[#B88E52]/25 shadow-xl group bg-[#221C16]">
          <img
            src="/assets/muar/case-decor-headboard-new.webp"
            alt="Премиальное постельное убранство и покрывала"
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-1000"
          />
          {/* Gradient Overlay for Editorial Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <div className="max-w-md space-y-3">
              <span className="text-[11px] font-mono text-[#EADCCB] uppercase tracking-widest block">
                BEDROOM COUTURE · РУЧНАЯ СТЁЖКА & КАНТЫ
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                Premium Bedding
              </h2>

              <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                Покрывала ручной работы, декоративные подушки и текстильные изголовья. 
                Безупречная посадка под габариты вашего матраса без заломов и складок.
              </p>

              <div className="pt-3">
                <button
                  onClick={onCalculateBedding}
                  className="px-8 py-4 rounded-xl bg-[#B88E52] hover:bg-[#a67d43] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer"
                >
                  <span>ВЫБРАТЬ ПОКРЫВАЛО</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
