import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BrowserApi from './BrowserApi.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserApi />
    </StrictMode>,
)