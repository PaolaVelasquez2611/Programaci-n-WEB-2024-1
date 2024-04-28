export function Nav (props){

    const {text} = props
    return(
        <nav>
            <div className="Nav">
                <ul>
                    <li>
                        <a href="#">{text}</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}