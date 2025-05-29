import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Text to Code to Art",
      description: "An AI-powered creative tool that transforms your text prompts into code that controls a digital pen, letting you generate custom drawings and find similar artwork",
      technologies: ["React", "TypeScript", "Python", "Express", "PGVector", "Docker"],
      links: {
        github: "https://github.com/RashikShahjahan/artsy-fartsy",
        demo: "https://artsy.rashik.sh",
        blog: "https://blog.rashik.sh/tech/can-ai-learn-to-draw"
      }
    },
    {
      title: "Text to Animation",
      description: "An AI-powered animation generator that transforms text descriptions into interactive 2D animations. Comes with a feed of community-generated animations.",
      technologies: ["React", "TypeScript", "Go", "PostgreSQL", "Tailwind CSS", "Docker"],
      links: {
        github: {
          frontend: "https://github.com/RashikShahjahan/animate-frontend",
          backend: "https://github.com/RashikShahjahan/animate-server"
        },
        demo: "https://animate.rashik.sh"
      }
    },
    {
      title: "Sonic-ML",
      description: "A command-line interface (CLI) tool for training and evaluating language models. It's an easy way to train tiny language models on your personal CPU, GPU or MacBook",
      technologies: ["Pytorch", "Python"],
      links: {
        github: "https://github.com/RashikShahjahan/sonic-ml",
        blog: "https://blog.rashik.sh/tech/sonic-ml"
      }
    },
    {
      title: "Mistral Instruct Bangla",
      description: "A QLora fine-tuned variant of the Mistral Instruct model for Bengali language modeling. I trained it on a small dataset with limited iterations, enabling it to generate simple sentences in Bengali.",
      technologies: ["Pytorch", "Python"],
      links: {
        huggingface: "https://huggingface.co/Rashik24/Mistral-Instruct-Bangla",
        blog: "https://blog.rashik.sh/tech/mistral-instruct-bangla"
      }
    },
    {
      title: "Custom Analytics Service",
      description: "A lightweight analytics server built with Go and PostgreSQL for tracking website events and user interactions.",
      technologies: ["Go", "PostgreSQL", "Docker"],
      links: {
        github: "https://github.com/RashikShahjahan/analytics"
      }
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentProjectIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 10000);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="container mx-auto px-2 lg:px-4 mb-8" aria-label="Featured Projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center terminal-heading on-light text-nous-text-primary" data-text="Featured Projects">
        <span className="text-nous-text-primary">Featured Projects</span>
      </h2>
      
      <div className="flex justify-center">
        <div className="w-full max-w-lg lg:max-w-2xl">
          {/* Animated project card container */}
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isVisible 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            <ProjectCard
              title={projects[currentProjectIndex].title}
              description={projects[currentProjectIndex].description}
              technologies={projects[currentProjectIndex].technologies}
              links={projects[currentProjectIndex].links}
            />
          </div>
        </div>
      </div>

      {/* Project indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => {
                setCurrentProjectIndex(index);
                setIsVisible(true);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProjectIndex 
                ? 'bg-nous-yellow-dark scale-110' 
                : 'bg-nous-text-secondary/30 hover:bg-nous-text-secondary/60'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects; 