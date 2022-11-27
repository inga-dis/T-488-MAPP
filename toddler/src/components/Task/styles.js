import { StyleSheet } from "react-native";
import {grey, darkGrey} from '../../styles/colors'


export default StyleSheet.create({
    task: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: grey,
        alignItems: 'flex-end',
        flexDirection: "row",
        borderRadius: 10,
        
    },
    TaskText: {
        fontSize: 20,
        paddingBottom: 35,
        color: darkGrey,
        paddingLeft: 20,
    }
});