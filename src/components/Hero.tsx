import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { translations } from '../utils/translations';

interface HeroProps {
  theme: 'light' | 'dark';
  language: 'en' | 'pt';
}

const Hero = ({ theme, language }: HeroProps) => {
  const [typedText, setTypedText] = useState('');
  const t = translations[language];
  
  useEffect(() => {
    let currentIndex = 0;
    const fullText = t.hero.role;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, [language]);

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      const headerHeight = 80;
      const projectsPosition = projects.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = projectsPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: theme === 'dark' 
          ? 'radial-gradient(circle at 10% 20%, rgba(21, 94, 117, 0.4) 0%, rgba(15, 23, 42, 0) 90%)'
          : 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, rgba(255, 255, 255, 0) 90%)'
      }}
    >
      <div className="absolute w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 -left-1/4 w-1/2 h-1/2 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t.hero.greeting} <span className="text-blue-600">Jefferson</span>
          </h1>
          
          <div className="h-8">
            <p className="text-2xl md:text-3xl font-medium">
              <span className="text-blue-600">{typedText}</span>
              <span className="animate-blink">|</span>
            </p>
          </div>
          
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-lg`}>
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {t.hero.contact}
            </a>
            <button 
              className={`px-6 py-3 rounded-full border-2 transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl ${
                theme === 'dark' 
                  ? 'border-white/20 hover:border-white/40' 
                  : 'border-slate-300 hover:border-slate-400'
              }`}
            >
              <Download size={18} /> {t.hero.download}
            </button>
          </div>
          
          <div className="pt-6 flex gap-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <Github />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <Linkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`hover:text-blue-600 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <Twitter />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
            theme === 'dark' ? 'border-blue-600/30' : 'border-blue-600/20'
          } relative z-10`}>
            <img 
              src="https://dthezntil550i.cloudfront.net/30/latest/302106221236555260006668840/1280_960/e15fec5c-d700-4d13-bec8-e09eb38583f6.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-10 z-0"></div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to projects"
      >
        <ArrowDown className={theme === 'dark' ? 'text-white' : 'text-slate-900'} />
      </button>
    </section>
  );
};

export default Hero;