import './MemberCard.css'

export const MemberCard = (props) => {
    const {img, name, role, social} = props

  return (
    <article className="member-card">
        <div className="member-img">
            <img src={img}/>
        </div>
        <p className="member-name">{name}</p>
        <p className="member-role">{role}</p>
        <div className="member-social">
            <button className="social-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/>
            </button>
            <button className="social-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            </button>
            <button className="social-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
            </button>
            <button className="social-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/152/152816.png"/>
            </button>
        </div>
    </article>
  )
}