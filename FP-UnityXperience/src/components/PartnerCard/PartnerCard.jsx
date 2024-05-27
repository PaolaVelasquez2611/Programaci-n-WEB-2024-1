import { Button } from "../Button/Button"
import { SocialButtons } from "../SocialButtons/SocialButtons"
import './PartnerCard.css'

export const PartnerCard = () => {

  return (
    <div className="partner-card-container">
        <img 
        src="../src/assets/Profile/JuanRamirez.png" 
        className="partner-image"/> 
        <div className="content-card">
            <h2 className="name">
                Juan Ramirez
            </h2>
            <p className="partner-info"> Front-end Developer </p>
            <h3> JS | React | Firebase | Chistes</h3>
            <Button
            className="btn-parther-card"
            text={"See more"}/>
            <hr className="socials"/>
            <SocialButtons />
        </div>
    </div>
    
  )
}
