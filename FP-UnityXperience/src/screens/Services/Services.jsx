import './Services.css'
import { Footer, Header, ServicesCards, Button} from "../../components"
import { Background } from '../../components/Background/Background'

export const Services = () => {
  return (
    <>
    <Background></Background>
    <h1 className="title-screen mt-24">UniteXperience Services</h1>
    <ServicesCards/>
    <section className="more-aboutus">
      <span className="combined-text">
        <p className="blue-text">Interested?</p> 
        <p>Contact us and bring your idea to make it a reality</p>
      </span>
      <Button className="learn-more" path="/aboutus"text="Learn more about us"/>
    </section>
    </>
  )
}
