import { Nav } from "./Nav/Nav";
import './Header.css'
import { headerData } from "../../data/headerData";

export function Header (){
    return(
    <div className="Container">
        <img 
            className="logo" 
            src="../../src/assets/Logo.png" 
            alt="Logo UnityXperience" />
        {headerData.map(({id,text})=>{
            return(
            <section  key={id} className="Section">
                <Nav text= {text} />
                <button className="hamClick">
                <img className="hamburguer-menu" src="../../src/assets/SVG/hamburguer-menu.svg" alt=""/>
                </button>
            </section>
            )
        })}


    </div>
    )
}