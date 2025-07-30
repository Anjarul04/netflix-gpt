import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className='w-40 md:w-48 pr-4 transform transition-transform duration-300 hover:scale-110'>
      <img
        className='rounded-lg shadow-lg'
        src={IMG_CDN_URL + posterPath}
        alt="movie-poster"
      />
    </div>
  )
}

export default MovieCard
