import './ProjectCard.css';
import { Button } from '../Button/Button';

export const ProjectCard = ({ img, title, description, tags }) => {
  return (
    <div className='flip-card'>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} className='project-thumbnail' alt="Project Thumbnail"/>
        </div>
        <div className="flip-card-back">
          <div className="project-details-card">
            <p className='project-title'>{title}</p>
            <p className='project-description'>{description}</p>
            <div className='tags'>
              {tags.map((tag) => (
                <p key={crypto.randomUUID()}>{tag}</p>
              ))}
            </div>
            <Button className="more-information" text="See more"/>
          </div>
        </div>
      </div>
    </div>
  );
};
