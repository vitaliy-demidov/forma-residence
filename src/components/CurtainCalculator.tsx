import React, { useState, useId } from 'react';
import { UNIVERSAL_FABRICS } from '../data/muarData';
import { Check, ShieldCheck, Sparkles, MessageSquare, Info } from 'lucide-react';

export const CurtainCalculator: React.FC = () => {
  const [product, setProduct] = useState<'curtains' | 'roman' | 'bedspread'>('curtains');
  const [width, setWidth] = useState(3.2);
  const [height, setHeight] = useState(2.8);
  const [fabricId, setFabricId] = useState('satin');
  const [includeTulle, setIncludeTulle] = useState(true);
  const [includeSomfy, setIncludeSomfy] = useState(false);
  const [bedSize, setBedSize] = useState<'160' | '180' | '200'>('180');

  const widthInputId = useId();
  const heightInputId = useId();
  const tulleInputId = useId();
  const somfyInputId = useId();

  const selectedFabric = UNIVERSAL_FABRICS.find((f) => f.id === fabricId) || UNIVERSAL_FABRICS[0];

  // Tailoring and accessory constants (based on studio baseline)
  const TAILORING_PER_METER = 6500; // Цеховой пошив с австрийской тесьмой Bandex и ВТО
  const TULLE_PER_METER = 12500;    // Французская вуаль с утяжелителем
  const SOMFY_MOTOR = 125000;       // Электрокарниз Somfy Glydea Ultra с интеграцией

  // Calculation Logic strictly adhering to 1:2 coefficient for curtains
  let fabricMeters = 0;
  let fabricCost = 0;
  let tailoringCost = 0;
  let tulleCost = 0;
  let somfyCost = includeSomfy ? SOMFY_MOTOR : 0;

  if (product === 'curtains') {
    // Fixed automatic drape coefficient 1:2.0 (+0.4m technical allowances for side and bottom hems)
    fabricMeters = width * 2.0 + 0.4;
    fabricCost = fabricMeters * selectedFabric.pricePerMeter;
    tailoringCost = fabricMeters * TAILORING_PER_METER;
    tulleCost = includeTulle ? (width * 2.0 + 0.4) * TULLE_PER_METER : 0;
  } else if (product === 'roman') {
    // Flat canvas with lining
    fabricMeters = width + 0.3;
    fabricCost = fabricMeters * selectedFabric.pricePerMeter * (height > 2.5 ? 1.5 : 1.0);
    tailoringCost = 35000; // Римский механизм + пошив
    tulleCost = 0;
  } else {
    // Bedspread & Textile Decor
    const bedWidthNum = bedSize === '160' ? 1.6 : bedSize === '180' ? 1.8 : 2.0;
    fabricMeters = bedWidthNum + 1.2; // Напуски по бокам
    fabricCost = fabricMeters * selectedFabric.pricePerMeter;
    tailoringCost = 55000; // Стежка, подклад, ручной кант
    tulleCost = 0;
  }

  const totalCost = Math.round(fabricCost + tailoringCost + tulleCost + somfyCost);

  // Pre-formatted WhatsApp order text
  const productNameRu =
    product === 'curtains'
      ? 'Портьеры в пол + тюль (коэффициент 1:2.0)'
      : product === 'roman'
      ? 'Римские шторы'
      : `Покрывало и текстильный декор (кровать ${bedSize} см)`;

  const whatsappMessage = encodeURIComponent(
    `Здравствуйте, MUAR A!\nХочу оформить заказ по расчету с сайта:\n` +
      `• Изделие: ${productNameRu}\n` +
      `• Ткань: ${selectedFabric.name} (${selectedFabric.pricePerMeter.toLocaleString('ru-RU')} ₸/м)\n` +
      (product !== 'bedspread'
        ? `• Размеры окна: ширина ${width} м, высота ${height} м\n`
        : `• Размер спального места: ${bedSize} см\n`) +
      (product === 'curtains'
        ? `• Расход ткани (коэфф. 1:2): ${fabricMeters.toFixed(1)} пог. м\n` +
          `• Французский тюль: ${includeTulle ? 'Да' : 'Нет'}\n` +
          `• Электрокарниз Somfy: ${includeSomfy ? 'Да' : 'Нет'}\n`
        : '') +
      `• Расчетная смета: ${totalCost.toLocaleString('ru-RU')} ₸\n\n` +
      `Прошу проконсультировать и подтвердить наличие ткани.`
  );

  return (
    <section id="calculator-section" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#1D0E24]/60 border-t border-[#C5A069]/20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C5A069]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#23122B] border border-[#C5A069]/30 text-[#C5A069] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ФИКСИРОВАННЫЙ КОЭФФИЦИЕНТ ДРАПИРОВКИ 1:2.0</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F4EF] tracking-tight uppercase">
            КАЛЬКУЛЯТОР ШТОР & ТЕКСТИЛЯ
          </h2>
          <p className="mt-4 text-[#F7F4EF]/75 font-sans text-sm sm:text-base leading-relaxed">
            Прозрачный расчет сметы в тенге ₸. В пошив включена австрийская тесьма Bandex, 
            двойной нижний подгиб 10 см по стандарту ГОСТ РК и цеховая формовка складок.
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Product Selection, Dimensions, Fabrics (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Product Switcher Tabs */}
            <div className="p-1.5 rounded-2xl bg-[#23122B] border border-[#C5A069]/25 flex flex-wrap sm:flex-nowrap gap-2">
              <button
                onClick={() => setProduct('curtains')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all ${
                  product === 'curtains'
                    ? 'bg-[#C5A069] text-[#160B1C] shadow-md font-semibold'
                    : 'text-[#F7F4EF]/80 hover:text-white'
                }`}
              >
                Портьеры в пол + тюль
              </button>
              <button
                onClick={() => setProduct('roman')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all ${
                  product === 'roman'
                    ? 'bg-[#C5A069] text-[#160B1C] shadow-md font-semibold'
                    : 'text-[#F7F4EF]/80 hover:text-white'
                }`}
              >
                Римские шторы
              </button>
              <button
                onClick={() => setProduct('bedspread')}
                className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all ${
                  product === 'bedspread'
                    ? 'bg-[#C5A069] text-[#160B1C] shadow-md font-semibold'
                    : 'text-[#F7F4EF]/80 hover:text-white'
                }`}
              >
                Покрывала и декор
              </button>
            </div>

            {/* Dimensional Inputs */}
            <div className="p-6 rounded-2xl bg-[#23122B]/70 border border-[#C5A069]/20 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A069]">
                  {product === 'bedspread' ? 'ПАРАМЕТРЫ СПАЛЬНОГО МЕСТА' : 'ГАБАРИТЫ ОКОННОГО ПРОЕМА (1 ОКНО)'}
                </span>
                {product === 'curtains' && (
                  <span className="text-[11px] font-mono text-[#D9BC8B] bg-[#160B1C] px-2.5 py-1 rounded-md border border-[#C5A069]/30">
                    Коэффициент волны: 1:2.0
                  </span>
                )}
              </div>

              {product !== 'bedspread' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Single Window Width */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={widthInputId} className="text-xs font-sans text-[#F7F4EF]/80">Ширина карниза (м)</label>
                      <span className="text-base font-mono font-semibold text-[#F7F4EF] tabular-nums">
                        {width.toFixed(1)} м
                      </span>
                    </div>
                    <input
                      id={widthInputId}
                      type="range"
                      min="1.0"
                      max="8.0"
                      step="0.1"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value))}
                      className="w-full accent-[#C5A069] cursor-pointer h-2 bg-[#160B1C] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#F7F4EF]/40 mt-1">
                      <span>1.0 м</span>
                      <span>3.2 м (стандарт)</span>
                      <span>8.0 м</span>
                    </div>
                  </div>

                  {/* Window Height */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor={heightInputId} className="text-xs font-sans text-[#F7F4EF]/80">Высота потолка (м)</label>
                      <span className="text-base font-mono font-semibold text-[#F7F4EF] tabular-nums">
                        {height.toFixed(2)} м
                      </span>
                    </div>
                    <input
                      id={heightInputId}
                      type="range"
                      min="2.2"
                      max="7.0"
                      step="0.05"
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value))}
                      className="w-full accent-[#C5A069] cursor-pointer h-2 bg-[#160B1C] rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#F7F4EF]/40 mt-1">
                      <span>2.2 м</span>
                      <span>2.8 м</span>
                      <span>7.0 м (второй свет)</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Bedspread Size Selection */
                <div>
                  <label className="text-xs font-sans text-[#F7F4EF]/80 block mb-3">
                    Ширина матраса (спальное место)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['160', '180', '200'] as const).map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setBedSize(sz)}
                        className={`py-3 rounded-xl border text-xs font-mono transition-all ${
                          bedSize === sz
                            ? 'border-[#C5A069] bg-[#C5A069]/15 text-[#D9BC8B] font-semibold'
                            : 'border-white/10 bg-[#160B1C] text-[#F7F4EF]/70 hover:border-white/20'
                        }`}
                      >
                        {sz} × 200 см
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Curtains specific live SVG wave cross-section */}
              {product === 'curtains' && (
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-[#F7F4EF]/60 uppercase">
                      Профиль волны на карнизе (шаг 16 см, 1:2.0):
                    </span>
                    <span className="text-[11px] font-mono text-[#C5A069]">
                      Расход полотна: {fabricMeters.toFixed(1)} м
                    </span>
                  </div>
                  <div className="h-10 bg-[#160B1C] rounded-xl flex items-center px-4 overflow-hidden border border-[#C5A069]/20">
                    <svg viewBox="0 0 400 40" className="w-full h-8 text-[#C5A069]" fill="none" stroke="currentColor">
                      <path
                        d="M 10 20 Q 25 5, 40 20 T 70 20 T 100 20 T 130 20 T 160 20 T 190 20 T 220 20 T 250 20 T 280 20 T 310 20 T 340 20 T 370 20 T 390 20"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="25" cy="5" r="2.5" fill="#D9BC8B" />
                      <circle cx="55" cy="35" r="2.5" fill="#D9BC8B" />
                      <circle cx="85" cy="5" r="2.5" fill="#D9BC8B" />
                      <circle cx="115" cy="35" r="2.5" fill="#D9BC8B" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* 6 Universal Fabrics (3x2 Grid) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A069]">
                  ВЫБОР КУТЮРНОЙ ТКАНИ (6 УНИВЕРСАЛЬНЫХ КАТЕГОРИЙ)
                </span>
                <span className="text-xs font-sans text-[#F7F4EF]/60">
                  {selectedFabric.name} · {selectedFabric.origin}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {UNIVERSAL_FABRICS.map((fabric) => {
                  const isSelected = fabric.id === fabricId;
                  return (
                    <div
                      key={fabric.id}
                      onClick={() => setFabricId(fabric.id)}
                      className={`relative p-3.5 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#C5A069] bg-[#23122B] shadow-lg shadow-[#C5A069]/10 ring-1 ring-[#C5A069]'
                          : 'border-white/10 bg-[#160B1C]/80 hover:border-[#C5A069]/40 hover:bg-[#23122B]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2.5">
                          <img
                            src={fabric.image}
                            alt={fabric.name}
                            className="w-10 h-10 rounded-lg object-cover border border-[#C5A069]/30"
                          />
                          <div>
                            <div className="font-serif text-sm font-semibold text-[#F7F4EF] group-hover:text-[#D9BC8B] transition-colors leading-tight">
                              {fabric.name}
                            </div>
                            <div className="text-[10px] font-sans text-[#F7F4EF]/50">
                              {fabric.origin} · {fabric.density}
                            </div>
                          </div>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#C5A069] text-[#160B1C] flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                        <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-[#C5A069]">
                          {fabric.tag}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#F7F4EF] tabular-nums">
                          {fabric.pricePerMeter.toLocaleString('ru-RU')} ₸/м
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional Add-ons (Tulle & Somfy Motor) */}
            {product === 'curtains' && (
              <div className="p-4 rounded-xl bg-[#23122B]/50 border border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C5A069] block">
                  ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ КОМФОРТА
                </span>

                <div className="flex flex-col sm:flex-row gap-4">
                  <label htmlFor={tulleInputId} className="flex-1 flex items-center space-x-3 p-3 rounded-lg bg-[#160B1C] border border-white/10 cursor-pointer hover:border-[#C5A069]/40 transition">
                    <input
                      id={tulleInputId}
                      type="checkbox"
                      checked={includeTulle}
                      onChange={(e) => setIncludeTulle(e.target.checked)}
                      className="accent-[#C5A069] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-[#F7F4EF]">Французский тюль-вуаль</div>
                      <div className="text-[11px] text-[#F7F4EF]/60 font-mono tabular-nums">+12 500 ₸/м (с утяжелителем)</div>
                    </div>
                  </label>

                  <label htmlFor={somfyInputId} className="flex-1 flex items-center space-x-3 p-3 rounded-lg bg-[#160B1C] border border-white/10 cursor-pointer hover:border-[#C5A069]/40 transition">
                    <input
                      id={somfyInputId}
                      type="checkbox"
                      checked={includeSomfy}
                      onChange={(e) => setIncludeSomfy(e.target.checked)}
                      className="accent-[#C5A069] w-4 h-4 rounded"
                    />
                    <div className="text-xs">
                      <div className="font-medium text-[#F7F4EF]">Электрокарниз Somfy Ultra</div>
                      <div className="text-[11px] text-[#F7F4EF]/60 font-mono tabular-nums">+125 000 ₸ (Алиса / HomeKit)</div>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Specification Breakdown & Live Estimate (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-to-b from-[#23122B] to-[#160B1C] border border-[#C5A069]/35 shadow-2xl relative overflow-hidden">
              {/* Subtle top badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C5A069]/20 mb-6">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#C5A069] uppercase">
                    СПЕЦИФИКАЦИЯ РАСЧЕТА
                  </div>
                  <div className="font-serif text-lg text-[#F7F4EF]">
                    MUAR A · Ателье Астана
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#C5A069]/15 border border-[#C5A069]/40 text-[#D9BC8B] text-[10px] font-mono">
                  ГОСТ РК 1:2.0
                </div>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3.5 text-xs font-sans pb-6 border-b border-white/10">
                <div className="flex justify-between items-center text-[#F7F4EF]/80">
                  <span>Избранная ткань:</span>
                  <span className="font-medium text-[#F7F4EF]">{selectedFabric.name}</span>
                </div>

                {product === 'curtains' && (
                  <div className="flex justify-between items-center text-[#F7F4EF]/80">
                    <span>Расход ткани (коэфф. 1:2.0):</span>
                    <span className="font-mono font-semibold text-[#D9BC8B] tabular-nums">
                      {fabricMeters.toFixed(1)} пог. м
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center text-[#F7F4EF]/80">
                  <span>Стоимость ткани:</span>
                  <span className="font-mono text-[#F7F4EF] tabular-nums">
                    {Math.round(fabricCost).toLocaleString('ru-RU')} ₸
                  </span>
                </div>

                <div className="flex justify-between items-center text-[#F7F4EF]/80">
                  <div className="flex items-center space-x-1">
                    <span>Цеховой пошив & ВТО:</span>
                    <Info className="w-3 h-3 text-[#C5A069]" />
                  </div>
                  <span className="font-mono text-[#F7F4EF] tabular-nums">
                    {Math.round(tailoringCost).toLocaleString('ru-RU')} ₸
                  </span>
                </div>

                {includeTulle && product === 'curtains' && (
                  <div className="flex justify-between items-center text-[#F7F4EF]/80">
                    <span>Французская вуаль-тюль:</span>
                    <span className="font-mono text-[#F7F4EF] tabular-nums">
                      {Math.round(tulleCost).toLocaleString('ru-RU')} ₸
                    </span>
                  </div>
                )}

                {includeSomfy && product === 'curtains' && (
                  <div className="flex justify-between items-center text-[#F7F4EF]/80">
                    <span>Моторизация Somfy Ultra:</span>
                    <span className="font-mono text-[#F7F4EF] tabular-nums">
                      {SOMFY_MOTOR.toLocaleString('ru-RU')} ₸
                    </span>
                  </div>
                )}
              </div>

              {/* Total Live Price Display */}
              <div className="py-6 text-center">
                <div className="text-[11px] font-mono tracking-widest text-[#C5A069] uppercase mb-1">
                  ОРИЕНТИРОВОЧНАЯ СМЕТА ПОД КЛЮЧ
                </div>
                <div className="text-4xl sm:text-5xl font-sans font-bold text-[#F7F4EF] tracking-tight tabular-nums">
                  {totalCost.toLocaleString('ru-RU')} ₸
                </div>
                <div className="text-[10px] font-sans text-[#F7F4EF]/50 mt-2">
                  * Включает двойной подгиб 10 см, утяжелители и австрийскую тесьму Bandex
                </div>
              </div>

              {/* Call to action buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/77015243141?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#160B1C] font-sans font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>ОФОРМИТЬ РАСЧЕТ В WHATSAPP</span>
                </a>

                <div className="flex items-center justify-center space-x-2 text-[10px] font-mono text-[#F7F4EF]/60 pt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5A069]" />
                  <span>Шоурум в Астане · Гарантия на швы 3 года</span>
                </div>
              </div>
            </div>

            {/* Quality Standard Guarantee Card */}
            <div className="p-4 rounded-xl bg-[#23122B]/40 border border-white/5 text-xs text-[#F7F4EF]/70 space-y-2">
              <div className="font-medium text-[#F7F4EF] flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A069]"></span>
                <span>Стандарт пошива MUAR A:</span>
              </div>
              <p className="leading-relaxed">
                Пошив выполняется в собственном цехе в Астане на промышленных машинах Dürkopp Adler.
                Перед передачей заказчику каждое изделие проходит вертикальное отпаривание на стенде.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
