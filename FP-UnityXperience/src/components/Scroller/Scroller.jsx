import { useEffect } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Scroller.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Scroller = ({ projects }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".projects-scroll");

    if (!window.matchMedia("prefers-reduced-motion: reduce").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }

    gsap.fromTo("#project-scroller", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "ease-out",
      scrollTrigger: {
        trigger: "#project-scroller",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      }
    });
  }, []);

  return (
    <section id="project-scroller" className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10 flex flex-col justify-center items-center">
      <div className="projects-scroll w-full inline-flex flex-nowrap overflow-hidden" data-direction="left">
        <ul className="scroller-inner flex justify-center items-center">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-scroll inline-flex flex-nowrap overflow-hidden" data-direction="right">
        <ul className="scroller-inner flex justify-center items-center">
          {projects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
