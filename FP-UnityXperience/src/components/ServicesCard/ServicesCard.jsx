import './ServicesCard.css'
import {useState, useEffect} from "react"

export const ServicesCard = (props) => {
    const {img, title, description, services} = props

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
    ? (<article className="service-card">
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
        </article>)
    :(<article className="service-card">
        <p className="service-title">{title}</p>
        <section className="service-info">
          <div className="information">
            <p className="service-description">{description}</p>
            <div className="services">
              <ul>
                {services.map((service) => {
                    return <li key={crypto.randomUUID()}>{service}</li>
                  })}
              </ul>
            </div>
          </div>
          <img src={img} className="service-img"/>
        </section>
      </article>)}
    </>
  )
}