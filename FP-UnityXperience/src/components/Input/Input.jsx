import './Input.css'

export const Input = ({text,placeholder, type}) => {
  return (
    <div className='input-div'>
    <p>{text}</p>
    <input type={type} className="input" placeholder={placeholder}></input>
    </div>
  )
}