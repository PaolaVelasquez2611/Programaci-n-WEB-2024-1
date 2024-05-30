import { socialBtnImg } from "../../data/socialButtonImg"
import { SocialButton } from "../SocialButton/SocialButton"
import './SocialButtons.css'

const buttonsData = socialBtnImg

export const SocialButtons = () => {
  return (
    <div className="social-buttons">
    {
        buttonsData.map(({ id,path, name }) =>(
            <SocialButton
            key={id}
            imgUrl={path}
            name={name} />
        ))
    }
    </div>
  )
}
