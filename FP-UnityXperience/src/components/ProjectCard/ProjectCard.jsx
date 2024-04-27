import './ProjectCard.css'
import { Button } from '../Button/Button'

export const ProjectCard = (props) => {
    const {img, title, description, tags} = props

  return (
    <article className='project-card'>
        <img src={img} className='project-thumbnail'/>
        <p className='project-title'>{title}</p>
        <p className='project-description'>{description}</p>
        <div className='tags'>
            <p>{tags}</p>
            <p>{tags}</p>
            <p>{tags}</p>
        </div>
        <Button className="more-information" text="See more"/>
    </article>
  )
}