import './style.css'
import React from 'react'
import {createRoot} from "react-dom/client"


const appContainer = document.querySelector ("#app") // selects "app" div in index.html by id to access it
const root = createRoot (appContainer) // this indicates where it will all be rendered



root.render(<h1>Hello World!</h1>) // render h1




console.log("Hello World")

