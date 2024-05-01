import { Button } from "../../components/Button/Button"
import { CardWrap } from "../../components/CardWrap/CardWrap"
import { Input } from "../../components/Input/Input"
import './Contact.css'

export const Contact = () => {
  return (

    <div>
      <h3>UniteXperience</h3>
      <h1>UniteXperience Contact</h1>

      <section>
        <CardWrap image="https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small_2x/abstract-blur-gradient-background-vector.jpg">
          <div className="children-container">
          <Input text="Your Name or Company" placeholder="Enter name"></Input>
          <Input text="Your Email" placeholder="Enter email"></Input>
          <Input text="Something you want to Say?" className="tall-input" placeholder="Write it here"></Input>
          <Button text={"Send"}></Button>
          </div>
        </CardWrap>
      </section>



    </div>


  )
}
