import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Text to Code to Art",
      description: "An AI-powered creative tool that transforms your text prompts into code that controls a digital pen, letting you generate custom drawings and find similar artwork",
      technologies: ["React", "TypeScript", "Python", "Express", "PGVector"],
      links: {
        github: "https://github.com/RashikShahjahan/artsy-fartsy",
        demo: "https://artsy.rashik.sh",
        blog: "https://blog.rashik.sh/tech/can-ai-learn-to-draw"
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
      }, 300); // Half of the transition duration
    }, 4000); // Change project every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="container mx-auto px-2 lg:px-4 mb-8" aria-label="Featured Projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center terminal-heading on-light text-nous-text-primary" data-text="Featured Projects">
        <span className="text-nous-text-primary">Featured Projects</span>
      </h2>
      
      <div className="flex justify-center">
        <div className="w-full max-w-lg lg:max-w-2xl">
          <div 
            className={`transition-opacity duration-600 ease-in-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ProjectCard {...projects[currentProjectIndex]} />
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