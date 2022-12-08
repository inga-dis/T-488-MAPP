import React from "react";
import { useSelector } from "react-redux";
import { View } from 'react-native';
import { selectAllMovies } from '../../store/moviesSlice'


import MovieButton from '../MovieButton'

const MoviesList = ({cinema}) => {
    const CId = cinema.id

    const getMoviesInCinema = () => {
        const movies = useSelector(state => selectAllMovies(state))
        const moviesInCinema = []
        for (let i = 0; i < movies.length; i++) {
            for (let j = 0; j < movies[i].showtimes.length; j++) {
                if (movies[i].showtimes[j].cinema.id === CId) {
                    moviesInCinema.push(movies[i])
                }
            }
        }
        return moviesInCinema
    } 

    const moviesInCinema = getMoviesInCinema()
    return (
        <View>
            {moviesInCinema.map((movie) => (
                <MovieButton movie={movie} cinema={cinema} key={movie.id}></MovieButton>
            ))}
        </View>
    )
}

export default MoviesList
