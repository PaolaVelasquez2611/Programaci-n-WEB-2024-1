import { Button, CardWrap, Header, Input } from "../../components";
import './Contact.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Background } from "../../components/Background/Background";

export const Contact = () => {

  const notify = () => {
      toast.success('Your Message is on Its Way! Excited to Connect! 🚀 ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  return (
    <main>
      <Background></Background>
      <h3 className="heading-contact-3">UniteXperience</h3>
      <h1 className="heading-contact-1">UniteXperience Contact</h1>

      <section>
        <CardWrap image="https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small_2x/abstract-blur-gradient-background-vector.jpg">
          <div className="children-container">
          <Input text="Your Name or Company" placeholder="Enter name"></Input>
          <Input text="Your Email" placeholder="Enter email"></Input>
          <Input text="Something you want to Say?" className="tall-input" placeholder="Write it here"></Input>
          <Button className={"contact-btn"} onclick={notify} text={"Send"}></Button>
          </div>
        </CardWrap>
        <ToastContainer />
      </section>
    </main>
  )
}
