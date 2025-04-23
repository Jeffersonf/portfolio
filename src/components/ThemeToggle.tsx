import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-slate-700 text-yellow-300 hover:bg-slate-600' 
          : 'bg-white text-slate-700 hover:bg-gray-100'
      }`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;