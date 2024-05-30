
import { valuesData } from "../../data/valuesData"
import { BrandCard } from "../index"
import './BrandCards.css'

export const BrandCards = ( { text1, text2 }) => {
  return (
    <>
    <span className="titles-Values">
    <h2><span className="title-1">{text1}</span></h2>
    <h2><span className="title-2">{text2}</span></h2>
  </span>
    <div className="group-brandcards">
        {valuesData.map(({ id, icon, title, description}) => (
            <BrandCard 
                key={id}
                icon={icon}
                title={title}
                description={description}/>
        ))}
    </div>
    </>
  )
}
  <section className="card-seccion flex justify-center items-center h-screen">
  </section>
