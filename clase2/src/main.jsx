import './style.css'
import React from 'react'
import { createRoot } from "react-dom/client"


const appContainer = document.querySelector("#app") // selects "app" div in index.html by id to access it
const root = createRoot(appContainer) // this indicates where it will all be rendered


function Header() {
    return (
        <header>
            <h1>Hello World</h1>
        </header>

    )
}

function Body() {
    return (
        <main>
            <p> Este es el Body</p>
        </main>
    )
}

function Footer() {
    return (

        <footer>
            <h3>Paola Velasquez</h3>
        </footer>
    )
}

function App() {
    return (
        <>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </> //fragment es una etiqueta vacia. no se puede renderizar componentes sueltos




    )
}



root.render(<App />) // render h1

console.log("Hello World")

