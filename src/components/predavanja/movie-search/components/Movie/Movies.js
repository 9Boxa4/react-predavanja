import React from 'react'
import Movie from './Movie'

const Movies = ({movies}) => {
  return (
    <div className='movie-wrapper'>
        {movies.map(movie => (
        // <div> 
        //     {movie.Title} 
        // <img src={movie.Poster} alt="" />
        // </div>
        <Movie key={movie.imdbID} movie={movie}/>
        ))}
    </div>
  )
}

export default Movies