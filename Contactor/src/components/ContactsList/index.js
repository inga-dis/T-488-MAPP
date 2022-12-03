import React from 'react'
import { View } from 'react-native'
import Search from '../Search'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <View>
            <Search contacts={contacts}/>
        </View>
    )
}
export default ContactsList
