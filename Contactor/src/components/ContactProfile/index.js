import React from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, View } from 'react-native'
import call from 'react-native-phone-call'
import * as imageService from '../../services/imageService'
import { useNavigation } from '@react-navigation/native'

const ContactProfile = () => {
    const { navigate } = useNavigation();
    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        console.log(photo)
    };

    const triggerCall = () => {
        const args = {
            number: '7766877', // Use commas to add time between digits.
            prompt: false
        }
        call(args).catch(console.error)
    }

    return (
        <View>
            <TouchableOpacity onPress={triggerCall}>
                {/* <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto}} /> */}
                <Text style={{ fontSize: 40 }}>HRINGJA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => navigate ('Contacts')}>
                <Text style={styles.option}>Upload image</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress ={() => takePhoto()}>
                <Text style={styles.option}>Capture image</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ContactProfile
