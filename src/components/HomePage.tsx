import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar, Star, ChevronLeft } from 'lucide-react';
import { places, events, quickInfo, testimonials, neighborhoods } from '../data';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setVisible(true), delay);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
      {children}
    </div>
  );
}

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} />
      <VisitorTypeSection />
      <PlacesPreview onNavigate={onNavigate} />
      <EventsPreview onNavigate={onNavigate} />
      <QuickInfoStrip />
      <NeighborhoodsSection />
      <TransportPreview onNavigate={onNavigate} />
      <TestimonialsSection />
      <ProofBar />
    </div>
  );
}

function HeroSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section className="min-h-screen relative flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-[#0a1a1a] to-dark-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(13,110,110,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,153,58,0.08) 0%, transparent 60%)'
        }} />
      </div>

      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full top-[10%] left-[-10%] animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(13,110,110,0.15) 0%, transparent 70%)' }} />
      <div className="absolute w-[300px] h-[300px] rounded-full bottom-[20%] right-[-5%] animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(201,153,58,0.08) 0%, transparent 70%)', animationDelay: '3s' }} />

      {/* Skyline SVG */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] overflow-hidden">
        <svg viewBox="0 0 1440 200" fill="none" className="absolute bottom-0 w-full opacity-[0.12]" preserveAspectRatio="xMidYMax slice">
          <path d="M0,200 L0,140 L40,140 L40,120 L50,120 L50,100 L60,100 L60,120 L80,120 L80,80 L85,80 L85,60 L90,60 L90,80 L95,80 L95,120 L120,120 L120,90 L130,90 L130,70 L135,70 L135,90 L140,90 L140,120 L160,120 L160,100 L170,100 L170,80 L175,70 L180,80 L180,100 L200,100 L200,60 L210,60 L215,40 L220,60 L220,100 L240,100 L240,110 L260,110 L260,85 L270,75 L280,85 L280,110 L300,110 L300,95 L310,95 L310,75 L315,65 L320,75 L320,95 L350,95 L350,120 L370,120 L370,90 L380,80 L385,60 L390,80 L390,90 L400,90 L400,120 L430,120 L430,100 L440,90 L440,70 L445,50 L450,70 L450,90 L460,90 L460,100 L490,100 L490,85 L500,75 L510,85 L510,100 L540,100 L540,115 L560,115 L560,95 L570,85 L575,65 L580,85 L580,95 L590,95 L590,115 L620,115 L620,100 L630,90 L635,70 L640,90 L640,100 L660,100 L660,120 L700,120 L700,100 L720,100 L720,80 L730,65 L740,80 L740,100 L760,100 L760,120 L790,120 L790,90 L800,80 L810,60 L815,40 L820,60 L820,80 L830,90 L830,120 L860,120 L860,100 L870,90 L870,75 L880,75 L880,90 L890,100 L890,120 L920,120 L920,105 L930,95 L940,105 L940,120 L970,120 L970,95 L980,85 L985,65 L990,85 L990,95 L1010,95 L1010,120 L1040,120 L1040,100 L1060,100 L1060,80 L1070,65 L1080,80 L1080,100 L1100,100 L1100,120 L1140,120 L1140,95 L1160,85 L1165,60 L1170,85 L1170,95 L1200,95 L1200,115 L1220,115 L1220,100 L1235,90 L1240,75 L1245,90 L1245,100 L1270,100 L1270,120 L1310,120 L1310,95 L1320,85 L1325,65 L1330,85 L1330,95 L1360,95 L1360,120 L1400,120 L1400,140 L1440,140 L1440,200 Z" fill="#14a5a5"/>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16 max-w-4xl pt-24">
        <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-8" style={{ animation: 'fadeUp 0.8s ease forwards' }}>
          <span>🧭</span> دليلك السياحي الذكي لجدة
        </div>

        <h1 className="font-cairo font-black leading-[1.05] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', animation: 'fadeUp 0.8s 0.2s ease both' }}>
          <span className="block text-white">ابدأ</span>
          <span className="block gradient-text">خُطاك في جدة</span>
        </h1>

        <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg mb-10" style={{ animation: 'fadeUp 0.8s 0.4s ease both' }}>
          من البحر الأحمر للبلد التاريخية — اكتشف جدة بعيون أهلها.
          أماكن، فعاليات، وتنقل في مكان واحد.
        </p>

        <div className="flex flex-wrap gap-3" style={{ animation: 'fadeUp 0.8s 0.6s ease both' }}>
          <button
            onClick={() => onNavigate('places')}
            className="bg-gradient-to-l from-teal-700 to-teal-500 text-white border-none px-7 py-3.5 rounded-xl font-tajawal font-bold text-base cursor-pointer transition-all hover:-translate-y-0.5 shadow-lg shadow-teal-700/35 hover:shadow-xl hover:shadow-teal-700/50 flex items-center gap-2"
          >
            🗺️ ابدأ استكشافك
          </button>
          <button
            onClick={() => onNavigate('events')}
            className="bg-transparent text-white border border-white/20 px-7 py-3.5 rounded-xl font-tajawal font-semibold text-base cursor-pointer transition-all hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/5 flex items-center gap-2"
          >
            📅 الفعاليات القادمة
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 right-6 md:right-16 flex gap-8 z-10" style={{ animation: 'fadeUp 0.8s 0.8s ease both' }}>
        {[
          { num: '+500', label: 'مكان مميز' },
          { num: '4', label: 'لغات مدعومة' },
          { num: '24/7', label: 'محتوى محدّث' },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <div className="font-cairo font-black text-2xl text-teal-500 leading-none">{s.num}</div>
            <div className="text-xs text-gray-custom mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs tracking-[0.15em] z-10 animate-bounce-slow">
        <span>اكتشف</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal-500/60 to-transparent" />
      </div>
    </section>
  );
}

function VisitorTypeSection() {
  const types = [
    { emoji: '👨‍👩‍👧‍👦', title: 'زيارة عائلية', desc: 'أماكن ترفيه، مطاعم عائلية، وأنشطة للأطفال في جدة' },
    { emoji: '🎒', title: 'مغامر منفرد', desc: 'الأحياء الخفية، الكافيهات الأصيلة، والتجارب الحقيقية' },
    { emoji: '✈️', title: 'سائح أجنبي', desc: 'كل ما تحتاجه من معلومات أساسية لزيارة جدة لأول مرة' },
    { emoji: '🏡', title: 'مقيم جديد', desc: 'اكتشف أحياء جدة وخدماتها كأنك من أهلها من اليوم الأول' },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          <div className="w-6 h-px bg-teal-500" />
          تجربة مخصصة
        </div>
        <h2 className="font-cairo font-black text-3xl md:text-4xl lg:text-5xl mb-2">أنت من نوع أيش؟</h2>
        <p className="text-gray-custom text-base font-light mb-10 max-w-md">
          دليلك يتغير حسبك — وش تبحث عنه في جدة؟
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {types.map((t, i) => (
          <Reveal key={t.title} delay={i * 100}>
            <div className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 cursor-pointer transition-all duration-400 hover:border-teal-500/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="relative">
                <span className="text-4xl block mb-4">{t.emoji}</span>
                <h3 className="font-cairo font-bold text-lg mb-2">{t.title}</h3>
                <p className="text-sm text-gray-custom leading-relaxed font-light">{t.desc}</p>
                <ChevronLeft size={18} className="absolute bottom-0 left-0 text-teal-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PlacesPreview({ onNavigate }: { onNavigate: (page: string) => void }) {
  const featured = places.slice(0, 4);

  return (
    <section className="py-12 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              استكشف
            </div>
            <h2 className="font-cairo font-black text-3xl md:text-4xl">أبرز المعالم</h2>
          </div>
          <button onClick={() => onNavigate('places')} className="text-teal-500 text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all cursor-pointer">
            شاهد الكل <ChevronLeft size={16} />
          </button>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: '280px 240px' }}>
        {featured.map((place, i) => (
          <Reveal key={place.id} delay={i * 100} className={i === 0 ? 'md:row-span-2' : ''}>
            <a
              href={place.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block rounded-2xl overflow-hidden relative cursor-pointer group h-full ${i === 0 ? 'min-h-[400px] md:min-h-0' : 'min-h-[220px]'}`}
            >
              {/* SVG BG */}
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]})` }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20 text-8xl">{place.icon}</div>
                {/* Decorative dots */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
                  {Array.from({ length: 20 }).map((_, j) => (
                    <circle key={j} cx={Math.random() * 400} cy={Math.random() * 400} r={Math.random() * 3 + 0.5} fill="#14a5a5" />
                  ))}
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-teal-700/0 group-hover:bg-teal-700/10 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 left-0 p-5">
                <span className="inline-block bg-teal-700/60 backdrop-blur-sm border border-teal-500/30 text-teal-500 text-[0.65rem] font-bold tracking-wider px-3 py-1 rounded-full mb-2">
                  {place.categoryLabel}
                </span>
                <span className="block font-cairo font-extrabold text-white text-lg mb-1">{place.name}</span>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <span className="flex items-center gap-1 text-gold-400 font-semibold">
                    <Star size={12} fill="currentColor" /> {place.rating}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} /> {place.location}
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function EventsPreview({ onNavigate }: { onNavigate: (page: string) => void }) {
  const featured = events.slice(0, 3);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-dark-700/50 to-dark-950/50 border-t border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                <div className="w-6 h-px bg-teal-500" />
                لا تفوّتها
              </div>
              <h2 className="font-cairo font-black text-3xl md:text-4xl">الفعاليات القادمة</h2>
            </div>
            <button onClick={() => onNavigate('events')} className="text-teal-500 text-sm font-semibold flex items-center gap-1 hover:gap-3 transition-all cursor-pointer">
              كل الفعاليات <ChevronLeft size={16} />
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((event, i) => (
            <Reveal key={event.id} delay={i * 100}>
              <a
                href={event.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
              >
                <div className="h-40 relative overflow-hidden">
                  <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${event.colors[0]}, ${event.colors[1]})` }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-6xl group-hover:scale-110 transition-transform duration-500">{event.icon}</div>
                  </div>
                  {event.fomo && (
                    <span className="absolute top-3 left-3 bg-gold-500/90 backdrop-blur-sm text-dark-950 text-[0.65rem] font-extrabold px-3 py-1 rounded-full tracking-wide">
                      {event.fomo}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-teal-500 text-xs font-bold mb-2">
                    <Calendar size={13} /> {event.date}
                  </div>
                  <h3 className="font-cairo font-bold text-base mb-2 leading-snug">{event.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-custom text-xs">
                      <MapPin size={12} /> {event.location}
                    </span>
                    <span className={`text-xs font-bold ${event.price === 'مجاني' ? 'text-teal-500' : 'text-gold-400'}`}>
                      {event.price}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickInfoStrip() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">
          <div className="w-6 h-px bg-teal-500" />
          معلومات سريعة
        </div>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickInfo.map((info, i) => (
          <Reveal key={info.label} delay={i * 80}>
            <div className="glass rounded-2xl p-5 text-center hover:border-teal-500/20 transition-all">
              <span className="text-3xl block mb-2">{info.icon}</span>
              <div className="font-cairo font-black text-2xl text-teal-500 mb-0.5">{info.value}</div>
              <div className="text-xs text-gray-custom">{info.sub}</div>
              <div className="text-[0.65rem] text-white/30 mt-1">{info.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function NeighborhoodsSection() {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          <div className="w-6 h-px bg-teal-500" />
          أحياء جدة
        </div>
        <h2 className="font-cairo font-black text-3xl md:text-4xl mb-2">اكتشف الأحياء</h2>
        <p className="text-gray-custom text-sm font-light mb-8 max-w-md">كل حي في جدة له طابعه الخاص — اختر حسب اهتمامك</p>
      </Reveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {neighborhoods.map((n, i) => (
          <Reveal key={n.name} delay={i * 60}>
            <div className="glass rounded-xl p-4 text-center cursor-pointer hover:border-teal-500/20 hover:-translate-y-1 transition-all group">
              <span className="text-2xl block mb-2 group-hover:scale-110 transition-transform">{n.icon}</span>
              <h4 className="font-cairo font-bold text-sm mb-0.5">{n.name}</h4>
              <p className="text-[0.7rem] text-gray-custom">{n.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TransportPreview({ onNavigate }: { onNavigate: (page: string) => void }) {
  const transTypes = [
    { icon: '🚖', title: 'تطبيقات التوصيل', desc: 'أوبر، كريم، إن درايف' },
    { icon: '🚌', title: 'الباص السريع', desc: 'خطوط BRT عبر جدة' },
    { icon: '🚗', title: 'تأجير السيارات', desc: 'شركات موثوقة ومتنوعة' },
    { icon: '✈️', title: 'المطار', desc: 'توصيل من وإلى المطار' },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <Reveal>
        <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          <div className="w-6 h-px bg-teal-500" />
          التنقل
        </div>
        <h2 className="font-cairo font-black text-3xl md:text-4xl mb-2">وصّلك لكل مكان</h2>
        <p className="text-gray-custom text-sm font-light mb-10 max-w-md">كل خيارات التنقل في جدة بين يديك</p>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {transTypes.map((t, i) => (
          <Reveal key={t.title} delay={i * 80}>
            <button
              onClick={() => onNavigate('transport')}
              className="w-full glass rounded-2xl p-6 text-center cursor-pointer hover:bg-teal-700/8 hover:border-teal-500/20 hover:-translate-y-1 transition-all group"
            >
              <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">{t.icon}</span>
              <h3 className="font-cairo font-bold text-base mb-1">{t.title}</h3>
              <p className="text-xs text-gray-custom">{t.desc}</p>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-dark-700/30 to-dark-950/30 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            <div className="w-6 h-px bg-teal-500" />
            آراء الزوار
          </div>
          <h2 className="font-cairo font-black text-3xl md:text-4xl mb-8">ماذا قالوا عن خُطى؟</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover:border-teal-500/15 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4 font-light">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-cairo font-bold text-white text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-custom">{t.from}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  const stats = [
    { num: '+12,000', label: 'زائر استخدم خُطى' },
    { num: '+500', label: 'مكان موثّق' },
    { num: '4.8 ⭐', label: 'متوسط تقييم المواقع' },
    { num: '3', label: 'لغات مدعومة' },
  ];

  return (
    <Reveal>
      <div className="py-10 px-6 bg-teal-700/6 border-t border-b border-teal-500/10">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8 md:gap-16">
              <div className="text-center">
                <span className="font-cairo font-black text-3xl md:text-4xl gradient-text block leading-none">{s.num}</span>
                <div className="text-xs text-gray-custom mt-1">{s.label}</div>
              </div>
              {i < stats.length - 1 && <div className="hidden md:block w-px h-12 bg-white/8" />}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
