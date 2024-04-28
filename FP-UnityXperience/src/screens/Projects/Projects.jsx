import { Footer, Header, ProjectCard, DetailedProjectCard } from "../../components"
import { projects } from "../../data/projects"

export const Projects = () => {
  return (
    <>
      <Header/>
      <section className="projects-container">
        {projects.map((project) => (
              <ProjectCard
              key = {project.id}
              img = {project.thumbnail}
              title = {project.title}
              description = {project.review}
              tags={project.tags}
              />
          ))}

        <DetailedProjectCard
        img="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714176000&semt=sph"
        title="Love Cats 2"
        tags="ProCreate"
        description="This is a marketing project for the guacamole brand Bego, this was an academic exercise"
        owner="Juan Esteban Ramirez Perdomo & Ana Sofia Henao"/>
      </section>
      <Footer/>
    </>
  )
}
