import { Button } from "../Button/Button"
import { SocialButtons } from "../SocialButtons/SocialButtons"
import './PartnerCard.css'

export const PartnerCard = () => {

  return (
    <div className="w-3/4 h-5/6 shadow-lg shadow-slate-100 rounded-lg flex flex-col content-center items-center align-center parther-card md:w-2/6 ">
        <img 
        src="../src/assets/Profile/JuanRamirez.png" 
        className="w-4/12 my-10 rounded-full ring-2 ring-gray-800 p-1 shadow-xl  "/> 
        <div className="text-box flex flex-col justify-center">
            <h2 className="text-3xl mb-1 place-self-center ">
                Juan Ramirez
            </h2>
            <p className="font-light my-5 place-self-center "> Front-end Developer </p>
            <h3> JS | React | Firebase | Chistes</h3>
            <Button
            className={"btn-parther-card"}
            text={"See more"}/>
            <hr className=" mt-5 "/>
            <SocialButtons />
        </div>
    </div>
  )
}
