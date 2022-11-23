import { StyleSheet } from 'react-native';
import { darkBlue } from '../../styles/colors';

export default StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: darkBlue,
    },
    navbarAction: {
        flex:1,
        alignItems: 'center',
    },
    navbarActionText: {
        marginTop: 40,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16
    }

});