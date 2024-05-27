import { ProjectCard } from "../ProjectCard/ProjectCard"

export function ProjectCards({ filteredData }) {
  return (
    <section className="projects-container place-content-center">
      {filteredData.length > 0 ? (
        filteredData.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
          />
        ))
      ) : (
        <p>Whoops, no results match ._.</p>
      )}
    </section>
  );
}
