import { StyleSheet } from 'react-native'
import { lightText, lighterbackground } from '../../styles/colors'

export default StyleSheet.create({

    // Um bíóhusið
    cinemaInfo: {
        textAlign: 'center',
        fontSize: 20,
        color: lightText,
        marginTop: 20,
        marginBottom: 20
    },
    cinemaInfoText: {
        color: lightText,
        textAlign: 'center',
        marginHorizontal: 25,
        fontSize: 15
    },
    header: {
        backgroundColor: lighterbackground,
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10
    }
})
