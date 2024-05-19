import { Button } from "../Button/Button"
import './IntroSection.css'

export const IntroSection = () => {
  return (
    <section className="flex flex-col mb-20 w-8/12 m-auto align-center justify-center">
        <img className="logo-unity" src="../src/assets/logos/logoUnityXperience.png" />
        <div className="align-self p-5 w-72 md:w-9/12" id="intro-container">
            <p>Hi everyone, UnityXperience isn't your typical design and development company. We’re a team of passionate freelancers who combine their expertise to create custom solutions for each client. We prioritize understanding your vision and goals before crafting something that perfectly aligns with them. </p>
            <figure className="place-content-center">
                <Button id="btn-learn" className={"btn-learn"} text={"Learn more about us"} />
            </figure>
        </div>
    </section>
  )
}
