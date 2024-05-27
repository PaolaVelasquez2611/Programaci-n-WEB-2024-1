import './DetailProject.css'
import { Footer, Header, ProjectDetails} from "../../components"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const DetailProject = () => {

  const { projectTitle } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const localProjects = JSON.parse(localStorage.getItem('projects'));
    const selectedProject = localProjects.find(proj => proj.title === projectTitle);
    setProject(selectedProject);
  }, [projectTitle]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
    <main>
    <h1 className="title-screen">UniteXperience Project</h1>
    <ProjectDetails 
    thumbnail={project.thumbnail}
    title={project.title}
    description={project.description}
    link={project.work_link}
    tag={project.tags}
    authors={project.authors}
    preview1 = {project.images[0]}
    preview2 = {project.images[1]}
    preview3 = {project.images[2]}/>
    </main>
    </>
  )
}