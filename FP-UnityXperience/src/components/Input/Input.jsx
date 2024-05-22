import './Input.css'

export const Input = ({text,placeholder}) => {
  return (
    <div className='input-div'>
    <p>{text}</p>
    <input className="input" placeholder={placeholder}></input>
    </div>
  )
}