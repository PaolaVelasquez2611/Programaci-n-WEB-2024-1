import './Input.css'

export const Input = ({text, placeholder, name, type, value, onChange, multiple}) => {
  return (
    <div className='input-div'>
    <p>{text}</p>
    <input 
      className="input" 
      placeholder={placeholder}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      multiple={multiple}
      />
    </div>
  )
}