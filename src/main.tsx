import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Add from "./components/Add.tsx"
import User from "./components/Users.tsx"

createRoot(document.getElementById('root')!).render(
  <div>
    <App />
    <User />
 
    </div>
)
