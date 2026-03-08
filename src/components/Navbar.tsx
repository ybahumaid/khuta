import { useState, useEffect } from 'react';
import { Search, X, Menu, Globe } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'places', label: 'الأماكن' },
  { id: 'events', label: 'الفعاليات' },
  { id: 'transport', label: 'التنقل' },
  { id: 'about', label: 'من نحن' },
  { id: 'contact', label: 'تواصل' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileOpen(false);
    setSearchOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark-950/97 backdrop-blur-xl border-b border-white/5'
            : 'bg-gradient-to-b from-dark-950/95 to-transparent backdrop-blur-sm'
        }`}
        style={{ padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-700 to-teal-500 flex items-center justify-center font-cairo font-black text-white text-xl shadow-lg shadow-teal-700/30">
              خ
            </div>
            <div>
              <span className="font-cairo font-black text-xl gradient-text block leading-tight">
                خُطى
              </span>
              <span className="text-[0.6rem] text-gray-custom tracking-widest hidden sm:block">
                KHUTAA · JEDDAH
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                    currentPage === item.id
                      ? 'text-teal-500 bg-teal-500/10'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-custom hover:text-teal-500 hover:border-teal-500/30 transition-all cursor-pointer"
            >
              <Search size={16} />
            </button>
            <button className="hidden sm:flex items-center gap-1.5 bg-teal-700/15 border border-teal-700/30 px-3 py-1.5 rounded-full text-teal-500 text-xs font-bold hover:bg-teal-700/25 transition-all cursor-pointer">
              <Globe size={13} />
              EN
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-custom hover:text-white transition-all cursor-pointer"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/5 pt-4 animate-fade-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-right px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  currentPage === item.id
                    ? 'text-teal-500 bg-teal-500/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-dark-950/98 backdrop-blur-xl flex flex-col items-center pt-[20vh] px-6">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
          <h2 className="font-cairo font-bold text-2xl mb-6 text-white/80">
            ابحث في جدة
          </h2>
          <div className="w-full max-w-xl relative">
            <Search
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-custom"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن أماكن، فعاليات، مطاعم..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white text-lg font-tajawal outline-none focus:border-teal-500/50 transition-all"
              autoFocus
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-2 max-w-xl">
            {['البلد التاريخية', 'كورنيش جدة', 'موسم جدة', 'مطاعم', 'شواطئ', 'تأجير سيارات'].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                  }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/8 text-sm text-white/60 hover:text-teal-500 hover:border-teal-500/30 transition-all cursor-pointer"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
