import { Nav } from "./Nav/Nav";
import './Header.css'
import { headerData } from "../../data/headerData";
import { Link } from "react-router-dom";

export function Header (){
    return (
        <div className="Container">
            <img 
                className="logo" 
                src="../../src/assets/Logo.png" 
                alt="Logo UnityXperience" />
            {headerData.map(({ id, text, route }) => (
                <section key={id} className="Section">
                    <Link to={route}>
                        <Nav text={text} />
                    </Link>
                </section>
            ))}
            <section>
                <button className="hamClick">
                    <img className="hamburguer-menu" src="../../src/assets/SVG/hamburguer-menu.svg" alt=""/>
                </button>
            </section>
        </div>
    );
}