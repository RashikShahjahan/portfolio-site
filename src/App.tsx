import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroAbout from './components/HeroAbout';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
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
      <Header />

      <main className="flex-grow flex flex-col" role="main">
        <HeroAbout />
        <Projects />
      </main>
      <Footer />
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
