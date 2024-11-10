import { useState } from 'react';

function App() {
  const [showHero, setShowHero] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Updated with border-bottom */}
      <div className="navbar px-4 lg:px-6 py-2 border-b-2 border-black">
        <div className="navbar-start">
          <a href="/" className="text-xl font-bold">R.</a>
        </div>
        <div className="navbar-end space-x-2">
          <a href="/blog" className="btn btn-ghost text-black hover:bg-black hover:text-white">Blog</a>
          <a 
            href="/resumeRashikShahjahan.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-ghost text-black hover:bg-black hover:text-white"
          >
            Resume
          </a>
        </div>
      </div>

      {showHero ? (
        // Hero Section
        <div className="hero min-h-[40vh] bg-white py-16">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-black animate-fade-in">
                Hi, I'm Rashik
              </h1>
              <p className="py-6 text-lg text-black/80">
                Software Engineer passionate about building impactful solutions
              </p>
              <button 
                onClick={() => setShowHero(false)}
                className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8"
              >
                Rashik who?
              </button>
            </div>
          </div>
        </div>
      ) : (
        // About Section
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="prose prose-lg max-w-2xl mx-auto border-2 border-black p-6">
            <p className="text-black/80">Brief description about your background, interests, and what drives you as a software engineer.</p>
            <button 
              onClick={() => setShowHero(true)}
              className="btn btn-lg border-2 border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300 rounded-none px-8 mt-6"
            >
              Contact Me
            </button>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project 1 */}
          <div className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="font-bold text-xl mb-4">AI Chat Assistant</h3>
            <p className="mb-6 group-hover:text-white/90">A real-time chat application powered by OpenAI's GPT-4, featuring context-aware conversations and document analysis.</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-sm border border-current rounded-full">React</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">TypeScript</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">OpenAI API</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a href="/projects/1" className="inline-flex items-center font-medium">
                View Details <span className="ml-2">→</span>
              </a>
              <div className="space-x-4">
                <a href="#" className="group-hover:text-white/90">GitHub</a>
                <a href="#" className="group-hover:text-white/90">Demo</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="font-bold text-xl mb-4">E-Commerce Platform</h3>
            <p className="mb-6 group-hover:text-white/90">A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-sm border border-current rounded-full">Next.js</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">Node.js</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">MongoDB</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a href="/projects/2" className="inline-flex items-center font-medium">
                View Details <span className="ml-2">→</span>
              </a>
              <div className="space-x-4">
                <a href="#" className="group-hover:text-white/90">GitHub</a>
                <a href="#" className="group-hover:text-white/90">Demo</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white border-2 border-black rounded-none p-10 hover:bg-black hover:text-white transition-all duration-300 group">
            <h3 className="font-bold text-xl mb-4">Portfolio Website</h3>
            <p className="mb-6 group-hover:text-white/90">A modern, responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and dark mode.</p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 text-sm border border-current rounded-full">React</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">Tailwind CSS</span>
                <span className="px-2 py-1 text-sm border border-current rounded-full">Framer Motion</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <a href="/projects/3" className="inline-flex items-center font-medium">
                View Details <span className="ml-2">→</span>
              </a>
              <div className="space-x-4">
                <a href="#" className="group-hover:text-white/90">GitHub</a>
                <a href="#" className="group-hover:text-white/90">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Updated spacing */}
      <footer className="footer footer-center p-8 text-black border-t-2 border-black mt-8">
        <div className="grid grid-flow-col gap-6">
          <a href="https://github.com/RashikShahjahan" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/rashik-shahjahan" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="mailto:rashikshahjahan@protonmail.com" className="hover:text-black/70 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
