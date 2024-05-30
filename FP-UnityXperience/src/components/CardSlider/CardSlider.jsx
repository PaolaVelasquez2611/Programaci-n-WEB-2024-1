import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "../index";
import "./CardSlider.css";
import { teamInformation } from "../../data/teamInformation";
import { useGetProjects } from "../../hooks/useGetProjects";



export const CardSlider = ({author}) => {

  const {projects } = useGetProjects();
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollInterval = 5000; 
  const intervalIdRef = useRef(null);

  useEffect(() => {
    const currentCarousel = carouselRef.current;

    const scrollHandler = () => {
      setIsScrolling(true);
      if (currentCarousel.scrollLeft + currentCarousel.offsetWidth >= currentCarousel.scrollWidth) {
        currentCarousel.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    };

    const scrollEndHandler = () => {
      setIsScrolling(false);
    };

    if (currentCarousel) {
      currentCarousel.addEventListener("scroll", scrollHandler);
      currentCarousel.addEventListener("scrollend", scrollEndHandler);
      
      intervalIdRef.current = setInterval(() => {
        const containerWidth = currentCarousel.offsetWidth;
        const newPosition = currentCarousel.scrollLeft + containerWidth;
        currentCarousel.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }, scrollInterval);
    }

    return () => {
      clearInterval(intervalIdRef.current);
      if (currentCarousel) {
        currentCarousel.removeEventListener("scroll", scrollHandler);
        currentCarousel.removeEventListener("scrollend", scrollEndHandler);
      }
    };
  }, []);

  const filteredProjects = projects.filter(project => {
    const results = (project.authors && project.authors.includes(author))
    return results;
  });
 
  return (
    <div className={`carousel-container-projects ${isScrolling ? "scrolling" : ""}`}>
      <div className="carousel-wrapper" ref={carouselRef}>
        <ul className="carousel-list">
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectCard project={project} />
            </li>
            
          ))}
        </ul>
      </div>
      <div className="scrollbar"></div>
    </div>
  );
};
