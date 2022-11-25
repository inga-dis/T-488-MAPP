import { StyleSheet } from 'react-native';
import { darkBlue, blue, yellow, whiteSilver, darkGrey, grey } from '../../styles/colors';

export default StyleSheet.create({

    container: {
      flex: 50,
      padding: 100,
      backgroundColor: whiteSilver,
      alignItems: 'center',
      justifyContent: 'space-around', 
      // margin: 10
    },
    // logoStyle: {
    //   width: 100.39,
    //   height: 200,
    // },
    button: {
      marginTop: 40,
      paddingTop: 40,
      paddingBottom: 10,
      // paddingLeft: 20,
      // paddingRight: 20,
      // borderWidth: 2,
      backgroundColor: whiteSilver,
      borderColor: darkGrey,
    },
    butttonText: {
      color: darkGrey,
    },
    // item: {
    //   backgroundColor: '#797979',
    //   padding: 20,
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    // },
    // name: {
    //   fontSize: 32,
    // },
  });

