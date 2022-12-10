import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import defaultStyles from '../../styles/styles'

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
            <View style={[styles.header, defaultStyles.headerX]}>
                <Text style={[styles.cinemaName, defaultStyles.font]}>{cinema.name}</Text>
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
