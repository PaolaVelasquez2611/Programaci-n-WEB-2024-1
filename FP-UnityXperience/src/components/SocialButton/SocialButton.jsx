/* import { useHistory } from "react-router-dom"; */
import './SocialButton.css'

export const SocialButton = ({ imgUrl, name, link }) => {

/*     const history = useHistory();

    const handleClick = () => {
        history.push('/nueva-ruta');
      }; */
    
  return (
    <div className="social-button-container">
        <div className="social-wrap">
            <button>
                <img className="social-button" 
                src={imgUrl}
                alt={name} />
            </button>
        </div>
    </div>
  )
}
