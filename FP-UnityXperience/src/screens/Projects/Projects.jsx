import './Projects.css'
import { useState, useEffect } from 'react'
import { projects } from '../../data/projects'
import { Footer, Header, ProjectCards, SearchBar } from "../../components"

export const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [project, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects)
  }, []);

  
  const filteredProject = project.filter(project =>
    (project.title && project.title.includes(searchTerm.trim())) 
    ||(project.review && project.review.toString() === searchTerm.trim()) 
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
        
        <ProjectCards filteredData={filteredProject}/>
      </>
    )
  }

