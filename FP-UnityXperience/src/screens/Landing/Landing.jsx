import { Footer, Header, Skills, GradientHeading, BrandCard, BrandCards } from "../../components"
import { Scroller } from "../../components/Scroller/Scroller"

export const Landing = () => {
  return (
    <main className="place-content-center">
    <Header /> {/* Improve the responsive */}
    <BrandCards />
    <GradientHeading text={"Skills"}/>
    <Skills />
    <GradientHeading text={"UnityXperience Projects"}/>
    <Scroller />
    <GradientHeading text={"UnityXperience Team"}/>
    <Footer /> {/* Improve the responsive */}
    </main>
  )
}
