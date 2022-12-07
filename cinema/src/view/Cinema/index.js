import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import CinemaProfile from '../../components/CinemaProfile'
import styles from './styles'

const Cinema = () => {

    return (
        <ScrollView style={styles.background}>
            <View>
                <CinemaProfile/>
            </View>
        </ScrollView>
    )
}
export default Cinema