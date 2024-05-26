import { useRef } from "react";
import { Button, CardWrap, Input } from "../../components";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_y4bhwrf',
        'template_aw6ih9g',
        form.current, {
        publicKey: 'JxSZhWzdiJwLnZaRa',
      })
      .then(
        () => {
          notify();
          console.log("SUCCESS")
        },
        (error) => {
          notifyError();
          console.error('FAILED...', error.text);
        }
      );
  };

  const notify = () => {
    toast.success('Your Message is on Its Way! Excited to Connect! 🚀', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const notifyError = () => {
    toast.success('There was an error sending your message 😔', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <main>
      <h3 className="heading-contact-3">UniteXperience</h3>
      <h1 className="heading-contact-1">UniteXperience Contact</h1>

      <section>
        <CardWrap image="https://static.vecteezy.com/system/resources/thumbnails/020/933/072/small_2x/abstract-blur-gradient-background-vector.jpg">
          <form ref={form} onSubmit={sendEmail}>
            <div className="children-container">
              <Input 
                name={"to_name"}
                text="Your Name or Company" 
                placeholder="Enter name"
              />
              <Input 
                name={"from_name"}
                text="Your Email" 
                placeholder="Enter email"
              />
              <Input 
                name={"message"}
                text="Something you want to Say?" 
                className="tall-input" 
                placeholder="Write it here"
              />
              <Button 
                className={"contact-btn"} 
                onClick={sendEmail} 
                text={"Send"}
              />
            </div>
          </form>
        </CardWrap>
        <ToastContainer />
      </section>
    </main>
  );
};