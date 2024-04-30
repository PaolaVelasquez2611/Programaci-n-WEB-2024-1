import './ServicesCard.css'

export const ServicesCard = (props) => {
    const {img, title, description} = props

  return (
    <article className="service-card">
        <img src={img} className="service-img"/>
        <p className="service-title">{title}</p>
        <p className="service-description">{description}</p>
        <div className="services">
          <ul>
            <li>Design Audit</li>
            <li>Interactive Design Prototyping</li>
            <li>UI / UX Design</li>
            <li>Graphic Design</li>
            <li>Product Design</li>
            <li>Brand Style Guide</li>
          </ul>
        </div>
    </article>
  )
}