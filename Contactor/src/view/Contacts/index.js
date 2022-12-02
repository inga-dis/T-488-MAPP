import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ContactsList from '../../components/ContactsList'
import Add from '../../components/Add'
import * as fileService from '../../services/fileservice'
import defaultStyles from '../../styles/styles'
import { lightPurple } from '../../styles/colors'
import DefaultProfile from '../../resources/default_profile.png'

import * as ContactsService from 'expo-contacts'

const Contacts = () => {
    // All contacts within the application directory
    const [contacts, setContacts] = useState([])
    // Controls if add modal is open
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    // Function to import contacts from device into user device.
    const ImportContacts = async () => {
        await ContactsService.requestPermissionsAsync()
        if ((await ContactsService.getPermissionsAsync()).granted) {
            const contactsFromUser = await ContactsService.getContactsAsync({
                fields: [
                    ContactsService.IMAGE,
                    ContactsService.PHONE_NUMBERS
                ]
            })
            if (contactsFromUser.total > 0) {
                const contactsLIST = contactsFromUser.data
                contactsLIST.map(async (contact) => {
                    if (contact.imageAvailable) {
                        const contactInfo = {
                            name: contact.firstName + ' ' + contact.lastName,
                            phoneNumber: contact.phoneNumbers[0].number,
                            image: contact.image.uri
                        }
                        return await fileService.addContact(contactInfo)
                    } else {
                        const contactInfo = {
                            name: contact.firstName + ' ' + contact.lastName,
                            phoneNumber: contact.phoneNumbers[0].number,
                            image: 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png'
                        }
                        return await fileService.addContact(contactInfo)
                    }
                })
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
        <ScrollView style={defaultStyles.container}>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={() => setIsAddModalOpen(true)}>
                <Text>Add contact</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={() => ImportContacts()}>
                <Text>Import </Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>
            </Add>
            <ContactsList contacts={contacts} />
        </ScrollView>

    )
}

export default Contacts
