import { StyleSheet, Dimensions } from 'react-native'
import { lightPurple, white, lightBlue, lightYellow } from '../../styles/colors'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({

    option: {
        backgroundcolor: lightPurple,
        backgroundColor: lightPurple,
        width: windowWidth,
        margin: 2,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 50,
        color: lightYellow,
        left: 80,
        border: 20,
        padding: 20, 
    },

    button: {

    },

    buttonText: {

    }
})
