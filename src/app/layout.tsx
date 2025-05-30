import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './nous-theme.css'
import AnalyticsProvider from '../components/AnalyticsWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rashik Shahjahan | Software Engineer',
  description: 'Software engineer specializing in distributed machine learning systems and observability infrastructure. Based in New York City with experience in healthtech and AI.',
  keywords: 'Rashik Shahjahan, Software Engineer, Machine Learning Engineer, AI Engineer, Distributed Systems, New York City, Toronto, Healthtech',
  authors: [{ name: 'Rashik Shahjahan' }],
  robots: 'index, follow',
  metadataBase: new URL('https://rashik.sh'),
  alternates: {
    canonical: 'https://rashik.sh',
  },
  openGraph: {
    title: 'Rashik Shahjahan | Software Engineer | Full Stack Developer | AI Engineer | Backend Developer | Distributed Systems',
    description: 'Software engineer based in New York City and Toronto.',
    type: 'website',
    url: 'https://rashik.sh',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@RashikShahjahan',
    title: 'Rashik Shahjahan | Software Engineer | Full Stack Developer | AI Engineer | Backend Developer | Distributed Systems',
    description: 'Software engineer based in New York City and Toronto.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
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
  }

  return (
    <html lang="en" data-theme="nous">
      <body className={inter.className}>
        <div className="min-h-screen bg-base-100 flex flex-col">
          <AnalyticsProvider serviceName="portfolio">
            <Header />
            <main className="flex-grow flex flex-col" role="main">
              {children}
            </main>
            <Footer />
          </AnalyticsProvider>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
} 