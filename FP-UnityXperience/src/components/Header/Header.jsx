import { MobileNavBar,Nav} from "../../components"
import { useState } from "react";
import './Header.css'
import { headerData } from "../../data/headerData";

export function Header (){
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = (event) => {
        setShowMenu(!showMenu)
    }
    return (
        <div className={`Container ${showMenu ? "showMenu" : ""}`}>
      <img
        className="logo"
        src="../../src/assets/Logo.png"
        alt="Logo UnityXperience"
      />
      {headerData.map(({ id, text }) => (
        <section key={id} className="Section">
          <Nav text={text} />
        </section>
      ))}
      <section>
        <button className="hamClick" onClick={handleClick}>
          <img
            className="hamburguer-menu"
            src="../../src/assets/SVG/hamburguer-menu.svg"
            alt=""
          />
        </button>
      </section>
      <section>{!showMenu ? null : <MobileNavBar />}</section>
    </div>
    );
}