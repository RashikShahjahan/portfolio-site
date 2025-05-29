import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './nous-theme.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { AnalyticsProvider } from 'rashik-analytics-provider';
import AnalyticsWrapper from './components/AnalyticsWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalyticsProvider serviceName="portfolio">
        <AnalyticsWrapper>
          <App />
        </AnalyticsWrapper>
      </AnalyticsProvider>
    </BrowserRouter>
  </StrictMode>,
)

