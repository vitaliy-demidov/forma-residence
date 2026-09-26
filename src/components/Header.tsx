import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, LayoutGrid, MessageSquare } from 'lucide-react';

interface HeaderProps {
  onOpenGrid: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
  renderMode: 'ultra' | 'video';
  onToggleRenderMode: () => void;
  activeDoor: 'b2c' | 'b2b';
  onSwitchDoor: (door: 'b2c' | 'b2b') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGrid,
  isAudioPlaying,
  onToggleAudio,
  renderMode,
  onToggleRenderMode,
  activeDoor,
  onSwitchDoor
}) => {
  const [currentTimeAstana, setCurrentTimeAstana] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Almaty',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setCurrentTimeAstana(new Intl.DateTimeFormat('ru-RU', options).format(now) + ' UTC+5');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#' + id, { duration: 1.4 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#160B1C]/92 backdrop-blur-xl border-b border-[#C5A069]/20 shadow-2xl shadow-black/40'
          : 'py-5 bg-gradient-to-b from-[#160B1C]/90 via-[#160B1C]/50 to-transparent'
      }`}
    >
      <div className="max-w-[1780px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo + Telemetry */}
        <div className="flex items-center space-x-5 lg:space-x-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full border border-[#C5A069]/40 bg-[#23122B] flex items-center justify-center text-[#C5A069] group-hover:border-[#C5A069] transition-all">
              <span className="font-serif text-base font-semibold">M</span>
            </div>
            <div className="flex flex-col">
              <span className="muar-a font-serif text-xl sm:text-2xl font-normal tracking-[0.16em] text-[#F7F4EF] group-hover:text-[#D9BC8B] transition-colors uppercase leading-none">
                MUAR&nbsp;A
              </span>
              <span className="text-[9px] font-mono tracking-[0.24em] text-[#C5A069] uppercase mt-1">
                SINCE 2014 · АСТАНА
              </span>
            </div>
          </a>

          {/* Telemetry: Astana coordinates and time */}
          <div className="hidden xl:flex items-center space-x-2 text-[10px] font-mono text-[#F7F4EF]/60 tracking-wider border-l border-white/10 pl-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A069] animate-pulse"></span>
            <span>АСТАНА {currentTimeAstana}</span>
            <span className="text-white/20">•</span>
            <span>51°08'N 71°26'E</span>
          </div>

          {/* B2C / B2B Dual Doors Switcher */}
          <div className="flex items-center p-0.5 rounded-full bg-[#23122B]/90 border border-[#C5A069]/30">
            <button
              onClick={() => onSwitchDoor('b2c')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium transition-all ${
                activeDoor === 'b2c'
                  ? 'bg-[#C5A069] text-[#160B1C] shadow-sm font-semibold'
                  : 'text-[#F7F4EF]/75 hover:text-[#F7F4EF]'
              }`}
            >
              Для дома (B2C)
            </button>
            <button
              onClick={() => onSwitchDoor('b2b')}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium transition-all ${
                activeDoor === 'b2b'
                  ? 'bg-[#1F3A3D] text-[#D9BC8B] border border-[#C5A069]/40 shadow-sm font-semibold'
                  : 'text-[#F7F4EF]/75 hover:text-[#F7F4EF]'
              }`}
            >
              Для бизнеса (B2B)
            </button>
          </div>
        </div>

        {/* Center Nav Links: Strictly 4 Required Items */}
        <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-mono tracking-[0.2em] text-[#F7F4EF]/85">
          <button
            onClick={() => scrollToSection('calculator-section')}
            className="hover:text-[#D9BC8B] transition-colors uppercase tracking-widest relative group py-1"
          >
            КАЛЬКУЛЯТОР
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A069] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('walkthrough-section')}
            className="hover:text-[#D9BC8B] transition-colors uppercase tracking-widest relative group py-1"
          >
            ПРОЕКТЫ
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A069] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('strengths-section')}
            className="hover:text-[#D9BC8B] transition-colors uppercase tracking-widest relative group py-1"
          >
            ТОП-7
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A069] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="hover:text-[#D9BC8B] transition-colors uppercase tracking-widest relative group py-1"
          >
            КОНТАКТЫ
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A069] transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        {/* Right Nav Utilities */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Mode Switcher: 4K Master Canvas vs 60fps Video Scrub */}
          <button
            onClick={onToggleRenderMode}
            title="Переключение между 4K панорамной фотосъемкой и видео-скроллингом 60fps"
            className="hidden md:flex items-center space-x-2 text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full border border-[#C5A069]/25 hover:border-[#C5A069] bg-[#23122B]/70 backdrop-blur-md transition-all text-[#F7F4EF]/80 hover:text-white"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                renderMode === 'ultra' ? 'bg-[#C5A069]' : 'bg-cyan-400'
              }`}
            ></span>
            <span>{renderMode === 'ultra' ? 'РЕЖИМ: 4K АРХИВ' : 'РЕЖИМ: 60FPS ВИДЕО'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleAudio}
            className="flex items-center space-x-2 text-[10px] font-mono tracking-widest px-2.5 py-1.5 rounded-full border border-[#C5A069]/25 hover:border-[#C5A069] bg-[#23122B]/60 text-[#F7F4EF]/80 hover:text-white transition-all"
            aria-label="Переключить фоновый звук"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C5A069]" />
                <div className="flex items-end space-x-[2px] h-3">
                  <span className="w-[2px] bg-[#C5A069] animate-soundwave-1"></span>
                  <span className="w-[2px] bg-[#C5A069] animate-soundwave-2"></span>
                  <span className="w-[2px] bg-[#C5A069] animate-soundwave-3"></span>
                  <span className="w-[2px] bg-[#C5A069] animate-soundwave-4"></span>
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#F7F4EF]/40" />
                <span className="hidden sm:inline text-[#F7F4EF]/50">ЗВУК</span>
              </>
            )}
          </button>

          {/* Direct WhatsApp Callout */}
          <a
            href="https://wa.me/77015243141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20MUAR%20A!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B8%D0%BB%D1%8E"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-[11px] font-sans font-medium transition-all"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>

          {/* Catalog Grid Trigger (88 button) */}
          <button
            onClick={onOpenGrid}
            title="Каталог интерьеров (88)"
            className="group flex items-center space-x-2 text-[11px] font-mono tracking-[0.16em] uppercase text-[#F7F4EF]/90 hover:text-white transition-colors pl-1"
          >
            <span className="hidden xl:inline text-[10px] text-[#C5A069]">КАТАЛОГ</span>
            <div className="w-8 h-8 rounded-full border border-[#C5A069]/40 group-hover:border-[#C5A069] bg-[#23122B] group-hover:bg-[#351B42] flex items-center justify-center transition-all">
              <LayoutGrid className="w-3.5 h-3.5 text-[#C5A069] group-hover:rotate-90 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
