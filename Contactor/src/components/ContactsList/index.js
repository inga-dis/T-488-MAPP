import React from 'react'
import { View } from 'react-native'
import ContactButton from '../ContactButton'
import Search from '../Search'
import { lightPurple, lightBlue } from '../../styles/colors'
import * as fileService from '../../services/fileservice'
import ImportContacts from '../ImportContacts'

// Hér koma allir contacts:

const ContactsList = ({ contacts }) => {
    return (
        <View>
            {contacts.map((contact) => (
                <ContactButton contact={contact} key={contact.key}></ContactButton>
            ))}
            <Search contacts={contacts}/>
            <ImportContacts/>
        </View>
    )
}
export default ContactsList

