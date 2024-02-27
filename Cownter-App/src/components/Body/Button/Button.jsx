
export const Button = ({ title, type, onClick, id}) => {
  const handleClick = () => {
    onClick(type)
  }

  return (
    <button className="button"
      type={type}
      id = {id}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
