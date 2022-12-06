import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../view/Cinema/styles'

const Cinema = () => {
    const { navigate } = useNavigation()
    return (
        <View>
                <Text style={styles.cinemaName}>Sambíó</Text>
                <Text style={styles.cinemaInfo}>Þetta er geggjað bíóhús sem hefur verið starfandi síðan 1960. 
                Heimilisfang, heimasíða og sími.</Text>
                <Text style={styles.movieList}>Myndir í sýningu:</Text>
                <TouchableOpacity onPress ={() => navigate('Movie')}>
                    <Text style={styles.movieList}>She said{'\n'}Praise the Devil{'\n'}Strange World</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Cinema
