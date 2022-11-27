import { StyleSheet } from 'react-native';
import { whiteSilver, darkBlue } from './colors';

export default StyleSheet.create({
    navStack: {
        backgroundColor: whiteSilver,
        borderBottomWidth: 0,
    },
    input: {
        backgroundColor: "ghostwhite",
        marginBottom: 8,
        padding: 8,
        height: 40,
    },
    header: {
        fontSize: 20,
        textAlign: 'center'
    }, 
    button: {
        textAlign: 'left'
    }
});