import React from 'react'
import { View, Text } from 'react-native'
import Search from '../Search'

import { lightPurple, lightBlue } from '../../styles/colors' 


import ImportContacts from '../ImportContacts'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <View>
            <Search contacts={contacts}/>
            <Text>Test</Text>
            <ImportContacts/>
        </View>
    )
}
export default ContactsList
