import 'react-multi-carousel/lib/styles.css';

import React, { useState } from "react";
import { TeamSlider } from "../TeamSlider/TeamSlider";


export const TeamSection = () => {
        const items = [
          {
            src:"../src/assets/Profile/JuanRamirez.png",
            name: "Juan Ramirez",
            job:"Front-end Developer",
            tools:"JS | React | Firebase | Chistes"
          },
          {
            src:"../src/assets/Profile/JuanRamirez.png",
            name: "Paola Velasquez",
            job:"UI/UX Designer",
            tools:"JS | React | Firebase | Chistes"
          },
          {
            src:"../src/assets/Profile/JuanRamirez.png",
            name: "Andres Neira",
            job:"Front-end Developer",
            tools:"JS | React | Firebase | TS"
          },
          {
            src:"../src/assets/Profile/JuanRamirez.png",
            name: "Santiago Perez",
            job:"Front-end Developer",
            tools:"JS | React | Firebase | APU"
          },
        ]

  return (
    /* todo: map this when we have the team information */
/*     <section 
    className="flex flex-row w-3/4 m-auto "> */
    <>
{/*     <div className="flex flex-row place-content-center">
      <div className="flex flex-row overflow-auto scrollbar-thin">
            <PartherCard />
            <PartherCard />
            <PartherCard />

    </div>
  </div> */}
      <TeamSlider />
    </>
  )
}
