import { createRoot } from 'react-dom/client'
import { ReactApp } from './react-app.tsx'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('Root element not found. Cannot render React app.')
}

createRoot(root).render(<ReactApp />)
