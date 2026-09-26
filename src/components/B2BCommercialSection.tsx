import React, { useState } from 'react';
import { B2B_DIRECTIONS } from '../data/muarData';
import { Building2, FileCheck, Flame, ShieldAlert, Download, MessageSquare } from 'lucide-react';

export const B2BCommercialSection: React.FC = () => {
  const [activeDirectionId, setActiveDirectionId] = useState('horeca');
  const [b2bWindows, setB2BWindows] = useState(12);
  const [b2bSystem, setB2BSystem] = useState<'screen' | 'blackout' | 'canopy'>('screen');

  const activeDirection = B2B_DIRECTIONS.find((d) => d.id === activeDirectionId) || B2B_DIRECTIONS[0];

  // System price per unit
  const SYSTEM_PRICES = {
    screen: { name: 'Контрактные ролл-шторы Screen 3% Somfy', unitPrice: 85000 },
    blackout: { name: 'Портьеры Trevira CS (КМ1) с моторизацией', unitPrice: 245000 },
    canopy: { name: 'Акустические потолочные паруса для ресторанов', unitPrice: 195000 }
  };

  const selectedSys = SYSTEM_PRICES[b2bSystem];
  const netAmount = b2bWindows * selectedSys.unitPrice;
  const vatAmount = Math.round(netAmount * 0.12);
  const totalWithVat = netAmount + vatAmount;

  const whatsappB2BMessage = encodeURIComponent(
    `Здравствуйте, B2B-отдел MUAR A!\n` +
      `Прошу подготовить коммерческое предложение и проект договора:\n` +
      `• Направление: ${activeDirection.title}\n` +
      `• Выбранная система: ${selectedSys.name}\n` +
      `• Объем: ${b2bWindows} единиц / проемов\n` +
      `• Расчет без НДС: ${netAmount.toLocaleString('ru-RU')} ₸\n` +
      `• НДС 12%: ${vatAmount.toLocaleString('ru-RU')} ₸\n` +
      `• Итого с НДС 12%: ${totalWithVat.toLocaleString('ru-RU')} ₸\n` +
      `• Требуются: пожарные сертификаты КМ1, ЭСФ, акты КС-2/КС-3.\n` +
      `Свяжитесь для согласования ТЗ.`
  );

  return (
    <section id="b2b-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-[#FAF7F2] border-t border-[#B88E52]/20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
            <Building2 className="w-3.5 h-3.5" />
            <span>КОНТРАКТНЫЙ ДИВИЗИОН · B2B АСТАНА</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#221C16] tracking-tight uppercase">
            ТЕКСТИЛЬНЫЕ РЕШЕНИЯ ДЛЯ БИЗНЕСА
          </h2>
          <p className="mt-4 text-[#6C6256] font-sans text-sm sm:text-base leading-relaxed">
            Официальные контракты с НДС 12%, акты выполненных работ КС-2 и КС-3, выписка ЭСФ 
            и негорючие ткани стандарта Trevira CS с сертификатом пожарной безопасности КМ1.
          </p>
        </div>

        {/* 3 Directions Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {B2B_DIRECTIONS.map((dir) => (
            <button
              key={dir.id}
              onClick={() => setActiveDirectionId(dir.id)}
              className={`py-3 px-6 rounded-2xl text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer ${
                activeDirectionId === dir.id
                  ? 'bg-[#B88E52] text-white font-semibold shadow-md scale-102'
                  : 'bg-white border border-[#B88E52]/25 text-[#6C6256] hover:text-[#221C16] hover:border-[#B88E52]/50'
              }`}
            >
              {dir.title}
            </button>
          ))}
        </div>

        {/* Active Direction Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Photo on left (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#B88E52]/25 aspect-[16/10] shadow-xl bg-white">
            <img
              src={activeDirection.image}
              alt={activeDirection.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono shadow-sm">
              {activeDirection.badge}
            </div>
          </div>

          {/* Description & Specs on right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-[#B88E52] uppercase tracking-widest">
              РЕАЛЬНЫЙ ОПЫТ РЕАЛИЗАЦИИ В АСТАНЕ
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#221C16]">
              {activeDirection.subtitle}
            </h3>
            <p className="text-sm text-[#6C6256] leading-relaxed font-sans">
              {activeDirection.description}
            </p>

            <div className="space-y-3 pt-2">
              {activeDirection.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#221C16]/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B88E52] shrink-0 mt-1.5"></span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* B2B Commercial Estimate Calculator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#B88E52]/25 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <FileCheck className="w-5 h-5 text-[#B88E52]" />
                <h4 className="font-serif text-xl sm:text-2xl text-[#221C16]">
                  Экспресс-расчет коммерческого предложения
                </h4>
              </div>

              {/* System selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-[#B88E52] block mb-2">
                  ТИП ИНЖЕНЕРНОЙ СИСТЕМЫ
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['screen', 'blackout', 'canopy'] as const).map((sysKey) => (
                    <button
                      key={sysKey}
                      onClick={() => setB2BSystem(sysKey)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                        b2bSystem === sysKey
                          ? 'border-[#B88E52] bg-[#FAF7F2] text-[#B88E52] font-semibold ring-1 ring-[#B88E52]'
                          : 'border-[#B88E52]/20 bg-white text-[#6C6256] hover:border-[#B88E52]/40'
                      }`}
                    >
                      {SYSTEM_PRICES[sysKey].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Units slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-sans text-[#6C6256]">Количество оконных проемов / зон</span>
                  <span className="text-base font-mono font-semibold text-[#221C16] tabular-nums">
                    {b2bWindows} шт.
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  step="1"
                  value={b2bWindows}
                  onChange={(e) => setB2BWindows(parseInt(e.target.value))}
                  className="w-full accent-[#B88E52] cursor-pointer h-2 bg-[#EADCCB]/40 rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#6C6256]/60 mt-1">
                  <span>2 шт.</span>
                  <span>12 шт. (офисный блок)</span>
                  <span>60 шт. (бизнес-центр)</span>
                </div>
              </div>

              {/* Guarantees pills */}
              <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-mono text-[#6C6256]">
                <span className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#B88E52]/20 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-amber-600" />
                  Пожарный сертификат КМ1
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#B88E52]/20 flex items-center gap-1.5">
                  <FileCheck className="w-3 h-3 text-[#B88E52]" />
                  ЭСФ и акты КС-2/КС-3
                </span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#FAF7F2] border border-[#B88E52]/25 text-center space-y-4 shadow-sm">
              <div className="text-[10px] font-mono tracking-widest text-[#B88E52] uppercase">
                ПРЕДВАРИТЕЛЬНЫЙ РАСЧЕТ ДЛЯ БЮДЖЕТИРОВАНИЯ
              </div>

              <div className="space-y-2 text-xs font-sans text-[#6C6256] py-3 border-y border-[#B88E52]/15 text-left">
                <div className="flex justify-between">
                  <span>Сумма без НДС:</span>
                  <span className="font-mono text-[#221C16] font-medium tabular-nums">{netAmount.toLocaleString('ru-RU')} ₸</span>
                </div>
                <div className="flex justify-between text-[#B88E52]">
                  <span>НДС 12%:</span>
                  <span className="font-mono font-medium tabular-nums">{vatAmount.toLocaleString('ru-RU')} ₸</span>
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold font-sans text-[#221C16] tabular-nums">
                  {totalWithVat.toLocaleString('ru-RU')} ₸
                </div>
                <div className="text-[11px] font-sans text-[#6C6256] mt-1">
                  Итого с НДС 12% (официальная оплата по безналичному расчету)
                </div>
              </div>

              <a
                href={`https://wa.me/77015243141?text=${whatsappB2BMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#B88E52] hover:bg-[#a67d43] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>ЗАПРОСИТЬ B2B-КП В WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
