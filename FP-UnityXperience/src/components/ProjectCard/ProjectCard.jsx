import './ProjectCard.css'
import { Button } from '../Button/Button'

export const ProjectCard = (props) => {
    const {img, title, description, tags} = props

  return (
    <article>
        <img src={img}/>
        <p>{title}</p>
        <p>{description}</p>
        <div>
            <p>{tags}</p>
            <p>{tags}</p>
            <p>{tags}</p>
        </div>
        <Button/>
    </article>
  )
}