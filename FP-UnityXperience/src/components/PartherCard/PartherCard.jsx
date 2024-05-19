import { SocialButtons } from "../SocialButtons/SocialButtons"
import './PartherCard.css'

export const PartherCard = () => {
  return (
    <div className="w-1/4 h-5/6 shadow-lg shadow-slate-100 rounded-lg flex flex-col items-center align-center parther-card">
        <img 
        src="../src/assets/Profile/JuanRamirez.png" 
        className="w-1/4 my-10 rounded-full ring-2 ring-gray-500 p-1 shadow-xl "/> 
        <div className="text-box flex flex-col justify-center">
            <h2 className="text-4xl mb-1 ">
                Juan Ramirez
            </h2>
            <p className="font-light my-5 place-self-center ">Front-end Developer</p>
            <h3> JS | React | Firebase | Chistes</h3>
            <button className="mt-5 p-3 px-10 -bg--blue-purple shadow-sm rounded-md hover:-bg--white40  ">
                {/* todo: Aca ira un link que redirija al perfil de este usuario */}
                <span>See more</span>
            </button>

            <hr className=" mt-5 "/>

            <SocialButtons />
        </div>
    </div>
  )
}
