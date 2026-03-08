import { useState, useRef, useEffect } from 'react';
import { MapPin, Star, ExternalLink, Map } from 'lucide-react';
import { places, placeCategories } from '../data';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.disconnect(); }
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

export default function PlacesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? places
    : places.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Sub Hero */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/8 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              استكشف جدة
            </div>
            <h1 className="font-cairo font-black text-4xl md:text-5xl lg:text-6xl mb-3">
              الأماكن <span className="gradient-text">السياحية</span>
            </h1>
            <p className="text-gray-custom text-base font-light max-w-lg">
              أكثر من 500 مكان موثّق في جدة — من التراث العالمي إلى الشواطئ الخلابة
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-3 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {placeCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-teal-500 text-white shadow-lg shadow-teal-700/30'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/8'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map Strip */}
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto">
          <a
            href="https://maps.google.com/maps?q=جدة+أماكن+سياحية"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-teal rounded-2xl p-5 flex items-center justify-between group hover:border-teal-500/30 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-700/20 flex items-center justify-center text-teal-500">
                <Map size={20} />
              </div>
              <div>
                <h3 className="font-cairo font-bold text-sm">شاهد الأماكن على الخريطة</h3>
                <p className="text-xs text-gray-custom">افتح خريطة جوجل لرؤية جميع الأماكن</p>
              </div>
            </div>
            <ExternalLink size={18} className="text-teal-500 group-hover:translate-x-[-4px] transition-transform" />
          </a>
        </div>
      </div>

      {/* Places Grid */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((place, i) => (
              <Reveal key={place.id} delay={i * 80}>
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300"
                >
                  {/* Card Image */}
                  <div className="h-48 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${place.colors[0]}, ${place.colors[1]})` }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-25 text-7xl group-hover:scale-110 transition-transform duration-500">
                        {place.icon}
                      </div>
                      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 400 200">
                        <pattern id={`grid-${place.id}`} width="30" height="30" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="1" fill="#14a5a5" />
                        </pattern>
                        <rect width="400" height="200" fill={`url(#grid-${place.id})`} />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                    <span className="absolute top-3 right-3 bg-teal-700/60 backdrop-blur-sm border border-teal-500/30 text-teal-500 text-[0.6rem] font-bold tracking-wider px-2.5 py-1 rounded-full">
                      {place.categoryLabel}
                    </span>
                    <span className={`absolute top-3 left-3 text-[0.6rem] font-bold px-2.5 py-1 rounded-full ${
                      place.price === 'مجاني'
                        ? 'bg-teal-500/20 text-teal-500'
                        : 'bg-gold-500/20 text-gold-400'
                    }`}>
                      {place.price}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <h3 className="font-cairo font-bold text-base mb-1.5">{place.name}</h3>
                    <p className="text-xs text-gray-custom leading-relaxed mb-3 line-clamp-2">{place.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-white/50">
                        <MapPin size={12} /> {place.location}
                      </div>
                      <div className="flex items-center gap-1 text-gold-400 text-xs font-semibold">
                        <Star size={12} fill="currentColor" /> {place.rating}
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-custom">
              <span className="text-5xl block mb-4">🔍</span>
              <h3 className="font-cairo font-bold text-xl mb-2">لا توجد نتائج</h3>
              <p className="text-sm">جرّب تصنيفاً آخر</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
