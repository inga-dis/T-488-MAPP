import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Cinema = ({cinema}) => {

    const description = () => {
        if (cinema.description == null) {
            
            return "Bíóhúsið " + cinema.name
        } else {
            return cinema.description.replace(/(<br>)/g, '').replace(/(<b>)/g, '')
        }
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.cinemaName}>{cinema.name}</Text>
            </View>
            <View style={styles.cinemaInfo}>
                <Text style={styles.cinemaInfoText}>{description()}</Text>
                <Text style={styles.cinemaInfoText}>{cinema['address\t']}, {cinema.city} </Text>
                <Text style={styles.cinemaInfoText}>{cinema.phone}</Text>
                <Text style={styles.cinemaInfoText}>{cinema.website}</Text>
            </View>
        </View>
    )
}
export default Cinema
