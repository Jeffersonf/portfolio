import { useEffect, useState, useRef } from 'react';
import { skillsData } from '../utils/data';

interface SkillsProps {
  theme: 'light' | 'dark';
}

const Skills = ({ theme }: SkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            I specialize in these technologies and continuously improve my skills to deliver 
            the best solutions for my clients.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`h-2 w-full rounded-full ${
                      theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className={`h-full rounded-full bg-blue-600 transition-all duration-1000 ease-out ${
                          isVisible ? 'w-0' : ''
                        }`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;