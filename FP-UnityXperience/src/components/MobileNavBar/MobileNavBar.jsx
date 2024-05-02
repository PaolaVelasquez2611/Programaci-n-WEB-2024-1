import './MobileNavBar.css';
import { Nav } from "../../components";
import { headerData } from "../../data/headerData";

export function MobileNavBar() {
    return (
        <div className="container-mobile">
            <div className="nav-sections">
                {headerData.map(({ id, text }) => (
                    <section key={id} className="Section">
                        <Nav text={text} />
                    </section>
                ))}
            </div>
        </div>
    );
}
