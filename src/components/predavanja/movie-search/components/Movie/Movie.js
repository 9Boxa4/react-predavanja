import React from 'react'

const Movie = ({movie}) => {
  return (
    <div>
        <h2>{movie.Title}</h2>
        <img widht="200" src={movie.Poster} alt={`The movie title: ${movie.Title}`} />
    </div>
  )
}

export default Movie