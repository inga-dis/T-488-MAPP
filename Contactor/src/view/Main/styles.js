import { StyleSheet } from 'react-native';
import {lightPurple, lightBlue, lightYellow, white} from '../../styles/colors';





export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: lightPurple,
        alignItems: 'center',
        justifyContent: 'space-around'
      },
    logoStyle: {
        width: 300,
        height: 200,
        top: -130,
      },
    header: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        top: 250,
        },
    option: {
      fontSize: 20,
      color: lightPurple,
      textAlign: 'center',
      backgroundcolor: white,
      borderColor: white,
      backgroundColor: white,
      borderWidth: 5,
      borderRadius: 5,
      width: 150,
      fontWeight: 'bold',
      shadowColor: 'black', 
      paddingTop: 5,
        },
});



