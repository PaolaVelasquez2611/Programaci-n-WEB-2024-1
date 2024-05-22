import './Button.css'

export const Button = ({ text, onclick, className }) => {

  const handleOnClick = () => {
    console.log("funciono")
  }

  return (
    <button onClick={handleOnClick} className={className} id='btn'>{text}</button>
  )
}
