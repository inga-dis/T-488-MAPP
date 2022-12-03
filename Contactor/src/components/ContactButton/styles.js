import { StyleSheet, Dimensions } from 'react-native'
import { purple, lightYellow } from '../../styles/colors'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({

    option: {
        backgroundcolor: purple,
        width: windowWidth - 4,
        margin: 2
    },

    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: lightYellow,
        textAlign: 'left',
        border: 20,
        marginLeft: 70
    },

    button: {

    },

    buttonText: {

    },
    photo: {
        width: 50,
        height: 50,
        top: 45
    }
})
