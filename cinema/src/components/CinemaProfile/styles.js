import { StyleSheet } from 'react-native'
import { gold, brown, cream, red, lightBlue, black, darkBrown, lightBrown } from '../../styles/colors'


export default StyleSheet.create({

//Um bíóhusið
    cinemaName: {
        fontSize: 34, 
        fontWeight: 'bold', 
        color: lightBlue, 
        textAlign: 'center',
        padding: 5
    },
    cinemaInfo: {
        textAlign: 'center', 
        fontSize: 20,
        color: 'white',
        marginTop: 20, 
        marginBottom: 20
    },
    cinemaInfoText: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 25
    },
})