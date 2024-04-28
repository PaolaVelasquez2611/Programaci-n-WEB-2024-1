import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import { DetailedProjectCard } from "../../components/DetailedProjectCard/DetailedProjectCard"

export const Projects = () => {
  return (
    <div>
      <ProjectCard 
      img="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714176000&semt=sph"
      title="Love Cats"
      description="Trip Tunes is a service that creates collages of your travel, party, or favorite moments photos, so you can share the images, creations, and a playlist that accompanies those moments with your friends and family or on social media without wasting time creating it yourself."
      tags="ProCreate"/>
      
      <DetailedProjectCard
      img="https://img.freepik.com/vector-gratis/ilustracion-icono-vector-dibujos-animados-lindo-gato-sentado-concepto-icono-naturaleza-animal-aislado-premium-vector-estilo-dibujos-animados-plana_138676-4148.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1714176000&semt=sph"
      title="Love Cats"
      tags="ProCreate"
      description="This is a marketing project for the guacamole brand Bego, this was an academic exercise"
      owner="Juan Esteban Ramirez Perdomo & Ana Sofia Henao"/>
    </div>
  )
}
