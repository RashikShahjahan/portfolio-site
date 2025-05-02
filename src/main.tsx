import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './nous-theme.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { AnalyticsProvider } from 'rashik-analytics-provider';
import { BrowserRouter } from 'react-router-dom';
import AnalyticsWrapper from './components/AnalyticsWrapper';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <AnalyticsProvider 
          endpoint="https://analytics.rashik.sh/api" 
          serviceName="portfolio"
      >
        <AnalyticsWrapper>
          <App />
        </AnalyticsWrapper>
      </AnalyticsProvider>
    </BrowserRouter>
  </StrictMode>,
)

