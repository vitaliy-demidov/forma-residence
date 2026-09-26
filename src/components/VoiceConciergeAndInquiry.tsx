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

  const handleQuickChip = (chipText: string) => {
    setNotes((prev) => (prev ? prev + ', ' + chipText : chipText));
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = encodeURIComponent(
      `Здравствуйте, MUAR A!\nЗаявка на текстильный дизайн и расчет:\n` +
        `• Имя: ${name || 'Клиент'}\n` +
        `• Телефон: ${phone || 'Не указан'}\n` +
        `• Помещение: ${roomType}\n` +
        (notes ? `• Пожелания / параметры: ${notes}\n` : '') +
        (voiceTranscript ? `• Надиктованное сообщение: "${voiceTranscript}"\n` : '') +
        `Прошу связаться в WhatsApp для консультации.`
    );

    window.open(`https://wa.me/77015243141?text=${formattedMessage}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#160B1C] border-t border-[#C5A069]/30 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Contacts & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#23122B] border border-[#C5A069]/30 text-[#C5A069] text-xs font-mono tracking-widest uppercase mb-4">
                <span>ФЛАГМАНСКИЙ САЛОН & ЦЕХ</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F4EF] tracking-tight uppercase">
                СВЯЗАТЬСЯ С MUAR&nbsp;A
              </h2>
              <p className="mt-4 text-sm text-[#F7F4EF]/70 font-sans leading-relaxed">
                Приглашаем в шоурум интерьерного текстиля в Астане на чашку кофе и тактильное знакомство 
                с 7000+ образцами тканей из Европы.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-5 text-xs font-sans text-[#F7F4EF]/85">
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#23122B]/60 border border-white/5">
                <MapPin className="w-5 h-5 text-[#C5A069] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#F7F4EF] mb-0.5">Шоурум и цех в Астане</div>
                  <div className="text-[#F7F4EF]/70 leading-relaxed">
                    г. Астана, ул. Кабанбай батыра · Собственный цех 350 м²
                  </div>
                  <div className="text-[10px] font-mono text-[#D9BC8B] mt-1">
                    Парковка для клиентов студии
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#23122B]/60 border border-white/5">
                <Phone className="w-5 h-5 text-[#C5A069] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#F7F4EF] mb-0.5">Прямая линия и WhatsApp</div>
                  <a
                    href="tel:+77015243141"
                    className="text-sm font-mono text-[#F7F4EF] hover:text-[#C5A069] transition"
                  >
                    +7 (701) 524-31-41
                  </a>
                  <div className="text-[10px] font-mono text-[#25D366] mt-0.5">
                    Отвечаем в течение 10 минут
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#23122B]/60 border border-white/5">
                <Clock className="w-5 h-5 text-[#C5A069] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif text-base text-[#F7F4EF] mb-0.5">График работы</div>
                  <div className="text-[#F7F4EF]/70">
                    Ежедневно: с 10:00 до 20:00 (без выходных)
                  </div>
                  <div className="text-[10px] font-mono text-[#F7F4EF]/50 mt-0.5">
                    Выезды декораторов по предварительной записи
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Voice AI Concierge + WhatsApp Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#23122B]/80 border border-[#C5A069]/35 backdrop-blur-xl shadow-2xl relative">
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C5A069] mb-1">
                ГОЛОСОВОЙ КОНСЬЕРЖ-ДИСПЕТЧЕР
              </div>
              <h3 className="font-serif text-2xl text-[#F7F4EF]">
                Не тратьте время на печать — надиктуйте голосом
              </h3>
              <p className="text-xs text-[#F7F4EF]/70 font-sans mt-1">
                Нажмите кнопку микрофона и опишите задачу: комнату, размеры окна или желаемую ткань. 
                Система сформирует аккуратное сообщение для WhatsApp.
              </p>

              {/* Voice Record Button & Visualizer */}
              <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`px-6 py-3.5 rounded-full flex items-center space-x-3 transition-all ${
                    isRecording
                      ? 'bg-rose-600 text-white animate-pulse shadow-lg shadow-rose-600/40'
                      : 'bg-[#C5A069] text-[#160B1C] hover:bg-[#d9bc8b]'
                  }`}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  <span className="font-sans font-semibold text-xs tracking-wider uppercase">
                    {isRecording ? 'ИДЕТ ЗАПИСЬ (НАЖМИТЕ ДЛЯ СТОП)' : 'НАДИКТОВАТЬ ГОЛОСОМ'}
                  </span>
                </button>

                {isRecording && (
                  <div className="flex items-center space-x-1.5 h-6">
                    <span className="w-1 bg-[#C5A069] h-3 animate-soundwave-1"></span>
                    <span className="w-1 bg-[#C5A069] h-5 animate-soundwave-2"></span>
                    <span className="w-1 bg-[#C5A069] h-2 animate-soundwave-3"></span>
                    <span className="w-1 bg-[#C5A069] h-6 animate-soundwave-4"></span>
                    <span className="text-[11px] font-mono text-[#D9BC8B] ml-2">Слушаю...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompt Chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] font-mono text-[#F7F4EF]/40 self-center">Быстрые параметры:</span>
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
                    className="text-[10px] font-mono text-[#D9BC8B] px-2.5 py-1 rounded-full bg-[#160B1C] border border-[#C5A069]/25 hover:border-[#C5A069] transition"
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
                  <label className="text-xs font-sans text-[#F7F4EF]/80 block mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Асем"
                    className="w-full px-4 py-3 rounded-xl bg-[#160B1C] border border-white/10 text-sm text-[#F7F4EF] placeholder-white/20 focus:border-[#C5A069] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-sans text-[#F7F4EF]/80 block mb-1.5">Номер WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (701) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl bg-[#160B1C] border border-white/10 text-sm text-[#F7F4EF] placeholder-white/20 focus:border-[#C5A069] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-[#F7F4EF]/80 block mb-1.5">Помещение</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Гостиная', 'Спальня', 'Загородный дом / B2B'].map((rm) => (
                    <button
                      key={rm}
                      type="button"
                      onClick={() => setRoomType(rm)}
                      className={`py-2 rounded-lg text-xs font-sans border transition ${
                        roomType === rm
                          ? 'border-[#C5A069] bg-[#C5A069]/15 text-[#D9BC8B] font-semibold'
                          : 'border-white/10 bg-[#160B1C] text-[#F7F4EF]/70'
                      }`}
                    >
                      {rm}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-[#F7F4EF]/80 block mb-1.5">
                  Параметры заказа или расшифровка голоса
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ориентировочная ширина окна, потолки, ткань или надиктуйте выше..."
                  className="w-full px-4 py-3 rounded-xl bg-[#160B1C] border border-white/10 text-sm text-[#F7F4EF] placeholder-white/20 focus:border-[#C5A069] focus:outline-none transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#160B1C] font-sans font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>ОТПРАВИТЬ ЗАЯВКУ В WHATSAPP</span>
              </button>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
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
