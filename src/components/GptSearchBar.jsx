import { useSelector } from "react-redux";
import lang from "../utils/langaugeConstant";
const GptSearchBar = () => {
  const langKey = useSelector((store)=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input className="p-4 m-4 col-span-9 bg-white text-black placeholder-gray-500 placeholder:text-lg rounded-lg" type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className="col-span-3 py-2 px-4 my-4 mx-4 bg-red-700 text-white rounded-lg cursor-pointer text-lg">{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar