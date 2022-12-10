import React from 'react'
import { useSelector } from 'react-redux'
import { View } from 'react-native'
import { selectAllMovies } from '../../store/moviesSlice'
import defaultStyles from '../../styles/styles'
import MovieButton from '../MovieButton'

const MoviesList = ({ cinema }) => {
    const CId = cinema.id

    // Function to get all movies in chosen cinema
    const getMoviesInCinema = () => {
        const movies = useSelector(state => selectAllMovies(state))
        const moviesInCinema = []
        // iterate over movies
        for (let i = 0; i < movies.length; i++) {
            // check if there are showtimes
            if (movies[i].showtimes) {
                // iterate over showtimes
                for (let j = 0; j < movies[i].showtimes.length; j++) {
                    // check if cinema.id is eqaul to chosen cinema (most movies are in this format)
                    if (movies[i].showtimes[j].cinema.id === CId) {
                        moviesInCinema.push(movies[i])
                    }
                    // check if the cinema is equal to chosen cinema. Sum movies have showtimes in this format:
                    // showtimes: [ { {cinema: 'someid', schedule....}, }
                    // Thus a second check needed.
                    if (movies[i].showtimes[j].cinema == CId) {
                        moviesInCinema.push(movies[i])
                    }
                }
            }
        }
        return moviesInCinema
    }
    const moviesInCinema = getMoviesInCinema()
    moviesInCinema.sort((a, b) => (
        a.title.toUpperCase() > b.title.toUpperCase())
        ? 1
        : ((b.title.toUpperCase() > a.title.toUpperCase()) ? -1 : 0))

    return (
        <View style={defaultStyles.bottom}>
            {moviesInCinema.map((movie) => (
                <MovieButton movie={movie} cinema={cinema} key={movie.id}></MovieButton>
            ))}
        </View>
    )
}

export default MoviesList
