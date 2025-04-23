import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  theme: 'light' | 'dark';
}

const Footer = ({ theme }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 ${
      theme === 'dark' ? 'bg-slate-800' : 'bg-gray-900 text-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="font-bold text-2xl mb-2">
              <span className="text-white">Port</span>
              <span className="text-blue-500">folio</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Creating beautiful, functional web experiences with a focus on usability and performance.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a 
              href="mailto:hello@johndoe.com" 
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} Jefferson. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;