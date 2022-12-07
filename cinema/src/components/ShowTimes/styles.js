import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    showtime: {
        backgroundColor: darkBrown
    },
    image: {
        width: 200,
        height: 300,
        justifyContent: 'center'
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieShowtime: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center',
        color: 'white'
    },
    movieShowtimeView: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 20,
        // borderColor: 'white',
        marginVertical: 10,
        width: 310,
        backgroundColor: lightBlue
    },
    movieShowtimeText: {
        padding: 10,
        // borderWidth: 1,
        // borderRadius: 20,
        margin: 10,
        fontSize: 18,
        color: darkBrown
    },
    movieShowtimeTextBuy: {
        alignSelf: 'center',
        marginLeft: 'auto',
        fontSize: 18,
        paddingRight: 20,
        fontWeight: 'bold'
        
    }
})
