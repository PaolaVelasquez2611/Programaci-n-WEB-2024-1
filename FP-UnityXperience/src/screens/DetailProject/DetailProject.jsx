import './DetailProject.css'
import { Footer, Header, ProjectDetails} from "../../components"

export const DetailProject = () => {
  return (
    <>
    <Header/>
    <h1 className="title-screen">UniteXperience Project</h1>
    <ProjectDetails 
    thumbnail="../src/assets/mockups/thumbnail-project.png"
    title = "Trip Tunes"
    description="Trip Tunes is a service that creates collages of your travel, party, or favorite moments photos, so you can share the images, creations, and a playlist that accompanies those moments with your friends and family or on social media without wasting time creating it yourself."
    preview1 = "../src/assets/mockups/preview-1.png"
    preview2 = "../src/assets/mockups/preview-2.png"
    preview3 = "../src/assets/mockups/preview-3.png"/>
    <span className="combined-text">
        <p>See</p>
        <p className="blue-text">More</p> 
    </span>
    <section>
        <button>
            <img src="../src/assets/linkedin.png"/>
        </button>
        <button>
            <img src="../src/assets/behance.png"/>
        </button>
    </section>
    <Footer/>
    </>
  )
}