
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
// import CinemaProfile from '../../components/CinemaProfile'
import { purple } from '../../styles/colors'
import defaultstyles from '../Main/styles'

const Cinema = () => {

    return (
        <View style={defaultstyles.container}>
            <View style={styles.container}>
                <Text>Hér kemur cinema</Text>
                <Text>Sambíó + About</Text>
                <Text>Og allt sem er í bíó í Sambíó</Text>
                <Text>Klikka svo á bíómynd og fer inní MovieScreen</Text>
                {/* <CinemaProfile/> */}
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