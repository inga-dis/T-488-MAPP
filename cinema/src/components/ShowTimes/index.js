import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles'
import ShowTime from '../ShowTime'

const ShowTimes = ({movie, CId}) => {
    const showtimes = movie.showtimes.filter((showtime) => showtime.cinema.id === CId) 

    return (
        <View style={styles.showtime}>
            <Text style={styles.movieShowtime}>Sýningar tímar</Text>
            {showtimes.map((showtime, i) =>
                <ShowTime showtime={showtime.schedule} key={i}></ShowTime>
            )}
            
        </View> 
    )
}
export default ShowTimes
