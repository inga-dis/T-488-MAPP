import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    showtime: {
        backgroundColor: 'black'
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
    },
    movieShowtimeText: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        color: 'white'
    }
})