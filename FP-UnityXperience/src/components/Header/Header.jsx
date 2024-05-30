import { useState } from "react";
import './Header.css';
import { Nav } from "../../components";
import { headerData } from "../../data/headerData";
import { Link } from "react-router-dom";

import Logo from "/assets/logos/Logo.png";
import HamburguerMenu from "/assets/SVG/hamburguer-menu.svg";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <div className="Container">
                <Link to="/">
                    <img
                        className="logo"
                        src={Logo}
                        alt="Logo UnityXperience"
                    />
                </Link>
                <button
                    className={`menu-btn ${showMenu ? 'menu-btn-active' : ''}`}
                    onClick={() => setShowMenu(!showMenu)}
                    aria-label={showMenu ? "Cerrar menú" : "Abrir menú"}
                >
                    <img
                        className="hamburguer-menu"
                        src={HamburguerMenu}
                        alt="Menu"
                    />
                </button>
                <section>
                    <Nav text={headerData} showMenu={showMenu} />
                </section>
            </div>
        </header>
    );
}
