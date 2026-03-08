import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import PlacesPage from './components/PlacesPage';
import EventsPage from './components/EventsPage';
import TransportPage from './components/TransportPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const navigate = (page: string) => {
    if (page === currentPage) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      setTimeout(() => setTransitioning(false), 50);
    }, 300);
  };

  useEffect(() => {
    // Prevent horizontal scroll
    document.body.style.overflowX = 'hidden';
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'places':
        return <PlacesPage />;
      case 'events':
        return <EventsPage />;
      case 'transport':
        return <TransportPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-[#f5f5f0] font-tajawal" dir="rtl">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main
        className={`transition-all duration-300 ease-out ${
          transitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
