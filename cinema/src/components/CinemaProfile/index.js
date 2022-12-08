import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import defaultStyles from '../../styles/styles'

const Cinema = ({cinema}) => {
    const { navigate } = useNavigation()
    const description = cinema.description.replace(/(<br>)/g, '').replace(/(<b>)/g, '')

    return (
        <View>
            <Text style={styles.cinemaName}>{cinema.name}</Text>
            <View style={styles.cinemaInfo}>
                <Text style={styles.cinemaInfoText}>{description}</Text>
                <Text style={styles.cinemaInfoText}>{cinema['address\t']}, {cinema.city} </Text>
                <Text style={styles.cinemaInfoText}>{cinema.phone}</Text>
                <Text style={styles.cinemaInfoText}>{cinema.website}</Text>
            </View>
        </View>
    )
}
export default Cinema
