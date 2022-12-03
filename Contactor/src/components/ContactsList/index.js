import React from 'react'
import { View, Text } from 'react-native'
import Search from '../Search'


// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <View>
            <Search contacts={contacts}/>
            <ImportContacts/>
        </View>
    )
}
export default ContactsList
