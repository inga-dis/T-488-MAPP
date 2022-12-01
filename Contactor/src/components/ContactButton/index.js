import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurple, lightBlue } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import * as fileService from '../../services/fileservice'

const ContactButton = ({contactFile}) => {
    // const boards = useSelector((state) => state.boards);
    const getContactInfo = async () => {
        const fileContent = await fileService.getFileContent(contactFile);
        console.log(await fileContent)
    }

    getContactInfo()
    const { navigate } = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigate('Contact')}>
            <View>
                {/* <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto}} /> */}
                <Text style={styles.text}>Nafn og mynd</Text>
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
