import { createRoot } from 'react-dom/client'
import { ReactApp } from './react-app'

const root = document.getElementById('root')
if (root === null) {
  throw new Error('Root element not found')
}

createRoot(root).render(<ReactApp />)
