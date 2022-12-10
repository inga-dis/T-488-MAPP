import React from 'react'
import { ScrollView } from 'react-native'
import CinemaProfile from '../../components/CinemaProfile'
import defaultStyles from '../../styles/styles'
import MoviesList from '../../components/MoviesList'

const Cinema = ({ route }) => {
    const cinema = route.params

    return (
        <ScrollView style={defaultStyles.container}>
            <CinemaProfile cinema={cinema}/>
            <MoviesList cinema={cinema}></MoviesList>
        </ScrollView>
    )
}
export default Cinema