import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#160B1C] border-t border-[#C5A069]/20 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#23122B] border border-[#C5A069]/30 text-[#C5A069] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>РЕАЛЬНЫЕ ОБЪЕКТЫ В АСТАНЕ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#F7F4EF] tracking-tight uppercase">
            ДО И ПОСЛЕ ТЕКСТИЛЬНОГО КУТЮРА
          </h2>
          <p className="mt-4 text-[#F7F4EF]/70 font-sans text-sm sm:text-base leading-relaxed">
            Потяните за ползунок, чтобы увидеть, как правильная геометрия волны и европейская ткань 
            превращают пустое помещение в теплую живую резиденцию.
          </p>
        </div>

        {/* Interactive Split Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] sm:aspect-[21/10] max-h-[680px] rounded-3xl overflow-hidden border border-[#C5A069]/30 shadow-2xl shadow-black/80 select-none cursor-ew-resize group"
        >
          {/* AFTER Image (Full background) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/assets/muar/after_real_aligned.webp"
              alt="После: Шторы MUAR A"
              className="w-full h-full object-cover"
            />
            {/* Label After */}
            <div className="absolute bottom-6 right-6 px-4 py-2 rounded-xl bg-[#23122B]/90 backdrop-blur-md border border-[#C5A069]/40 text-[#D9BC8B] text-xs font-mono tracking-widest uppercase">
              ПОСЛЕ: MUAR A (ВОЛНА 1:2.0)
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw'
              }}
            >
              <img
                src="/assets/muar/before_real_aligned.webp"
                alt="До оформления шторами"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Label Before */}
            <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-[#160B1C]/90 backdrop-blur-md border border-white/20 text-[#F7F4EF]/80 text-xs font-mono tracking-widest uppercase">
              ДО: БЕЗ ТЕКСТИЛЯ
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#C5A069] shadow-[0_0_15px_rgba(197,160,105,0.8)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#23122B] border-2 border-[#C5A069] shadow-2xl flex items-center justify-center text-[#C5A069] pointer-events-auto cursor-grab active:cursor-grabbing">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Transformation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-[#23122B]/50 border border-white/10">
            <div className="text-[#C5A069] font-mono text-xs uppercase tracking-widest mb-2">01 · АКУСТИЧЕСКИЙ КОМФОРТ</div>
            <div className="font-serif text-lg text-[#F7F4EF] mb-2">Устранение гула и эха</div>
            <p className="text-xs text-[#F7F4EF]/70 leading-relaxed font-sans">
              Плотный шенилл с коэффициентом драпировки 1:2.0 гасит до 65% отраженных звуковых волн от голых стен и стекол.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#23122B]/50 border border-white/10">
            <div className="text-[#C5A069] font-mono text-xs uppercase tracking-widest mb-2">02 · СВЕТОВОЙ СЦЕНАРИЙ</div>
            <div className="font-serif text-lg text-[#F7F4EF] mb-2">Мягкое рассеивание и блэкаут</div>
            <p className="text-xs text-[#F7F4EF]/70 leading-relaxed font-sans">
              Двухслойный ансамбль из французской вуали и портьер защищает мебель от выгорания и создает интимную атмосферу.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#23122B]/50 border border-white/10">
            <div className="text-[#C5A069] font-mono text-xs uppercase tracking-widest mb-2">03 · АРХИТЕКТУРА СКЛАДОК</div>
            <div className="font-serif text-lg text-[#F7F4EF] mb-2">Собственный цех и ВТО</div>
            <p className="text-xs text-[#F7F4EF]/70 leading-relaxed font-sans">
              Австрийская тесьма Bandex и утяжелители гарантируют, что каждая складка ниспадает строго вертикально годами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
