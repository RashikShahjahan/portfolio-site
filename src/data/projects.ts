export const projects = [
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

export type Project = typeof projects[0]; 