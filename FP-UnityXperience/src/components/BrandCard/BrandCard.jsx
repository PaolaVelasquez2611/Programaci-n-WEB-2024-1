import './BrandCard.css'
import { Button } from '../Button/Button'

export const BrandCard = (props) => {
    const {icon, title, description} = props

  return (
    <article>
        <img src={icon}/>
        <p>{title}</p>
        <p>{description}</p>
        <Button/>
    </article>
  )
}