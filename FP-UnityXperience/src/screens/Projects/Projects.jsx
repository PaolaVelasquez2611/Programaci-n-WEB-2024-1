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


export const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [project, setProjects] = useState([]);

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

