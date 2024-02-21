

export const Button = (props) => {
  const {title,type,onClick} = props
  return (

    <button className="button" type={type} 
    onClick={()=> {onClick(type)}}
    
    >{title}</button>

  )
}
