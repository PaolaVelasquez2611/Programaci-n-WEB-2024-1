import { Body } from "./components/Body/Body";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import React from 'react'
import { FooterPhone } from "./components/Footer/FooterPhone";






export function App() {
    return (
        <>
            <FooterPhone> </FooterPhone>
            <Body></Body>
            <Footer></Footer>
            <Header></Header>
            
        </> //fragment es una etiqueta vacia. no se puede renderizar componentes sueltos




    )
}
