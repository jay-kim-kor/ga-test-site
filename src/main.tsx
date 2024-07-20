import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from 'react-ga4'

const trackingId = import.meta.env.VITE_GA_TRACKING_ID
ReactGA.initialize(trackingId)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
