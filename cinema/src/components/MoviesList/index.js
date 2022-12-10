import React from "react";
import { useSelector } from "react-redux";
import { View } from 'react-native';
import { selectAllMovies } from '../../store/moviesSlice'
import defaultStyles from '../../styles/styles'


import MovieButton from '../MovieButton'

const MoviesList = ({cinema}) => {
    const CId = cinema.id

    // Setja komment
    const getMoviesInCinema = () => {
        const movies = useSelector(state => selectAllMovies(state))
        const moviesInCinema = []
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].showtimes) {
                for (let j = 0; j < movies[i].showtimes.length; j++) {
                    if (movies[i].showtimes[j].cinema.id === CId) {
                        moviesInCinema.push(movies[i])
                    }
                    if (movies[i].showtimes[j].cinema == CId) {
                        moviesInCinema.push(movies[i])
                    }
                }
            }
        }
        return moviesInCinema
    } 

    const moviesInCinema = getMoviesInCinema()
    moviesInCinema.sort((a,b) => (
        a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : ((b.title.toUpperCase() > a.title.toUpperCase()) ? -1 : 0))

    return (
        <View style={defaultStyles.bottom}>
            {moviesInCinema.map((movie) => (
                <MovieButton movie={movie} cinema={cinema} key={movie.id}></MovieButton>
            ))}
        </View>
    )
}

export default MoviesList
