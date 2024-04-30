import { ExperienceLine,Header,Footer,ProfileCard } from "../../components"

export const Profile = () => {
  return (
    <>
    <Header/>
    <h1>UniteXperience Profile</h1>
    <ProfileCard  imagen="../../src/assets/Profile/JuanRamirez.png" 
                  title="Juan Esteban Ramirez Perdomo"
                  text="I am a web development enthusiast with a profound interest
                        in User Interface (UI) design. My passion for creating attractive and 
                        functional digital experiences merges with my penchant for staying 
                        updated with the constant technological advancements in the fields of
                        web development and UI design."
    />
    <h2>My Experience</h2>
    <ExperienceLine />
    <h2>My projects</h2>
    
    <Footer/>
    </>
  )
}
