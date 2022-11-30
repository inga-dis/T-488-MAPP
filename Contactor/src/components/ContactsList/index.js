import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactButton from '../ContactButton'
import { lightPurple, lightBlue } from '../../styles/colors'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <ContactButton style={styles.container}/>

    )
}
export default ContactsList

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
        backgroundColor: lightPurple
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },
    text: {
        marginVertical: 20,
        backgroundColor: lightBlue,
        paddingHorizontal: 100,
        paddingVertical: 20
    }
})
