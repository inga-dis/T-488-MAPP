import React from 'react'
import { View } from 'react-native'
import Search from '../Search'
import { lightPurple, lightBlue } from '../../styles/colors'
import ImportContacts from '../ImportContacts'

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
