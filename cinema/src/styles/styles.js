import { StyleSheet } from 'react-native'
import { logoColor, backgroundcolor, accenttwo, darkText, accent, lightText } from './colors'

export default StyleSheet.create({

//backgroundColor for all views
    boldFont: {
        fontFamily: 'PlayfairDisplay_700Bold',
    },
    font: {
        fontFamily: 'PlayfairDisplay_500Medium',
    },
    container: {
        backgroundColor: backgroundcolor
    },
    bottom: {
        marginBottom: 20
    },
//Header:
    mainHeader: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: '#472E1F',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(50, 23, 13, 0.5)'
    },
    headerText: {
        color: logoColor, 
        fontSize: 15
    }, 
    cinemaheader: {
        backgroundColor: '#472E1F',
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10
    },
    cinemaName: {
        fontSize: 30,
        fontWeight: 'bold', 
        color: accenttwo, 
        textAlign: 'center'
    },

//Buttons:
    button: {
        backgroundColor: accenttwo, 
        borderRadius: 30, 
        marginHorizontal: 30,
        paddingVertical: 15,
        marginTop: 25
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center', 
        color: darkText
    },
    buttonUnderText: {
        fontSize: 18,
        textAlign: 'center', 
        fontStyle: 'italic',
        color: darkText,
        opacity: 0.7
    }
})