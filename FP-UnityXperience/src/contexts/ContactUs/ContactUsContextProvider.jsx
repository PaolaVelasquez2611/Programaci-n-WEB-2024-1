import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ContactUsContext } from "./ContactUsContext";

export const ContactUsContextProvider = ({ children }) => {
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

    return(
        <ContactUsContext.Provider value={{
            sendEmail,
            form
        }}
        >
        {children}
        </ContactUsContext.Provider>
    )
}