import { StyleSheet, Dimensions, useWindowDimensions } from 'react-native';
import { darkBlue } from '../../styles/colors';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        width: windowWidth,
        backgroundColor: darkBlue,
    },
    navbarAction: {
        flex:1,

    },
    navbarActionText: {
        padding: 10,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    },
    logoNav: {
        height: 40,
        resizeMode: 'contain',
        borderSize: 10,
    }

});