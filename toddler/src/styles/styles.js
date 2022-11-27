import { StyleSheet, Dimensions } from 'react-native';
import {  darkBlue, blue, yellow, whiteSilver, darkGrey, grey } from './colors';
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    navStack: {
        backgroundColor: whiteSilver,
        borderBottomWidth: 0,
    },
    input: {
        backgroundColor: "ghostwhite",
        marginBottom: 8,
        padding: 10,
        alignItems: 'stretch',
        height: 40,
        width: windowWidth - 20,
        borderRadius: 2
    },
    header: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    header2:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',

    },
    button: {
        marginBottom: 30,
        alignItems: 'center',
        backgroundColor: blue,
        borderColor: blue,
        borderWidth: 1,
        borderRadius: 10,
        width: 100,
    }, 
    buttonText: {
        padding: 15,
        textAlign: 'center',
        color: darkBlue,
        fontSize: 16,
        fontWeight: '600',
    },
    containerAdd: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: grey,
    },
    buttonAdd: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    itemCard: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'rgba(255, 178, 0, 0.7)',
        alignItems: 'flex-end',
        flexDirection: "row",
        borderRadius: 10,
        paddingBottom: 10,
        flexWrap: 'wrap',
    },
    itemText: {
        fontSize: 20,
        // paddingBottom: 35,
        color: darkGrey, 
        
    },
    containerAddX: {
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: grey,
    },
    buttonAddX: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-around' 
    },
    itemDescriptionText: {
        marginTop: -20,
        
        // position: 'absolute',
        marginLeft: 80,
        // paddingRight: -20,
        marginBottom: 10
        // flex: 1
    },

    
});