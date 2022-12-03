import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        position: 'absolute',
        left: windowWidth - 110,
        top: windowHeight - 400,
        bottom: 0
    }
})
