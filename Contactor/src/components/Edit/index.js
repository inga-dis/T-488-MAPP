import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, Alert, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as fileService from '../../services/fileservice'
import defaultStyles from '../../styles/styles'
import Modal from '../Modal'
import * as imageService from '../../services/imageService'

const Edit = ({
    isOpen,
    closeModal,
    contact
}) => {
    const [image, setImage] = useState([])
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

    const takePhoto = async () => {
        setNewValue(await imageService.takePhoto())
    }

    const selectFromCameraRoll = async () => {
        setNewValue(await imageService.selectFromCameraRoll())
    }

    const inputFields = () => {
        if (selectedEditField === 'image') {
            return (
                <View>
                    <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]}
                        onPress={() => { selectFromCameraRoll() }}>
                        <Text style={styles.option}>Upload image</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress ={() => takePhoto()}>
                        <Text style={styles.option}>Capture image</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TextInput
                    placeholder="New value"
                    onChangeText={setNewValue}
                    style={defaultStyles.input}
                />
            )
        }
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
            <inputFields></inputFields>
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
