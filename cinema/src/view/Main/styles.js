import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: brown
    },

    header: {
        flex: 3,
        backgroundColor: red,
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

    // shadow: {
    //     shadowColor: gold,
    //     shadowOffset: {
    //         width: 0,
    //         height: 3
    //     },
    //     shadowOpacity: 1 ,
    //     shadowRadius: 5,
    //     elevation: 20
    // },

    theatertext: {
        fontSize: 30,
        textAlign: 'center', 
        color: darkBrown
    }
})
