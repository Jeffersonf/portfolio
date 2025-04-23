import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../utils/data';

interface ProjectCardProps {
  project: Project;
  theme: 'light' | 'dark';
  language: 'en' | 'pt';
}

const ProjectCard = ({ project, theme }: ProjectCardProps) => {
  return (
    <div 
      className={`group rounded-xl overflow-hidden ${
        theme === 'dark' 
          ? 'bg-[#1a1a1a] shadow-lg hover:shadow-blue-900/20' 
          : 'bg-white shadow-lg hover:shadow-xl'
      } transition-all duration-300 transform hover:-translate-y-2`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-blue-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="View live demo"
              >
                <ExternalLink size={20} className="text-blue-600" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
                aria-label="View source code"
              >
                <Github size={20} className="text-blue-600" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <span className={`text-xs px-3 py-1 rounded-full ${
          theme === 'dark' 
            ? 'bg-blue-600/30 text-blue-400' 
            : 'bg-blue-100 text-blue-700'
        }`}>
          {project.category}
        </span>
        
        <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
        
        <p className={`text-sm mb-4 line-clamp-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className={`text-xs px-2 py-1 rounded ${
                theme === 'dark' 
                  ? 'bg-[#252525] text-gray-300' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;