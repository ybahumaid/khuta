import { useRef, useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { transportOptions, localTips } from '../data';

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

export default function TransportPage() {
  return (
    <div>
      {/* Sub Hero */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/6 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              التنقل في جدة
            </div>
            <h1 className="font-cairo font-black text-4xl md:text-5xl lg:text-6xl mb-3">
              كيف <span className="gradient-text">تتنقل؟</span>
            </h1>
            <p className="text-gray-custom text-base font-light max-w-lg">
              كل خيارات التنقل في جدة — من تطبيقات التوصيل لتأجير السيارات والباصات
            </p>
          </Reveal>
        </div>
      </section>

      {/* Transport Cards */}
      <section className="px-6 md:px-12 lg:px-16 pb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {transportOptions.map((option, i) => (
            <Reveal key={option.id} delay={i * 100}>
              <div className="glass rounded-2xl p-6 hover:border-teal-500/20 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{option.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-cairo font-bold text-xl mb-2">{option.title}</h3>
                    <p className="text-sm text-gray-custom leading-relaxed mb-4">{option.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {option.links.map(link => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-700/15 border border-teal-700/30 text-teal-500 text-sm font-semibold hover:bg-teal-700/25 hover:border-teal-500 transition-all"
                        >
                          {link.name}
                          <ExternalLink size={12} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quick Price Guide */}
      <section className="px-6 md:px-12 lg:px-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="glass-teal rounded-2xl p-6">
              <h3 className="font-cairo font-bold text-lg mb-4 flex items-center gap-2">
                💡 دليل الأسعار التقريبي
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { route: 'المطار ← وسط المدينة', price: '60-90 ريال', via: 'أوبر/كريم' },
                  { route: 'الكورنيش ← البلد', price: '15-25 ريال', via: 'أوبر/كريم' },
                  { route: 'تأجير يومي', price: '100-200 ريال', via: 'شركات التأجير' },
                  { route: 'باص سريع', price: '4 ريال', via: 'خط واحد' },
                ].map(item => (
                  <div key={item.route} className="bg-dark-950/50 rounded-xl p-4">
                    <div className="text-sm font-semibold mb-1">{item.route}</div>
                    <div className="text-xl font-cairo font-black text-teal-500">{item.price}</div>
                    <div className="text-xs text-gray-custom mt-1">{item.via}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Tips */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              نصائح من أهل جدة
            </div>
            <h2 className="font-cairo font-black text-3xl md:text-4xl mb-2">معلومات تهمك</h2>
            <p className="text-gray-custom text-sm font-light mb-8 max-w-md">نصائح مهمة لكل زائر جدة — من أهلها لضيوفها</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {localTips.map((tip, i) => (
              <Reveal key={tip.id} delay={i * 60}>
                <div className="glass rounded-2xl p-5 hover:border-teal-500/15 transition-all group">
                  <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{tip.icon}</span>
                  <h4 className="font-cairo font-bold text-sm mb-2">{tip.title}</h4>
                  <p className="text-xs text-gray-custom leading-relaxed">{tip.content}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
