import { useState } from 'react';
import { Helmet } from 'react-helmet';

function App() {
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Helmet>
        <title>Rashik Shahjahan | Software Engineer | Full Stack Developer | AI Engineer | Backend Developer | Distributed Systems</title>
        <meta name="description" content="Software engineer specializing in distributed machine learning systems and observability infrastructure. Based in New York City with experience in healthtech and AI." />
        <meta name="keywords" content="Rashik Shahjahan, Software Engineer, Machine Learning Engineer, AI Engineer, Distributed Systems, New York City, Toronto, Healthtech" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Rashik Shahjahan | Software Engineer | Full Stack Developer | AI Engineer | Backend Developer | Distributed Systems" />
        <meta property="og:description" content="Software engineer based in New York City and Toronto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rashik.sh" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@RashikShahjahan" />
        <meta name="twitter:title" content="Rashik Shahjahan | Software Engineer | Full Stack Developer | AI Engineer | Backend Developer | Distributed Systems" />
        <meta name="twitter:description" content="Software engineer based in New York City and Toronto." />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Rashik Shahjahan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rashik.sh" />
      </Helmet>
      <header className="navbar px-4 lg:px-6 py-2 border-b-2 border-black">
        <div className="navbar-start">
          <a href="/" className="text-xl font-bold" aria-label="Rashik Shahjahan Homepage">Rashik Shahjahan</a>
        </div>
      </header>

      <main className="flex-grow flex flex-col" role="main">
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
                className="absolute top-1 right-1 btn btn-xs border-1 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none  text-xs"
              >
                Back
              </button>
              <p className="text-black/80">
                I have two years of experience in the healthtech industry in Toronto, where I built <b>distributed machine learning systems</b> and <b>observability infrastructure</b>. I am currently based in <b>New York City</b>, working on personal projects and contracting with local startups.
                <br /><br />
                As a graduate of <b>McMaster University</b> with a major in engineering physics, I discovered the transformative potential of software on emerging technologies, leading me to pursue a career in software engineering.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button 
                  onClick={() => window.open('https://calendly.com/rashikshahjahan/intro-chat', '_blank')}
                  className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8 flex-1"
                >
                  Schedule a call
                </button>
                <a 
                  href="/resumeRashikShahjahan.pdf" 
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

        <section className="container mx-auto px-4 lg:px-8 mb-16" aria-label="Featured Projects">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <article className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-bold text-xl mb-4 h-[2rem]">Text to Code to Art</h3>
              <p className="mb-6 group-hover:text-white/90 flex-grow min-h-[6rem]">An AI-powered creative tool that transforms your text prompts into code that controls a digital pen, letting you generate custom drawings and find similar artwork</p>
              <div className="mb-4 min-h-[4rem]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm border border-current rounded-full">React</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">TypeScript</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Python</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Express</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">PGVector</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="space-x-4">
                  <a href="https://github.com/RashikShahjahan/artsy-fartsy" target="_blank" rel="noopener noreferrer" className="group-hover:text-white/90 inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href="https://artsy.rashik.sh" target="_blank" rel="noopener noreferrer" className="group-hover:text-white/90 inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-bold text-xl mb-4 h-[2rem]">Sonic-ML</h3>
              <p className="mb-6 group-hover:text-white/90 flex-grow min-h-[6rem]">A command-line interface (CLI) tool for training and evaluating language models. It's an easy way to train tiny language models on your personal CPU, GPU or MacBook</p>
              <div className="mb-4 min-h-[4rem]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Pytorch</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Python</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="space-x-4">
                  <a href="https://github.com/RashikShahjahan/sonic-ml" target="_blank" rel="noopener noreferrer" className="group-hover:text-white/90 inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col h-full">
              <h3 className="font-bold text-xl mb-4 h-[2rem]">Mistral Instruct Bangla</h3>
              <p className="mb-6 group-hover:text-white/90 flex-grow min-h-[6rem]">A QLora fine-tuned variant of the Mistral Instruct model for Bengali language modeling. I trained it on a small dataset with limited iterations, enabling it to generate simple sentences in Bengali.</p>
              <div className="mb-4 min-h-[4rem]">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Pytorch</span>
                  <span className="px-2 py-1 text-sm border border-current rounded-full">Python</span>
                </div>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="space-x-4">
                  <a href="https://huggingface.co/Rashik24/Mistral-Instruct-Bangla" target="_blank" rel="noopener noreferrer" className="group-hover:text-white/90 inline-flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z"/>
                    </svg>
                    Hugging Face
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="footer footer-center p-8 text-black border-t-2 border-black">
        <nav className="grid grid-flow-col gap-6" aria-label="Social Links">
          <a href="https://github.com/RashikShahjahan" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/rashikshahjahan" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:rashikshahjahan@protonmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
          <a href="https://x.com/RashikShahjahan" target="_blank" rel="noopener noreferrer" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </nav>
      </footer>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rashik Shahjahan",
          "jobTitle": "Software Engineer",
          "url": "https://rashik.sh",
          "description": "Software engineer looking for intermediate level roles in USA or Canada",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "McMaster University"
          },
          "sameAs": [
            "https://x.com/RashikShahjahan",
            "https://github.com/RashikShahjahan",
            "https://linkedin.com/in/rashikshahjahan"
          ],
          "knowsAbout": [
            "Distributed Systems",
            "Machine Learning",
            "Software Engineering",
            "AI",
            "Full Stack Development",
            "Backend Development"
          ],
          "workLocation": {
            "@type": "Country",
            "name": "United States, Canada"
          }
        })}
      </script>
    </div>
  )
}

export default App
