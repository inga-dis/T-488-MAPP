import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import ContactProfile from '../../components/ContactProfile'

import { lightPurple, lightBlue } from '../../styles/colors'

const Contact = ({ contact }) => {
    // const conta = contact.params

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontSize: 34 }}>hæ</Text>
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
