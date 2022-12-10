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
        color: gold, 
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
        color: lightBlue, 
        textAlign: 'center'
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