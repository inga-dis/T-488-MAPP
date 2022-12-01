import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurple, lightBlue } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import defaultStyles from '../../styles/styles'
import styles from './styles'


const ContactButton = ({contact}) => {
    // const boards = useSelector((state) => state.boards);


    const { navigate } = useNavigation()
    return (
        <TouchableOpacity activeOpacity={0.7} style={[defaultStyles.button, defaultStyles.shadow]}
            onPress={() => navigate('Contact')}>
            <View style={styles.background}>
                {/* <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto}} /> */}
                <Text style={styles.text}>{contact.name}</Text>
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

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,

//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     text: {
//         marginVertical: 20,
//         backgroundColor: lightBlue,
//         paddingHorizontal: 100,
//         paddingVertical: 20
//     }
// })
