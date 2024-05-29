import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CardWrap, Input } from "../../components";
import './AdminLogin.css';
import { Background } from "../../components/Background/Background";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks/useAuth';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  return (
    <main>
      <Background />
      <h1>UniteXperience Administrator Panels</h1>
      <section>
        <CardWrap image="https://static.vecteezy.com/system/resources/previews/027/034/360/non_2x/abstract-square-blurred-background-elegant-gradient-mesh-red-dark-color-design-template-good-for-modern-website-wallpaper-cover-design-free-vector.jpg">
          <div className="children-container">
            <h2>Hello, enter your account to go to the 
              <span>administrator panel</span>
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