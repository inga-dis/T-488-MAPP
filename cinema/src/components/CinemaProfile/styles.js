import { StyleSheet } from 'react-native'
import { accenttwo, lightText, lighterBrown } from '../../styles/colors'


export default StyleSheet.create({

//Um bíóhusið
    cinemaName: {
        fontSize: 30,
        color: accenttwo, 
        textAlign: 'center',
    },
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
        marginHorizontal: 25
    },
    header: {
        backgroundColor: lighterBrown,
        borderColor: 'rgba(50, 23, 13, 0.5)',
        paddingVertical: 10,
    }
})