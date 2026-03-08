import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 border-t border-white/5 relative">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-cairo font-bold text-xl mb-1">
              اشترك في نشرة خُطى
            </h3>
            <p className="text-gray-custom text-sm">
              أحدث الفعاليات والأماكن في بريدك أسبوعياً
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="flex-1 md:w-72 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-teal-500/50 transition-all font-tajawal"
            />
            <button className="px-6 py-3 bg-gradient-to-l from-teal-700 to-teal-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:shadow-teal-700/30 transition-all cursor-pointer whitespace-nowrap">
              اشترك
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-cairo font-black text-white text-xl">
                خ
              </div>
              <span className="font-cairo font-black text-2xl gradient-text">
                خُطى
              </span>
            </div>
            <p className="text-gray-custom text-sm leading-relaxed max-w-xs mb-6">
              دليلك السياحي الذكي لجدة — مبني بعيون أهلها، لكل زوارها.
              اكتشف أماكن، فعاليات، وتنقل في مكان واحد.
            </p>
            <div className="flex gap-3">
              {[
                { label: '𝕏', url: 'https://x.com' },
                { label: 'in', url: 'https://instagram.com' },
                { label: '📷', url: 'https://snapchat.com' },
                { label: '🎵', url: 'https://tiktok.com' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/4 border border-white/8 flex items-center justify-center text-gray-custom text-xs hover:bg-teal-700/20 hover:border-teal-700 hover:text-teal-500 transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cairo font-bold text-sm mb-4 text-white/90">
              استكشف
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'الأماكن السياحية', page: 'places' },
                { label: 'الفعاليات', page: 'events' },
                { label: 'التنقل', page: 'transport' },
                { label: 'نصائح الزائر', page: 'transport' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-custom text-sm hover:text-teal-500 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cairo font-bold text-sm mb-4 text-white/90">
              خُطى
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'من نحن', page: 'about' },
                { label: 'تواصل معنا', page: 'contact' },
                { label: 'أضف مكانك', page: 'contact' },
                { label: 'سياسة الخصوصية', page: 'about' },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-custom text-sm hover:text-teal-500 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cairo font-bold text-sm mb-4 text-white/90">
              روابط رسمية
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'هيئة السياحة', url: 'https://www.visitsaudi.com/ar' },
                { label: 'أمانة جدة', url: 'https://jeddah.gov.sa' },
                { label: 'مطار جدة', url: 'https://www.jia.gov.sa' },
                { label: 'تطوير جدة', url: 'https://www.jtda.gov.sa' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-custom text-sm hover:text-teal-500 transition-colors"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © 2026 خُطى — جميع الحقوق محفوظة | مشروع تخرج تحوّل لفكرة حقيقية
          </p>
          <p className="text-white/20 text-xs">
            صُنع بـ ❤️ في جدة
          </p>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-11 h-11 rounded-full bg-teal-700/80 border border-teal-500/30 flex items-center justify-center text-white shadow-lg shadow-teal-700/20 hover:bg-teal-600 transition-all z-40 cursor-pointer"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
