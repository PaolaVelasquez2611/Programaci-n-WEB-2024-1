import './Projects.css'
import { useState, useEffect } from 'react'
import { projects } from '../../data/projects' /* the data should be deleted cause now it's on firebase */
import { ProjectCards, SearchBar } from "../../components"
import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc, query, onSnapshot} from "firebase/firestore";
import { app } from '../../services/firebase-config';

const db = getFirestore(app);

const projectsRef = collection(db, "projects")
console.log(projectsRef)

const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach((doc)=>{
  console.log(doc.id)
})

await setDoc(doc(projectsRef, "Bego"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Bego.png",
  title:"Bego",
  description: "This marketing project focuses on the Bego guacamole brand and serves as an academic exercise",
  tags:[
      "Illustrator", "ProCreate", "Photoshop"
  ],
  authors:[
    "9uNya4WGOUdj6Oya8SFWHdVlMvr1"
  ],
  work_link: "https://www.behance.net/gallery/170177403/BEGO-by-cartama"
})
await setDoc(doc(projectsRef, "Qbano"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Qbano.png",
  title:"QBANO",
  description: "This is an academic project where we generate a redesign for a fast food brand",
  tags:[
      "Illustrator", "ProCreate", "Photoshop"
  ],
  authors:[
    "9uNya4WGOUdj6Oya8SFWHdVlMvr1"
  ],
  work_link: "https://www.behance.net/gallery/152326691/Rebranding-Sandwich-Qbano"
})
await setDoc(doc(projectsRef, "Trip_tunes"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Tunes.png",
  title:"Trip Tunes ",
  description: "An app dedicated to enhancing travel experiences and creating lasting memories.",
  tags:[
      "Illustrator", "ProCreate", "Photoshop"
  ],
  authors:[
    "9uNya4WGOUdj6Oya8SFWHdVlMvr1"
  ],
  work_link: "https://www.behance.net/gallery/185992681/Trip-Tunes"
})
await setDoc(doc(projectsRef, "Zone"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Zone.png",
  title:"Zone",
  description: "An app designed to elevate the profile of sports schools in Cali.",
  tags:[
      "Figma", "Maze", "Photoshop"
  ],
  authors:[
    "VyVl7IURtOU6JNXYToUKBS7RVQs1"
  ],
  work_link: "https://www.behance.net/gallery/181969817/Universidad-ICESI-Percepcion"
})
await setDoc(doc(projectsRef, "Nba_Play"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Nba.png",
  title:"Nba Play",
  description: "An OOH app concept designed to boost audience engagement at NBA arenas",
  tags:[
      "Figma", "JavaScript", "Arduino"
  ],
  authors:[
    "VyVl7IURtOU6JNXYToUKBS7RVQs1"
  ],
  work_link: "https://www.behance.net/gallery/181969817/Universidad-ICESI-Percepcion"
})
await setDoc(doc(projectsRef, "Salud_total"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Salud.png",
  title:"Salud Total Case",
  description: "Conducting a UX study on the Salud Total website to identify areas for improvement and enhance experience.",
  tags:[
      "Figma", "After Effects", "Photoshop"
  ],
  authors:[
    "VyVl7IURtOU6JNXYToUKBS7RVQs1"
  ],
  work_link: "https://www.behance.net/gallery/181969817/Universidad-ICESI-Percepcion"
})
await setDoc(doc(projectsRef, "Mingle"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Mingle.png",
  title:"Mingle",
  description: "A UX/UI project developed to facilitate focus group interactions and solutions",
  tags:[
      "Figma", "ProCreate"
  ],
  authors:[
    "A6fGehCKpWhuiS2RVjKWrWn2qlh2", "zrtqenmWUhdR22rzVXZmkJLhGiX2"
  ],
  work_link: "https://www.behance.net/gallery/185845045/Mingle-User-experience-User-interface"
})
await setDoc(doc(projectsRef, "HAMILTON"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Hamilton.png",
  title:"HAMILTON",
  description: "A UX/UI project developed to address the need for a wearable fitness solution",
  tags:[
      "Figma", "ProCreate"
  ],
  authors:[
    "A6fGehCKpWhuiS2RVjKWrWn2qlh2", "zrtqenmWUhdR22rzVXZmkJLhGiX2", "VyVl7IURtOU6JNXYToUKBS7RVQs1"
  ],
  work_link: "https://www.behance.net/gallery/192626081/HAMILTON-Contact-lenses-concept-technology"
})
await setDoc(doc(projectsRef, "Bop_it_OOH"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Bopit.png",
  title:"Bop it OOH",
  description: "An interactive OOH experience inspired by Hasbro's 'Bop It' toy.",
  tags:[
      "Figma", "JavaScript"
  ],
  authors:[
    "A6fGehCKpWhuiS2RVjKWrWn2qlh2", "zrtqenmWUhdR22rzVXZmkJLhGiX2"
  ],
  work_link: "https://www.behance.net/gallery/186045609/Bop-it-Arcade-OOH-experience"
})
await setDoc(doc(projectsRef, "Lux"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Lux.png",
  title:"Lux",
  description: "Creating a vision for an exclusive shopping center",
  tags:[
      "Figma", "After Effects", "Photoshop"
  ],
  authors:[
    "zrtqenmWUhdR22rzVXZmkJLhGiX2"
  ],
  work_link: "https://www.behance.net/gallery/172756245/Lux-VR-Experience"
})
await setDoc(doc(projectsRef, "Echo"),{
  id:crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Echo.png",
  title:"Echo",
  description: "Empowering individuals to adopt sustainable lifestyles.",
  tags:[
      "Figma", "Illustrator", "Photoshop"
  ],
  authors:[
    "A6fGehCKpWhuiS2RVjKWrWn2qlh2", "zrtqenmWUhdR22rzVXZmkJLhGiX2", "9uNya4WGOUdj6Oya8SFWHdVlMvr1"
  ],
  work_link: "https://www.behance.net/gallery/184388655/ECHO-User-experience-User-interface"
})
await setDoc(doc(projectsRef, "Descendencia"),{
  id: crypto.randomUUID(),
  thumbnail:"../src/assets/thumbnail/Descendencia.png",
  title:"Descendencia",
  description: "Illustrating Colombian Pacific culture with creativity and flair ",
  tags:[
      "Figma", "ProCreate", "Photoshop"
  ],
  authors:[
    "A6fGehCKpWhuiS2RVjKWrWn2qlh2", "zrtqenmWUhdR22rzVXZmkJLhGiX2"
  ],
  work_link: "https://www.behance.net/gallery/155322703/Proyecto-Fanzine-Descendencia-Pacifico"
})


export const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [project, setProjects] = useState([]);

/*   useEffect(() => {
    setProjects(projects)
  }, []); */

  const getProjects  = async () =>{
    const q = query(collection(db, "projects"));
    const updatedProjects = []
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            updatedProjects.push(doc.data());
        });
        console.log(updatedProjects)
        setProjects(updatedProjects)
    });
  }

  useEffect(() => {
    getProjects();
  }, [])
  
  const filteredProjects = project.filter(project =>
    (project.title && project.title.toLowerCase().includes(searchTerm.toLowerCase().trim())) 
    ||(project.description && project.description.toLowerCase().toString() === searchTerm.toLowerCase().trim()) 
    ||(project.tags[0] && project.tags[0].includes(searchTerm.trim())) 
    ||(project.tags[1] && project.tags[1].includes(searchTerm.trim())) 
    ||(project.tags[2] && project.tags[2].includes(searchTerm.trim()))
    );

    return (
      <>
        <section className="filter-projects">
          <SearchBar type="text" placeholder="Search a project" value={searchTerm} onChange={(search) => setSearchTerm(search.target.value)}/>
        </section>
  
        <h1 className="title-screen">UnityXperience Projects </h1>
        
        <ProjectCards filteredData={filteredProjects}/>
      </>
    )
  }

