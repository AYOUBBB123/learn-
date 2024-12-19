import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Add from "./components/Add.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <App />
    <App />
    <App />
    <Add />
    <Add />
  </StrictMode>,
)
