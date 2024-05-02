import './ProjectDetails.css'
import { LabelTag } from '../LabelTag/LabelTag'

export const ProjectDetails = ({thumbnail, title, description, preview1, preview2, preview3}) => {
  return (
    <article>
        <section>
            <div>
                <img src={thumbnail}/>
            </div>
            <div>
                <p>{title}</p>
                <div>
                    <div>
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
        <section>
            <p>{description}</p>
        </section>
        <p>Preview</p>
        <section>
            <img src={preview1}/>
            <div>
                <img src={preview2}/>
                <img src={preview3}/>
            </div>
        </section>
    </article>
  )
}