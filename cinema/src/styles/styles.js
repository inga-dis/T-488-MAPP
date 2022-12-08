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
        fontSize: 20, 
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

// Um bíóhusið
    // cinemaName: {
    //     fontSize: 34, 
    //     fontWeight: 'bold', 
    //     color: lightBlue, 
    //     textAlign: 'center',
    //     padding: 5
    // },
    // cinemaInfo: {
    //     textAlign: 'center', 
    //     fontSize: 20,
    //     color: 'white',
    //     marginTop: 20, 
    //     marginBottom: 20
    // },
    // cinemaInfoText: {
    //     color: 'white',
    //     textAlign: 'center',
    //     marginHorizontal: 25
    // },

// Bíómyndir í hverju bíóhúsi
    // movies: {
    //     flex: 2,
    //     flexDirection: 'row',
    //     marginHorizontal: 20,
    //     borderRadius: 10,
    //     marginVertical: 10,
    //     padding: 10,
    //     backgroundColor: lightBlue
    // },
    // moviesImage: {
    //     width:52,
    //     height:86,
    //     marginLeft: 5,
    //     marginRight: 2,
    //     borderRadius: 2
        
    // },
    // moviesText: {
    //     paddingLeft: 10,
    //     marginRight: 10
    // },
    // moviesList: {
    //     fontSize: 20, 
    //     color: darkBrown, 
    //     marginRight: 40,
    // },
    // moviesYear: {
    //     fontSize: 15,
    // },
    // moviesGenre: {
    //     flexWrap:'wrap',
    //     flexDirection: 'row',
    //     marginRight: 50
    // },

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

//Sýningartímar
    showtime: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        width: 310,
        backgroundColor: lightBlue
    },
    showtimeText: {
        fontSize: 15,
        color: darkBrown
    },
    showtimeTextBuy: {
        alignSelf: 'center',
        marginLeft: 'auto',
        fontSize: 18,
        paddingRight: 20,
        fontWeight: 'bold'
    },

})