import React from 'react'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import { View, Text } from 'react-native'
import { A } from '@expo/html-elements';

const ShowTime = ({ showtime }) => {
    return (
        <View>
            {showtime.map((schedule, i) => 
                <View key={i} style={[defaultStyles.showtime, defaultStyles.button]}>
                    <Text style={defaultStyles.showtimeText}>{schedule.time}</Text>
                    <Text><A href={schedule.purchase_url} style={defaultStyles.showtimeTextBuy}> Kaupa Miða </A></Text>
                </View>
            )}
        </View>
    )
}

export default ShowTime