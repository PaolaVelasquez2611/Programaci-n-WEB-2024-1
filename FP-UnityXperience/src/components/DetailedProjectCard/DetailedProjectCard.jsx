import './DetailedProjectCard.css'

export const DetailedProjectCard = (props) => {
    const {img, title, tags, description, owner} = props

  return (
    <article className="project-information">
        <div className="blur-background"></div>
        <div className="project-content">
            <section className="project-images">
                <div className="images-left">
                    <img src={img}/>
                    <img src={img}/>
                </div>
                <div className="images-center">
                    <img src={img}/>
                </div>
                <div className="images-right">
                    <img src={img}/>
                </div>
            </section>
            <p className="project-info-title">{title}</p>
            <div className="project-tags">
                <p>{tags}</p>
                <p>{tags}</p>
                <p>{tags}</p>
            </div>
            <p className="project-info">{description}</p>
            <section className="owners-info">
                <p>{owner}</p>
                <div>
                    <button className="view-project">
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/>
                    </button>
                    <button className="view-project">
                        <img src="https://cdn-icons-png.flaticon.com/512/152/152816.png"/>
                    </button>
                </div>
            </section>
        </div>
    </article>
  )
}