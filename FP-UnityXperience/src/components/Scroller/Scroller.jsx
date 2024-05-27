import { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { app } from '../../services/firebase-config';
import "./Scroller.css";

const db = getFirestore(app);

export const Scroller = () => {
  const [projects, setProjects] = useState([]);
  
  const getProjectsFromFirestore = () => {
    const q = query(collection(db, "projects"));
    onSnapshot(q, (querySnapshot) => {
      const updatedProjects = [];
      querySnapshot.forEach((doc) => {
        updatedProjects.push(doc.data());
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));
    });
  };

  const getProjects = () => {

    const localProjects = JSON.parse(localStorage.getItem('projects'));
    if (localProjects && localProjects.length > 0) {
      setProjects(localProjects);
    }

    getProjectsFromFirestore();
  };

  useEffect(() => {
    getProjects();
  }, []);

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

  console.log(projects)

  return (
    <section className="max-w-screen-xl mx-auto md:w-5/6 lg:w-4/6 pt-10 flex flex-col justify-center items-center">
      <div className="projects-scroll w-full inline-flex flex-nowrap overflow-hidden" data-direction="left">
        <ul className="scroller-inner flex justify-center items-center">
          {projects.map(( project ) => (
            <li>
              <ProjectCard
                project={project}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-scroll inline-flex flex-nowrap overflow-hidden" data-direction="right">
        <ul className="scroller-inner flex justify-center items-center ">
          {projects.map(( project ) => (
            <li>
              <ProjectCard
                project={project}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};