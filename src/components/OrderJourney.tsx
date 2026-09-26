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
    <section id="order-journey-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FAF7F2] border-t border-[#B88E52]/20 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ПРОЗРАЧНЫЙ ПРОЦЕСС РАБОТЫ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#221C16] tracking-tight uppercase">
            5 ШАГОВ К ИДЕАЛЬНОМУ ТЕКСТИЛЮ
          </h2>
          <p className="mt-4 text-[#6C6256] font-sans text-sm sm:text-base leading-relaxed">
            От первой идеи до финальной развески с вертикальным отпариванием. 
            Каждый этап контролируется персональным ведущим декоратором.
          </p>
        </div>

        {/* 5 Steps Linear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ORDER_STEPS.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="relative p-6 rounded-3xl bg-white border border-[#B88E52]/25 shadow-md flex flex-col justify-between group hover:border-[#B88E52] hover:shadow-xl transition-all"
            >
              <div>
                {/* Step number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#B88E52]/30 text-[#B88E52] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(stepItem.iconName)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#B88E52]/30 group-hover:text-[#B88E52] transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                {/* Badge */}
                {stepItem.badge && (
                  <span className="inline-block text-[10px] font-mono text-[#B88E52] px-2 py-0.5 rounded bg-[#FAF7F2] border border-[#B88E52]/25 mb-3">
                    {stepItem.badge}
                  </span>
                )}

                {/* Title & Subtitle */}
                <h3 className="font-serif text-lg text-[#221C16] leading-snug mb-1">
                  {stepItem.title}
                </h3>
                <div className="text-[11px] font-mono text-[#B88E52] mb-3">
                  {stepItem.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-[#6C6256] font-sans leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="pt-4 mt-6 border-t border-[#B88E52]/15 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E52]"></span>
                <span className="text-[9px] font-mono text-[#6C6256]/70 uppercase tracking-widest">
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
