import { StyleSheet, Dimensions } from 'react-native'
import { lightPurple, white, lightBlue, lightYellow } from './colors'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
    input: {

    },

    button: {
        borderRadius: 3,
        backgroundColor: white,
        padding: 10
    },

    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 20
    },

    buttonText: {

    }
})
