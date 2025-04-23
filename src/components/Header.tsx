import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { translations } from '../utils/translations';

interface HeaderProps {
  theme: 'light' | 'dark';
  language: 'en' | 'pt';
}

const Header = ({ theme, language }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-[#121212]/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-md shadow-lg' 
          : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="h-20 flex justify-between items-center">
          <div className="font-bold text-2xl">
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Port</span>
            <span className="text-blue-600">folio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
          </nav>
          
          <button 
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={theme === 'dark' ? 'text-white' : 'text-slate-900'} />
            ) : (
              <Menu className={theme === 'dark' ? 'text-white' : 'text-slate-900'} />
            )}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className={`md:hidden fixed inset-0 z-40 ${
          theme === 'dark' ? 'bg-[#121212]' : 'bg-white'
        } pt-20`}>
          <div className="container mx-auto px-4 flex flex-col space-y-6 py-8">
            {['home', 'projects', 'skills', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-xl py-2 transition-colors duration-300 ${
                  theme === 'dark' 
                    ? 'text-gray-300 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t.nav[item as keyof typeof t.nav]}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;