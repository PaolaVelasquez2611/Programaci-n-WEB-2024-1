import './Nav.css'

export function Nav ({ text }){
    return(
        <nav>
            <div className="Nav">
                <ul>
                    <li>
                        <p className='tab-text' >{text}</p>
                    </li>
                </ul>
            </div>
        </nav>
    )
}