import { ProjectCard } from "../ProjectCard/ProjectCard"

export function ProjectCards({ filteredData }) {
  return (
    <section className="projects-container place-content-center">
      {filteredData.length > 0 ? (
        filteredData.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.thumbnail}
            title={project.title}
            description={project.review}
            tags={project.tags}
          />
        ))
      ) : (
        <p>Whoops, no results match ._.</p>
      )}
    </section>
  );
}
