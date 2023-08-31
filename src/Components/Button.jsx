
const Button = ({label,iconUrl}) => {
  return (
    <button className=" flex justify-center items-center gap-2 px-7 py-4 border font-montserrat rounded-full text-white text-lg leading-none bg-coral-red border-coral-red">
      {label}
      <img src={iconUrl} alt="arrowRight" className="ml-2 rounded-full w-5 h-5 "/>
    </button>
  )
}

export default Button
