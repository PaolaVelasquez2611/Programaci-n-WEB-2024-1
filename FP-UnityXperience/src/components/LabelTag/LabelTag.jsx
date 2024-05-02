import './LabelTag.css'

export const LabelTag = ({icon, text}) => {
  return (
    <span>
        <img src={icon}/>
        <p>{text}</p>
    </span>
  )
}