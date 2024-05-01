import './ServicesCard.css'
import {useState, useEffect} from "react"

export const ServicesCard = ({ img, title, description, services }) => {
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
          <span className='sticky top-0'><strong><p className="service-title">{title}</p></strong></span>
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
        <span className='sticky top-0'><strong><p className="service-title">{title}</p></strong></span>
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