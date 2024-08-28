import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ColorModeContextProvider } from './ColorModeContext.jsx';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeContextProvider>
      <App />
    </ColorModeContextProvider>
  </StrictMode>,
)
