import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    image: {
        width: 200,
        height: 300,
        justifyContent: 'center'
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    movieName: {
        fontSize: 30,
        paddingLeft: 20,
        // backgroundColor: 'pink'
    },
    movieText: {
        flexDirection: 'row',
        // flex: 2
    },
    movieYear: {
        paddingLeft:10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    movieGerne: {
        paddingLeft: 20,
        paddingBottom: 10
    },
    moviePlot: {
        paddingHorizontal: 20,
        fontStyle: 'italic',
        paddingBottom: 10
    },
    movieDuration: {
        paddingLeft: 20
    },
    movieShowtime: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    movieShowtimeView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    movieShowtimeText: {
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10
    }
})
