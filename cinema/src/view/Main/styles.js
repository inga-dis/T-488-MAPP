import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: brown
    },

    header: {
        backgroundColor: '#472E1F',
        fontSize: 20, 
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: 'rgba(50, 23, 13, 0.5)'
    },
    mainHeader: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: -20
    },
    middleHeader: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        fontSize: 20, 
        flexDirection: 'row'
    },

    headerText: {
        color: gold, 
        fontSize: 15
    }, 

    theater: {
        backgroundColor: lightBlue, 
        color: gold, 
        borderRadius: 50, 
        marginHorizontal: 50,
        paddingVertical: 20,
        marginTop: 25

    },

    theaterUndertext: {
        fontSize: 18,
        textAlign: 'center', 
        fontStyle: 'italic',
        color: 'rgba(40, 19, 10, 0.7)'
 
    },

    theatertext: {
        fontSize: 30,
        textAlign: 'center', 
        color: darkBrown
    }
})
