import './MemberCard.css'

export const MemberCard = ({ img, name, role }) => {
  return (
    <article className="member-card">
        <div className="member-img">
            <img src={img}/>
        </div>
        <p className="member-name">{name}</p>
        <p className="member-role">{role}</p>
        <div className="member-social">
            <button className="social-logo">
                <img src="/assets/linkedin.png"/>
            </button>
            <button className="social-logo">
                <img src="/assets/github.png"/>
            </button>
            <button className="social-logo">
                <img src="/assets/instagram.png"/>
            </button>
            <button className="social-logo2">
                <img src="/assets/behance.png"/>
            </button>
        </div>
    </article>
  )
}