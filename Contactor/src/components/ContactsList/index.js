import React from 'react'
import { View, Text } from 'react-native'
import Search from '../Search'

import { lightPurple, lightBlue } from '../../styles/colors' 


// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <View>
            <Search contacts={contacts}/>
            <Text>Test</Text>
        </View>
    )
}
export default ContactsList
