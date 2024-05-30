import './ProjectDetails.css'
import { LabelTag } from '../LabelTag/LabelTag'

export const ProjectDetails = ({thumbnail, title, description, link, tag, authors, preview1, preview2, preview3}) => {
  return (
    <article className="project-details">
        <section className="general-info">
            <div className="thumbnail-div">
                <img src={thumbnail}/>
            </div>
            <div>
                <strong> <p className="section-text">{title}</p> </strong>
                <div className="info-tags">
                    <a href={link}>
                        <LabelTag
                        icon="../src/assets/icons/projecturl.png"
                        text="Project Link"
                        />
                    </a>
                    <LabelTag
                        icon="../src/assets/icons/tag.png"
                        text={tag.join(', ')} 
                    />
                    <LabelTag
                        icon="../src/assets/icons/owners.png"
                        text={authors.join(', ')}
                    />
                </div>
            </div>
        </section>
        <section className="description-project">
            <p>{description}</p>
        </section>
        <strong> <p className="section-text2">Preview</p> </strong>
        <section className="previews-project">
            <img 
                src={preview1} 
                className="big-preview"/>
            <div className="mini-previews">
                <img src={preview2}/>
                <img src={preview3}/>
            </div>
        </section>
    </article>
  )
}