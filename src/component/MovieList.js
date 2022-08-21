import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({ movies }) => {
    return (
        <div className="container">
            <div className="row ml-5" style={{ display: 'flex', justifyContent:'space-between' , flexWrap:'wrap' ,  marginLeft: '450px'}}>
                {
                    movies.map((movie) => <MovieCard movie={movie} />)
                }
            </div>
        </div>
    )
}

export default MovieList
