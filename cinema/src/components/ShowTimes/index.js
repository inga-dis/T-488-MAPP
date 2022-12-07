import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles'

const ShowTimes = () => (
    <View style={styles.showtime}> 
        <Text style={styles.movieShowtime}>Sýningar tímar</Text>
        <View style={styles.movieShowtimeView}>
            <Text style={styles.movieShowtimeText}>6.Desember 19:00</Text>
            <Text style={styles.movieShowtimeText}>Kaupa miða</Text> 
        </View>
        <View style={styles.movieShowtimeView}>
            <Text style={styles.movieShowtimeText}>6.Desember 22:00</Text>
            <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
        </View>
        <View style={styles.movieShowtimeView}>
            <Text style={styles.movieShowtimeText}>7.Desember 19:00</Text>
            <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
        </View>
        <View style={styles.movieShowtimeView}>
            <Text style={styles.movieShowtimeText}>9.Desember 21:00</Text>
            <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
        </View>
        <View style={styles.movieShowtimeView}>
            <Text style={styles.movieShowtimeText}>10.Desember 18:00</Text>
            <Text style={styles.movieShowtimeText}>Kaupa miða</Text>
        </View>
    </View> 
)

export default ShowTimes
