import { StyleSheet } from "react-native";
import {grey, darkGrey, darkBlue} from '../../styles/colors'


export default StyleSheet.create({
    board: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: grey,
        borderRadius: 10,
        
    },
    boardHeader: {
        fontSize: 20,
        paddingBottom: 10,
        color: darkBlue,
        alignSelf: "center",

       
    },
    boardsLists: {
        flexDirection: "row",
        backgroundColor: "pink"       
    }

});