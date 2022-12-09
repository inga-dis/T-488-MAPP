import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { View } from 'react-native';
import { selectAllUpcoming } from '../../store/upcomingSlice'


import MovieButton from '../MovieButton'

const UpcomingList = () => {
    const upcomingMovies = useSelector(state => selectAllUpcoming(state))

    const sortUpcoming = (upcomingToSort) => {
        return upcomingToSort.sort((a,b) => (new Date(a['release-dateIS']) < new Date(b['release-dateIS'])) ? 1 : -1)

    }
    const [sorted, setSorted] = useState(sortUpcoming(upcomingMovies.slice()))

    return (
        <View>
            {sorted.map((movie) => (
                <MovieButton movie={movie} cinema={false} key={movie.id}></MovieButton>
            ))}
        </View>
    )
}

export default UpcomingList
