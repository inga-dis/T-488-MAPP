import React from 'react'
import { Text, ScrollView} from 'react-native'
import MovieScreen from '../../components/MovieScreen'
import ShowTimes from '../../components/ShowTimes'
import styles from './styles'

const Movie = () => (
    // Þetta á að vera annarstaðar, í components, MovieScreen, ShowTimes...
    <ScrollView>
        
        <Text style={styles.cinema}>Sambíó</Text> 
        <MovieScreen/>
        <ShowTimes/>
        {/* Allar upplýsingar um myndina: */}
    </ScrollView>
);  

export default Movie
