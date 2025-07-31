import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-4 bg-black/80">
      <h1 className="text-3xl py-4 text-white z-100">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-4">
        
        <div className="flex">
          {movies?.map(movie=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
          </div>
      </div>
    </div>
  );
};

export default MovieList;
