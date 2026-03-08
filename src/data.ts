export interface Place {
  id: number;
  name: string;
  category: string;
  categoryLabel: string;
  rating: number;
  price: string;
  location: string;
  description: string;
  mapUrl: string;
  featured?: boolean;
  icon: string;
  colors: [string, string];
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
  bookingUrl: string;
  category: string;
  fomo?: string;
  icon: string;
  colors: [string, string];
}

export interface TransportOption {
  id: number;
  title: string;
  description: string;
  icon: string;
  links: { name: string; url: string }[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initial: string;
}

export interface Tip {
  id: number;
  icon: string;
  title: string;
  content: string;
}

export interface Testimonial {
  id: number;
  name: string;
  from: string;
  text: string;
  rating: number;
}

export const placeCategories = [
  { id: 'all', label: 'الكل' },
  { id: 'heritage', label: 'تراث' },
  { id: 'nature', label: 'طبيعة' },
  { id: 'religious', label: 'ديني' },
  { id: 'shopping', label: 'تسوق' },
  { id: 'culture', label: 'ثقافة' },
  { id: 'food', label: 'مطاعم' },
  { id: 'beach', label: 'شواطئ' },
];

export const eventCategories = [
  { id: 'all', label: 'الكل' },
  { id: 'festival', label: 'مهرجانات' },
  { id: 'food', label: 'طعام' },
  { id: 'art', label: 'فنون' },
  { id: 'sports', label: 'رياضة' },
  { id: 'family', label: 'عائلي' },
  { id: 'film', label: 'أفلام' },
];

export const places: Place[] = [
  {
    id: 1,
    name: 'البلد التاريخية',
    category: 'heritage',
    categoryLabel: 'تراث عالمي UNESCO',
    rating: 4.9,
    price: 'مجاني',
    location: 'جدة القديمة',
    description: 'حي تاريخي يعود لعدة قرون، مسجل في قائمة التراث العالمي. تجول بين الرواشين والأزقة القديمة واستمتع بعبق التاريخ.',
    mapUrl: 'https://maps.google.com/maps?q=البلد+التاريخية+جدة',
    featured: true,
    icon: '🏛️',
    colors: ['#0a2a2a', '#1a5a4a'],
  },
  {
    id: 2,
    name: 'نافورة الملك فهد',
    category: 'nature',
    categoryLabel: 'معلم أيقوني',
    rating: 4.8,
    price: 'مجاني',
    location: 'كورنيش جدة',
    description: 'أعلى نافورة في العالم بارتفاع 312 متر، تضيء سماء جدة كل ليلة بعرض مذهل من المياه والأضواء.',
    mapUrl: 'https://maps.google.com/maps?q=نافورة+الملك+فهد+جدة',
    icon: '⛲',
    colors: ['#041520', '#0a3545'],
  },
  {
    id: 3,
    name: 'مسجد الرحمة العائم',
    category: 'religious',
    categoryLabel: 'موقع ديني',
    rating: 4.9,
    price: 'مجاني',
    location: 'على البحر مباشرة',
    description: 'مسجد فريد مبني فوق سطح البحر الأحمر، يوفر تجربة روحانية استثنائية مع إطلالة بحرية ساحرة.',
    mapUrl: 'https://maps.google.com/maps?q=مسجد+الرحمة+جدة',
    icon: '🕌',
    colors: ['#04101e', '#0a2535'],
  },
  {
    id: 4,
    name: 'كورنيش جدة',
    category: 'nature',
    categoryLabel: 'طبيعة وبحر',
    rating: 4.7,
    price: 'مجاني',
    location: '30 كم على الساحل',
    description: 'واجهة جدة البحرية الممتدة على 30 كم، مثالية للمشي والرياضة والاستمتاع بغروب الشمس الخلاب.',
    mapUrl: 'https://maps.google.com/maps?q=كورنيش+جدة',
    icon: '🌊',
    colors: ['#0a1515', '#1a3020'],
  },
  {
    id: 5,
    name: 'مول العرب',
    category: 'shopping',
    categoryLabel: 'تسوق وترفيه',
    rating: 4.5,
    price: 'مجاني',
    location: 'طريق المدينة',
    description: 'أحد أكبر مراكز التسوق في جدة، يضم أكثر من 300 متجر ومنطقة ترفيه عائلية ومطاعم عالمية.',
    mapUrl: 'https://maps.google.com/maps?q=مول+العرب+جدة',
    icon: '🛍️',
    colors: ['#1a1020', '#2a1535'],
  },
  {
    id: 6,
    name: 'متحف عبدالرؤوف خليل',
    category: 'culture',
    categoryLabel: 'فنون وثقافة',
    rating: 4.6,
    price: 'برسوم',
    location: 'حي الفيصلية',
    description: 'متحف شامل يعرض تاريخ جدة والحجاز من خلال مجموعة غنية من القطع الأثرية والفنية والتراثية.',
    mapUrl: 'https://maps.google.com/maps?q=متحف+عبدالرؤوف+خليل+جدة',
    icon: '🎨',
    colors: ['#1a1000', '#2a2010'],
  },
  {
    id: 7,
    name: 'شاطئ الإسكندرية',
    category: 'beach',
    categoryLabel: 'شاطئ',
    rating: 4.4,
    price: 'مجاني',
    location: 'شمال جدة',
    description: 'شاطئ رملي جميل مثالي للعائلات، يتميز بمياهه الصافية ومرافقه المتكاملة من مطاعم وألعاب.',
    mapUrl: 'https://maps.google.com/maps?q=شاطئ+الإسكندرية+جدة',
    icon: '🏖️',
    colors: ['#051a2a', '#0a3040'],
  },
  {
    id: 8,
    name: 'سوق العلوي',
    category: 'heritage',
    categoryLabel: 'تراث وتسوق',
    rating: 4.3,
    price: 'مجاني',
    location: 'البلد القديمة',
    description: 'سوق تقليدي عريق في قلب البلد التاريخية، يبيع البهارات والعطور والأقمشة التقليدية والحرف اليدوية.',
    mapUrl: 'https://maps.google.com/maps?q=سوق+العلوي+جدة',
    icon: '🏪',
    colors: ['#1a0a05', '#3a2010'],
  },
  {
    id: 9,
    name: 'حراء مول',
    category: 'shopping',
    categoryLabel: 'تسوق',
    rating: 4.4,
    price: 'مجاني',
    location: 'شارع حراء',
    description: 'مركز تسوق عصري يضم أشهر الماركات العالمية والمحلية مع منطقة مطاعم متنوعة وسينما.',
    mapUrl: 'https://maps.google.com/maps?q=حراء+مول+جدة',
    icon: '🏬',
    colors: ['#0a0a1a', '#1a1a3a'],
  },
  {
    id: 10,
    name: 'منتزه الشلال الترفيهي',
    category: 'nature',
    categoryLabel: 'ترفيه عائلي',
    rating: 4.3,
    price: 'برسوم',
    location: 'كورنيش جدة',
    description: 'منتزه ترفيهي على الكورنيش يضم شلال صناعي وألعاب مائية ومطاعم مطلة على البحر.',
    mapUrl: 'https://maps.google.com/maps?q=منتزه+الشلال+جدة',
    icon: '🎢',
    colors: ['#0a1a0a', '#1a3a1a'],
  },
];

export const events: Event[] = [
  {
    id: 1,
    title: 'موسم جدة — الحفل الافتتاحي',
    date: '8 مارس 2026',
    location: 'ساحة موسم جدة',
    price: '150 ريال',
    bookingUrl: 'https://www.visitsaudi.com',
    category: 'festival',
    fomo: '⏱ يومان متبقيان',
    icon: '🎵',
    colors: ['#1a0a2e', '#4a1060'],
  },
  {
    id: 2,
    title: 'مهرجان المأكولات البحرية الدولي',
    date: '12 مارس 2026',
    location: 'كورنيش جدة الشمالي',
    price: 'مجاني',
    bookingUrl: 'https://maps.google.com/maps?q=كورنيش+جدة+الشمالي',
    category: 'food',
    icon: '🍽️',
    colors: ['#0a1a2e', '#1a3a20'],
  },
  {
    id: 3,
    title: 'معرض الفن المعاصر السعودي',
    date: '15 مارس 2026',
    location: 'قاعة جدة للفنون',
    price: '80 ريال',
    bookingUrl: 'https://www.visitsaudi.com',
    category: 'art',
    fomo: '🔥 الأكثر مشاهدة',
    icon: '🎨',
    colors: ['#1a1000', '#3a2800'],
  },
  {
    id: 4,
    title: 'ماراثون جدة الدولي',
    date: '20 مارس 2026',
    location: 'كورنيش جدة',
    price: '50 ريال',
    bookingUrl: 'https://x.com',
    category: 'sports',
    icon: '🏃',
    colors: ['#0a2010', '#1a4020'],
  },
  {
    id: 5,
    title: 'يوم الأسرة — حديقة الفردوس',
    date: '22 مارس 2026',
    location: 'حديقة الفردوس',
    price: 'مجاني',
    bookingUrl: 'https://maps.google.com/maps?q=حديقة+الفردوس+جدة',
    category: 'family',
    icon: '👨‍👩‍👧‍👦',
    colors: ['#0a1520', '#1a3040'],
  },
  {
    id: 6,
    title: 'مهرجان الأفلام السعودية',
    date: '25 مارس 2026',
    location: 'سينما موفي — رد سي مول',
    price: '60 ريال',
    bookingUrl: 'https://www.muvi.com',
    category: 'film',
    fomo: '🎬 عرض حصري',
    icon: '🎬',
    colors: ['#1a0020', '#3a1040'],
  },
];

export const transportOptions: TransportOption[] = [
  {
    id: 1,
    title: 'تطبيقات التوصيل',
    description: 'أسرع وأسهل طريقة للتنقل في جدة. متاحة 24/7 مع خيارات متعددة.',
    icon: '🚖',
    links: [
      { name: 'Uber', url: 'https://www.uber.com/sa/ar/' },
      { name: 'Careem', url: 'https://www.careem.com/en-sa/' },
      { name: 'inDrive', url: 'https://indrive.com/en/cities/jeddah/' },
    ],
  },
  {
    id: 2,
    title: 'الباص السريع BRT',
    description: 'شبكة الباص السريع الجديدة تربط أهم مناطق جدة بأسعار اقتصادية.',
    icon: '🚌',
    links: [
      { name: 'خريطة الخطوط', url: 'https://maps.google.com/maps?q=جدة+باص' },
    ],
  },
  {
    id: 3,
    title: 'تأجير السيارات',
    description: 'حرية التنقل بسيارتك الخاصة. شركات موثوقة بأسعار تنافسية.',
    icon: '🚗',
    links: [
      { name: 'Lumi', url: 'https://www.lumi.car' },
      { name: 'Budget', url: 'https://www.budget.sa' },
      { name: 'Yelo', url: 'https://www.yelo.sa' },
    ],
  },
  {
    id: 4,
    title: 'مطار الملك عبدالعزيز',
    description: 'بوابة جدة الجوية. معلومات الرحلات وخيارات التوصيل من وإلى المطار.',
    icon: '✈️',
    links: [
      { name: 'موقع المطار', url: 'https://www.jia.gov.sa' },
    ],
  },
];

export const localTips: Tip[] = [
  {
    id: 1,
    icon: '🌡️',
    title: 'الطقس',
    content: 'جدة حارة رطبة صيفاً (38-45°C) ومعتدلة شتاءً (20-28°C). أفضل وقت للزيارة: نوفمبر - مارس.',
  },
  {
    id: 2,
    icon: '👔',
    title: 'اللباس',
    content: 'ملابس محتشمة ومريحة. الرجال: بنطلون طويل وتيشيرت. النساء: عباءة اختيارية لكن اللباس المحتشم مطلوب.',
  },
  {
    id: 3,
    icon: '💰',
    title: 'العملة',
    content: 'الريال السعودي (SAR). 1 دولار ≈ 3.75 ريال. البطاقات مقبولة في كل مكان تقريباً.',
  },
  {
    id: 4,
    icon: '🚨',
    title: 'الطوارئ',
    content: 'الشرطة: 911 | الإسعاف: 997 | الدفاع المدني: 998 | المرور: 993',
  },
  {
    id: 5,
    icon: '⏰',
    title: 'أوقات الصلاة',
    content: 'المحلات والمطاعم تغلق أثناء الصلاة (15-30 دقيقة). خطط جدولك حسب أوقات الصلاة.',
  },
  {
    id: 6,
    icon: '🗣️',
    title: 'اللغة',
    content: 'العربية هي اللغة الرسمية. الإنجليزية مفهومة في المناطق السياحية والفنادق والمولات.',
  },
  {
    id: 7,
    icon: '🚗',
    title: 'القيادة',
    content: 'رخصة قيادة دولية مطلوبة. القيادة على الجانب الأيمن. تطبيقات التنقل أسهل للسياح.',
  },
  {
    id: 8,
    icon: '💧',
    title: 'الماء',
    content: 'اشرب الماء باستمرار خاصة صيفاً. المياه المعبأة متوفرة في كل مكان بأسعار رخيصة.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'يوسف باحميد',
    role: 'المؤسس والمطور الرئيسي',
    initial: 'ي',
  },
  {
    id: 2,
    name: 'فريق التصميم',
    role: 'تصميم الهوية البصرية والواجهات',
    initial: 'ف',
  },
  {
    id: 3,
    name: 'فريق المحتوى',
    role: 'البحث والتوثيق السياحي',
    initial: 'م',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'أحمد من الرياض',
    from: '🇸🇦 السعودية',
    text: 'أول مرة أزور جدة وألاقي دليل شامل بالعربي يغطي كل شي. خُطى سهّل علي الرحلة بشكل كبير!',
    rating: 5,
  },
  {
    id: 2,
    name: 'فاطمة من دبي',
    from: '🇦🇪 الإمارات',
    text: 'موقع رائع! اكتشفت أماكن في جدة ما كنت أعرف عنها. البلد التاريخية كانت أحلى تجربة.',
    rating: 5,
  },
  {
    id: 3,
    name: 'محمد من القاهرة',
    from: '🇪🇬 مصر',
    text: 'الفعاليات والتنقل كانوا مرتبين بشكل ممتاز. وفّر علي وقت كثير في البحث والتخطيط.',
    rating: 4,
  },
];

export const neighborhoods = [
  { name: 'البلد', description: 'القلب التاريخي', icon: '🏛️' },
  { name: 'الحمراء', description: 'التسوق والحياة الليلية', icon: '🛍️' },
  { name: 'الشاطئ', description: 'الكورنيش والبحر', icon: '🌊' },
  { name: 'أبحر', description: 'الشواطئ والمنتجعات', icon: '🏖️' },
  { name: 'الروضة', description: 'المطاعم والكافيهات', icon: '☕' },
  { name: 'السلامة', description: 'سكني وعائلي', icon: '🏡' },
];

export const quickInfo = [
  { icon: '☀️', label: 'الطقس', value: '32°C', sub: 'مشمس' },
  { icon: '💱', label: 'العملة', value: '3.75', sub: 'ريال/دولار' },
  { icon: '🚨', label: 'الطوارئ', value: '911', sub: 'موحد' },
  { icon: '🕐', label: 'التوقيت', value: '+3 GMT', sub: 'توقيت مكة' },
];
