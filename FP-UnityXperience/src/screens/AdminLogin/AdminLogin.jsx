import { Button, CardWrap, Input } from "../../components"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogin = () => {

  const notify = () => {
    toast.success(' You just logged in you admin account! 😁', {
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
    <>
    <h1>UniteXperience Administrator Panels</h1>
    <section>
    <CardWrap image="https://static.vecteezy.com/system/resources/previews/027/034/360/non_2x/abstract-square-blurred-background-elegant-gradient-mesh-red-dark-color-design-template-good-for-modern-website-wallpaper-cover-design-free-vector.jpg">
      <div className="children-container">
      <p>Hello, enter your occount to go to the <span>adminsitrator panel</span></p>
      <Input text="Your Email" placeholder="Enter email"></Input>
      <Input text="Password" className="tall-input" placeholder="Password"></Input>
      <Button onclick={notify} text={"Log in"}></Button>
      <span className="place-content-center text-center">
        <p>Return to Home Page</p>
      </span>
      </div>
    </CardWrap>
    <ToastContainer />
  </section>
    </>
  )
}
