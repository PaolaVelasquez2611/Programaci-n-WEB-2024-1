/* import { useHistory } from "react-router-dom"; */

export const SocialButton = ({ imgUrl, name, link }) => {

/*     const history = useHistory();

    const handleClick = () => {
        history.push('/nueva-ruta');
      }; */
    
  return (
    <div className="flex mt-5 w-full justify-evenly [&>*]:cursor-pointer">
        <div className="flex flex-col items-center ">
            <button /* onClick={handleClick} */>
                <img 
                src={imgUrl}
                alt={name} />
            </button>
        </div>
    </div>
  )
}
