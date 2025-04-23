export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with user authentication and real-time updates.",
    image: "https://images.pexels.com/photos/6956478/pexels-photo-6956478.jpeg",
    category: "web",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Finance Dashboard",
    description: "An interactive finance dashboard with data visualization, reporting, and forecasting capabilities.",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg",
    category: "dashboard",
    technologies: ["Vue.js", "D3.js", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "A social networking platform with real-time messaging, post sharing, and user profiles.",
    image: "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg",
    category: "mobile",
    technologies: ["React Native", "GraphQL", "AWS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    category: "web",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    id: 6,
    title: "Weather Application",
    description: "A weather application with 7-day forecasts, location-based weather data, and interactive maps.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    category: "mobile",
    technologies: ["React Native", "Weather API", "Redux"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com"
  }
];

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5/CSS3", level: 95 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "GraphQL", level: 65 },
      { name: "REST API", level: 85 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Webpack/Vite", level: 75 },
      { name: "Responsive Design", level: 95 },
      { name: "UI/UX Design", level: 80 },
      { name: "Performance Optimization", level: 85 }
    ]
  }
];