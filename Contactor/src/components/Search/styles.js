import { StyleSheet, Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width

export default StyleSheet.create({
    // Container around all elements on page
    input: {
        height: 50,
        fontSize: 20,
        marginBottom: 10
    }
})
