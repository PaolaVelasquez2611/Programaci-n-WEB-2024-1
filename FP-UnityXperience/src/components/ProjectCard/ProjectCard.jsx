import './ProjectCard.css'
import { Button } from '../Button/Button'

export const ProjectCard = ({ img, title, description, tags }) => {
  return (
    <article className='project-card'>
        <img src={img} className='project-thumbnail'/>
        <p className='project-title'>{title}</p>
        <p className='project-description'>{description}</p>
        <div className='tags'>
          {tags.map((tag) => (
              <p key={crypto.randomUUID()}>{tag}</p>
            ))}
        </div>
        <Button className="more-information" text="See more"/>
    </article>
  )
}