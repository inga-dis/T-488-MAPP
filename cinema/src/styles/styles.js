import { StyleSheet } from 'react-native'
import { gold, brown, lightBlue, darkBrown } from './colors'

export default StyleSheet.create({

//Views:
    font: {
        fontFamily: 'PlayfairDisplay_500Medium',
    },
    container: {
        backgroundColor: brown
    },
    bottom: {
        marginBottom: 20
    },

//Buttons:
    button: {
        backgroundColor: lightBlue, 
        borderRadius: 30, 
        marginHorizontal: 30,
        paddingVertical: 15,
        marginTop: 25
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center', 
        color: darkBrown
    },
    buttonUnderText: {
        fontSize: 18,
        textAlign: 'center', 
        fontStyle: 'italic',
        color: darkBrown,
        opacity: 0.7
    }
})