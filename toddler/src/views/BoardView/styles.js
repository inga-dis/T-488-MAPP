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
        // borderWidth: 1,
        // borderRadius: 5,
        // margin: 10,
        // fontSize: 100,
        // paddingBottom: 10,
        // color: darkBlue,
        // marginVertical: 10,
        // marginHorizontal: 10,
        // backgroundColor: "pink",
        // // alignContent: 'flex-start',
        // // flexDirection: "row",
        // borderRadius: 10,
        // margin: 50,
    
       
    }

});