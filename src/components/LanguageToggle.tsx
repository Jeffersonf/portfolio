import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: 'en' | 'pt';
  toggleLanguage: () => void;
}

const LanguageToggle = ({ language, toggleLanguage }: LanguageToggleProps) => {
  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50 transition-colors duration-300 hover:bg-blue-700"
      aria-label="Toggle language"
    >
      <Languages size={20} />
      <span className="ml-2">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;