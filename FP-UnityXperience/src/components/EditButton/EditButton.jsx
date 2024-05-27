import './EditButton.css'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const EditButton = () => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsLogged(!!user);
  }, []);

  const handleClick = () => {
    navigate('/addproject');
  };

  if (!isLogged) {
    return null;
  }

  return (
    <section>
        <button className="edit-button" onClick={handleClick}>
            <img className="pencil-img" src="../../src/assets/SVG/pencil-button.svg" alt=""/>
        </button>
    </section>
  )
}
