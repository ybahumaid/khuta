import { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, ExternalLink, Ticket } from 'lucide-react';
import { events, eventCategories } from '../data';

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

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? events
    : events.filter(e => e.category === activeFilter);

  return (
    <div>
      {/* Sub Hero */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              لا تفوّتها
            </div>
            <h1 className="font-cairo font-black text-4xl md:text-5xl lg:text-6xl mb-3">
              الفعاليات <span className="gradient-text">والمهرجانات</span>
            </h1>
            <p className="text-gray-custom text-base font-light max-w-lg">
              جدة ما توقف — فعاليات، حفلات، مهرجانات ومعارض على مدار السنة
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-dark-950/95 backdrop-blur-xl border-b border-white/5 py-3 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {eventCategories.map(cat => (
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

      {/* Events Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-10 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((event, i) => (
              <Reveal key={event.id} delay={i * 80}>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden group hover:border-teal-500/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                  {/* Card Image */}
                  <div className="h-44 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${event.colors[0]}, ${event.colors[1]})` }}>
                      <div className="absolute inset-0 flex items-center justify-center opacity-30 text-7xl group-hover:scale-110 transition-transform duration-500">
                        {event.icon}
                      </div>
                    </div>
                    {event.fomo && (
                      <span className="absolute top-3 left-3 bg-gold-500/90 backdrop-blur-sm text-dark-950 text-[0.65rem] font-extrabold px-3 py-1.5 rounded-full tracking-wide">
                        {event.fomo}
                      </span>
                    )}
                    <span className={`absolute top-3 right-3 text-[0.65rem] font-bold px-3 py-1.5 rounded-full ${
                      event.price === 'مجاني'
                        ? 'bg-teal-500/30 backdrop-blur-sm text-teal-300'
                        : 'bg-gold-500/30 backdrop-blur-sm text-gold-300'
                    }`}>
                      {event.price}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-teal-500 text-xs font-bold mb-3">
                      <Calendar size={14} />
                      {event.date}
                    </div>
                    <h3 className="font-cairo font-bold text-lg mb-2 leading-snug">{event.title}</h3>
                    <div className="flex items-center gap-1.5 text-gray-custom text-xs mb-4">
                      <MapPin size={13} /> {event.location}
                    </div>

                    {/* Action */}
                    <a
                      href={event.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-l from-teal-700 to-teal-500 text-white text-sm font-bold hover:shadow-lg hover:shadow-teal-700/30 transition-all"
                    >
                      <Ticket size={15} />
                      {event.price === 'مجاني' ? 'عرض التفاصيل' : 'احجز الآن'}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-custom">
              <span className="text-5xl block mb-4">📅</span>
              <h3 className="font-cairo font-bold text-xl mb-2">لا توجد فعاليات في هذا التصنيف</h3>
              <p className="text-sm">جرّب تصنيفاً آخر أو تابع الفعاليات القادمة</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
