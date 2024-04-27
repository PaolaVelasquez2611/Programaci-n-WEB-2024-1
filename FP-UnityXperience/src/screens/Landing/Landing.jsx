import { ProjectCard } from "../../components/ProjectCard/ProjectCard"
import { MemberCard } from "../../components/MemberCard/MemberCard"
import { BrandCard } from "../../components/BrandCard/BrandCard"

export const Landing = () => {
  return (
    <>
    <div>
      <BrandCard/>
      <ProjectCard/>
      <MemberCard/>
    </div>
    </>
  )
}
