import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactButton from '../ContactButton'
import Search from '../Search'
import { lightPurple, lightBlue } from '../../styles/colors'
import * as fileService from '../../services/fileservice'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {

    return (
        /* <Search />*/
        <View>
            {contacts.map((contactFile) => (
                <ContactButton contactFile={contactFile.name}></ContactButton>
            ))}
        </View>
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
