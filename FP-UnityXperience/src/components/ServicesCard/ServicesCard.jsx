import './ServicesCard.css';
import { useState, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ServicesCard = ({ img, title, description, services }) => {
  const [isCellphoneScreen, setIsDesktopScreen] = useState(window.innerWidth < 770);

  useEffect(() => {
    function handleResize() {
      setIsDesktopScreen(window.innerWidth < 770);
    }

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isCellphoneScreen) {
      gsap.fromTo(".service-card", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "ease-out",
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 100%", 
          end: "bottom 60%", 
          scrub: true,
          
        }
      });
    }
  }, [isCellphoneScreen]);

  return (
    <>
      {isCellphoneScreen 
      ? (
        <article className="service-card">
          <img src={img} className="service-img"/>
          <span className='sticky top-0'><strong><p className="service-title">{title}</p></strong></span>
          <p className="service-description">{description}</p>
          <div className="services">
            <ul>
              {services.map((service) => {
                return <li key={service}>{service}</li>
              })}
            </ul>
          </div>
        </article>
      )
      : (
        <article className="service-card">
          <span className='top-0'><strong><p className="service-title">{title}</p></strong></span>
          <section className="service-info">
            <div className="information">
              <p className="service-description">{description}</p>
              <div className="services">
                <ul>
                  {services.map((service) => {
                    return <li key={service}>{service}</li>
                  })}
                </ul>
              </div>
            </div>
            <img src={img} className="service-img"/>
          </section>
        </article>
      )}
    </>
  );
};
