import GptSearchBar from "./GptSearchBar"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import { BG_URL } from "../utils/constants"
const GptSearchPage = () => {
  return (<>
     <div className="absolute -z-10">
        <img
          className="h-screen md:w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div>
    <GptSearchBar/>
    <GptMoviesSuggestions/>
    
  </div></>)
}

export default GptSearchPage