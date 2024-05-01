import { Footer, Header, Skills, GradientHeading, BrandCard } from "../../components"
import { Scroller } from "../../components/Scroller/Scroller"

export const Landing = () => {
  return (
    <>
    <p>Hello! i'm Landing screen</p>
{/*     <Header /> */} {/* Improve the responsive */}
    <GradientHeading text={"Skills"}/>
    <Skills />
    <GradientHeading text={"UnityXperience Projects"}/>
    <Scroller />
    <GradientHeading text={"UnityXperience Team"}/>
    <BrandCard />
  {/*   <Footer /> */} {/* Improve the responsive */}
    </>
  )
}
