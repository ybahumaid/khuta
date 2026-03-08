import { useRef, useState, useEffect } from 'react';
import { teamMembers } from '../data';

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

export default function AboutPage() {
  const values = [
    {
      icon: '🎯',
      title: 'متخصصون في جدة',
      desc: 'لسنا دليل سياحي عام — نركز 100% على جدة بعمق وتفصيل لا تجده في أي مكان آخر.',
    },
    {
      icon: '🤝',
      title: 'بعيون أهلها',
      desc: 'محتوانا مبني من تجارب حقيقية لسكان جدة، مش من مواقع ترجمة أو محتوى عام.',
    },
    {
      icon: '🌍',
      title: 'لكل الزوار',
      desc: 'سواء كنت سائح عربي، أجنبي، عائلة، أو مقيم جديد — خُطى يتكلم لغتك.',
    },
  ];

  const milestones = [
    { year: '2025', event: 'بداية المشروع كفكرة تخرج جامعي' },
    { year: '2025', event: 'تطوير النسخة الأولى من الموقع' },
    { year: '2026', event: 'إطلاق خُطى رسمياً مع +500 مكان' },
    { year: '2026', event: 'التوسع لتطبيق جوال وشراكات رسمية' },
  ];

  return (
    <div>
      {/* Sub Hero */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              قصتنا
            </div>
            <h1 className="font-cairo font-black text-4xl md:text-5xl lg:text-6xl mb-3">
              عن <span className="gradient-text">خُطى</span>
            </h1>
            <p className="text-gray-custom text-base font-light max-w-lg">
              من مشروع تخرج إلى فكرة استثمارية حقيقية — هذي قصتنا
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="font-cairo font-black text-2xl md:text-3xl mb-6">
                ليش خُطى؟
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed text-sm">
                <p>
                  بدأت الفكرة من سؤال بسيط: <strong className="text-white">"ليش ما في دليل سياحي رقمي متخصص بجدة بالعربي؟"</strong>
                </p>
                <p>
                  بحثنا في السوق ولقينا إن أغلب المواقع السياحية إما عامة لكل السعودية، أو بالإنجليزي، أو توقفت عن التحديث. السائح العربي اللي يبي يزور جدة ما يلاقي مصدر واحد شامل يساعده.
                </p>
                <p>
                  <strong className="text-teal-500">Time Out Jeddah</strong> توقف في 2021. <strong className="text-teal-500">Visit Saudi</strong> عام لكل السعودية. <strong className="text-teal-500">TripAdvisor</strong> محتواه إنجليزي وسطحي.
                </p>
                <p>
                  هنا ولدت خُطى — <strong className="text-gold-400">دليل سياحي ذكي متخصص 100% في جدة</strong>، بالعربي، مبني من تجارب أهل جدة الحقيقية.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-teal-700/10 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-gold-500/8 translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-cairo font-black text-white text-4xl mx-auto shadow-lg shadow-teal-700/30">
                    خ
                  </div>
                </div>
                <blockquote className="text-center">
                  <p className="text-white/80 text-lg font-cairo leading-relaxed mb-4">
                    "اكتشف جدة بعيونها الحقيقية"
                  </p>
                  <cite className="text-gray-custom text-sm not-italic">— شعار خُطى</cite>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-cairo font-black text-2xl md:text-3xl mb-8">قيمنا</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="glass rounded-2xl p-6 hover:border-teal-500/15 transition-all group text-center">
                  <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform">{v.icon}</span>
                  <h3 className="font-cairo font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-custom leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 md:px-12 lg:px-16 pb-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-cairo font-black text-2xl md:text-3xl mb-8">رحلة خُطى</h2>
          </Reveal>
          <div className="relative">
            <div className="absolute top-0 bottom-0 right-[19px] w-px bg-gradient-to-b from-teal-500/50 via-teal-700/30 to-transparent" />
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-start gap-5 mb-8 relative">
                  <div className="w-10 h-10 rounded-full bg-dark-950 border-2 border-teal-500 flex items-center justify-center text-teal-500 font-cairo font-bold text-xs flex-shrink-0 z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="glass rounded-xl p-4 flex-1">
                    <div className="text-xs text-teal-500 font-bold mb-1">{m.year}</div>
                    <p className="text-sm text-white/80">{m.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-cairo font-black text-2xl md:text-3xl mb-8">الفريق</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <Reveal key={member.id} delay={i * 100}>
                <div className="glass rounded-2xl p-6 text-center hover:border-teal-500/15 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-cairo font-black text-white text-2xl mx-auto mb-4 shadow-lg shadow-teal-700/20 group-hover:scale-105 transition-transform">
                    {member.initial}
                  </div>
                  <h3 className="font-cairo font-bold text-base mb-1">{member.name}</h3>
                  <p className="text-xs text-gray-custom">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
