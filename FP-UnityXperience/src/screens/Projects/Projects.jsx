import './Projects.css'
import { useState, useEffect } from 'react'
import { projects } from '../../data/projects'
import { Footer, Header, DetailedProjectCard, ProjectCards } from "../../components"

export const Projects = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [project, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projects)
  }, []);

  
  const filteredProject = project.filter(project =>
    (project.title && project.title.includes(searchTerm.trim())) 
    ||(project.review && project.review.toString() === searchTerm.trim()) 
    ||(project.tags && project.tags.includes(searchTerm.trim()))
    );

    console.log('searchTerm:', searchTerm);
    console.log('filteredData:', filteredProject);

  return (
    <>
      <Header/>

      <section className="filter-projects">
        <input type="text" 
        placeholder="Search a project" 
        value={searchTerm}
        onChange={(search) => setSearchTerm(search.target.value)}/>
        <button>
          <img src="../src/assets/filter.png"/>
        </button>
      </section>

      <h1 className="title-screen">UnityXperience Projects </h1>
      
        <ProjectCards filteredData={filteredProject}/>

        <DetailedProjectCard
        img="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714176000&semt=sph"
        title="Love Cats 2"
        tags="ProCreate"
        description="This is a marketing project for the guacamole brand Bego, this was an academic exercise"
        owner="Juan Esteban Ramirez Perdomo & Ana Sofia Henao"/>

      <Footer/>
    </>
  )
}
