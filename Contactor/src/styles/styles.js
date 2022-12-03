import { StyleSheet, Dimensions } from 'react-native'
import { purple, white, pink, blue, lightYellow, black } from './colors'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
    // Container around all elements on page
    container: {
        backgroundColor: purple,
        flex: 1
    },
    centeredView: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        backgroundColor: white
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
