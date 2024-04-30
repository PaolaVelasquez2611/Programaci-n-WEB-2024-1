import { Nav } from "./Nav/Nav";
import './Header.css'

export function Header (){
    return(
        
        <div className="Container">
        <img 
            className="logo" 
            src="../../src/assets/Logo.png" 
            alt="Logo UnityXperience" />
        <Nav text="Projects"/> {/* fix nav component, add .map function */}
        <Nav text="Services"/>
        <Nav text="About Us"/>
        <Nav text="Contact"/>
        <button className="hamClick">
        <img className="hamburguer-menu" src="../../src/assets/hamburguer-menu.png" alt=""/>
        </button>
       

        </div>
        
    )
}