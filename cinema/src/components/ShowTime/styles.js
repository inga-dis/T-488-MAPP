import { StyleSheet } from 'react-native'
// import { gold, maroon, DarkSienna, black, DarkBrown, orange } from '../../styles/colors'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({
    showtime: {
        flexDirection: 'row',
        alignSelf: 'center',
        // borderWidth: 1,
        // borderRadius: 20,
        width: 310,
        // backgroundColor: lightBlue
    },
    showtimeText: {
        fontSize: 15,
        color: darkBrown,
        paddingLeft: 15
    },
    showtimeTextBuy: {
        color: lightBrown,
        fontSize: 18,
        paddingRight: 15,
        fontWeight: 'bold',
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        
    },
})
 