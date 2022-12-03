import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as fileService from '../../services/fileservice'
import defaultStyles from '../../styles/styles'
import Modal from '../Modal'

const Edit = ({
    isOpen,
    closeModal,
    contact
}) => {
    const [newValue, setNewValue] = useState()
    const [selectedEditField, setSelectedEditField] = useState('Name')

    const handleSubmit = async () => {
        if (!newValue) {
            inputNeededAlert()
        } else {
            if (selectedEditField === 'Name') {
                await fileService.editContactName(contact, newValue)
            }
            if (selectedEditField === 'Photo') {
                await fileService.editContactImage(contact, newValue)
            }
            if (selectedEditField === 'phoneNumber') {
                await fileService.editContactPhone(contact, newValue)
            }
            setNewValue('')
        }
    }
    const inputNeededAlert = () => {
        Alert.alert(
            'Input needed!',
            'To edit contact you must insert new value',
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
            title={'Edit Contact'}>
            <Picker
                selectedValue={selectedEditField}
                onValueChange={(itemValue) =>
                    setSelectedEditField(itemValue)
                }>
                <Picker.Item label="Name" value="Name"/>
                <Picker.Item label="Phone Number" value="phoneNumber"/>
                <Picker.Item label="Photo" value="Photo"/>
            </Picker>
            <TextInput
                placeholder="New value"
                onChangeText={setNewValue}
                style={defaultStyles.input}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={[defaultStyles.button, defaultStyles.shadow]}
                onPress={() => {
                    handleSubmit()
                }}>
                <Text style={defaultStyles.ButtonText}>Submit</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default Edit
