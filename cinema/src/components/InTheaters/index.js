import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, selectAllMovies, selectAllMoviesInCinema } from '../../store/moviesSlice'
import { lightBlue } from '../../styles/colors';

const Test = () => {
    const dispatch = useDispatch()
    const { movies, loading } = useSelector((state) => state.movies)
    const [loadingData, setLoadingData] = useState(true);

  
    useEffect(() => {
        dispatch(getMovies())
        setLoadingData(false)
    }, [])

    

    return (
        <View>
            {
                loadingData
                    ?
                    <Spinner />
                    :
                    <>
                    {movies.map((movie) => (
                        <TouchableOpacity >
                            <Text style={{fontSize: 20, color: lightBlue }}> {movie.title} </Text>
                        </TouchableOpacity>
                    ))}
                    {/* {moviesInCinema.map((movie) => (
                        <Text> {movie.title} </Text>
                    ))} */}
                    </>
            }

        </View>
    )
};
export default Test;