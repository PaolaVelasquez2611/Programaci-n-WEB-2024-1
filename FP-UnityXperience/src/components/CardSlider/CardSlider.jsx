import { useEffect, useRef, useState } from "react";
import { carouselData } from "../../data/carouselData";
import { ProjectCard } from "../index";
import "./CardSlider.css";

export const CardSlider = () => {
  const carouselRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollInterval = 5000; 
  let intervalId;

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolling(true);
   
      if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
      
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    };

    const scrollEndHandler = () => {
      setIsScrolling(false);
    };

    carouselRef.current.addEventListener("scroll", scrollHandler);
    carouselRef.current.addEventListener("scrollend", scrollEndHandler);

   
    intervalId = setInterval(() => {
      const containerWidth = carouselRef.current.offsetWidth;
      const newPosition = carouselRef.current.scrollLeft + containerWidth;
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }, scrollInterval);

    return () => {
      clearInterval(intervalId);
      carouselRef.current.removeEventListener("scroll", scrollHandler);
      carouselRef.current.removeEventListener("scrollend", scrollEndHandler);
    };
  }, []);

  return (
    <div className={`carousel-container-projects ${isScrolling ? "scrolling" : ""}`}>
      <div className="carousel-wrapper" ref={carouselRef}>
        <ul className="carousel-list">
          
          {carouselData.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id}>
              <ProjectCard
                img={thumbnail}
                title={title}
                description={review}
                tags={tags}
              />
            </li>
          ))}
         
          {carouselData.map(({ id, thumbnail, title, review, tags }) => (
            <li key={id + "clone"}>
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
      <div className="scrollbar"></div>
    </div>
  );
};
