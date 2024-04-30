import { services } from "../../data/services"
import { ServicesCard } from "../ServicesCard/ServicesCard"

export const ServicesCards = () => {

  return (
    <section className="services-container place-content-center">
        {services.map(({ id, img, title, description, service }) => (
              <ServicesCard
              key = {id}
              img = {img}
              title = {title}
              description = {description}
              services={service}
              />
          ))}
    </section>
  )
}