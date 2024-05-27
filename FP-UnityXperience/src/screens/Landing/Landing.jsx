import { useEffect, useState } from "react";
import { Footer, Header, Skills, GradientHeading, BrandCard, BrandCards, IntroSection, TeamSection } from "../../components";
import { Background } from "../../components/Background/Background"
import { Scroller } from "../../components/Scroller/Scroller";
import { collection, query, onSnapshot, getFirestore } from "firebase/firestore";
import { app } from '../../services/firebase-config';

const db = getFirestore(app);

export const Landing = () => {
  const [projects, setProjects] = useState([]);

  const getProjectsFromFirestore = () => {
    const q = query(collection(db, "projects"));
    onSnapshot(q, (querySnapshot) => {
      const updatedProjects = [];
      querySnapshot.forEach((doc) => {
        const projectData = doc.data();
        updatedProjects.push(projectData);
      });

      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjects(updatedProjects);
    });
  };

  useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem('projects'));
    if (localProjects && localProjects.length > 0) {
      setProjects(localProjects);
    } else {
      getProjectsFromFirestore();
    }
  }, []);

  return (
    <main className="place-content-center">
      <Background />
      <GradientHeading text={"UnityXperience"} />
      <h1 className="text-center font-bold">UI / UX / Web Development</h1>
      <p className="text-center mt-8 text-lg">Always exploring the needs</p>
      <p className="text-center mb-20 text-lg">creating innovative ideas and unite the solutions</p>
      <IntroSection />
      <BrandCards /> 
      <GradientHeading text={"Skills"} />
      <Skills />
      <GradientHeading text={"UnityXperience Projects"} />
      <Scroller projects={projects} />
      <GradientHeading text={"UnityXperience Team"} />
      <TeamSection />
    </main>
  );
}