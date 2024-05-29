import { useEffect, useState } from "react";
import { Footer, Header, Skills, GradientHeading, BrandCard, BrandCards, IntroSection, TeamSection } from "../../components";
import { Background } from "../../components/Background/Background";
import { Scroller } from "../../components/Scroller/Scroller";
import { useGetProjects } from '../../hooks/useGetProjects';

export const Landing = () => {
  const { projects } = useGetProjects();

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
};