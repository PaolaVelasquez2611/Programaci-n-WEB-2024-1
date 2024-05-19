export const SocialButton = ({ imgUrl, name }) => {
  return (
    <div className="flex mt-5 w-full justify-evenly [&>*]:cursor-pointer">
        <div className="flex flex-col items-center ">
            <button>
                <img 
                src={imgUrl}
                alt={name} />
            </button>
        </div>
    </div>
  )
}
