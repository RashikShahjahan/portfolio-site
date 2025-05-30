'use client';

import { useState, useEffect } from 'react';
import ProjectCardStatic from './ProjectCardStatic';
import { type Project } from '../data/projects';

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
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

  const handleDotClick = (index: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentProjectIndex(index);
      setIsVisible(true);
    }, 300);
  };

  return (
    <>
      {/* Animated project card container */}
      <div 
        className={`transition-all duration-500 ease-in-out ${
          isVisible 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
      >
        <ProjectCardStatic project={projects[currentProjectIndex]} />
      </div>

      {/* Project indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProjectIndex 
                ? 'bg-nous-yellow-dark scale-110' 
                : 'bg-nous-text-secondary/30 hover:bg-nous-text-secondary/60'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectCarousel; 