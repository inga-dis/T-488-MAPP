import { StyleSheet } from 'react-native'
import { darktext, lighterbackground } from '../../styles/colors'

export default StyleSheet.create({
    showtime: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 310
    },
    showtimeText: {
        fontSize: 15,
        color: darktext,
        paddingLeft: 15
    },
    showtimeTextBuy: {
        color: lighterbackground,
        textDecorationLine: 'underline',
        fontSize: 20,
        paddingRight: 15,
        position: 'absolute',
        right: 0,
        alignSelf: 'center'
    }
})
