export function NavFooter (props){

    const {text, title, description, title2} = props
    return(
        <nav>
            <div className="Nav-Footer">
                <ul>
                    <li>
                        <h2>{title}</h2>
                        <a href="#">{text}</a>
                        <p>{description}</p>
                        <h2><a href="#">{title2}</a></h2>
                    </li>
                </ul>
            </div>
        </nav>
    )
}