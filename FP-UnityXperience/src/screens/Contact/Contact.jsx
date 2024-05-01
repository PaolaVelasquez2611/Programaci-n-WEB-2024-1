import { Button } from "../../components/Button/Button"
import { Input } from "../../components/Input/Input"
import './Contact.css'

export const Contact = () => {
    return (

   <div>
    <h3>UniteXperience</h3>
    <h1>UniteXperience Contact</h1>

    <div className="input-container">
    <Input text="Your Name or Company" placeholder="Enter name"></Input>
    <Input text="Your Email" placeholder="Enter email"></Input>
    <Input text="Something you want to Say?" className="tall-input" placeholder="Write it here"></Input>
    <Button text={"Send"}></Button>
    </div>
   </div>
  )
}
