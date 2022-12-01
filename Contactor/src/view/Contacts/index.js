import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ContactsList from '../../components/ContactsList'
import Add from '../../components/Add'
import * as fileService from '../../services/fileservice'
import Search from '../../components/Search'
import defaultStyles from '../../styles/styles'
import { lightPurple } from '../../styles/colors'

import * as ContactsService from 'expo-contacts'

const Contacts = () => {
    // All contacts within the application directory
    const [contacts, setContacts] = useState([])
    // Controls if add modal is open
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const ImportContacts = async () => {
        await ContactsService.requestPermissionsAsync()
        if (ContactsService.getPermissionsAsync()) {
            const { data } = await ContactsService.getContactsAsync({
                fields: [ContactsService.PHONE_NUMBERS]
            })
            if (data.length > 0) {
                const contactsFromUser = data
                contactsFromUser.map((contact) => fileService.addContact({ contactInfo: { name: contact.firstName + ' ' + contact.lastName, phoneNumber: contactsFromUser[0].phoneNumbers[0].number, image: '' } }))
            }
        }
    }

    // Load all contacts in the application directory
    useEffect(() => {
        (async () => {
            const contact = await fileService.getAllContacts()
            setContacts(contact)
        })()
    }, [])

    return (
        <View style={defaultStyles.container}>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={() => setIsAddModalOpen(true)}>
                <Text>Add contact</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={() => ImportContacts()}>
                <Text>Import </Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>
            </Add>
            <ScrollView>
                <ContactsList contacts={contacts} />
            </ScrollView>

        </View>
    )
}
export default Contacts
