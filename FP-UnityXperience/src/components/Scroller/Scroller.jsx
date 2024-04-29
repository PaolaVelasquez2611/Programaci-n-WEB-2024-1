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
    <>
      <div className="projects-scroll" data-direction="left">
        <ul className="scroller-inner">
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
      <div className="projects-scroll" data-direction="right">
        <ul className="scroller-inner">
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
    </>
  );
};
