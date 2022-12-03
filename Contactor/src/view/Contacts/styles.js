import { StyleSheet } from 'react-native'
import { blue } from '../../styles/colors'

export default StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: blue
    }
})
