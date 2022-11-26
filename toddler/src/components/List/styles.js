import { StyleSheet } from "react-native";
import {grey, darkGrey} from '../../styles/colors'


export default StyleSheet.create({
    list: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: grey,
        alignItems: 'flex-end',
        flexDirection: "row",
        borderRadius: 10,
        
    },
    listText: {
        fontSize: 20,
        paddingBottom: 35,
        color: darkGrey,
    }
});