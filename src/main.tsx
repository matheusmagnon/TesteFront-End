import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OrdensCompraMonitoradasProvider } from './context/OrdensCompraMonitoradasContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OrdensCompraMonitoradasProvider>
      <App />
    </OrdensCompraMonitoradasProvider>
  </React.StrictMode>,
)
