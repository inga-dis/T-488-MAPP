import React from 'react'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import { View, Text } from 'react-native'
import { A } from '@expo/html-elements'

const ShowTime = ({ showtime }) => {
    return (
        <View>
            {showtime.map((schedule, i) => 
                <View key={i} style={[styles.showtime, defaultStyles.button]}>
                    <Text style={[styles.showtimeText, , defaultStyles.font]}>{schedule.time}</Text>
                    <Text style={[styles.showtimeTextBuy, , defaultStyles.boldFont]}><A href={schedule.purchase_url}> Kaupa Miða </A></Text>
                </View>
            )}
        </View>
    )
}

export default ShowTime