import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AddProjectContextProvider } from './contexts/AddProject/AddProjectContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <AddProjectContextProvider>
            <App />
        </AddProjectContextProvider>
    </BrowserRouter>
)
