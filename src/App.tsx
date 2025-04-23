import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  const [language, setLanguage] = useState<'en' | 'pt'>(
    () => (localStorage.getItem('language') as 'en' | 'pt') || 'pt'
  );

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'en' ? 'pt' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-white text-slate-900'}`}>
      <Header theme={theme} language={language} />
      <main>
        <Hero theme={theme} language={language} />
        <Projects theme={theme} language={language} />
        <Skills theme={theme} language={language} />
        <About theme={theme} language={language} />
        <Contact theme={theme} language={language} />
      </main>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      <Footer theme={theme} language={language} />
    </div>
  );
}

export default App;