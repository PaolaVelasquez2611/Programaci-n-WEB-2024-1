import './style.css'
import React from 'react'
import { createRoot } from "react-dom/client"
import { App } from './App'


const appContainer = document.querySelector("#app") // selects "app" div in index.html by id to access it
const root = createRoot(appContainer) // this indicates where it will all be rendered

root.render(<App />) // render h1
console.log("Hello World")

