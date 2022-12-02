import { StyleSheet, Dimensions } from 'react-native'
import { lightPurple, white, lightBlue, lightYellow } from '../../styles/colors'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({

    option: {
        backgroundcolor: lightPurple,
        width: windowWidth - 4,
        margin: 2
    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: lightYellow,
        textAlign: 'left',
        border: 20,
        padding: 20
    },

    button: {

    },

    buttonText: {

    }
})
