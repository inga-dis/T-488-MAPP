import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ContactsList from '../../components/ContactsList'
import Search from '../../components/Search'
import Add from '../../components/Add'
import * as fileService from '../../services/fileservice'

import { lightPurple } from '../../styles/colors'

const Contacts = () => {
    // All contacts within the application directory
    const [contacts, setContacts] = useState([])
    // Controls if add modal is open
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    // Load all contacts in the application directory
    useEffect(() => {
        (async () => {
            const contacts = await fileService.getAllContacts()
            setContacts(contacts)
        })()
    }, [])

    return (
        <View style={styles.container}>
            <Search />
            <ContactsList contacts={contacts} />
            <Text>ADD</Text>
            <TouchableOpacity style={{ color: 'pink' }} onPress={() => setIsAddModalOpen(true)}>
                <Text>Open modal</Text>
            </TouchableOpacity>
            <Add isOpen={isAddModalOpen}
                closeModal={() => setIsAddModalOpen(false)}>
            </Add>
        </View>
    )
}
export default Contacts

const styles = StyleSheet.create({
    container: {
        backgroundColor: lightPurple,
        paddingBottom: 300
    }

})
