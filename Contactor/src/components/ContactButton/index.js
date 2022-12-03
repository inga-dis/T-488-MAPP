import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import defaultStyles from '../../styles/styles'
import styles from './styles'
const ContactButton = ({ contact }) => {
    const { navigate } = useNavigation()
    // const boards = useSelector((state) => state.boards);

    return (
        <TouchableOpacity style={styles.option}
            onPress={() => navigate('Contact', { contact })}>
            <View style={styles.background}>
                <Image
                    style={styles.photo}
                    resizeMode="cover"
                    source={{ uri: contact.image}} /> */}
                <Text style={styles.text}>{contact.name} </Text>
            </View>
        </TouchableOpacity>
    )
}
export default ContactButton
