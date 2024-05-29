import './ProjectCard.css';
import { Button } from '../Button/Button';

export const ProjectCard = ({ project }) => {
  return (
    <div className='flip-card'>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={project.thumbnail} className='project-thumbnail' alt="Project Thumbnail"/>
        </div>
        <div className="flip-card-back">
          <div className="project-details-card">
            <p className='project-title'>{project.title}</p>
            <p className='project-description'>{project.description}</p>
            <div className='tags'>
              {project.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
              <Button className="more-information" path={`/projects/${project.title}`}text="See more" />
          </div>
        </div>
      </div>
    </div>
  );
};
