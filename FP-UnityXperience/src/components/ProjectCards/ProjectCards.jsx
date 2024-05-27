import { ProjectCard } from "../ProjectCard/ProjectCard"

export function ProjectCards({ filteredData }) {
  return (
    <section className="projects-container place-content-center">
      {filteredData.length > 0 ? (
        filteredData.map((project) => (
          <ProjectCard
            project={project}
          />
        ))
      ) : (
        <p>Whoops, no results match ._.</p>
      )}
    </section>
  );
}
