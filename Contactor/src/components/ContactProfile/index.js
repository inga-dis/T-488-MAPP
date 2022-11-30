import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, View, Text, TouchableOpacity } from 'react-native'

const ContactProfile = () => {
    return (
        <View>
            {/* <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: board.thumbnailPhoto}} /> */}
            <Text>NAME</Text>
            <Text>IMAGE</Text>
            <Text>PHONENUMBER</Text>
        </View>
    )
}

export default ContactProfile
