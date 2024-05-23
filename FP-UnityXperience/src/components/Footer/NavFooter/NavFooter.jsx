import './NavFooter.css'
export function NavFooter (props){

    const {text, title, title2} = props
    return(
        <nav>
            <div className="Nav-Footer">
                <ul>
                    <li className="nav-list">
                        <h2 className="title" ><p> {title}</p></h2>
                        <p>{text}</p>
                        <h2 className="title" ><p>{title2}</p></h2>
                    </li>
                </ul>
            </div>
        </nav>
    )
}