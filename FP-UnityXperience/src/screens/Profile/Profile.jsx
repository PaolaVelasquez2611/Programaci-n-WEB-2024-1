import { ExperienceLine,ProfileCard,GradientHeading, CardSlider, Background} from "../../components"

export const Profile = () => {
  return (
    <>
    <Background></Background>
    <h1 className="text-center mt-20 mb-20 mx-auto font-bold">UniteXperience Profile</h1>
    <ProfileCard  imagen="../../src/assets/Profile/JuanRamirez.png" 
                  title="Juan Esteban Ramirez Perdomo"
                  text="I am a web development enthusiast with a profound interest
                        in User Interface (UI) design. My passion for creating attractive and 
                        functional digital experiences merges with my penchant for staying 
                        updated with the constant technological advancements in the fields of
                        web development and UI design."
    />

    <GradientHeading text="My Experience"/>
    
    <ExperienceLine />  {/* todo: fixed the responsive */}
    <GradientHeading text="My Projects"/>

     <CardSlider/>
    </>
  )
}
