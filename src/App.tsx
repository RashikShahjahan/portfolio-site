import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';

function App() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col" data-theme="nous">
      <Helmet>
        <title>Rashik Shahjahan | Software Engineer</title>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resumeRashikSh.pdf" element={<Resume />} />
        <Route path="/resumeRashikShahjahan.pdf" element={<Resume />} />
      </Routes>

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
