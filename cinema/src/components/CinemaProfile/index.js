import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import defaultStyles from '../../styles/styles'

const Cinema = ({ cinema }) => {
    const description = () => {
        if (cinema.description == null) {
            return 'Bíóhúsið ' + cinema.name
        } else {
            return cinema.description.replace(/(<br>)/g, '').replace(/(<b>)/g, '')
        }
    }

    return (
        <View>
            <View style={styles.header}>
                <Text style={[defaultStyles.cinemaName, defaultStyles.boldFont]}>{cinema.name}</Text>
            </View>
            <View style={styles.cinemaInfo}>
                <Text style={[styles.cinemaInfoText, defaultStyles.font]}>{description()}</Text>
                <Text style={[styles.cinemaInfoText, defaultStyles.font]}>{cinema['address\t']}, {cinema.city} </Text>
                <Text style={[styles.cinemaInfoText, defaultStyles.font]}>{cinema.phone}</Text>
                <Text style={[styles.cinemaInfoText, defaultStyles.font]}>{cinema.website}</Text>
            </View>
        </View>
    )
}
export default Cinema
