import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ContactsList from '../../components/ContactsList'
import Add from '../../components/Add'
import * as fileService from '../../services/fileservice'
import Search from '../../components/Search'
import defaultStyles from '../../styles/styles'
import { lightPurple } from '../../styles/colors'

const Contacts = () => {
    // All contacts within the application directory
    const [contacts, setContacts] = useState([])
    // Controls if add modal is open
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    // Load all contacts in the application directory
    useEffect(() => {
        (async () => {
            const contact = await fileService.getAllContacts()
            setContacts(contact)
        })()
    }, [])

    return (
        <View style={defaultStyles.container}>
            <Search contacts={contacts}/>
            <ContactsList contacts={contacts} />
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={() => setIsAddModalOpen(true)}>
                <Text>Add contact</Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>
            </Add>
        </View>
    )
}
export default Contacts
