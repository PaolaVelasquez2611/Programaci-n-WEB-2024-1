import './SocialButton.css'

export const SocialButton = ({ imgUrl, name, link }) => {
    
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
