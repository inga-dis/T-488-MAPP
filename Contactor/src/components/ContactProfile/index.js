import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import call from 'react-native-phone-call'
import * as imageService from '../../services/imageService'
import styles from '../../view/Main/styles'
import defaultStyles from '../../styles/styles'
import { Picker } from '@react-native-picker/picker'

const ContactProfile = ({ contact }) => {
    const [images, setImages] = useState([])
    const [newValue, setNewValue] = useState()
    const [selectedEditField, setSelectedEditField] = useState()

    // All selected images
    // const [selectedImages, setSelectedImages] = useState([]);
    // A boolean flag to indicate whether the images are being loaded or not
    // const [loadingImages, setLoadingImages] = useState(true);
    // A boolean flag to indicate whether the modal to add an image is open or not
    // const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
    console.log("mynd: ",contact.contact.image)
    return (
        <View>
            <Text>{contact.contact.name}</Text>
            <Text>{contact.contact.phoneNumber}</Text>
            <Text>{contact.contact.image}</Text>
            <Image
                style={{width: 300, height: 300}}
                resizeMode="cover"
                source={{uri: contact.contact.image}} />

            <Picker
                selectedValue={selectedEditField}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedEditField(itemValue)
                }>
                {/* <Picker.Item label="Name" value="Name"/>
                <Picker.Item label="Phone Number" value="phoneNumber"/> */}
                <Picker.Item label="Photoooo" value="Photo"/>
            </Picker>

            <Image style={styles.image} resizeMode="cover" source={{ uri: contact.contact.image }}></Image>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress={triggerCall}>
                <Text style={styles.option}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]}
                activeOpacity={0.7}
                style={[defaultStyles.button, defaultStyles.shadow]}
                onPress={() => { handleSubmit() }}>

                <Text style={styles.option}>Upload image</Text>

            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]} onPress ={() => takePhoto()}>
                <Text style={styles.option}>Capture image</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactProfile
