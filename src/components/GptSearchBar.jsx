import { useSelector } from "react-redux";
import lang from "../utils/langaugeConstant";
import { useRef } from "react";
import { DEEPSEEK_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    try {
      const gptQuery = `Act as a movie recommendation system and suggest 5 movies for: ${searchText.current.value}. 
      Only give me names, comma separated. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

      const response = await fetch(
        "https://api.deepseek.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${DEEPSEEK_KEY}`,
          },

          body: JSON.stringify({
            model: "deepseek-chat",
            messages: [{ role: "user", content: gptQuery }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("DeepSeek Result:", data.choices[0].message.content);
    } catch (error) {
      console.error("Error calling DeepSeek:", error);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center mb-[480px]">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 bg-white text-black placeholder-gray-500 md:placeholder:text-lg rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 my-4 mx-4 bg-red-700 text-white rounded-lg cursor-pointer md:text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
