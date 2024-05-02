import { Button } from "../Button/Button"
import './IntroSection.css'

export const IntroSection = () => {
  return (
    <section className="flex flex-col mb-20 w-8/12 m-auto">
        <img className="logo-unity" src="../src/assets/logos/logoUnity.png" />
        <div className="align-self p-5" id="intro-container">
            <p>Hi everyone, UnityXperience isn't your typical design and development company. We’re a team of passionate freelancers who combine their expertise to create custom solutions for each client. We prioritize understanding your vision and goals before crafting something that perfectly aligns with them. </p>
            <Button text={"Learn more about us"} />
        </div>
    </section>
  )
}
