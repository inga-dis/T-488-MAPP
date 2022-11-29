import { StyleSheet } from 'react-native';
import {lightPurple} from '../../styles/colors';

export default StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: lightPurple,
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    logoStyle: {
        // alignItems: 'center', 
        width: 500,
        height: 200,
        // display: "flex",
        // flexDirection: "row",
 
      },
    header: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        },

});



