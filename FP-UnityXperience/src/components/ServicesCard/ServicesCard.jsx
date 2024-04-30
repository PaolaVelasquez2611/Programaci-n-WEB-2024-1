import './ServicesCard.css'

export const ServicesCard = (props) => {
    const {img, title, description, services} = props

  return (
    <article className="service-card">
        <img src={img} className="service-img"/>
        <p className="service-title">{title}</p>
        <p className="service-description">{description}</p>
        <div className="services">
          <ul>
          {services.map((service) => {
              return <li key={crypto.randomUUID()}>{service}</li>
            })}
          </ul>
        </div>
    </article>
  )
}