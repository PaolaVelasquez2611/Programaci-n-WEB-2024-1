import './MemberCard.css'

export const MemberCard = (props) => {
    const {img, name, role, social} = props

  return (
    <article>
        <div>
            <img src={img}/>
        </div>
        <p>{name}</p>
        <p>{role}</p>
        <div>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png"/>
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/>
            </button>
            <button>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152816.png"/>
            </button>
        </div>
    </article>
  )
}