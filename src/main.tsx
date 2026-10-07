import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import '@/shared/lib/i18n'
import { installMockApi } from '@/shared/lib/mock-api'

if (import.meta.env.VITE_USE_MOCK_API !== 'false') {
    installMockApi()
}

// The design is dark ("Night") by default; light is opt-in from Settings.
try {
    if (localStorage.getItem('theme') !== 'light') {
        document.documentElement.classList.add('dark')
    }
} catch {
    document.documentElement.classList.add('dark')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
