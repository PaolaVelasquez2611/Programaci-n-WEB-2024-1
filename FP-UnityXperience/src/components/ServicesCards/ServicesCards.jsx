import { services } from "../../data/services"
import { ServicesCard } from "../ServicesCard/ServicesCard"
import {useState, useEffect} from "react"

export const ServicesCards = () => {

  const [isCellphoneScreen, setIsDesktopScreen] = useState(window.innerWidth < 770);

    useEffect(() => {
      function handleResize() {
        setIsDesktopScreen(window.innerWidth < 770);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <>   
    {isCellphoneScreen
    ?(<section className="services-container place-content-center">
        {services.map(({ id, img, title, description, service }) => (
              <ServicesCard
              key = {id}
              img = {img}
              title = {title}
              description = {description}
              services={service}
              />
          ))}
      </section>)
      :(<section className="services-container place-content-center">
          {services.map(({ id, imgDesk, title, description, service }) => (
                <ServicesCard
                key = {id}
                img = {imgDesk}
                title = {title}
                description = {description}
                services={service}
                />
            ))}
        </section>)} 
    </>
  )
}