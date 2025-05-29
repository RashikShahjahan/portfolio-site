import { trackClick } from '../utils/analytics';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    blog?: string;
    huggingface?: string;
  };
}

const ProjectCard = ({ title, description, technologies, links }: ProjectCardProps) => {
  const handleLinkClick = (linkType: string) => {
    const safeTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '_');
    trackClick(`project_${safeTitle}_${linkType}_click`);
  };

  return (
    <article className="nous-card bg-base-100 border-2 border-nous-yellow-dark rounded-none p-10 hover:bg-nous-blue hover:text-nous-yellow transition-all duration-300 group flex flex-col h-full">
      <h3 className="font-bold text-xl mb-4 h-[2rem] text-nous-text-primary group-hover:text-nous-yellow">{title}</h3>
      <p className="mb-6 text-nous-text-secondary group-hover:text-nous-yellow/90 flex-grow min-h-[6rem]">{description}</p>
      <div className="mb-4 min-h-[4rem]">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-sm border border-current rounded-full text-nous-text-secondary group-hover:text-nous-yellow/80">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div className="space-x-4">
          {links.github && (
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nous-yellow-dark group-hover:text-nous-yellow/90 inline-flex items-center gap-1 hover:text-nous-blue transition-colors"
              onClick={() => handleLinkClick('github')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
          {links.demo && (
            <a 
              href={links.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nous-yellow-dark group-hover:text-nous-yellow/90 inline-flex items-center gap-1 hover:text-nous-blue transition-colors"
              onClick={() => handleLinkClick('demo')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
              </svg>
              Demo
            </a>
          )}
          {links.huggingface && (
            <a 
              href={links.huggingface} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nous-yellow-dark group-hover:text-nous-yellow/90 inline-flex items-center gap-1 hover:text-nous-blue transition-colors"
              onClick={() => handleLinkClick('huggingface')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
              </svg>
              Hugging Face
            </a>
          )}
          {links.blog && (
            <a 
              href={links.blog} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nous-yellow-dark group-hover:text-nous-yellow/90 inline-flex items-center gap-1 hover:text-nous-blue transition-colors"
              onClick={() => handleLinkClick('blog')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 3h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-15 16v-14h15l.002 14H4.5z M7 7h10v2h-10zm0 4h10v2h-10zm0 4h7v2h-7z"/>
              </svg>
              Blog
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard; 