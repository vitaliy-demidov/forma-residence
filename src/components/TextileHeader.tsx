import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface TextileHeaderProps {
  isAudioPlaying?: boolean;
  onToggleAudio?: () => void;
  onOpenCalculator?: () => void;
  onOpenFabrics?: () => void;
  onOpenBeforeAfter?: () => void;
  onOpenB2B?: () => void;
  onOpenStrengths?: () => void;
  onOpenOrder?: () => void;
  onOpenContacts?: () => void;
}

export const TextileHeader: React.FC<TextileHeaderProps> = ({
  isAudioPlaying,
  onToggleAudio,
  onOpenCalculator,
  onOpenFabrics,
  onOpenBeforeAfter,
  onOpenB2B,
  onOpenStrengths,
  onOpenOrder,
  onOpenContacts,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#' + id, { duration: 1.2 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#B88E52]/20 shadow-sm'
          : 'py-6 bg-[#FAF7F2]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1580px] mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Emblem & Monogram (Inspired by Pinterest Pin Logo) */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center space-x-3.5 cursor-pointer"
        >
          {/* Heraldic Circular Crest */}
          <div className="w-10 h-10 rounded-full border border-[#B88E52]/40 bg-white flex items-center justify-center text-[#B88E52] group-hover:border-[#B88E52] group-hover:shadow-md transition-all">
            <span className="font-serif text-lg font-normal tracking-wider">M</span>
          </div>

          <div className="flex flex-col">
            <span className="muar-a font-serif text-xl sm:text-2xl font-normal tracking-[0.2em] text-[#221C16] group-hover:text-[#B88E52] transition-colors uppercase leading-none">
              MUAR&nbsp;A
            </span>
            <span className="text-[9px] font-mono tracking-[0.28em] text-[#B88E52] uppercase mt-1">
              FABRICS & INTERIORS · EST. 2014
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-sans font-medium tracking-wider uppercase text-[#221C16]/80">
          <button
            onClick={() => scrollToSection('fabrics-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            Ткани
          </button>
          <button
            onClick={() => scrollToSection('calculator-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            Калькулятор 1:2.0
          </button>
          <button
            onClick={() => scrollToSection('before-after-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            До / После
          </button>
          <button
            onClick={() => scrollToSection('b2b-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            B2B & Контракт
          </button>
          <button
            onClick={() => scrollToSection('strengths-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            Преимущества
          </button>
          <button
            onClick={() => scrollToSection('order-journey-section')}
            className="hover:text-[#B88E52] transition-colors cursor-pointer"
          >
            Этапы заказа
          </button>
        </nav>

        {/* Action Controls: Phone, WhatsApp & Ambient Sound */}
        <div className="hidden sm:flex items-center space-x-4">
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              title={isAudioPlaying ? 'Отключить атмосферу' : 'Включить атмосферную музыку'}
              className="w-9 h-9 rounded-full bg-white border border-[#B88E52]/25 hover:border-[#B88E52] flex items-center justify-center text-[#221C16] hover:text-[#B88E52] transition-all cursor-pointer shadow-sm"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-[#B88E52] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#6C6256]" />
              )}
            </button>
          )}

          <a
            href="tel:+77015243141"
            className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-white border border-[#B88E52]/25 hover:border-[#B88E52] text-[#221C16] text-xs font-mono tracking-tight transition-all shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-[#B88E52]" />
            <span>+7 (701) 524-31-41</span>
          </a>

          <a
            href="https://wa.me/77015243141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20MUAR%20A!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%88%D1%82%D0%BE%D1%80%D0%B0%D0%BC"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#B88E52] hover:bg-[#a67d43] text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WHATSAPP</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          {onToggleAudio && (
            <button
              onClick={onToggleAudio}
              className="w-9 h-9 rounded-full bg-white border border-[#B88E52]/25 flex items-center justify-center text-[#221C16]"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-[#B88E52]" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#6C6256]" />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[#B88E52]/25 text-[#221C16]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF7F2] border-b border-[#B88E52]/20 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3 text-sm font-sans uppercase tracking-wider text-[#221C16]">
            <button
              onClick={() => scrollToSection('fabrics-section')}
              className="text-left py-2 border-b border-[#B88E52]/10"
            >
              Ткани
            </button>
            <button
              onClick={() => scrollToSection('calculator-section')}
              className="text-left py-2 border-b border-[#B88E52]/10"
            >
              Калькулятор 1:2.0
            </button>
            <button
              onClick={() => scrollToSection('before-after-section')}
              className="text-left py-2 border-b border-[#B88E52]/10"
            >
              До / После
            </button>
            <button
              onClick={() => scrollToSection('b2b-section')}
              className="text-left py-2 border-b border-[#B88E52]/10"
            >
              B2B & Контракт
            </button>
            <button
              onClick={() => scrollToSection('strengths-section')}
              className="text-left py-2 border-b border-[#B88E52]/10"
            >
              Преимущества
            </button>
            <button
              onClick={() => scrollToSection('order-journey-section')}
              className="text-left py-2"
            >
              Этапы заказа
            </button>
          </div>

          <div className="pt-2 flex flex-col space-y-2.5">
            <a
              href="tel:+77015243141"
              className="w-full py-3 rounded-xl bg-white border border-[#B88E52]/25 text-center text-xs font-mono text-[#221C16] flex items-center justify-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#B88E52]" />
              <span>+7 (701) 524-31-41</span>
            </a>
            <a
              href="https://wa.me/77015243141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20MUAR%20A!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%88%D1%82%D0%BE%D1%80%D0%B0%D0%BC"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#B88E52] text-white text-center text-xs font-sans font-semibold uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>НАПИСАТЬ В WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
