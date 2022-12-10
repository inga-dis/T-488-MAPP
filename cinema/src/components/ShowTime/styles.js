import { StyleSheet } from 'react-native'
import { darkBrown, lightBrown } from '../../styles/colors'

export default StyleSheet.create({
    showtime: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 310,
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
 