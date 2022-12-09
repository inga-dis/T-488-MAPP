import React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import { A } from '@expo/html-elements';

const ShowTime = ({ showtime }) => {
    return (
        <View>
            {showtime.map((schedule, i) => 
                <View key={i}>
                    <Text style={styles.movieShowtimeText}>{schedule.time}</Text>
                    <Text><A href={schedule.purchase_url} style={styles.movieShowtimeText}> Kaupa Miða </A></Text>
                </View>
            )}
        </View>
    )
}

export default ShowTime