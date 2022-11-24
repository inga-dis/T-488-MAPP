import { StyleSheet } from "react-native";
import {grey, darkGrey} from '../../styles/colors'


export default StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        margin: 10,
        textAlign: "right",
        borderRadius: 50,
        opacity: 0.7,

    },
    board: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: grey,
        alignItems: 'flex-end',
        flexDirection: "row",
        borderRadius: 10,
        
    },
    boardText: {
        fontSize: 20,
        paddingBottom: 35,
        color: darkGrey,
    }
});