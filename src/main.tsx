import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './nous-theme.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { AnalyticsProvider } from 'rashik-analytics-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <AnalyticsProvider 
        endpoint="https://analytics.rashik.sh/events" 
        serviceName="portfolio"
    >
      <App />
    </AnalyticsProvider>
  </StrictMode>,
)

