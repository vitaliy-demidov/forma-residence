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
    <section id="b2b-section" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#14282A] border-t border-[#C5A069]/30 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#1F3A3D]/40 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1F3A3D] border border-[#C5A069]/40 text-[#D9BC8B] text-xs font-mono tracking-widest uppercase mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>КОНТРАКТНЫЙ ДИВИЗИОН · B2B АСТАНА</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F4EF] tracking-tight uppercase">
            ТЕКСТИЛЬНЫЕ РЕШЕНИЯ ДЛЯ БИЗНЕСА
          </h2>
          <p className="mt-4 text-[#F7F4EF]/75 font-sans text-sm sm:text-base leading-relaxed">
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
              className={`py-3 px-6 rounded-2xl text-xs sm:text-sm font-sans font-medium transition-all ${
                activeDirectionId === dir.id
                  ? 'bg-[#C5A069] text-[#14282A] font-semibold shadow-lg shadow-black/40 scale-105'
                  : 'bg-[#1F3A3D]/80 border border-[#C5A069]/20 text-[#F7F4EF]/75 hover:text-white hover:border-[#C5A069]/50'
              }`}
            >
              {dir.title}
            </button>
          ))}
        </div>

        {/* Active Direction Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Photo on left (7 cols) */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#C5A069]/30 aspect-[16/10] shadow-2xl">
            <img
              src={activeDirection.image}
              alt={activeDirection.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#14282A]/90 backdrop-blur-md border border-[#C5A069]/40 text-[#D9BC8B] text-xs font-mono">
              {activeDirection.badge}
            </div>
          </div>

          {/* Description & Specs on right (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-[#C5A069] uppercase tracking-widest">
              РЕАЛЬНЫЙ ОПЫТ РЕАЛИЗАЦИИ В АСТАНЕ
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EF]">
              {activeDirection.subtitle}
            </h3>
            <p className="text-sm text-[#F7F4EF]/75 leading-relaxed font-sans">
              {activeDirection.description}
            </p>

            <div className="space-y-3 pt-2">
              {activeDirection.specs.map((spec, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-xs text-[#F7F4EF]/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A069] shrink-0 mt-1.5"></span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* B2B Commercial Estimate Calculator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1F3A3D]/70 border border-[#C5A069]/35 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <FileCheck className="w-5 h-5 text-[#C5A069]" />
                <h4 className="font-serif text-xl sm:text-2xl text-[#F7F4EF]">
                  Экспресс-расчет коммерческого предложения
                </h4>
              </div>

              {/* System selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-[#C5A069] block mb-2">
                  ТИП ИНЖЕНЕРНОЙ СИСТЕМЫ
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['screen', 'blackout', 'canopy'] as const).map((sysKey) => (
                    <button
                      key={sysKey}
                      onClick={() => setB2BSystem(sysKey)}
                      className={`p-3 rounded-xl border text-xs text-left transition-all ${
                        b2bSystem === sysKey
                          ? 'border-[#C5A069] bg-[#C5A069]/20 text-[#D9BC8B] font-semibold'
                          : 'border-white/10 bg-[#14282A]/70 text-[#F7F4EF]/70 hover:border-white/20'
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
                  <span className="text-xs font-sans text-[#F7F4EF]/80">Количество оконных проемов / зон</span>
                  <span className="text-base font-mono font-semibold text-[#D9BC8B] tabular-nums">
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
                  className="w-full accent-[#C5A069] cursor-pointer h-2 bg-[#14282A] rounded-lg"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#F7F4EF]/40 mt-1">
                  <span>2 шт.</span>
                  <span>12 шт. (офисный блок)</span>
                  <span>60 шт. (бизнес-центр)</span>
                </div>
              </div>

              {/* Guarantees pills */}
              <div className="flex flex-wrap gap-3 pt-2 text-[11px] font-mono text-[#F7F4EF]/70">
                <span className="px-3 py-1 rounded-md bg-[#14282A] border border-white/10 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-amber-400" />
                  Пожарный сертификат КМ1
                </span>
                <span className="px-3 py-1 rounded-md bg-[#14282A] border border-white/10 flex items-center gap-1.5">
                  <FileCheck className="w-3 h-3 text-[#C5A069]" />
                  ЭСФ и акты КС-2/КС-3
                </span>
              </div>
            </div>

            {/* Calculations Breakdown */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#14282A] border border-[#C5A069]/30 text-center space-y-4">
              <div className="text-[10px] font-mono tracking-widest text-[#C5A069] uppercase">
                ПРЕДВАРИТЕЛЬНЫЙ РАСЧЕТ ДЛЯ БЮДЖЕТИРОВАНИЯ
              </div>

              <div className="space-y-2 text-xs font-sans text-[#F7F4EF]/80 py-2 border-y border-white/10 text-left">
                <div className="flex justify-between">
                  <span>Сумма без НДС:</span>
                  <span className="font-mono text-[#F7F4EF] tabular-nums">{netAmount.toLocaleString('ru-RU')} ₸</span>
                </div>
                <div className="flex justify-between text-[#C5A069]">
                  <span>НДС 12%:</span>
                  <span className="font-mono tabular-nums">{vatAmount.toLocaleString('ru-RU')} ₸</span>
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold font-sans text-[#F7F4EF] tabular-nums">
                  {totalWithVat.toLocaleString('ru-RU')} ₸
                </div>
                <div className="text-[11px] font-sans text-[#D9BC8B] mt-1">
                  Итого с НДС 12% (официальная оплата по безналичному расчету)
                </div>
              </div>

              <a
                href={`https://wa.me/77015243141?text=${whatsappB2BMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C5A069] hover:bg-[#d9bc8b] text-[#14282A] font-sans font-bold text-xs tracking-wider transition-all flex items-center justify-center space-x-2"
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
