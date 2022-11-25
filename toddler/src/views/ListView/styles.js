import { StyleSheet } from 'react-native';
import { darkBlue, blue, yellow, whiteSilver, darkGrey, grey } from '../../styles/colors';

export default StyleSheet.create({

    TaskListName: {
        textAlign: 'center',
        fontSize: 30,
        margin: 20,
    },
    TaskList: {
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,

    },
    Task: {
        margin: 20,
        paddingVertical: 20,
        fontSize: 17,
        textAlign: 'center',
        backgroundColor: grey,
        borderRadius: 5,
    }
  });

