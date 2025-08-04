

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="absolute mb-[200px] md:mb-0 inset-0 bg-gradient-to-r from-black via-black/0 to-transparent flex flex-col justify-center md:px-16 text-white">
      <div className="max-w-2xl">
        <h1 className="text-2xl p-3  md:text-6xl font-extrabold drop-shadow-lg">{title}</h1>
        <p className="hidden md:inline-block mt-4 text-lg text-gray-200 leading-relaxed">{overview}</p>
        <div className="flex gap-4 mt-6">
          {/* Play Button */}
          <button className=" cursor-pointer flex items-center bg-white/70 text-black font-semibold md:text-xl md:px-6 md:py-3 ml-3 px-3 py-1 md:mt-0 mt-[-20px] md:rounded-lg rounded-[5px] hover:bg-gray-200 transition-all duration-300">
            <span className="md:text-3xl md:pr-2">▶</span> Play
          </button>
          {/* Info Button */}
          <button className="hidden md:inline-block cursor-pointer flex items-center bg-gray-700/60 text-white font-semibold text-xl px-6 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300">
            <span className="text-3xl pr-2">ⓘ</span> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieTitle;

