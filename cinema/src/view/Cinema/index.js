import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CinemaProfile from '../../components/CinemaProfile'
import { purple } from '../../styles/colors'

const Cinema = () => {

    return (
        <View>
            <View style={styles.container}>
                <CinemaProfile/>
            </View>
        </View>
    )
}
export default Cinema

const styles = StyleSheet.create({
    container: {
        backgroundColor: purple,
        paddingBottom: 300
    }

})