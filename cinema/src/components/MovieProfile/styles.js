import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    container: {
        marginBottom: 20
    },
    header: {
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
    image: {
        width: 200,
        height: 300,
        alignSelf: 'center',
        marginBottom: 5
    },
    movieName: {
        fontSize: 30,
        paddingLeft: 20,
        paddingBottom: 10,
        color: 'white',
        // textAlign: 'center',

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
