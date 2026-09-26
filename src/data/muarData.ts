import { CurtainRoomVolume, FabricOption, B2BDirection, TopStrength, OrderStep } from '../types';

export const CURTAIN_VOLUMES: CurtainRoomVolume[] = [
  {
    id: 'volume-00',
    index: '00',
    number: '00',
    title: 'АТЕЛЬЕ MUAR A',
    subtitle: 'Астана · Собственный цех 350 м²',
    tagline: 'ИСКУССТВО КУТЮРНОЙ ДРАПИРОВКИ С 2014 ГОДА. ПРОКРУТИТЕ ДЛЯ ПОГРУЖЕНИЯ.',
    image: '/assets/muar/case-villa-doubleheight-new.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 0.0,
    videoEndTime: 1.0,
    description: 'Флагманское текстильное ателье в Астане. Пространство, где тончайшая европейская материя обретает безупречную геометрию складок, защищая тишину и эстетику дома.',
    curtainSpec: {
      fabricName: 'Кутюрный шенилл & французская вуаль',
      pleatType: 'Архитектурная складка «Идеальная волна»',
      fullnessRatio: 'Фиксированный коэффициент 1:2.0',
      headingTape: 'Bandex Wave 77 мм (Австрия)',
      motorization: 'Somfy Glydea Ultra RTS (Франция)',
      acousticAbsorption: 'NRC 0.65 (поглощение до 65% эха)',
      lightBlockage: '90% мягкое рассеивание',
      recommendedRoom: 'Парадные холлы, гостиные и пентхаусы'
    },
    quote: 'Текстиль — это не просто декор. Это финальный аккорд архитектуры, превращающий холодный объем в живую резиденцию.',
    designer: 'Асемгуль Омарова · Основательница MUAR A'
  },
  {
    id: 'volume-01',
    index: '01',
    number: '01',
    title: 'ПАРАДНАЯ ГОСТИНАЯ',
    subtitle: 'ЖК Talan Towers · Потолки 3.8 м',
    tagline: 'ИДЕАЛЬНАЯ ВОЛНА 1:2.0. БЕЗУПРЕЧНЫЙ РИТМ СКЛАДОК ОТ ПОТОЛКА ДО ПОЛА.',
    image: '/assets/muar/case-astana-lounge-new.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 1.0,
    videoEndTime: 2.2,
    description: 'Двусветное панорамное пространство с непрерывной линией остекления. Портьеры из бельгийского шенилла с утяжелителями 50 г/м формируют идеально ровные вертикальные колонны света и тени.',
    curtainSpec: {
      fabricName: 'Шенилл Wind (Бельгия), 460 г/м²',
      pleatType: 'Волна с шагом бегунков 8 см',
      fullnessRatio: '1:2.0 (на 1 м карниза — ровно 2 м ткани)',
      headingTape: 'Bandex шнуровая тесьма permanent-wave',
      motorization: 'Электрокарниз Somfy с интеграцией в Умный дом',
      acousticAbsorption: 'NRC 0.72 (гашение реверберации)',
      lightBlockage: 'Dimout 85%',
      recommendedRoom: 'Гостиные, каминные залы, арт-пространства'
    },
    quote: 'В высоких пространствах складка должна быть структурной. Никакой вялости ткани — только чистый архитектурный ритм.',
    designer: 'Ведущий декоратор MUAR A'
  },
  {
    id: 'volume-02',
    index: '02',
    number: '02',
    title: 'ВИЛЛА: ВТОРОЙ СВЕТ',
    subtitle: 'Загородная резиденция · Высота 5–8 метров',
    tagline: 'ЭЛЕКТРОПОДЪЕМНАЯ ЛИФТ-СИСТЕМА SOMFY. ЛЕГКИЙ УХОД ЗА ТКАНЬЮ НА ВЫСОТЕ.',
    image: '/assets/muar/villa-hall.webp',
    videoSrc: '/assets/muar/villa-lift-system.mp4',
    videoStartTime: 2.2,
    videoEndTime: 3.6,
    description: 'Уникальное инженерное решение для проемов второго света: встроенная лифтовая система Somfy опускает полотна карниза до уровня пола одним нажатием пульта для сезонного ухода и клининга.',
    curtainSpec: {
      fabricName: 'Бархат Dedar Soft (Италия) + Подклад',
      pleatType: 'Глубокая бантовая складка Box Pleat',
      fullnessRatio: '1:2.0 с двойным стабилизатором',
      headingTape: 'Армированная тесьма Bandex 100 мм',
      motorization: 'Лифт-подъемник Somfy Wirefree Motor',
      acousticAbsorption: 'NRC 0.85 (премиальный класс звукопоглощения)',
      lightBlockage: '100% Blackout с защитой от выгорания',
      recommendedRoom: 'Второй свет, холлы загородных домов, атриумы'
    },
    quote: 'Высота 8 метров не должна быть проблемой в уходе. Мы проектируем механику так, чтобы шторы радовали десятилетиями.',
    designer: 'Инженерный отдел моторизации MUAR A'
  },
  {
    id: 'volume-03',
    index: '03',
    number: '03',
    title: 'МАСТЕР-СПАЛЬНЯ',
    subtitle: 'ЖК Highvill Ishim · Тишина и абсолютный сон',
    tagline: '100% BLACKOUT & ТЕРМОИЗОЛЯЦИЯ. ПОЛНАЯ ТЕМНОТА В ЛЮБОЕ ВРЕМЯ СУТОК.',
    image: '/assets/muar/case-bedroom-couture-new.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 3.6,
    videoEndTime: 4.8,
    description: 'Индивидуальный текстильный капсульный ансамбль: портьеры с трехслойным блэкаутом, мягкая французская вуаль и стеганое покрывало ручной работы с декоративными подушками в тон.',
    curtainSpec: {
      fabricName: '100% Blackout Soft Touch + Тюль-вуаль',
      pleatType: 'Французская тройная ручная зашивка',
      fullnessRatio: '1:2.0 с перехлестом полотен 15 см',
      headingTape: 'Bandex Buckram (не выгорает на солнце)',
      motorization: 'Бесшумный электрокарниз Somfy Ultra 35 дБ',
      acousticAbsorption: 'NRC 0.78 (защита от уличного шума)',
      lightBlockage: '100% светонепроницаемость (0 люкс)',
      recommendedRoom: 'Спальни, детские комнаты, домашние кинотеатры'
    },
    quote: 'Истинный сон начинается тогда, когда за окном сияет яркое солнце, а в комнате сохраняется прохладная бархатная темнота.',
    designer: 'Текстильный куратор MUAR A'
  },
  {
    id: 'volume-04',
    index: '04',
    number: '04',
    title: 'СТОЛОВАЯ РЕЗИДЕНЦИИ',
    subtitle: 'Sensata Park · Кутюрная классика',
    tagline: 'КУТЮРНЫЙ ЖАККАРД И ФРАНЦУЗСКИЕ СКЛАДКИ. ТОРЖЕСТВЕННОСТЬ СЕМЕЙНЫХ ВЕЧЕРОВ.',
    image: '/assets/muar/case-garden-dining.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 4.8,
    videoEndTime: 6.0,
    description: 'Парадный зал для званых ужинов. Рельефный итальянский жаккард сложного переплетения мягко играет полутонами в лучах вечернего света над 3.5-метровым обеденным столом.',
    curtainSpec: {
      fabricName: 'Итальянский жаккард Rubelli Haute, 560 г/м²',
      pleatType: 'Французская тройная складка Pinch Pleat',
      fullnessRatio: '1:2.0 с ручным формованием лепестков',
      headingTape: 'Bandex 85 мм полупрозрачная тесьма',
      motorization: 'Ручное плавное скольжение Silent Gliss',
      acousticAbsorption: 'NRC 0.60',
      lightBlockage: 'Мягкий рассеянный свет',
      recommendedRoom: 'Столовые, банкетные холлы, галереи'
    },
    quote: 'Жаккард требует благородного пространства. Его нити живут своей жизнью при смене естественного освещения на вечернее.',
    designer: 'Декоратор MUAR A'
  },
  {
    id: 'volume-05',
    index: '05',
    number: '05',
    title: 'ЛАУНЖ-ЗОНА & БИБЛИОТЕКА',
    subtitle: 'ЖК Саранда · Экологичный минимализм',
    tagline: 'ФАКТУРНЫЙ ЕВРОПЕЙСКИЙ ЛЁН. ДЫШАЩИЙ ТЕКСТИЛЬ БЕЗ СИНТЕТИЧЕСКОГО БЛЕСКА.',
    image: '/assets/muar/case-decor-headboard-new.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 6.0,
    videoEndTime: 7.2,
    description: 'Лаконичная эстетика теплого минимализма и Japandi. 100% натуральный умягченный лён со свободной струящейся драпировкой и деликатным нижним наплывом на паркет 2 см.',
    curtainSpec: {
      fabricName: 'Фактурный лён Casamance (Франция), 380 г/м²',
      pleatType: 'Архитектурная свободная волна',
      fullnessRatio: '1:2.0 с нижним наплывом «Break on Floor»',
      headingTape: 'Bandex эко-тесьма из натуральных волокон',
      motorization: 'Механический профиль со скрытым пазом',
      acousticAbsorption: 'NRC 0.55',
      lightBlockage: '70% мягкая фильтрация солнечных лучей',
      recommendedRoom: 'Кабинеты, лаунж-зоны, террасы, библиотечные залы'
    },
    quote: 'Натуральный лён дарит пространству воздух. Он никогда не выглядит нарочито — только живое благородство текстуры.',
    designer: 'Ведущий дизайнер MUAR A'
  },
  {
    id: 'volume-06',
    index: '06',
    number: '06',
    title: 'КОРПОРАТИВНЫЙ ЗАЛ',
    subtitle: 'Бизнес-центр класса «А» · Астана',
    tagline: 'ОГНЕСТОЙКИЕ ТКАНИ TREVIRA CS (КМ1). ПОЛНЫЙ ПАКЕТ ДОКУМЕНТОВ С НДС 12%.',
    image: '/assets/muar/b2b-executive-curtains.webp',
    videoSrc: '/assets/muar/curtain-motion.mp4',
    videoStartTime: 7.2,
    videoEndTime: 8.4,
    description: 'Контрактное оформление переговорных залов и кабинетов руководства. Ткани не поддерживают горение, сертифицированы по пожарному классу КМ1, закрываются актами КС-2/КС-3.',
    curtainSpec: {
      fabricName: 'Контрактный димаут Trevira CS (Германия)',
      pleatType: 'Строгая архитектурная волна',
      fullnessRatio: '1:2.0 на усиленном алюминиевом профиле',
      headingTape: 'Негорючая тесьма Bandex Fire-Safe',
      motorization: 'Somfy KNX / BMS интеграция с диспетчеризацией',
      acousticAbsorption: 'NRC 0.70 (для конференц-связи без эха)',
      lightBlockage: 'Dimout 95% для проекторов и видеоконференций',
      recommendedRoom: 'Переговорные, залы заседаний, кабинеты CEO'
    },
    quote: 'В корпоративном сегменте нет места компромиссам: безопасность по КМ1, идеальная акустика и строгая финансовая отчетность.',
    designer: 'Руководитель контрактного отдела MUAR A'
  },
  {
    id: 'volume-07',
    index: '07',
    number: '07',
    title: 'СОБСТВЕННЫЙ ЦЕХ 350 М²',
    subtitle: 'Астана · Немецкие станки Dürkopp Adler',
    tagline: 'РУЧНОЙ ВТО, НИТИ GÜTERMANN, ДВОЙНОЙ ПОДГИБ 10 СМ. СТАНДАРТ ГОСТ РК.',
    image: '/assets/muar/strength-4-atelier.webp',
    videoSrc: '/assets/muar/craft-maral.mp4',
    videoStartTime: 8.4,
    videoEndTime: 9.5,
    description: 'Сердце MUAR A: мастера с опытом от 15 лет вручную вымеряют каждый миллиметр шва. Двойная подгибка низа 10 см, утяжелители по краям и вертикальное отпаривание швейцарскими системами Laurastar.',
    curtainSpec: {
      fabricName: 'Все категории тканей салона (7000+ артикулов)',
      pleatType: 'Индивидуальная формовка под проект',
      fullnessRatio: 'Строго 1:2.0 (по швейцарскому стандарту)',
      headingTape: 'Bandex (Австрия), нити Gütermann (Германия)',
      motorization: 'Тестирование каждого карниза на стенде перед выездом',
      acousticAbsorption: 'Контроль плотности швов',
      lightBlockage: 'Проверка на просвет на специальном световом столе',
      recommendedRoom: 'Все типы премиальных интерьеров'
    },
    quote: 'Каждая портьера проверяется на тестовом стенде высотой 6 метров. Если есть отклонение хотя бы в 3 миллиметра — полотно перешивается.',
    designer: 'Марал · Главный технолог цеха MUAR A'
  }
];

export const UNIVERSAL_FABRICS: FabricOption[] = [
  {
    id: 'satin',
    name: 'Матовый сатин',
    pricePerMeter: 18000,
    origin: 'Турция',
    density: '320 г/м²',
    composition: '100% ПЭ сатинового плетения',
    image: '/assets/muar/fabric-satin.webp',
    tag: 'Хит сезона',
    description: 'Гладкая струящаяся материя с благородным матовым блеском. Идеальна для современных гостиных и лаконичных спален.'
  },
  {
    id: 'linen',
    name: 'Фактурный лён',
    pricePerMeter: 24000,
    origin: 'Франция (Casamance)',
    density: '380 г/м²',
    composition: '85% европейский лён, 15% вискоза',
    image: '/assets/muar/fabric-linen.webp',
    tag: 'Эко-коллекция',
    description: 'Выразительная рельефная текстура натурального волокна. Создает мягкий дышащий микроклимат и уют в дневной зоне.'
  },
  {
    id: 'dimout',
    name: 'Dimout / Blackout',
    pricePerMeter: 32000,
    origin: 'Турция / Германия',
    density: '420 г/м²',
    composition: 'Трехслойное переплетение с черной нитью',
    image: '/assets/muar/fabric-dimout.webp',
    tag: '100% Темнота',
    description: 'Максимальная светоизоляция и тепловая защита. Блокирует яркое солнце, неоновые вывески и защищает комнату от нагрева.'
  },
  {
    id: 'velvet',
    name: 'Бархат Velvet',
    pricePerMeter: 38000,
    origin: 'Италия (Dedar)',
    density: '520 г/м²',
    composition: 'Хлопковый шелковистый ворс',
    image: '/assets/muar/fabric-velvet.webp',
    tag: 'Кутюрная глубина',
    description: 'Роскошный глубокий матовый ворс, меняющий полутона при движении света. Непревзойденная акустическая мягкость.'
  },
  {
    id: 'jacquard',
    name: 'Кутюрный жаккард',
    pricePerMeter: 48000,
    origin: 'Италия / Франция',
    density: '560 г/м²',
    composition: 'Многослойный жаккардовый рельеф',
    image: '/assets/muar/fabric-jacquard.webp',
    tag: 'Коллекционный',
    description: 'Сложный объемный орнамент для парадных залов, столовых и загородных резиденций с историческим или неоклассическим шармом.'
  },
  {
    id: 'royal',
    name: 'Королевский бархат',
    pricePerMeter: 58000,
    origin: 'Бельгия (Haute Archive)',
    density: '640 г/м²',
    composition: 'Натуральный шелк и длинноволокнистый хлопок',
    image: '/assets/muar/fabric-royal.webp',
    tag: 'Флагман ателье',
    description: 'Тяжелое монументальное полотно высочайшей плотности. Создает ощущение неприступной монархической тишины и роскоши.'
  }
];

export const B2B_DIRECTIONS: B2BDirection[] = [
  {
    id: 'horeca',
    title: 'Рестораны, Отели & HoReCa',
    subtitle: 'Потолочные паруса, зонирование столиков и сценический текстиль',
    image: '/assets/muar/b2b-restaurant-canopy.webp',
    badge: 'Акустика & Атмосфера',
    specs: [
      'Потолочные тканевые паруса для снижения реверберации и гула в зале',
      'Огнестойкие ткани со стандартом КМ1 (не поддерживают горение)',
      'Износостойкость по Мартиндейлу > 60 000 циклов истирания',
      'Быстрый монтаж в ночную смену без остановки работы заведения'
    ],
    description: 'Мы создаем акустический и визуальный комфорт в премиальных ресторанах Астаны. Гости слышат друг друга за столиком, а мягкие струящиеся драпировки превращают интерьер в статусную локацию.'
  },
  {
    id: 'executive',
    title: 'Кабинеты CEO & Залы заседаний',
    subtitle: 'Представительский сатин, бархат и интеграция в Умный офис',
    image: '/assets/muar/b2b-executive-curtains.webp',
    badge: 'Конфиденциальность',
    specs: [
      'Полная светомаскировка для презентаций на 4K проекторах и LED-экранах',
      'Акустическая звукоизоляция дверных и оконных проемов от прослушивания',
      'Скрытые моторизованные карнизы Somfy с управлением с планшета или пульта',
      'Официальный договор, работа с НДС 12%, акты КС-2 и КС-3'
    ],
    description: 'Оформление главных кабинетов государственных ведомств, банков и штаб-квартир корпораций. Безупречная геометрия волны подчеркивает масштаб принимаемых решений.'
  },
  {
    id: 'screen',
    title: 'Контрактные ролл-шторы Screen Somfy',
    subtitle: 'Защита от солнца и бликов для бизнес-центров класса «А»',
    image: '/assets/muar/b2b-screen-office.webp',
    badge: 'Энергоэффективность',
    specs: [
      'Ткани Screen с коэффициентом перфорации 1%, 3%, 5%',
      'Защита мониторов сотрудников от бликов при сохранении панорамы города',
      'Снижение нагрузки на систему кондиционирования здания до 35%',
      'Групповая синхронизация моторов по датчикам солнца и расписанию BMS'
    ],
    description: 'Инженерная солнцезащита для крупных офисных площадей и open-space пространств. Надежные механизмы рассчитаны на интенсивную ежедневную эксплуатацию.'
  }
];

export const TOP_STRENGTHS: TopStrength[] = [
  {
    number: '01',
    title: '2 этажа коллекций и 7000+ образцов',
    description: 'Один из крупнейших шоурумов интерьерного текстиля в Казахстане. Прямые поставки с лучших фабрик Бельгии, Италии, Франции, Германии и Турции без посредников.',
    metric: '7 000+',
    metricLabel: 'образцов в наличии',
    image: '/assets/muar/strength-1-floors.webp'
  },
  {
    number: '02',
    title: 'Топ-50 декораторов СНГ',
    description: 'Наша команда отмечена ведущими интерьерными премиями и публикациями в профильных архитектурных журналах. Более 10 лет создаем текстильные шедевры.',
    metric: 'ТОП-50',
    metricLabel: 'декораторов СНГ',
    image: '/assets/muar/strength-2-award.webp'
  },
  {
    number: '03',
    title: 'Резиденции премиум-класса',
    description: 'Нам доверяют резиденты элитных жилых комплексов Астаны: Talan Towers, Highvill, Sensata, Саранда, Атлант, а также владельцы частных загородных вилл.',
    metric: '1 200+',
    metricLabel: 'реализованных окон',
    image: '/assets/muar/strength-3-vip.webp'
  },
  {
    number: '04',
    title: 'Собственный цех 350 м² в Астане',
    description: 'Промышленное немецкое оборудование Dürkopp Adler. Пошив по строгим стандартам ГОСТ РК с двойным подгибом низа 10 см и контролем геометрии на 6-метровом стенде.',
    metric: '350 м²',
    metricLabel: 'производственная площадь',
    image: '/assets/muar/strength-4-atelier.webp',
    videoSrc: '/assets/muar/craft-maral.mp4',
    poster: '/assets/muar/craft-maral-poster.jpg'
  },
  {
    number: '05',
    title: 'Премиум фурнитура Bandex & Gütermann',
    description: 'Используем только австрийскую тесьму Bandex, которая не садится при стирке и держит идеальную форму волны, и армированные немецкие нити Gütermann.',
    metric: '100%',
    metricLabel: 'австрийские комплектующие',
    image: '/assets/muar/strength-5-art.webp'
  },
  {
    number: '06',
    title: 'Сертифицированный партнер Somfy',
    description: 'Официальная авторизация французского лидера моторизации Somfy. Бесшумные электрокарнизы с 5-летней гарантией и интеграцией в Apple HomeKit, Алису и KNX.',
    metric: '5 ЛЕТ',
    metricLabel: 'официальная гарантия',
    image: '/assets/muar/strength-6-school.webp',
    videoSrc: '/assets/muar/villa-lift-system.mp4',
    poster: '/assets/muar/poster-villa-lift.jpg'
  },
  {
    number: '07',
    title: 'Безупречный сервис и навеска Laurastar',
    description: 'Комплексный сервис под ключ: от ювелирного монтажа карнизов до финальной навески и вертикального парового формования каждой складки швейцарскими системами Laurastar.',
    metric: 'ПОД КЛЮЧ',
    metricLabel: 'навеска и отпаривание',
    image: '/assets/muar/strength-7-gost.webp'
  }
];

export const ORDER_STEPS: OrderStep[] = [
  {
    step: '01',
    title: 'Экспресс-консультация',
    subtitle: 'Онлайн или по телефону за 15 минут',
    description: 'Вы делитесь размерами или фото интерьера. Наш ведущий декоратор формирует предварительную концепцию и расчет ориентировочного бюджета.',
    badge: '15 минут',
    iconName: 'MessageSquare'
  },
  {
    step: '02',
    title: 'Онлайн-подбор от топ-декораторов',
    subtitle: 'Или персональный выезд с 50 кг образцов по Астане',
    description: 'Индивидуальный видео-разбор и примерка текстиля под ваш интерьер по всему Казахстану. Для резидентов Астаны — персональный выезд декоратора с чемоданами образцов прямо на объект (возвратный депозит 7 000 ₸ при оформлении заказа).',
    badge: 'Депозит 7 000 ₸ возвратен',
    iconName: 'Sparkles'
  },
  {
    step: '03',
    title: 'Дизайн-проект & 3D-моделирование',
    subtitle: 'Точный расчет расхода ткани и согласование сметы',
    description: 'Проектируем пропорции драпировки с фиксированным коэффициентом 1:2.0, подбираем карнизные трассы и согласовываем финальную спецификацию.',
    badge: 'Коэффициент 1:2.0',
    iconName: 'Ruler'
  },
  {
    step: '04',
    title: 'Цеховой пошив по ГОСТ РК',
    subtitle: 'Собственный цех 350 м² в Астане',
    description: 'Мастера с 15-летним стажем создают шторы на станках Dürkopp Adler с ручным потайным швом, двойным подгибом 10 см и обязательной проверкой на световом стенде.',
    badge: 'Немецкие станки',
    iconName: 'Scissors'
  },
  {
    step: '05',
    title: 'Доставка, монтаж & отпаривание',
    subtitle: 'Премиальный финал под ключ',
    description: 'Аккуратный монтаж карнизов со строительным пылесосом, кутюрная навеска и финальное вертикальное отпаривание складок швейцарскими системами Laurastar.',
    badge: 'Под ключ',
    iconName: 'CheckCircle2'
  }
];
