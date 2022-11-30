import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import ContactProfile from '../../components/ContactProfile'

import { lightPurple, lightBlue } from '../../styles/colors'

const Contact = ({ route }) => {
    const conta = route.params

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 34 }}>{conta.name} </Text>
                <ContactProfile/>
            </View>
        </ScrollView>
    )
}
export default Contact

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightPurple,
        paddingBottom: 300
    }

})
