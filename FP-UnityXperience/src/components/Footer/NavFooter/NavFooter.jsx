export function NavFooter (props){

    const {text, title, title2} = props
    return(
        <nav>
            <div className="Nav-Footer flex items-center justify-center">
                <ul>
                    <li>
                        <h2 className="title" ><a href="#"> {title}</a></h2>
                        <a href="#">{text}</a>
                        <h2 className="title" ><a href="#">{title2}</a></h2>
                    </li>
                </ul>
            </div>
        </nav>
    )
}