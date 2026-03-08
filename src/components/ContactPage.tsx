import { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, title: 'البريد الإلكتروني', value: 'hello@khutaa.sa', sub: 'نرد خلال 24 ساعة' },
    { icon: <Phone size={20} />, title: 'الهاتف', value: '+966 50 000 0000', sub: 'الأحد - الخميس' },
    { icon: <MapPin size={20} />, title: 'الموقع', value: 'جدة، المملكة العربية السعودية', sub: 'فريق يعمل عن بُعد' },
    { icon: <Clock size={20} />, title: 'أوقات العمل', value: '9 ص - 6 م', sub: 'الأحد - الخميس' },
  ];

  return (
    <div>
      {/* Sub Hero */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-700/6 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-teal-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <div className="w-6 h-px bg-teal-500" />
              نسمع منك
            </div>
            <h1 className="font-cairo font-black text-4xl md:text-5xl lg:text-6xl mb-3">
              تواصل <span className="gradient-text">معنا</span>
            </h1>
            <p className="text-gray-custom text-base font-light max-w-lg">
              عندك سؤال؟ اقتراح؟ تبي تضيف مكانك؟ نحب نسمع منك!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-12 lg:px-16 pb-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map((info, i) => (
            <Reveal key={info.title} delay={i * 80}>
              <div className="glass rounded-2xl p-5 hover:border-teal-500/15 transition-all group text-center">
                <div className="w-12 h-12 rounded-xl bg-teal-700/15 flex items-center justify-center text-teal-500 mx-auto mb-3 group-hover:scale-105 transition-transform">
                  {info.icon}
                </div>
                <h3 className="font-cairo font-bold text-sm mb-1">{info.title}</h3>
                <p className="text-teal-500 text-sm font-semibold mb-0.5">{info.value}</p>
                <p className="text-xs text-gray-custom">{info.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-12 lg:px-16 pb-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-teal-700/5 -translate-y-1/2 -translate-x-1/2" />
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gold-500/5 translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <h2 className="font-cairo font-bold text-xl mb-6">أرسل لنا رسالة</h2>

                {submitted && (
                  <div className="mb-6 bg-teal-500/10 border border-teal-500/30 rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle size={20} className="text-teal-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-teal-500">تم الإرسال بنجاح!</p>
                      <p className="text-xs text-gray-custom">شكراً لتواصلك، سنرد عليك قريباً</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/80">الاسم</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="اسمك الكريم"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-tajawal outline-none focus:border-teal-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-white/80">البريد الإلكتروني</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-tajawal outline-none focus:border-teal-500/50 transition-all"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white/80">الموضوع</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-tajawal outline-none focus:border-teal-500/50 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-dark-950">اختر الموضوع</option>
                      <option value="suggestion" className="bg-dark-950">اقتراح</option>
                      <option value="report" className="bg-dark-950">بلاغ عن خطأ</option>
                      <option value="addplace" className="bg-dark-950">أضف مكان</option>
                      <option value="partnership" className="bg-dark-950">شراكة إعلانية</option>
                      <option value="other" className="bg-dark-950">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-white/80">الرسالة</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm font-tajawal outline-none focus:border-teal-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-l from-teal-700 to-teal-500 text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-700/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                  >
                    <Send size={16} />
                    أرسل الرسالة
                  </button>
                </form>
              </div>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={200}>
            <div className="mt-8 text-center">
              <p className="text-gray-custom text-sm mb-4">أو تابعنا على السوشيال ميديا</p>
              <div className="flex items-center justify-center gap-3">
                {[
                  { label: '𝕏 Twitter', url: 'https://x.com' },
                  { label: '📷 Instagram', url: 'https://instagram.com' },
                  { label: '👻 Snapchat', url: 'https://snapchat.com' },
                  { label: '🎵 TikTok', url: 'https://tiktok.com' },
                  { label: '💼 LinkedIn', url: 'https://linkedin.com' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl glass text-sm text-gray-custom hover:text-teal-500 hover:border-teal-500/30 transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
