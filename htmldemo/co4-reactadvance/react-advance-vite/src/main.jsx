import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ReactLazyDemo from './ReactLazyDemo'
import ErrorBoundariesDemo from './ErrorBoundariesDemo'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundariesDemo />
  </StrictMode>,
)
