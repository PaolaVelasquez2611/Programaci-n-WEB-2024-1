import './ProjectDetails.css'
import { LabelTag } from '../LabelTag/LabelTag'

export const ProjectDetails = ({thumbnail, title, description, preview1, preview2, preview3}) => {
  return (
    <article className="project-details">
        <section className="general-info">
            <div className="thumbnail-div">
                <img src={thumbnail}/>
            </div>
            <div>
                <p className="section-text">{title}</p>
                <div className="info-tags">
                    <div className="two-tags">
                        <LabelTag 
                        icon="./src/assets/icons/calendar.png"
                        text="2023 - 11 - 30"/>
                        <LabelTag 
                        icon="./src/assets/icons/tag.png"
                        text="UI"/>
                    </div>
                    <LabelTag 
                    icon="./src/assets/icons/tools.png"
                    text="Illustrator, ProCreate, Photoshop"/>
                    <LabelTag 
                    icon="./src/assets/icons/owners.png"
                    text="Juan Esteban Ramirez Perdomo & Ana Sofia Henao "/>
                </div>
            </div>
        </section>
        <section className="description-project">
            <p>{description}</p>
        </section>
        <p className="section-text">Preview</p>
        <section className="previews-project">
            <img src={preview1} className="big-preview"/>
            <div className="mini-previews">
                <img src={preview2}/>
                <img src={preview3}/>
            </div>
        </section>
    </article>
  )
}