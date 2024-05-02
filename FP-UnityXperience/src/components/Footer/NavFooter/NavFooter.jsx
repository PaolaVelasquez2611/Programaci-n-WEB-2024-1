export function NavFooter (props){

    const {text, title, title2} = props
    return(
        <nav>
            <div className="Nav-Footer flex items-center justify-center">
                <ul>
                    <li>
                        <h2 className="title" ><p> {title}</p></h2>
                        <p>{text}</p>
                        <h2 className="title" ><p>{title2}</p></h2>
                    </li>
                </ul>
            </div>
        </nav>
    )
}