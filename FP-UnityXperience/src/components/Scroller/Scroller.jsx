import { useEffect } from "react";
import { projects } from "../../data/projects";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./Scroller.css";

export const Scroller = () => {
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
  }, []);

  return (
    <section className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10 flex flex-col justify-center items-center">
      <div className="projects-scroll w-full inline-flex flex-nowrap overflow-hidden" data-direction="left">
        <ul className="scroller-inner flex justify-center items-center">
          {projects.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-scroll inline-flex flex-nowrap overflow-hidden" data-direction="right">
        <ul className="scroller-inner flex justify-center items-center ">
          {projects.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
