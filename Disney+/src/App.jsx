import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import React from 'react'
import { FooterPhone } from "./components/Footer/FooterPhone";






export function App() {
    return (
        <>
            <FooterPhone> </FooterPhone>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
            
        </> //fragment es una etiqueta vacia. no se puede renderizar componentes sueltos




    )
}
