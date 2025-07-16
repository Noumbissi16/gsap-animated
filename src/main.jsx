import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import PlaygroundApp from './PlaygroundApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <PlaygroundApp /> */}
  </StrictMode>,
)
