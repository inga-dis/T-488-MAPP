import { StyleSheet, Dimensions } from 'react-native'
import { blue, purple, pink, lightBlue, lightYellow, black, white } from '../../styles/colors'
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width


export default StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: purple,
        left: 200
    },

    img: {
        width: 170,
        height: 170,
        right: 250,
        // left: 100
        // backgroundColor: 'transparent',
        // opacity: 
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        // right: 100,
        left:-150,
        // top: 100,
        flexDirection: 'row',
        color: black,
        position: 'absolute',
        top: 200
    }, 

    number: {
        fontSize: 25,
        left: -125,
        top: 250,
        color: black,
        fontweight: 'bold'
    },
 
    button:{
        position:'absolute',
        top: 300,
        left: -125,
        fontSize: 20,
        fontweight: 'bold',
        // right: 230,
        // top: 120,
        borderRadius: 3,
        backgroundColor: white,
        padding: 10

    },
    buttonCall:{
        position:'absolute',
        top: 390,
        left: -100,
        fontSize: 20,
        fontweight: 'bold',
        // right: 230,
        // top: 120,
        borderRadius: 3,
        backgroundColor: blue,
        padding: 10
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 20
    },



})
