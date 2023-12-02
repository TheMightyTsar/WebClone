import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/index.css'
import App from './App.jsx'
import Routing from './Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Routing />
  </React.StrictMode>,
)
