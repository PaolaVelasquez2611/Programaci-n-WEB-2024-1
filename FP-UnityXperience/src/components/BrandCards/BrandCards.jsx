import { useEffect, useState } from "react";
import { valuesData } from "../../data/valuesData";
import { BrandCard } from "../index";
import './BrandCards.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const BrandCards = ({ text1, text2 }) => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisableAnimation(window.innerWidth < 800);
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!disableAnimation) {
      gsap.fromTo("#group-brandcards", {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "ease-out",
        scrollTrigger: {
          trigger: "#group-brandcards",
          start: "top 90%", 
          end: "bottom 60%", 
          scrub: true
        }
      });
    }
  }, [disableAnimation]);

  return (
    <>
      <span className="titles-Values">
        <h2><span className="title-1">{text1}</span></h2>
        <h2><span className="title-2">{text2}</span></h2>
      </span>
      <div className="group-brandcards" id="group-brandcards">
        {valuesData.map(({ id, icon, title, description }) => (
          <BrandCard 
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  );
};
