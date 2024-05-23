import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutUsCard.css';

export function AboutUsCard({ title, text, image }) {
    const titleRef = useRef(null);
    const pRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animation for the title
        gsap.from(titleRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        });

        // Animation for the paragraph
        gsap.from(pRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: pRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        });
    }, []);

    return (
        <div className="container-about ">
            <img className="image-about-us " src={image} alt="About Us " />
            <div className="text-container-about mx-auto">
                <h2 ref={titleRef}>{title}</h2>
                <p ref={pRef}>{text}</p>
            </div>
        </div>
    );
}
