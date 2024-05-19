import { socialBtnImg } from "../../data/socialButtonImg"
import { SocialButton } from "../SocialButton/SocialButton"

const buttonsData = socialBtnImg

export const SocialButtons = () => {
  return (
    <div className="flex flex-row pb-7">
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
