import { projects } from "../../data/projects"
import { ProjectCard } from "../ProjectCard/ProjectCard"

export const ProjectCards = () => {

  return (
    <section className="projects-container place-content-center">
        {projects.map(({ id, thumbnail, title, review, tags }) => (
              <ProjectCard
              key = {id}
              img = {thumbnail}
              title = {title}
              description = {review}
              tags={tags}
              />
          ))}
    </section>
  )
}
