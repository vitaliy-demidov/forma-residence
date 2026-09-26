import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, Send, CheckCircle2, Phone, MapPin, Clock } from 'lucide-react';

export const VoiceConciergeAndInquiry: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('Гостиная');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'ru-RU';

      recognition.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setVoiceTranscript(transcript);
        setNotes((prev) => (prev ? prev + ' ' + transcript : transcript));
      };

      recognition.onerror = (err: any) => {
        console.warn('Speech recognition error:', err);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert('Голосовой ввод не поддерживается данным браузером. Вы можете ввести параметры вручную.');
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      setVoiceTranscript('');
      recognitionRef.current.start();
      setIsRecording(true);
    }
  };

  const handleQuickChip = (text: string) => {
    setNotes((prev) => (prev ? `${prev}, ${text}` : text));
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = encodeURIComponent(
      `Здравствуйте, MUAR A!\n` +
        `Хочу заказать консультацию и выезд декоратора:\n` +
        `• Имя: ${name || 'Клиент'}\n` +
        `• Телефон: ${phone}\n` +
        `• Помещение: ${roomType}\n` +
        (notes ? `• Пожелания/размеры: ${notes}\n` : '') +
        `• Удобный город: Астана`
    );
    window.open(`https://wa.me/77015243141?text=${formattedMessage}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-20 sm:py-28 px-4 sm:px-8 bg-white border-t border-[#B88E52]/20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Contacts & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#B88E52]/30 text-[#B88E52] text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
                <span>ФЛАГМАНСКИЙ САЛОН & ЦЕХ</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#221C16] tracking-tight uppercase">
                СВЯЗАТЬСЯ С <span className="muar-a">MUAR&nbsp;A</span>
              </h2>
              <p className="mt-4 text-sm text-[#6C6256] font-sans leading-relaxed">
                Приглашаем в шоурум интерьерного текстиля в Астане на чашку кофе и тактильное знакомство 
                с 7000+ образцами тканей из Европы.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-4 text-xs font-sans text-[#221C16]">
              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#B88E52]/20 shadow-sm">
                <MapPin className="w-5 h-5 text-[#B88E52] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#221C16] font-semibold mb-0.5">Шоурум и цех в Астане</div>
                  <div className="text-[#6C6256] leading-relaxed">
                    г. Астана, ул. Кабанбай батыра · Собственный цех 350 м²
                  </div>
                  <div className="text-[10px] font-mono text-[#B88E52] mt-1 font-medium">
                    Парковка для клиентов студии
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#B88E52]/20 shadow-sm">
                <Phone className="w-5 h-5 text-[#B88E52] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#221C16] font-semibold mb-0.5">Прямая линия и WhatsApp</div>
                  <a
                    href="tel:+77015243141"
                    className="text-sm font-mono text-[#221C16] hover:text-[#B88E52] font-semibold transition"
                  >
                    +7 (701) 524-31-41
                  </a>
                  <div className="text-[10px] font-mono text-[#25D366] font-medium mt-0.5">
                    Отвечаем в течение 10 минут
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 rounded-2xl bg-[#FAF7F2] border border-[#B88E52]/20 shadow-sm">
                <Clock className="w-5 h-5 text-[#B88E52] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#221C16] font-semibold mb-0.5">График работы</div>
                  <div className="text-[#6C6256]">
                    Ежедневно: с 10:00 до 20:00 (без выходных)
                  </div>
                  <div className="text-[10px] font-mono text-[#6C6256]/80 mt-0.5">
                    Выезды декораторов по предварительной записи
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Voice AI Concierge + WhatsApp Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#B88E52]/25 shadow-xl relative">
            <div className="mb-6 pb-6 border-b border-[#B88E52]/15">
              <div className="text-xs font-mono uppercase tracking-widest text-[#B88E52] mb-1">
                ГОЛОСОВОЙ КОНСЬЕРЖ-ДИСПЕТЧЕР
              </div>
              <h3 className="font-serif text-2xl text-[#221C16]">
                Не тратьте время на печать — надиктуйте голосом
              </h3>
              <p className="text-xs text-[#6C6256] font-sans mt-1">
                Нажмите кнопку микрофона и опишите задачу: комнату, размеры окна или желаемую ткань. 
                Система сформирует аккуратное сообщение для WhatsApp.
              </p>

              {/* Voice Record Button & Visualizer */}
              <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`px-6 py-3.5 rounded-full flex items-center space-x-3 transition-all cursor-pointer shadow-sm ${
                    isRecording
                      ? 'bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-600/40'
                      : 'bg-[#B88E52] text-white hover:bg-[#a67d43]'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase">
                    {isRecording ? 'ИДЕТ ЗАПИСЬ (НАЖМИТЕ ДЛЯ СТОП)' : 'НАДИКТОВАТЬ ГОЛОСОМ'}
                  </span>
                </button>

                {isRecording && (
                  <div className="flex items-center space-x-1.5 h-6">
                    <span className="w-1 bg-[#B88E52] h-3 animate-soundwave-1"></span>
                    <span className="w-1 bg-[#B88E52] h-5 animate-soundwave-2"></span>
                    <span className="w-1 bg-[#B88E52] h-2 animate-soundwave-3"></span>
                    <span className="w-1 bg-[#B88E52] h-6 animate-soundwave-4"></span>
                    <span className="text-[11px] font-mono text-[#B88E52] ml-2">Слушаю...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-mono text-[#6C6256] self-center">Быстрые параметры:</span>
                {[
                  'Гостиная 3.5м волна',
                  'Спальня 100% блэкаут',
                  'Второй свет 6м Somfy',
                  'Выезд дизайнера по Астане'
                ].map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleQuickChip(chip)}
                    className="text-[10px] font-mono text-[#B88E52] px-2.5 py-1 rounded-full bg-white border border-[#B88E52]/25 hover:border-[#B88E52] transition cursor-pointer shadow-xs"
                  >
                    + {chip}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-sans text-[#221C16] block mb-1.5 font-medium">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Асем"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B88E52]/25 text-sm text-[#221C16] placeholder-[#6C6256]/50 focus:border-[#B88E52] focus:outline-none transition shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans text-[#221C16] block mb-1.5 font-medium">Номер WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (701) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#B88E52]/25 text-sm text-[#221C16] placeholder-[#6C6256]/50 focus:border-[#B88E52] focus:outline-none transition shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-[#221C16] block mb-1.5 font-medium">Помещение</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Гостиная', 'Спальня', 'Загородный дом / B2B'].map((rm) => (
                    <button
                      key={rm}
                      type="button"
                      onClick={() => setRoomType(rm)}
                      className={`py-2 rounded-xl text-xs font-sans border transition cursor-pointer ${
                        roomType === rm
                          ? 'border-[#B88E52] bg-white text-[#B88E52] font-semibold ring-1 ring-[#B88E52]'
                          : 'border-[#B88E52]/20 bg-white/70 text-[#6C6256] hover:border-[#B88E52]/40'
                      }`}
                    >
                      {rm}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-[#221C16] block mb-1.5 font-medium">
                  Параметры заказа или расшифровка голоса
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ориентировочная ширина окна, потолки, ткань или надиктуйте выше..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#B88E52]/25 text-sm text-[#221C16] placeholder-[#6C6256]/50 focus:border-[#B88E52] focus:outline-none transition shadow-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#B88E52] hover:bg-[#a67d43] text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP</span>
              </button>

              {isSubmitted && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Сообщение открыто в WhatsApp. Декоратор ответит вам в ближайшее время.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
