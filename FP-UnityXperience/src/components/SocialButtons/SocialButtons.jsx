import { socialBtnImg } from "../../data/socialButtonImg"
import { SocialButton } from "../SocialButton/SocialButton"

const buttonsData = socialBtnImg

export const SocialButtons = () => {
  return (
    <div className="flex flex-row">
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
