import { useEffect, useRef } from "react";
import { carouselData } from "../../data/carouselData";
import { ProjectCard } from "../index";
import "./CardSlider.css";

export const CardSlider = () => {
  const carouselRef = useRef(null);
  const scrollInterval = 3000; // Intervalo de tiempo en milisegundos
  let intervalId;

  useEffect(() => {
    const scrollHandler = () => {
      // Comprobar si llegamos al final del contenido
      if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
        // Si estamos al final, volver al principio
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    };

    carouselRef.current.addEventListener("scroll", scrollHandler);

    // Iniciar el desplazamiento automático al montar el componente
    intervalId = setInterval(() => {
      const containerWidth = carouselRef.current.offsetWidth;
      const newPosition = carouselRef.current.scrollLeft + containerWidth;
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }, scrollInterval);

    // Detener el desplazamiento automático al desmontar el componente
    return () => {
      clearInterval(intervalId);
      carouselRef.current.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" ref={carouselRef}>
        <ul className="carousel-list">
          {/* Duplicar los elementos para crear el bucle infinito */}
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
          {/* Duplicar los elementos para crear el bucle infinito */}
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