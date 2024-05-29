import './Nav.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';


export function Nav ({ text, showMenu }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 770);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleLogout = async () => {
        await logout();
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
                {user && (
                    <li>
                        <p className='text-sesion' onClick={handleLogout}>Cerrar Sesión</p>
                    </li>
                )}
            </ul>
        </nav>
    )
}