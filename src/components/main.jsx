import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/index.css'
import App from './App.jsx'
import Routing from './Routing.jsx'
import AuthProvider from '../auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AuthProvider>
      <App />
      <Routing />
    </AuthProvider>
  </React.StrictMode>,
)
