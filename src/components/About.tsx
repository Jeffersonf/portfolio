import { useEffect, useRef } from 'react';
import { Award, BookOpen, Clock, Code, Code2 } from 'lucide-react';

interface AboutProps {
  theme: 'light' | 'dark';
}

const About = ({ theme }: AboutProps) => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const animateStats = () => {
      const statsSection = statsRef.current;
      if (!statsSection) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const counters = statsSection.querySelectorAll('.counter');
            counters.forEach((counter) => {
              const target = Number(counter.getAttribute('data-target'));
              let count = 0;
              const updateCounter = () => {
                const increment = target / 100;
                if (count < target) {
                  count += increment;
                  counter.textContent = Math.ceil(count).toString();
                  setTimeout(updateCounter, 10);
                } else {
                  counter.textContent = target.toString();
                }
              };
              updateCounter();
            });
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(statsSection);
      
      return () => {
        observer.disconnect();
      };
    };
    
    animateStats();
  }, []);

  return (
    <section 
      id="about" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className={`w-full h-96 rounded-lg overflow-hidden border-4 ${
                theme === 'dark' ? 'border-blue-600/20' : 'border-blue-600/10'
              }`}>
                <img 
                  src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-6 -right-6 w-72 h-72 rounded-lg overflow-hidden border-4 ${
                theme === 'dark' ? 'border-blue-600/20' : 'border-blue-600/10'
              }`}>
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" 
                  alt="Working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur-3xl opacity-5 z-0"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold">
              I'm John Doe, a <span className="text-blue-600">Frontend Developer</span> based in San Francisco
            </h3>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm passionate about creating beautiful, functional websites that provide exceptional user experiences. 
              With over 5 years of experience in web development, I specialize in building responsive websites and 
              applications using modern technologies like React, TypeScript, and Tailwind CSS.
            </p>
            
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I began my journey as a self-taught developer, gradually refining my skills through practical 
              projects and continuous learning. My approach combines technical expertise with an eye for design 
              to create solutions that are both visually appealing and highly functional.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <BookOpen className="text-blue-600" />
                <div>
                  <p className="font-medium">Degree</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    B.S. Computer Science
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600" />
                <div>
                  <p className="font-medium">Experience</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    5+ Years
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Code className="text-blue-600" />
                <div>
                  <p className="font-medium">Completed</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    50+ Projects
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" />
                <div>
                  <p className="font-medium">Awards</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Best Web Developer 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div 
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center"
        >
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-white shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600/20">
                <Code2 className="text-blue-600" />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-2">
              <span className="counter" data-target="56">0</span>+
            </h4>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Projects Completed</p>
          </div>
          
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-white shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600/20">
                <Clock className="text-blue-600" />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-2">
              <span className="counter" data-target="5">0</span>+
            </h4>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Years of Experience</p>
          </div>
          
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-white shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600/20">
                <Award className="text-blue-600" />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-2">
              <span className="counter" data-target="7">0</span>
            </h4>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Awards Received</p>
          </div>
          
          <div className={`p-6 rounded-lg ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-white shadow-lg'
          }`}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-600/20">
                <BookOpen className="text-blue-600" />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-2">
              <span className="counter" data-target="42">0</span>+
            </h4>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;