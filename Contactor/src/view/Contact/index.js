import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import ContactProfile from '../../components/ContactProfile'

import { lightPurple, lightBlue } from '../../styles/colors'

const Contact = ({ route }) => {
    const conta = route.params
    console.log("conta", conta.phoneNumber)

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* IMAGE VANTAR */}
                <Text style={{ fontSize: 34 }}>{conta.name}  </Text>
                <Text style={{ fontSize: 34 }}>{conta.phoneNumber} </Text>
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
