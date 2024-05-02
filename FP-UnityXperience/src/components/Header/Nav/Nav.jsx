export function Nav ({ text }){
    return(
        <nav>
            <div className="Nav">
                <ul>
                    <li>
                        <p>{text}</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}