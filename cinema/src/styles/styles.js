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
    },

//Fyrir hverja staka mynd
    image: {
        width: 200,
        height: 300,
        alignSelf: 'center'
    },
    movieName: {
        fontSize: 30,
        paddingLeft: 20,
        color: lightText
    },
    movieYear: {
        paddingLeft:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: accent
    },
    movieGerne: {
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    },
    movieGerneText: {
        color: darkText,
        paddingHorizontal: 10,
        marginRight:5,
        backgroundColor: accenttwo,
        borderRadius: 10,
        marginTop: 10
    },
    moviePlot: {
        paddingHorizontal: 20,
        fontStyle: 'italic',
        paddingBottom: 10,
        color: lightText
    },
    movieDuration: {
        paddingLeft: 20,
        color: lightText
    }
})