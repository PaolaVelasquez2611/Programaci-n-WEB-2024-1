import './LabelTag.css'

export const LabelTag = ({icon, text}) => {
  return (
    <span className="label-tag">
        <img src={icon}/>
        <p>{text}</p>
    </span>
  )
}