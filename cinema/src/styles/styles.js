import { StyleSheet } from 'react-native'
import { gold, brown, lightBlue, darkBrown } from './colors'

export default StyleSheet.create({

//backgroundColor for all views
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
        color: 'white'
    },
    movieYear: {
        paddingLeft:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    movieGerne: {
        paddingLeft: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
        
    },
    movieGerneText: {
        color: darkBrown,
        paddingHorizontal: 10,
        marginRight:5,
        backgroundColor: lightBlue,
        borderRadius: 10,
        marginTop: 10
    },
    moviePlot: {
        paddingHorizontal: 20,
        fontStyle: 'italic',
        paddingBottom: 10,
        color: 'white'
    },
    movieDuration: {
        paddingLeft: 20,
        color: 'white'
    }
})