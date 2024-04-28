import './BrandCard.css'
import { Button } from '../Button/Button'

export const BrandCard = (props) => {
    const {icon, title, description} = props

  return (
    <article className="brand-card">
        <img src={icon}/>
        <p className="brand-title">{title}</p>
        <p className="brand-description">{description}</p>
        <Button className="more-info-brand" text="See more"/>
    </article>
  )
}