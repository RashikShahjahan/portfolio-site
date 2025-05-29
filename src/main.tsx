import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './nous-theme.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Analytics />
      <App />
    </BrowserRouter>
  </StrictMode>,
)

