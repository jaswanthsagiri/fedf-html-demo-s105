import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import ReduxDemo from './assets/ReduxDemo'
import MaterialUIDemo from './MaterialUIDemo'
//import ReusableComponents from './ResuableComponents'
//import PropsDemos from './assets/PropsDemo'
//import NonStateObject from './NonStateObject'
//import App3 from './assets/App3'
//import App from './App.jsx'
//import App2 from './assets/App2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialUIDemo />
  </StrictMode>,
)
