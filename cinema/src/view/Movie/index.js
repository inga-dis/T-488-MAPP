import React from 'react'
import { Text, ScrollView} from 'react-native'
import MovieScreen from '../../components/MovieProfile'
import ShowTimes from '../../components/ShowTimes'
import styles from './styles'

const Movie = ({ route }) => {
    const {movie, cinema} = route.params

    return (
        <ScrollView>
            <Text style={styles.cinema}>{cinema.name}</Text> 
            <MovieScreen movie={movie}/>
            <ShowTimes movie={movie} CId={cinema.id}/>
        </ScrollView>
    )
}
export default Movie
