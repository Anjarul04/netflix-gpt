import GptSearchBar from "./GptSearchBar"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import { BG_URL } from "../utils/constants"
const GptSearchPage = () => {
  return (<div>
     <div className="absolute -z-10">
        <img
          className="object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
    <GptSearchBar/>
    <GptMoviesSuggestions/>
  </div>)
}

export default GptSearchPage