import './DetailedProjectCard.css'

export const DetailedProjectCard = (props) => {
    const {img, title, tags, description, owner} = props

  return (
    <article>
        <section>
            <div>
                <img src={img}/>
                <img src={img}/>
            </div>
            <div>
                <img src={img}/>
            </div>
            <div>
                <img src={img}/>
            </div>
        </section>
        <p>{title}</p>
        <div>
            <p>{tags}</p>
            <p>{tags}</p>
            <p>{tags}</p>
        </div>
        <p>{description}</p>
        <section>
            <p>{owner}</p>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152816.png"/>
            </div>
        </section>
    </article>
  )
}