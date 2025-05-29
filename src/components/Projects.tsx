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

  return (
    <section className="container mx-auto px-4 lg:px-8 mb-16" aria-label="Featured Projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center terminal-heading on-light text-nous-text-primary" data-text="Featured Projects">
        <span className="text-nous-text-primary">Featured Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 