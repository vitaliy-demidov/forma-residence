import React, { useState } from 'react';
import { TOP_STRENGTHS } from '../data/muarData';
import { Sparkles, Play, X } from 'lucide-react';

export const Top7Strengths: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="strengths-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-white border-t border-[#B88E52]/20 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>СТУДИЯ И АТЕЛЬЕ С 2014 ГОДА</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#221C16] tracking-tight uppercase">
            ТОП-7 СИЛ СТУДИИ <span className="muar-a">MUAR&nbsp;A</span>
          </h2>
          <p className="mt-4 text-[#6C6256] font-sans text-sm sm:text-base leading-relaxed">
            Фундаментальные стандарты, благодаря которым нам доверяют резиденты главных жилых комплексов 
            и закрытых коттеджных городков Астаны.
          </p>
        </div>

        {/* 7 Strengths Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOP_STRENGTHS.map((item, idx) => {
            const isFeatured = idx === 3 || idx === 5; // Atelier (Maral) & Somfy (Villa lift) have real videos!
            return (
              <div
                key={item.number}
                className={`relative rounded-3xl overflow-hidden border border-[#B88E52]/20 bg-[#FAF7F2] group transition-all duration-300 hover:border-[#B88E52]/60 hover:shadow-xl ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  {/* Video Play Button if video exists */}
                  {item.videoSrc && (
                    <button
                      onClick={() => setActiveVideo({ src: item.videoSrc!, title: item.title })}
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#B88E52]/90 hover:bg-[#B88E52] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
                      title="Смотреть реальное видео"
                    >
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </button>
                  )}

                  {/* Number Badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-[#B88E52] px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm border border-[#B88E52]/30 shadow-sm">
                    {item.number}
                  </div>

                  {/* Metric Tag */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <div className="font-sans font-bold text-lg text-white tabular-nums leading-none drop-shadow">
                      {item.metric}
                    </div>
                    <div className="text-[10px] font-mono text-[#EADCCB] uppercase">
                      {item.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2.5 bg-white">
                  <h3 className="font-serif text-xl text-[#221C16] group-hover:text-[#B88E52] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6C6256] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden border border-[#B88E52]/40 shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-[#B88E52]/15 bg-[#FAF7F2]">
              <span className="font-serif text-base text-[#221C16] font-medium">{activeVideo.title}</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-black/5 text-[#221C16] flex items-center justify-center hover:bg-black/10 transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Video player */}
            <div className="relative aspect-[16/9] bg-black">
              <video
                src={activeVideo.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
