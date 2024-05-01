import { services } from "../../data/services"
import { BrandCard } from "../index"

export const BrandCards = () => {
  return (
    <div className="flex flex-row place-content-center">
        {services.map(({ id, icon, title, summary}) => (
            <BrandCard 
                key={id}
                icon={icon}
                title={title}
                description={summary}/>
        ))}
    </div>
  )
}
