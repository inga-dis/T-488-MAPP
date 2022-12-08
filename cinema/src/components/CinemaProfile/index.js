import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../view/Cinema/styles'

const Cinema = ({cinema}) => {
    const { navigate } = useNavigation()

    const description = () => {
        if (cinema.description == null) {
            
            return "Bíóhúsið " + cinema.name
        } else {
            return cinema.description.replace(/(<br>)/g, '').replace(/(<b>)/g, '')

        }
    }

    return (
        <View>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
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
