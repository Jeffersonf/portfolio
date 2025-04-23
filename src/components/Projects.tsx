import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../utils/data';
import { translations } from '../utils/translations';

interface ProjectsProps {
  theme: 'light' | 'dark';
  language: 'en' | 'pt';
}

const Projects = ({ theme, language }: ProjectsProps) => {
  const [filter, setFilter] = useState('all');
  const t = translations[language];
  
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        theme === 'dark' ? 'bg-black/40' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className={`mt-6 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.projects.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 capitalize ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : theme === 'dark' 
                    ? 'bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} theme={theme} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;