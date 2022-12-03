import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import call from 'react-native-phone-call'
import * as imageService from '../../services/imageService'
import styles from './styles'
import defaultStyles from '../../styles/styles'
import { Picker } from '@react-native-picker/picker'
import Edit from '../Edit'

const ContactProfile = ({ contact }) => {
    const [images, setImages] = useState([])
    const [newValue, setNewValue] = useState()
    const [selectedEditField, setSelectedEditField] = useState()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)


    const addImage = async image => {
        setLoadingImages(true)

        const newImage = await fileService.addImage(image)

        setImages([...images, newImage])
        // setIsAddModalOpen(false);
        setLoadingImages(false)
    }

    const takePhoto = async () => {
        const photo = await imageService.takePhoto()
    }

    const selectFromCameraRoll = async () => {
        const imageLocation = await imageService.selectFromCameraRoll()
        if (imageLocation.length > 0) { await addImage(imageLocation) }
    }
    const triggerCall = () => {
        const args = {
            number: contact.contact.phoneNumber,
            prompt: false
        }
        call(args).catch(console.error)
    }

    const handleSubmit = async () => {
        if (selectedValue === 'Photo') {
            await fileService.editContactImage(contact, newValue)
        }

        setNewValue('')
    }

    return (
        <View style={styles.container}>
            <Image style={styles.img}
                // style={{width: 300, height: 300}}
                resizeMode="cover"
                source={{uri: contact.contact.image}} />
            <Text style={styles.name}>{contact.contact.name}</Text>
            <Text style={styles.number}>{contact.contact.phoneNumber}</Text>



            <Image style={styles.img} resizeMode="cover" source={{ uri: contact.contact.image }}></Image>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={triggerCall}>
                <Text style={styles.button}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]}
                onPress={() => { handleSubmit() }}>
                <Text style={styles.option}>Upload image</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress ={() => takePhoto()}>
                <Text style={styles.option}>Capture image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEditModalOpen(true)}>
                <Text>Edit contact information</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.shadow, defaultStyles.button]} onPress={() => setIsEditModalOpen(true)}>
                <Text>Edit Contact</Text>
            </TouchableOpacity>
            <Edit isOpen={isEditModalOpen} closeModal={() => setIsEditModalOpen(false)} contact={contact.contact} >
            </Edit>
        </View>
    )
}

export default ContactProfile
