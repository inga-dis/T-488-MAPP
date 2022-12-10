import { StyleSheet, Dimensions } from 'react-native'
import { logocolor, backgroundcolor, accenttwo, darktext, lighterbackground } from './colors'

const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({

    // Fonts
    boldFont: {
        fontFamily: 'PlayfairDisplay_700Bold'
    },
    font: {
        fontFamily: 'PlayfairDisplay_500Medium'
    },
    // backgroundColor for all views
    container: {
        backgroundColor: backgroundcolor
    },
    bottom: {
        marginBottom: 20
    },
    // Header:
    mainHeader: {
        flex: 1,
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    header: {
        backgroundColor: lighterbackground,
        width: windowWidth / 2,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: 'rgba(50, 23, 13, 0.5)'
    },
    headerText: {
        textAlign: 'center',
        color: logocolor,
        fontSize: 19
    },
    cinemaheader: {
        backgroundColor: lighterbackground,
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10
    },
    cinemaName: {
        fontSize: 30,
        color: accenttwo,
        textAlign: 'center'
    },

    // Buttons:
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
        color: darktext
    },
    buttonUnderText: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        color: darktext,
        opacity: 0.7
    }
})
