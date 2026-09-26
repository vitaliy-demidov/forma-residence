import React from 'react';
import { MessageSquare, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#' + id, { duration: 1.4 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#140A1A] border-t border-[#C5A069]/25 text-[#F7F4EF]/80 py-16 px-4 sm:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-[#C5A069]/40 bg-[#23122B] flex items-center justify-center text-[#C5A069]">
                <span className="font-serif text-base font-semibold">M</span>
              </div>
              <span className="muar-a font-serif text-2xl font-normal tracking-[0.16em] text-[#F7F4EF] uppercase">
                MUAR&nbsp;A
              </span>
            </div>
            <div className="text-xs font-mono tracking-widest text-[#C5A069] uppercase">
              SINCE 2014 · АСТАНА · САЛОН ИНТЕРЬЕРНОГО ТЕКСТИЛЯ
            </div>
            <p className="text-xs text-[#F7F4EF]/60 font-sans max-w-sm leading-relaxed">
              Кутюрный пошив портьер и покрывал в собственном цехе 350 м² в Астане.
              Официальный сертифицированный партнер Somfy. 7000+ коллекционных тканей из Бельгии, Италии и Франции.
            </p>
          </div>

          {/* Nav links (Strictly 4 Items) */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#C5A069] uppercase">
              НАВИГАЦИЯ
            </div>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('calculator-section')}
                  className="hover:text-[#D9BC8B] transition"
                >
                  Калькулятор штор (1:2.0)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('walkthrough-section')}
                  className="hover:text-[#D9BC8B] transition"
                >
                  Проекты и портфолио
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('strengths-section')}
                  className="hover:text-[#D9BC8B] transition"
                >
                  Топ-7 сил студии
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact-section')}
                  className="hover:text-[#D9BC8B] transition"
                >
                  Контакты и шоурум
                </button>
              </li>
            </ul>
          </div>

          {/* B2B Services */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#C5A069] uppercase">
              B2B ДИВИЗИОН
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#F7F4EF]/70">
              <li>Рестораны и HoReCa (паруса)</li>
              <li>Кабинеты CEO и залы заседаний</li>
              <li>Контрактные ролл-шторы Screen 3%</li>
              <li>Огнестойкие ткани Trevira CS (КМ1)</li>
              <li>Договор, НДС 12%, акты КС-2/КС-3</li>
            </ul>
          </div>

          {/* Contacts & WhatsApp */}
          <div className="space-y-3">
            <div className="text-xs font-mono tracking-widest text-[#C5A069] uppercase">
              СВЯЗЬ
            </div>
            <div className="space-y-2 text-xs font-sans">
              <a
                href="tel:+77015243141"
                className="block font-mono text-[#F7F4EF] hover:text-[#C5A069] transition"
              >
                +7 (701) 524-31-41
              </a>
              <div className="text-[11px] text-[#F7F4EF]/50">Ежедневно: 10:00 – 20:00</div>
              <a
                href="https://wa.me/77015243141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20MUAR%20A!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-medium hover:bg-[#25D366]/30 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Написать в WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#F7F4EF]/50">
          <div>
            © 2014–2026 <span className="muar-a text-[#F7F4EF]/80">MUAR&nbsp;A</span>. Все права защищены. 
            Астана, Казахстан.
          </div>

          <div className="flex items-center space-x-6">
            <span>ГОСТ РК · Dürkopp Adler · Somfy · Bandex</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#C5A069] hover:text-[#D9BC8B] transition cursor-pointer"
            >
              <span>НАВЕРХ</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
