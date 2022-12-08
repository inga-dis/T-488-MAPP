import React from "react";
import { useSelector } from "react-redux";
import {View } from 'react-native';
import { selectAllCinemas } from '../../store/cinemasSlice'


import CinemaButton from '../CinemaButton'

const CinemasList = () => {

    const cinemas = useSelector((state) => selectAllCinemas(state))
    
    return (
        <View>
            {cinemas.map((cinema) => (
                <CinemaButton cinema={cinema} />
            ))}
        </View>
    )
}

export default CinemasList