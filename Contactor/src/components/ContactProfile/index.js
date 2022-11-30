import React from 'react'
// import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'
import call from 'react-native-phone-call'

const ContactProfile = () => {
    const triggerCall = () => {
        const args = {
            number: '8451466', // Use commas to add time between digits.
            prompt: false
        }
        call(args).catch(console.error)
    }

    return (
        <TouchableOpacity onPress={triggerCall}>
            {/* <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: board.thumbnailPhoto}} /> */}
            <Text style={{ fontSize: 40 }}>HRINGJA</Text>
        </TouchableOpacity>
    )
}

export default ContactProfile
