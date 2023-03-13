import { createRoot } from 'react-dom/client'
import { TistorySkinbook } from '~/App'
import '../styles/index.scss'

createRoot(document.getElementById('sb-root') as HTMLElement)
  .render(<TistorySkinbook />)
