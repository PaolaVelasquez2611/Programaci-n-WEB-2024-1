import './Input.css'

export const Input = ({text, placeholder, name, type, value, onChange, multiple, uid}) => {
  return (
    <div className='input-div'>
    <p>{text}</p>
    <input 
      id={uid}
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