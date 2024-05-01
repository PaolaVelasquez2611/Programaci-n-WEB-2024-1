import './Button.css'

export const Button = (props) => {
  const {text, onclick, className} = props

  const handleOnClick = () => {
    onclick()
  }

  return (
    <button onClick={handleOnClick} className={className}>{text}</button>
  )
}
