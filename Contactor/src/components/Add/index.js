import React, { useState } from 'react'
import Modal from '../Modal'
import { TouchableOpacity, TextInput, Text, Alert } from 'react-native'
import * as fileService from '../../services/fileservice'

import defaultStyles from '../../styles/styles'

const Add = ({
    isOpen,
    closeModal
}) => {
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const handleSubmit = async () => {
        // If user has not set name or phoneNumber alert him to input name or value.
        if ((!name) || (!phoneNumber)) {
            inputNeededAlert()
        } else {
            await fileService.addContact({ name, phoneNumber, image })
            setName('')
            setImage('')
            setPhoneNumber('')
        }
    }
    const inputNeededAlert = () => {
        Alert.alert(
            'Input needed!',
            'To add contact you must input name and phone number',
            [
                {
                    text: 'Close'
                }
            ]
        )
    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={'Add Contact'}>
            <TextInput
                placeholder="Contact name"
                value={name}
                onChangeText={setName}
                style={defaultStyles.input}
            />
            <TextInput
                placeholder="Contact phone number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                style={defaultStyles.input}
            />
            <TextInput
                placeholder="Contact image"
                value={image}
                onChangeText={setImage}
                style={defaultStyles.input}
            />
            <TouchableOpacity
                activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]}
                onPress={() => {
                    handleSubmit()
                }}>
                <Text style={defaultStyles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default Add
