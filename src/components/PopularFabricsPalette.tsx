import React, { useState } from 'react';
import { UNIVERSAL_FABRICS } from '../data/muarData';
import { FabricOption } from '../types';
import { Sparkles, Check, MessageSquare, ArrowRight } from 'lucide-react';

interface PopularFabricsPaletteProps {
  onSelectFabric: (fabric: FabricOption) => void;
}

export const PopularFabricsPalette: React.FC<PopularFabricsPaletteProps> = ({
  onSelectFabric,
}) => {
  const [selectedFabricId, setSelectedFabricId] = useState(UNIVERSAL_FABRICS[0].id);

  const activeFabric =
    UNIVERSAL_FABRICS.find((f) => f.id === selectedFabricId) || UNIVERSAL_FABRICS[0];

  const handlePickFabric = (fabric: FabricOption) => {
    setSelectedFabricId(fabric.id);
    onSelectFabric(fabric);
  };

  return (
    <section id="fabrics-section" className="py-20 sm:py-28 px-4 sm:px-8 max-w-[1580px] mx-auto">
      {/* Exact Centered Line Divider from Pinterest Pin: —— POPULAR FABRICS —— */}
      <div className="flex items-center justify-center my-8">
        <div className="h-[1px] bg-[#B88E52]/30 flex-1 max-w-xs sm:max-w-md"></div>
        <h2 className="px-6 font-serif text-xl sm:text-2xl lg:text-3xl text-[#221C16] tracking-[0.2em] uppercase font-normal text-center">
          POPULAR FABRICS
        </h2>
        <div className="h-[1px] bg-[#B88E52]/30 flex-1 max-w-xs sm:max-w-md"></div>
      </div>

      <p className="text-center text-xs sm:text-sm text-[#6C6256] font-sans max-w-xl mx-auto mb-12">
        Европейские ткани прямого импорта (Бельгия, Италия, Франция, Турция). 
        Выберите образец для детального осмотра фактуры и расчета стоимости.
      </p>

      {/* Horizontal Swatches Row (Exact visual rhythm of Pinterest pin) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
        {UNIVERSAL_FABRICS.map((fabric) => {
          const isSelected = fabric.id === selectedFabricId;
          return (
            <div
              key={fabric.id}
              onClick={() => handlePickFabric(fabric)}
              className={`group flex flex-col cursor-pointer transition-all duration-300 ${
                isSelected ? 'scale-102' : 'hover:scale-101'
              }`}
            >
              {/* Swatch Square Box */}
              <div
                className={`relative aspect-[1/1] rounded-2xl overflow-hidden border transition-all duration-300 shadow-md ${
                  isSelected
                    ? 'border-[#B88E52] ring-2 ring-[#B88E52] shadow-xl'
                    : 'border-[#B88E52]/20 hover:border-[#B88E52]/50 bg-white'
                }`}
              >
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />

                {isSelected && (
                  <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-[#B88E52] text-white flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}

                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-mono text-[#EADCCB] uppercase">
                  {fabric.origin.split(' ')[0]}
                </div>
              </div>

              {/* Swatch Label below */}
              <div className="mt-3 text-center">
                <div
                  className={`font-serif text-sm font-medium transition-colors ${
                    isSelected ? 'text-[#B88E52] font-semibold' : 'text-[#221C16]'
                  }`}
                >
                  {fabric.name}
                </div>
                <div className="text-[11px] font-mono font-medium text-[#6C6256] tabular-nums mt-0.5">
                  {fabric.pricePerMeter.toLocaleString('ru-RU')} ₸/м
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Fabric Texture Loupe & Detailed Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#B88E52]/25 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/11] border border-[#B88E52]/20 shadow-inner">
          <img
            src={activeFabric.image}
            alt={activeFabric.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-[10px] font-mono">
            {activeFabric.density} · {activeFabric.composition}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F5F0E8] border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeFabric.tag} · СТАНДАРТ 1:2.0</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#221C16]">
            {activeFabric.name} ({activeFabric.origin})
          </h3>

          <p className="text-xs sm:text-sm text-[#6C6256] font-sans leading-relaxed">
            {activeFabric.description} Плотность {activeFabric.density}. 
            Ткань превосходно держит форму в глубоких вертикальных складках и не деформируется со временем.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <div className="text-2xl font-serif text-[#B88E52] font-semibold tabular-nums">
              {activeFabric.pricePerMeter.toLocaleString('ru-RU')} ₸ <span className="text-xs font-sans text-[#6C6256]">/ пог. метр</span>
            </div>

            <a
              href={`https://wa.me/77015243141?text=${encodeURIComponent(
                `Здравствуйте, MUAR A! Хочу заказать расчет штор из ткани: ${activeFabric.name} (${activeFabric.pricePerMeter} ₸/м). Подскажите наличие образца.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#B88E52] hover:bg-[#a67d43] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center space-x-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>ЗАПРОСИТЬ ОБРАЗЕЦ В WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
