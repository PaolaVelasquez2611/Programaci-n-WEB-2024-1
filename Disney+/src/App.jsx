import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import React from 'react'
import { NavPhone } from "./components/Footer/NavPhone";






export function App() {
    return (
        <>
            <Header></Header>
            <NavPhone> </NavPhone>
            <Body></Body>
            <Footer></Footer>
            
            
        </> //fragment es una etiqueta vacia. no se puede renderizar componentes sueltos




    )
}
