import React from "react";
import { useSelector } from "react-redux";
import {View } from 'react-native';
import { selectAllCinemas } from '../../store/cinemasSlice'
import defaultStyles from '../../styles/styles'
import CinemaButton from '../CinemaButton'

const CinemasList = () => {
    const cinemas = useSelector((state) => selectAllCinemas(state))
    const sortCinemas = (cinemasToSort) => {
        return cinemasToSort.sort((a,b) => (
            a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : ((b.name.toUpperCase() > a.name.toUpperCase()) ? -1 : 0))
    }
    
    return (
        <View  style={defaultStyles.bottom}>
            {sortCinemas(cinemas.slice()).map((cinema) => (
                <CinemaButton cinema={cinema} key={cinema.id} />
            ))}
        </View>
    )
}

export default CinemasList