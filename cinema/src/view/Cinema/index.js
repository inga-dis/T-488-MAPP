import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import CinemaProfile from '../../components/CinemaProfile'
// import styles from './styles'
import styles from '../../view/Cinema/styles'

import MoviesList from '../../components/MoviesList'

const Cinema = ({ route }) => {

    const cinema = route.params;

    return (
        <ScrollView style={styles.background}>
            <CinemaProfile cinema={cinema}/>
            <MoviesList cinema={cinema}></MoviesList>

        </ScrollView>
    )
}
export default Cinema