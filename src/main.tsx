import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Dashboard from './pages/Dashboard.tsx'
import App from './App.tsx'
import './style/main.css'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <App />
  </StrictMode>
)
