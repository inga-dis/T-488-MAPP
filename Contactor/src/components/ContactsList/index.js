import React from 'react'
import { View } from 'react-native'
import ContactButton from '../ContactButton'
import Search from '../Search'

const ContactsList = ({ contacts }) => {
    console.log(contacts)
    return (
        /* <Search />*/
        <View>
            {contacts.map((contact) => (
                <ContactButton contact={contact} key={contact.key}></ContactButton>
            ))}
        </View>
    )
}
export default ContactsList

