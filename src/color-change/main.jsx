import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QrCodeGenerator from './ColorChange.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QrCodeGenerator />
    </StrictMode>,
)