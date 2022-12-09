import { StyleSheet } from 'react-native'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from './colors'


export default StyleSheet.create({

//backgroundColor for all views
    container: {
        backgroundColor: brown,
    },
    
//Header:
    mainHeader: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        // marginHorizontal: -20
    },
    header: {
        backgroundColor: '#472E1F',
        // fontSize: 20, 
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(50, 23, 13, 0.5)'
    },
    headerText: {
        color: gold, 
        fontSize: 15
    }, 
    middleHeader: {
        // borderRightWidth: 1,
        // borderLeftWidth: 1,
        // borderColor: 'rgba(0, 0, 0, 0.3)',
        // backgroundColor: red,
        // fontSize: 20, 
        // flexDirection: 'row'
    },
    cinemaheader: {
        backgroundColor: '#472E1F',
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10,
    },
    cinemaName: {
        fontSize: 30,
        // paddingVertical: -30, 
        fontWeight: 'bold', 
        color: lightBlue, 
        textAlign: 'center',
        // padding: 5
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
        color: darkBrown,
    },
    buttonUnderText: {
        fontSize: 18,
        textAlign: 'center', 
        fontStyle: 'italic',
        color: darkBrown,
        opacity: 0.7
        // color: 'rgba(40, 19, 10, 0.7)'
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
        flexWrap: 'wrap',
        
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
    },

})