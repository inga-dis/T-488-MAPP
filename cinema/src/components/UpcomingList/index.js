import React from "react";
import { useSelector } from "react-redux";
import { View } from 'react-native';
import { selectAllUpcoming } from '../../store/upcomingSlice'


import MovieButton from '../MovieButton'

const UpcomingList = () => {
    const upcomingMovies = useSelector(state => selectAllUpcoming(state))
    
    return (
        <View>
            {upcomingMovies.map((movie) => (
                <MovieButton movie={movie} cinema={false} key={movie.id}></MovieButton>
            ))}
        </View>
    )
}

export default UpcomingList
