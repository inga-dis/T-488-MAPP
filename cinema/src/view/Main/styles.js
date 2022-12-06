import { StyleSheet } from 'react-native'
import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'


export default StyleSheet.create({
    container: {
        backgroundColor: DarkBrown
    },

    header: {
        // flex: 3,
        // backgroundColor: 'pink',
        fontSize: 20, 
        // flexDirection: 'row'
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    mainHeader: {
        flex: 3,
        backgroundColor: orange,
        // fontSize: 20, 
        flexDirection: 'row',
        justifyContent: 'center',
    },
    middleHeader: {
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.3)'
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
