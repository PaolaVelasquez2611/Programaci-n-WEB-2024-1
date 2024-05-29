import './Button.css'
import { Link } from 'react-router-dom'

export const Button = ({ text, onClick, className, path}) => {
  return (
    <Link to = {path}>
      <button 
        onClick={onClick} 
        className={className} 
        id='btn'>{text}
      </button>
    </Link>
  )
}