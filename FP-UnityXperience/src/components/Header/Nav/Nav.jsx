import './Nav.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Nav ({ text, showMenu }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770)

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 770)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <nav style={{ display: (showMenu || isDesktop) ? 'block' : 'none' }}> 
            <ul className='nav-header'>
                {text.map(({ id, text, route }) => (
                    <li key={id}>
                        <Link to={route}>
                            <p>{text}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
