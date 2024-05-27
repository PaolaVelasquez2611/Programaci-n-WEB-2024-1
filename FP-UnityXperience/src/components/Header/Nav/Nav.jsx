import './Nav.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Nav ({ text, showMenu }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 770)
        }

        window.addEventListener('resize', handleResize)

        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          setIsLoggedIn(true);
        }

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/');
      };

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
                {isLoggedIn && (
                    <li>
                        <p className='text-sesion' onClick={handleLogout}>Cerrar Sesión</p>
                    </li>
                )}
            </ul>
        </nav>
    )
}
