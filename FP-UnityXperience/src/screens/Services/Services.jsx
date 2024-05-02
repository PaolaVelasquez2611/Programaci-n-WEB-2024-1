import './Services.css'
import { Footer, Header, ServicesCards, Button} from "../../components"

export const Services = () => {
  return (
    <>
    <h1 className="title-screen mt-24">UniteXperience Services</h1>
    <ServicesCards/>
    <section className="more-aboutus">
      <span className="combined-text">
        <p className="blue-text">Interested?</p> 
        <p>Contact us and bring your idea to make it a reality</p>
      </span>
      <Button className="learn-more" text="Learn more about us"/>
    </section>
    </>
  )
}
