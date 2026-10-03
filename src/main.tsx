import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import { installMockApi } from '@/shared/lib/mock-api'

if (import.meta.env.VITE_USE_MOCK_API !== 'false') {
    installMockApi()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
