import ProjectCarousel from './ProjectCarousel';
import { projects } from '../data/projects';

const ProjectsStatic = () => {
  return (
    <section className="container mx-auto px-2 lg:px-4 mb-8" aria-label="Featured Projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center terminal-heading on-light text-nous-text-primary" data-text="Featured Projects">
        <span className="text-nous-text-primary">Featured Projects</span>
      </h2>
      
      <div className="flex justify-center">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsStatic; 