import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, selectAllMovies, selectAllMoviesInCinema } from '../../redux/moviesSlice'
import Spinner from '../../components/Spinner';

const Test = () => {
    const dispatch = useDispatch()
    const { movies, loading } = useSelector((state) => state.movies);

    // const { cinemas, loading } = useSelector((state) => state.cinemas)
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
                    <TouchableOpacity ><Text> Testing síða </Text></TouchableOpacity>
                    <Text> Testing síða </Text>
                    {movies.map((movie) => (
                        <Text> {movie.title} {movie.year} </Text>
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