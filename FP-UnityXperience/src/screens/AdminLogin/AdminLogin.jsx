import { Link, NavLink } from "react-router-dom";
import { Button, CardWrap, Header, Input } from "../../components"
import { app } from "../../services/firebase-config";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css'
export const AdminLogin = () => {
// todo: fixed the toast notify, when the admin logs in the toast must to appear on screen (app)

  const logIn = (email, password) => {
    return app.auth().signInWithEmailAndPassword(email, password);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email)
    console.log(email)

    try {
      const userFirebase = await logIn(email, password);
      console.log("log in with:", userFirebase.user);
      notify();
    } catch (error) {
      console.error("Error:", error);
      toast.error('Error: ' + error.message, {
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
  };

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
    <main>
    <h1>UniteXperience Administrator Panels</h1>
    <section>
    <CardWrap image="https://static.vecteezy.com/system/resources/previews/027/034/360/non_2x/abstract-square-blurred-background-elegant-gradient-mesh-red-dark-color-design-template-good-for-modern-website-wallpaper-cover-design-free-vector.jpg">
      <div className="children-container">
      <h2>Hello, enter your occount to go to the <span>adminsitrator panel</span></h2>
      <form onSubmit={submitHandler}>
        <input text="Your Email" placeholder="Enter email" name="email"></input>
        <input text="Password" className="tall-input" placeholder="Password" name="password"></input>
        <button type="submit">Hola</button>
      </form>
      <span className="place-content-center text-center">
        <p className="return-to">Return to Home Page</p>
      </span>
      </div>
    </CardWrap>
    <ToastContainer />
  </section>
    </main>
  )
}
