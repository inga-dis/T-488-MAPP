import { StyleSheet, Dimensions } from 'react-native'
import { lightPurple, purple, white, lightBlue, lightYellow } from '../../styles/colors'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default StyleSheet.create({

    container: {
        flex: 1,
        // padding: 20,
        flexDirection: 'row',
        backgroundColor: purple,
        alignItems: 'center'
        // justifyContent: 'space-around'
        // left: windowWidth 100,
        // top: windowHeight - 400
    },
    
    img: {
        width: 200,
        height: 200
    }, 

    name: {
        fontSize: 20,
        height: -30,
        left: 40,
        height: 200, 
        paddingTop: 5
    }, 

    number: {

    },

    button:{

    }, 




})
