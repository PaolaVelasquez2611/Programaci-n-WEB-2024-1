import React, { useEffect } from 'react';
import { Button } from "../Button/Button";
import './IntroSection.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const IntroSection = () => {

  useEffect(() => {
    gsap.fromTo("#intro-container", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "ease-out",
      scrollTrigger: {
        trigger: "#intro-container",
        start: "top 100%", 
        end: "bottom 90%", 
        scrub: true, 
    
      }
    });
  }, []);

  return (
    <section className="flex flex-col mb-20 w-8/12 m-auto align-center justify-center">
      <img 
        className="logo-unity" 
        src="../src/assets/logos/logoUnityXperience.png" />
      <div 
        className="intro-container" 
        id="intro-container">
        <p>Hi everyone, UnityXperience isn't your typical design and development company. We’re a team of passionate freelancers who combine their expertise to create custom solutions for each client. We prioritize understanding your vision and goals before crafting something that perfectly aligns with them. </p>
        <figure className="place-content-center">
          <Button 
            id="btn-learn" 
            className={"btn-learn"} 
            path={"/aboutus"} 
            text={"Learn more about us"} />
        </figure>
      </div>
    </section>
  )
}
