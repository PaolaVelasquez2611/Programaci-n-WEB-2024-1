import React, { useEffect } from 'react';
import { skills } from "../../data/skills";
import './Skills.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    useEffect(() => {
        gsap.fromTo("#skills-list", {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "ease-out",
            scrollTrigger: {
                trigger: "#skills-list",
                start: "top 80%", 
                end: "bottom 60%", 
                scrub: true,
            }
        });
    }, []);

    const skillsData = skills;

    return (
        <section className="w-8/12 m-auto">
            <ul id="skills-list" className="flex flex-wrap place-content-center">
                {skillsData.map(({ name, logo, id, back }) => (
                    <li 
                        key={id} 
                        className='flex items-center justify-center m-2 p-3 rounded-xl backdrop-blur w-16 h-16 skill-item' 
                        style={{ backgroundColor: `${back}30` }}
                    >
                        <img src={logo} alt={name} className="" />
                        <span 
                            className="skill-span"  
                            style={{ borderColor: back, color: back }}
                        >
                            {name}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};
