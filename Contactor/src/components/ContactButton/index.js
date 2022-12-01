import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurple, lightBlue } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

const ContactButton = ({contact}) => {
    // const boards = useSelector((state) => state.boards);


    const { navigate } = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigate('Contact')}>
            <View>
                {/* <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto}} /> */}
                <Text style={styles.text}>{contact.name} {contact.phoneNumber}</Text>
            </View>
        </TouchableOpacity>

    // {/* <View style={styles.container}>
    //     <View>
    //         <Text style={styles.text}>Nafn og mynd</Text>
    //         <Text style={styles.text}>Nafn og mynd</Text>
    //         <Text style={styles.text}>Nafn og mynd</Text>
    //         <Text style={styles.text}>Nafn og mynd</Text>
    //     </View>

    // </View> */}
    )
}
export default ContactButton

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginVertical: 20,
        backgroundColor: lightBlue,
        paddingHorizontal: 100,
        paddingVertical: 20
    }
})
