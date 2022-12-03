import { StyleSheet, Dimensions } from 'react-native'
import { blue, purple, pink, lightBlue, lightYellow, black } from '../../styles/colors'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: purple,
        left: 20
    },
    
    img: {
        width: 200,
        height: 200,
        left: 230
        // backgroundColor: 'transparent',
        // opacity: 
    }, 

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 245,
        top: 0,
        flexDirection: 'row',
        color: black
    }, 

    number: {
        fontSize: 25,
        left: 82,
        top: 45,
        color: black,
        fontweight: 'bold'
    },
 
    button:{
        fontSize: 20,
        fontweight: 'bold',
        right: 230,
        top: 120

    },

})
