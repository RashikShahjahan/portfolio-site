import { useState } from 'react';

const HeroAbout = () => {
  const [showHero, setShowHero] = useState(true);

  return (
    <>
      {showHero ? (
        <section className="hero min-h-[40vh] bg-white" aria-label="Introduction">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-black animate-fade-in">
                Hi, I'm Rashik
              </h1>
              <p className="py-6 text-lg text-black/80">
                A Software Engineer
              </p>
              <button 
                onClick={() => setShowHero(false)}
                className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8"
              >
                Tell me more.
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-4 lg:px-8 py-10" aria-label="About Me">
          <div className="prose prose-lg max-w-2xl mx-auto border-2 border-black p-6 relative">
            <button 
              onClick={() => setShowHero(true)}
              className="absolute top-1 right-1 btn btn-xs border-1 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none text-xs"
            >
              Back
            </button>
            <p className="text-black/80">
              I am experienced in full-stack development, distributed systems and AI. I co-invented a <a href="https://patents.google.com/patent/US20230143418A1/en?oq=US-20230143418-A1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">patent pending system</a> to process large medical corpora and led a team to build and deploy a metrics monitoring system deployed in hundreds of machines. More recently, I created a <a href="https://artsy.rashik.sh/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">website</a> to demonstrate that <a href="https://blog.rashik.sh/tech/can-ai-learn-to-draw" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LLMs can draw</a> and a <a href="https://github.com/RashikShahjahan/sonic-ml" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">tool</a> to simplify language model training. I am always working on projects and <a href="https://blog.rashik.sh/tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">writing</a> about them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                onClick={() => window.open('https://calendly.com/rashikshahjahan/intro-chat', '_blank')}
                className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8 flex-1"
              >
                Schedule a call
              </button>
              <a 
                href="/resumeRashikSh.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8 flex-1"
              >
                Resume
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroAbout; 