import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AddProjectContextProvider } from './contexts/AddProject/AddProjectContextProvider.jsx'
import { ContactUsContextProvider } from './contexts/ContactUs/ContactUsContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
        <AddProjectContextProvider>
            <ContactUsContextProvider>
            <App />
            </ContactUsContextProvider>
        </AddProjectContextProvider>
    </BrowserRouter>
)
