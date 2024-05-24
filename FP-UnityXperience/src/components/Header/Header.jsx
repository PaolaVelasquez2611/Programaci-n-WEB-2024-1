import { useState } from "react";
import './Header.css';
import { MobileNavBar, Nav } from "../../components";
import { headerData } from "../../data/headerData";
import { Link } from "react-router-dom";

export function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="Container">
            <img
                className="logo"
                src="../../src/assets/Logo.png"
                alt="Logo UnityXperience"
            />
            <div className={`Nav ${showMenu ? "showMenu" : ""}`}>
                {headerData.map(({ id, text, route }) => (
                    <section key={id} className="Section">
                        <Link to={route} onClick={() => setShowMenu(false)}>
                            <Nav text={text} />
                        </Link>
                    </section>
                ))}
            </div>
            <button className="hamClick" onClick={handleClick}>
                <img
                    className="hamburguer-menu"
                    src="../../src/assets/SVG/hamburguer-menu.svg"
                    alt=""
                />
            </button>
        </div>
    );
}
