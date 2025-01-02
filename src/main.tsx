import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Analytics } from "@vercel/analytics/react"
import { PostHogProvider} from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_POSTHOG_API_HOST,
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Analytics />
    <PostHogProvider 
      apiKey={import.meta.env.VITE_POSTHOG_API_KEY}
      options={options}
    >
      <App />
    </PostHogProvider> 
  </StrictMode>,
)




