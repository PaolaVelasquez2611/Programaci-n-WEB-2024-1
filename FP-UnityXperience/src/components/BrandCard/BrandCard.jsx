import './BrandCard.css'
import { Button } from '../Button/Button'

export const BrandCard = ({ icon, title, description }) => {
  return (
    <article className="brand-card">
        <img src={icon}/>
        <p className="brand-title">{title}</p>
        <p className="brand-description">{description}</p>
        <Button className="more-info-brand" path="/aboutus" text="See more"/>
    </article> 
  )
}