import { StyleSheet, Dimensions } from 'react-native'
import { blue } from '../../styles/colors'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

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
