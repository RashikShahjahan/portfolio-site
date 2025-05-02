import { useState } from 'react';
import { trackClick } from '../utils/analytics';

const HeroAbout = () => {
  const [showHero, setShowHero] = useState(true);

  const handleTellMeMoreClick = () => {
    trackClick('tell_me_more_button', { 
      section: 'hero',
      action: 'view_about'
    });
    setShowHero(false);
  };

  const handleBackClick = () => {
    trackClick('back_button', { 
      section: 'about',
      action: 'view_hero'
    });
    setShowHero(true);
  };

  const handleScheduleCallClick = () => {
    trackClick('schedule_call_button', {
      section: 'about',
      action: 'external_navigation',
      destination: 'calendly'
    });
    window.open('https://calendly.com/rashikshahjahan/intro-chat', '_blank');
  };

  return (
    <>
      {showHero ? (
        <section className="hero min-h-[40vh] bg-base-100" aria-label="Introduction">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-nous-yellow terminal-heading" data-text="Hi, I'm Rashik">
                Hi, I'm Rashik
              </h1>
              <p className="py-6 text-lg text-nous-yellow/80">
                A Software Engineer
              </p>
              <button 
                onClick={handleTellMeMoreClick}
                className="btn btn-lg border-2 border-[#D4A017] bg-base-100 text-nous-yellow hover:bg-nous-blue hover:text-nous-yellow transition-all duration-300 rounded-none px-8"
              >
                Tell me more.
              </button>
            </div>
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-4 lg:px-8 py-10" aria-label="About Me">
          <div className="prose prose-lg max-w-2xl mx-auto nous-card p-6 relative bg-beige">
            <button 
              onClick={handleBackClick}
              className="absolute top-1 right-1 btn btn-xs border-1 border-nous-yellow bg-beige text-nous-yellow hover:bg-black hover:text-nous-yellow transition-all duration-300 rounded-none text-xs"
            >
              Back
            </button>
            <p className="text-nous-yellow/90" >
              I am experienced in full-stack development, distributed systems and AI. I co-invented a <a href="https://patents.google.com/patent/US20230143418A1/en?oq=US-20230143418-A1" target="_blank" rel="noopener noreferrer" className="text-nous-yellow hover:text-nous-blue">patent pending system</a> to process large medical corpora and led a team to build and deploy a metrics monitoring system deployed in hundreds of machines. More recently, I created a <a href="https://artsy.rashik.sh/" target="_blank" rel="noopener noreferrer" className="text-nous-yellow hover:text-nous-blue">website</a> to demonstrate that <a href="https://blog.rashik.sh/tech/can-ai-learn-to-draw" target="_blank" rel="noopener noreferrer" className="text-nous-yellow hover:text-nous-blue">LLMs can draw</a> and a <a href="https://github.com/RashikShahjahan/sonic-ml" target="_blank" rel="noopener noreferrer" className="text-nous-yellow hover:text-nous-blue">tool</a> to simplify language model training. I am always working on projects and <a href="https://blog.rashik.sh/tech" target="_blank" rel="noopener noreferrer" className="text-nous-yellow hover:text-nous-blue">writing</a> about them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button 
                onClick={handleScheduleCallClick}
                className="btn btn-lg border-2 border-nous-yellow bg-beige text-nous-yellow hover:bg-black hover:text-nous-yellow transition-all duration-300 rounded-none px-8 flex-1"
              >
                Schedule a call
              </button>
              <a 
                href="/resumeRashikSh.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-lg border-2 border-nous-yellow bg-beige text-nous-yellow hover:bg-black hover:text-nous-yellow transition-all duration-300 rounded-none px-8 flex-1"
                onClick={() => trackClick('resume_button', {
                  section: 'about',
                  action: 'view_resume'
                })}
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