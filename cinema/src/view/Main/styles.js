import { StyleSheet } from 'react-native'
import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: DarkBrown
    },

    header: {
        flex: 3,
        backgroundColor: orange,
        fontSize: 20, 
        flexDirection: 'row'
    },

    theater: {
        backgroundColor: maroon, 
        color: gold, 
        borderRadius: 50, 
        marginHorizontal: 50,
        paddingVertical: 10,
        marginTop: 50

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
        fontSize: 25,
        textAlign: 'center', 
        color: gold
    }
})
