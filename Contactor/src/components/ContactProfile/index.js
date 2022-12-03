import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import call from 'react-native-phone-call'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import Edit from '../Edit'

const ContactProfile = ({ contact }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const triggerCall = () => {
        const args = {
            number: contact.contact.phoneNumber,
            prompt: false
        }
        call(args).catch(console.error)
    }

    return (
        <View style={styles.container}>
            {/* <Image style={styles.img}
                // style={{width: 300, height: 300}}
                resizeMode="cover"
                source={{uri: contact.contact.image}} /> */}
            <Text style={styles.name}>{contact.contact.name}</Text>
            <Text style={styles.number}>{contact.contact.phoneNumber}</Text>
            <Image style={styles.img} resizeMode="cover" source={{ uri: contact.contact.image }}></Image>
            <TouchableOpacity activeOpacity={0.7} style={[styles.buttonCall, styles.shadow]} onPress={triggerCall}>
                <Text>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[styles.button, styles.shadow]} onPress={() => setIsEditModalOpen(true)}>

                <Text>Edit Contact</Text>
            </TouchableOpacity>
            <Edit isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)} contact={contact.contact} >
            </Edit>
        </View>
    )
}

export default ContactProfile
