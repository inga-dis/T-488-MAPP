import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContactButton from '../ContactButton'
import Search from '../Search'
import { lightPurple, lightBlue } from '../../styles/colors'
import * as fileService from '../../services/fileservice'
import ImportContacts from '../ImportContacts'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    console.log(contacts)
    return (
        <View>
            {contacts.map((contact) => (
                <ContactButton contact={contact} key={contact.key}></ContactButton>
            ))}
            <ImportContacts/>
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
