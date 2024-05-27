import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, CardWrap, Header, Input } from "../../components"
import { app } from "../../services/firebase-config";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminLogin.css'
import { Background } from "../../components/Background/Background";

export const AdminLogin = () => {
// todo: fixed the toast notify, when the admin logs in the toast must to appear on screen (app)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const logIn = (email, password) => {
    return app.auth().signInWithEmailAndPassword(email, password);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await logIn(email, password);
      const user = userCredential.user

      localStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        token: await user.getIdToken()
      }));

      notify();
      navigate('/');
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
      <Background></Background>
    <h1>UniteXperience Administrator Panels</h1>
    <section>
    <CardWrap image="https://static.vecteezy.com/system/resources/previews/027/034/360/non_2x/abstract-square-blurred-background-elegant-gradient-mesh-red-dark-color-design-template-good-for-modern-website-wallpaper-cover-design-free-vector.jpg">
      <div className="children-container">
      <h2>Hello, enter your occount to go to the 
        <span>adminsitrator panel</span>
      </h2>
      <Input
        text="Your Email"
        placeholder="Enter email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        text="Password"
        className="tall-input"
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        text="Log in"
        className="w-full"
        onClick={submitHandler}
      />
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
