import './Button.css'

export const Button = (props) => {
  const {text, onclick, className} = props

  return (
    <button className={className}>{text}</button>
  )
}
