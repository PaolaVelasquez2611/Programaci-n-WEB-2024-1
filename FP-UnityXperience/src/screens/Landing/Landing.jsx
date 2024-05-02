import { Footer, Header, Skills, GradientHeading, MemberCard, BrandCard, BrandCards, IntroSection } from "../../components"
import { Scroller } from "../../components/Scroller/Scroller"

export const Landing = () => {
  return (
    <main className="place-content-center">
    
    <GradientHeading text={"UnityXperience"}/>
    <h1 className="text-center font-bold">UI / UX / Web Development</h1>
    <p className="text-center mt-8 text-lg">Always exploring the needs</p>
    <p className="text-center mb-20 text-lg">creating innovative ideas and unite the solutions</p>
    <IntroSection></IntroSection>
{/*     <BrandCards />  mejorar */} 
    <GradientHeading text={"Skills"}/>
    <Skills />
    <GradientHeading text={"UnityXperience Projects"}/>
    <Scroller />
    <GradientHeading text={"UnityXperience Team"}/>
    <MemberCard img="../src/assets/Profile/JuanRamirez.png"
    name="Juan Esteban Ramirez"
    role="Developer"/>
    </main>
  )
}
