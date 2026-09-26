import React from 'react';
import { ORDER_STEPS } from '../data/muarData';
import { MessageSquare, Sparkles, Ruler, Scissors, CheckCircle2 } from 'lucide-react';

export const OrderJourney: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Ruler':
        return <Ruler className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#1D0E24]/40 border-t border-[#C5A069]/20 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#23122B] border border-[#C5A069]/30 text-[#C5A069] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ПРОЗРАЧНЫЙ ПРОЦЕСС РАБОТЫ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F4EF] tracking-tight uppercase">
            5 ШАГОВ К ИДЕАЛЬНОМУ ТЕКСТИЛЮ
          </h2>
          <p className="mt-4 text-[#F7F4EF]/70 font-sans text-sm sm:text-base leading-relaxed">
            От первой идеи до финальной развески с вертикальным отпариванием. 
            Каждый этап контролируется персональным ведущим декоратором.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ORDER_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative p-6 rounded-3xl bg-[#23122B]/70 border border-[#C5A069]/25 backdrop-blur-md flex flex-col justify-between group hover:border-[#C5A069]/60 hover:bg-[#23122B] transition-all"
            >
              <div>
                {/* Step number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#160B1C] border border-[#C5A069]/30 text-[#C5A069] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(stepItem.iconName)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#F7F4EF]/25 group-hover:text-[#C5A069]/50 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                {/* Badge */}
                {stepItem.badge && (
                  <span className="inline-block text-[10px] font-mono text-[#D9BC8B] px-2 py-0.5 rounded bg-[#C5A069]/10 border border-[#C5A069]/20 mb-3">
                    {stepItem.badge}
                  </span>
                )}

                {/* Title & Subtitle */}
                <h3 className="font-serif text-lg text-[#F7F4EF] leading-snug mb-1">
                  {stepItem.title}
                </h3>
                <div className="text-[11px] font-mono text-[#C5A069] mb-3">
                  {stepItem.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-[#F7F4EF]/70 font-sans leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-4 mt-6 border-t border-white/5 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A069]"></span>
                <span className="text-[9px] font-mono text-[#F7F4EF]/40 uppercase tracking-widest">
                  ШАГ {idx + 1} ИЗ 5
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
