import { Button, CardWrap, Input } from "../../components";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContactUs } from "../../hooks/useContactUs";

export const Contact = () => {

  const { sendEmail, form } = useContactUs();

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