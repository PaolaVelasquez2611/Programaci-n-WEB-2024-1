import './Button.css'

export const Button = ({ text, onclick, className }) => {

  const handleOnClick = () => {
    onclick()
  }

  return (
    <button onClick={handleOnClick} className={className} id='btn'>{text}</button>
  )
}
